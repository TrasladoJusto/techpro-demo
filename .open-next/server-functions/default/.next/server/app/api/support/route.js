(()=>{var a={};a.id=395,a.ids=[395],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4573:a=>{"use strict";a.exports=require("node:buffer")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14127:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>E,patchFetch:()=>D,routeModule:()=>z,serverHooks:()=>C,workAsyncStorage:()=>A,workUnitAsyncStorage:()=>B});var d={};c.r(d),c.d(d,{POST:()=>y});var e=c(95736),f=c(9117),g=c(4044),h=c(39326),i=c(32324),j=c(261),k=c(54290),l=c(85328),m=c(38928),n=c(46595),o=c(3421),p=c(17679),q=c(41681),r=c(63446),s=c(86439),t=c(51356),u=c(10641),v=c(35552),w=c(82716),x=c(37478);async function y(a){try{let b=(0,x.T)(a),{success:c,retryAfter:d}=(0,x.i)(b,3,6e4);if(!c)return u.NextResponse.json({error:`Demasiadas solicitudes. Intente en ${d}s`},{status:429,headers:{"Retry-After":String(d)}});let e=await a.formData(),f=e.get("nombre"),g=e.get("email"),h=e.get("telefono"),i=e.get("modelo"),j=e.get("descripcion"),k=e.get("urgencia")||"medium";if(e.get("website_url"))return u.NextResponse.json({success:!0});if(!f||!g||!h||!i||!j)return u.NextResponse.json({error:"Todos los campos marcados con * son requeridos"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g))return u.NextResponse.json({error:"Email no v\xe1lido"},{status:400});if(h.replace(/\D/g,"").length<9)return u.NextResponse.json({error:"Tel\xe9fono debe tener al menos 9 d\xedgitos"},{status:400});if(j.length<10)return u.NextResponse.json({error:"La descripci\xf3n del problema debe tener al menos 10 caracteres"},{status:400});let{leadId:l,ticketId:m}=await (0,v.hz)({name:f,email:g,phone:h,equipmentModel:i,issueDescription:j,urgency:k,sourcePage:a.headers.get("referer")||void 0});await (0,v.A2)("INFO",`Support ticket #${m} created for lead #${l}`);let n=await (0,w.o)({name:f,email:g,phone:h,equipmentModel:i,issueDescription:j});return n.success||await (0,v.A2)("WARN",`Support email failed for ticket #${m}: ${n.error}`),u.NextResponse.json({success:!0,leadId:l,ticketId:m})}catch(a){return await (0,v.A2)("ERROR","Support form error",a instanceof Error?a.stack:void 0),u.NextResponse.json({error:"Error interno del servidor"},{status:500})}}let z=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/support/route",pathname:"/api/support",filename:"route",bundlePath:"app/api/support/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"/home/asahel/Escritorio/Endovita-Technology/src/app/api/support/route.ts",nextConfigOutput:"standalone",userland:d}),{workAsyncStorage:A,workUnitAsyncStorage:B,serverHooks:C}=z;function D(){return(0,g.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:B})}async function E(a,b,c){var d;let e="/api/support/route";"/index"===e&&(e="/");let g=await z.prepare(a,b,{srcPage:e,multiZoneDraftMode:!1});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:y,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(y.dynamicRoutes[E]||y.routes[D]);if(F&&!x){let a=!!y.routes[D],b=y.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||z.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===z.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:y,renderOpts:{experimental:{cacheComponents:!!w.experimental.cacheComponents,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>z.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>z.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await z.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await z.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:y,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await z.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19771:a=>{"use strict";a.exports=require("process")},27910:a=>{"use strict";a.exports=require("stream")},28303:a=>{function b(a){var b=Error("Cannot find module '"+a+"'");throw b.code="MODULE_NOT_FOUND",b}b.keys=()=>[],b.resolve=b,b.id=28303,a.exports=b},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},34631:a=>{"use strict";a.exports=require("tls")},35552:(a,b,c)=>{"use strict";c.d(b,{A2:()=>i,hz:()=>h,i7:()=>g});let d=c(29382).createPool({host:process.env.DB_HOST||"localhost",user:process.env.DB_USER||"endovita",password:process.env.DB_PASSWORD||"",database:process.env.DB_NAME||"endovita",waitForConnections:!0,connectionLimit:5,queueLimit:0});async function e(){let a=await d.getConnection();try{await a.execute(`
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
    `),await a.execute(`
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
    `),await a.execute(`
      CREATE TABLE IF NOT EXISTS system_logs (
        log_id INT AUTO_INCREMENT PRIMARY KEY,
        level VARCHAR(20) NOT NULL,
        message TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        stack_trace TEXT
      )
    `)}finally{a.release()}}let f=!1;async function g(a){f||(await e(),f=!0);let[b]=await d.execute(`INSERT INTO leads (name, email, phone, subject, message, source_page, utm_source, utm_medium, opt_in)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[a.name,a.email,a.phone||null,a.subject||null,a.message,a.sourcePage||null,a.utmSource||null,a.utmMedium||null,+!!a.optIn]);return b.insertId}async function h(a){f||(await e(),f=!0);let b=a.urgency||"medium",c=await g({name:a.name,email:a.email,phone:a.phone,subject:`Soporte: ${a.equipmentModel}`,message:a.issueDescription,sourcePage:a.sourcePage,utmSource:a.utmSource,utmMedium:a.utmMedium,optIn:a.optIn}),[h]=await d.execute(`INSERT INTO support_tickets (lead_id, equipment_model, serial_number, issue_description, priority)
     VALUES (?, ?, ?, ?, ?)`,[c,a.equipmentModel,a.serialNumber||null,a.issueDescription,b]);return{leadId:c,ticketId:h.insertId}}async function i(a,b,c){f||(await e(),f=!0),await d.execute("INSERT INTO system_logs (level, message, stack_trace) VALUES (?, ?, ?)",[a,b,c||null])}},37478:(a,b,c)=>{"use strict";c.d(b,{T:()=>f,i:()=>e});let d=new Map;function e(a,b=5,c=6e4){let f=Date.now(),g=d.get(a);return!g||f>g.resetAt?(d.set(a,{count:1,resetAt:f+c}),{success:!0}):g.count>=b?{success:!1,retryAfter:Math.ceil((g.resetAt-f)/1e3)}:(g.count++,{success:!0})}function f(a){return a.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||a.headers.get("x-real-ip")||"unknown"}},41204:a=>{"use strict";a.exports=require("string_decoder")},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},53053:a=>{"use strict";a.exports=require("node:diagnostics_channel")},55511:a=>{"use strict";a.exports=require("crypto")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66136:a=>{"use strict";a.exports=require("timers")},74075:a=>{"use strict";a.exports=require("zlib")},78335:()=>{},79428:a=>{"use strict";a.exports=require("buffer")},79551:a=>{"use strict";a.exports=require("url")},82716:(a,b,c)=>{"use strict";c.d(b,{P:()=>j,o:()=>k});var d=c(22080);let e=null;function f(){if(!e){if(!process.env.RESEND_API_KEY)throw Error("RESEND_API_KEY is not configured");e=new d.u(process.env.RESEND_API_KEY)}return e}let g="LaserTech <notificaciones@lasertech-demo.com>",h="demo@lasertech-demo.com";function i(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}async function j(a){try{let b=f();return await b.emails.send({from:g,to:h,replyTo:a.email,subject:`[Contacto] ${i(a.subject||"Nuevo mensaje")} - ${i(a.name)}`,html:`
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #dbeafe; padding-bottom: 8px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 120px;">Nombre:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.email)}</td>
            </tr>
            ${a.phone?`
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Tel\xe9fono:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.phone)}</td>
            </tr>`:""}
            ${a.subject?`
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Asunto:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.subject)}</td>
            </tr>`:""}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Mensaje:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.message)}</td>
            </tr>
            ${a.sourcePage?`
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">P\xe1gina:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.sourcePage)}</td>
            </tr>`:""}
          </table>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            Este email fue enviado desde el formulario de contacto de lasertech-demo.com
          </p>
        </div>
      `}),{success:!0}}catch(a){return{success:!1,error:a instanceof Error?a.message:"Error sending email"}}}async function k(a){try{let b=f();return await b.emails.send({from:g,to:h,replyTo:a.email,subject:`[SOPORTE T\xc9CNICO] [${(a.urgency||"medium").toUpperCase()}] ${i(a.equipmentModel)} - ${i(a.name)}`,html:`
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #fecaca; padding-bottom: 8px;">
            Solicitud de soporte t\xe9cnico
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151; width: 140px;">Nombre:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Tel\xe9fono:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Equipo:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.equipmentModel)}</td>
            </tr>
            ${a.serialNumber?`
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Serial:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.serialNumber)}</td>
            </tr>`:""}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #374151;">Problema:</td>
              <td style="padding: 8px; color: #1f2937;">${i(a.issueDescription)}</td>
            </tr>
          </table>
          <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
            Responder a este email para contactar directamente al cliente.
          </p>
        </div>
      `}),{success:!0}}catch(a){return{success:!1,error:a instanceof Error?a.message:"Error sending email"}}}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")},96487:()=>{}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[586,692,627],()=>b(b.s=14127));module.exports=c})();