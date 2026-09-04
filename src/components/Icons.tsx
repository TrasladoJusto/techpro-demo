import { type SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// ArrowRight
export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M221.66 133.66l-72 72a8 8 0 01-11.32-11.32L196.69 136H40a8 8 0 010-16h156.69l-58.35-58.34a8 8 0 0111.32-11.32l72 72a8 8 0 010 11.32z" fill="currentColor" />
    </svg>
  );
}

// ArrowLeft
export function ArrowLeft({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 128a8 8 0 01-8 8H69.31l58.35 58.34a8 8 0 01-11.32 11.32l-72-72a8 8 0 010-11.32l72-72a8 8 0 0111.32 11.32L69.31 120H216a8 8 0 018 8z" fill="currentColor" />
    </svg>
  );
}

// List (hamburger menu)
export function List({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 128a8 8 0 01-8 8H40a8 8 0 010-16h176a8 8 0 018 8zM40 72h176a8 8 0 010-16H40a8 8 0 010 16zM224 184H40a8 8 0 010-16h176a8 8 0 010 16z" fill="currentColor" />
    </svg>
  );
}

// X (close)
export function X({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M205.66 194.34a8 8 0 01-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 01-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0111.32-11.32L128 116.69l66.34-66.35a8 8 0 0111.32 11.32L139.31 128z" fill="currentColor" />
   </svg>
  );
}

// Phone
export function Phone({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M222.88 162.13l-47.46-21a8 8 0 00-8.7 2.38l-18.89 18.89a173.47 173.47 0 01-65.74-65.75l18.89-18.89a8 8 0 002.38-8.7l-21-47.46a8 8 0 00-8.54-4.62l-29.12 4a8 8 0 00-6.27 5.74c-1.14 5.63-3.11 30.8 26.75 60.65s55.02 27.89 60.65 26.75a8 8 0 005.74-6.27l4-29.12a8 8 0 00-4.62-8.54z" fill="currentColor" />
    </svg>
  );
}

// Envelope (Mail)
export function Envelope({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 48H32a16 16 0 00-16 16v128a16 16 0 0016 16h192a16 16 0 0016-16V64a16 16 0 00-16-16zM32 64l96 80 96-80z" fill="currentColor" />
    </svg>
  );
}

// MapPin
export function MapPin({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M128 24a80 80 0 00-80 80c0 56 72 120 76 124a8 8 0 008 0c4-4 76-68 76-124a80 80 0 00-80-80zm0 112a32 32 0 1132-32 32 32 0 01-32 32z" fill="currentColor" />
    </svg>
  );
}

// Clock
export function Clock({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16" />
      <path d="M128 72v56l40 24" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ChatCircle (MessageCircle)
export function ChatCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M128 24C71.51 24 26.35 64.64 24 116.12c0 11.43 3.57 21.86 9.83 30.8L24 232l88.45-18.45A104.57 104.57 0 00128 216c56.49 0 101.65-40.64 104-92A96 96 0 00128 24z" fill="currentColor" />
    </svg>
  );
}

// Users
export function Users({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M117.25 157.92a64.09 64.09 0 0139.48-27 8 8 0 01-.67 15.86 48 48 0 00-27.17-8.7 8 8 0 01-.64 15.84 64.14 64.14 0 01-11.04-25zM216 96A64 64 0 0064 96a64 64 0 00128 0 64 64 0 0024-48z" fill="currentColor" />
      <path d="M200 144a48 48 0 00-27.17-8.7 8 8 0 01-.67 15.86 32 32 0 0118.11 5.8 8 8 0 01-1.91 14A64 64 0 01136 192a8 8 0 01-16 0 80.09 80.09 0 0137.87-68.24 8 8 0 0114.13 7.24z" fill="currentColor" />
    </svg>
  );
}

