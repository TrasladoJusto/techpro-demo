import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'techpro',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'techpro',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

async function ensureTables() {
  const conn = await pool.getConnection();
  try {
    await conn.execute(`
      CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(255),
        message TEXT,
        source_page VARCHAR(500),
        utm_source VARCHAR(255),
        utm_medium VARCHAR(255),
        opt_in TINYINT(1) DEFAULT 0,
        status VARCHAR(20) DEFAULT 'new'
      )
    `);

    await conn.execute(`
      CREATE TABLE IF NOT EXISTS support_tickets (
        ticket_id INT AUTO_INCREMENT PRIMARY KEY,
        lead_id INT NOT NULL,
        equipment_model VARCHAR(255) NOT NULL,
        serial_number VARCHAR(255),
        issue_description TEXT NOT NULL,
        priority VARCHAR(20) DEFAULT 'medium',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (lead_id) REFERENCES leads(id)
      )
    `);

    await conn.execute(`
      CREATE TABLE IF NOT EXISTS system_logs (
        log_id INT AUTO_INCREMENT PRIMARY KEY,
        level VARCHAR(20) NOT NULL,
        message TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        stack_trace TEXT
      )
    `);
  } finally {
    conn.release();
  }
}

let tablesReady = false;

export interface LeadData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  optIn?: boolean;
}

export interface SupportData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message?: string;
  equipmentModel: string;
  serialNumber?: string;
  issueDescription: string;
  urgency?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  optIn?: boolean;
}

export async function insertLead(data: LeadData): Promise<number> {
  if (!tablesReady) {
    await ensureTables();
    tablesReady = true;
  }

  const [result] = await pool.execute(
    `INSERT INTO leads (name, email, phone, subject, message, source_page, utm_source, utm_medium, opt_in)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.name,
      data.email,
      data.phone || null,
      data.subject || null,
      data.message,
      data.sourcePage || null,
      data.utmSource || null,
      data.utmMedium || null,
      data.optIn ? 1 : 0,
    ]
  );

  return (result as mysql.ResultSetHeader).insertId;
}

export async function insertSupportTicket(data: SupportData): Promise<{ leadId: number; ticketId: number }> {
  if (!tablesReady) {
    await ensureTables();
    tablesReady = true;
  }

  const priority = data.urgency || 'medium';

  const leadId = await insertLead({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: `Soporte: ${data.equipmentModel}`,
    message: data.issueDescription,
    sourcePage: data.sourcePage,
    utmSource: data.utmSource,
    utmMedium: data.utmMedium,
    optIn: data.optIn,
  });

  const [result] = await pool.execute(
    `INSERT INTO support_tickets (lead_id, equipment_model, serial_number, issue_description, priority)
     VALUES (?, ?, ?, ?, ?)`,
    [leadId, data.equipmentModel, data.serialNumber || null, data.issueDescription, priority]
  );

  return { leadId, ticketId: (result as mysql.ResultSetHeader).insertId };
}

export async function insertLog(level: string, message: string, stackTrace?: string): Promise<void> {
  if (!tablesReady) {
    await ensureTables();
    tablesReady = true;
  }

  await pool.execute(
    `INSERT INTO system_logs (level, message, stack_trace) VALUES (?, ?, ?)`,
    [level, message, stackTrace || null]
  );
}
