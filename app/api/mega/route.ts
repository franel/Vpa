import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(req: Request) {
  const data = await req.json();

  const envContent = `
ADMIN_EMAIL=${data.adminEmail}
ADMIN_PASSWORD=${data.adminPassword}
MEGA_EMAIL=${data.megaEmail}
MEGA_PASSWORD=${data.megaPassword}
JWT_SECRET=${crypto.randomUUID()}
ENCRYPTION_KEY=${crypto.randomUUID()}
`.trim();

  try {
    const envPath = join(process.cwd(), '.env.local');
    await writeFile(envPath, envContent, 'utf8');
    return new Response(JSON.stringify({ message: '.env.local created successfully' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to write .env.local' }), { status: 500 });
  }
}