// Trophy (Award)
export function Trophy({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M216 48H172.12a24 24 0 00-16.97 7.05L128 82.2l-27.15-27.15A24 24 0 0083.88 48H40a16 16 0 00-16 16v24a32 32 0 0032 32h4.49A48.05 48.05 0 0064 154.31V192H48a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16V208a16 16 0 00-16-16H192v-37.69a48.05 48.05 0 003.51-26.31h4.49a32 32 0 0032-32V64a16 16 0 00-16-16z" fill="currentColor" />
    </svg>
  );
}

// BookOpen
export function BookOpen({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 72v112a16 16 0 01-16 16H48V56h160a16 16 0 0116 16zM48 40h160a24 24 0 0124 24v128a24 24 0 01-24 24H48a8 8 0 01-8-8V48a8 8 0 018-8z" fill="currentColor" />
    </svg>
  );
}

// Wrench
export function Wrench({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 128a96.15 96.15 0 01-57.73 88.18 8 8 0 01-4.83-10.29l20.75-53.69a8 8 0 00-.56-5.94 64 64 0 10-15.78 15.78 8 8 0 005.94.56l53.69-20.75a8 8 0 0110.29 4.83A96.15 96.15 0 01224 128z" fill="currentColor" />
    </svg>
  );
}

// Heart
export function Heart({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M128 216s-96-56-96-120A56 56 0 01128 60a56 56 0 0196 36c0 64-96 120-96 120z" fill="currentColor" />
    </svg>
  );
}

// Lightning (Zap)
export function Lightning({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M136 32l-24 96h64L120 224l24-96H80z" fill="currentColor" />
    </svg>
  );
}

// Shield
export function Shield({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M128 24l-96 40v56c0 56 40.8 108.4 96 120 55.2-11.6 96-64 96-120V64z" fill="currentColor" />
    </svg>
  );
}

// Star
export function Star({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M239.2 97.29a16 16 0 00-13.8-11.5l-62.39-5.38-23-58a16 16 0 00-30 0l-23 58-62.4 5.38a16 16 0 00-8.78 27.47l47.53 40.73-14.47 61.46a16 16 0 0023.11 17.1L128 211.65l54.5 32.5a16 16 0 0023.11-17.1L191.13 165.5l47.53-40.73a16 16 0 003.54-13.48z" fill="currentColor" />
    </svg>
  );
}

// Quotes (Quote)
export function Quotes({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M104 88H64a16 16 0 00-16 16v48a16 16 0 0016 16h40a16 16 0 0016-16v-8a95.48 95.48 0 00-4-28.42A67.37 67.37 0 01104 96zm104 0h-40a16 16 0 00-16 16v48a16 16 0 0016 16h40a16 16 0 0016-16v-8a95.48 95.48 0 00-4-28.42A67.37 67.37 0 01208 96z" fill="currentColor" />
    </svg>
  );
}

// CheckCircle
export function CheckCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <circle cx="128" cy="128" r="96" fill="currentColor" opacity="0.15" />
      <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16" />
      <path d="M168 104l-56 56-24-24" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Spinner
export function Spinner({ size = 24, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" className={className} {...props}>
      <path d="M136 32v40a8 8 0 01-16 0V32a8 8 0 0116 0z" fill="currentColor" opacity="0.2" />
      <path d="M136 32v40a8 8 0 01-16 0V32a8 8 0 0116 0z" fill="currentColor" />
      <animateTransform attributeName="transform" type="rotate" from="0 128 128" to="360 128 128" dur="0.8s" repeatCount="indefinite" />
    </svg>
  );
}

// Calendar
export function Calendar({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <rect x="32" y="48" width="192" height="176" rx="16" fill="none" stroke="currentColor" strokeWidth="16" />
      <path d="M168 24v40M88 24v40M32 96h192" stroke="currentColor" strokeWidth="16" strokeLinecap="round" />
    </svg>
  );
}

// Funnel (Filter)
export function Funnel({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" {...props}>
      <path d="M224 112H183l-40.55-40.55A16 16 0 00130.69 64H125.3a16 16 0 00-11.37 4.72L32 150.62V200a16 16 0 0016 16h160a16 16 0 0016-16v-40a16 16 0 00-16-16z" fill="currentColor" />
    </svg>
  );
}
