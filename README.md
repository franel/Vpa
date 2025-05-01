# Private App Designer - Admin Manual

## Setup
- Ensure `.env.local` is created (or use Wizard)
- Deploy to Vercel with proper secrets

## Modules
- **FlowchartBuilder**: Voice/text flowchart tool, auto-saves to MEGA
- **PrototypeGenerator**: 3–5 screen UI demo, 7-day expiry
- **FullAppBuilder**: Cross-platform app builds, config + DALL·E logo
- **SnapshotManager**: Version diffs, max 50
- **AuditLog**: 1000 max, encrypted
- **PluginLoader**: Dynamic plugin support
- **ThemeManager**: Runtime Tailwind theme + logo switch

## Security
- JWT-based sessions
- AES-256 encryption
- 2FA stub in login
- Auto-logout + purge after 1 year

## Storage
- Encrypted MEGA file upload
- Offline fallback via LocalStorage
- ZIP export for builds/prototypes

## Help
- “Download Manual” always visible in footer

## Compliance
- GDPR, CSP, XSS, SQLi protection
