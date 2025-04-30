import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret = process.env.JWT_SECRET || 'supersecret';

  if (email === adminEmail && password === adminPassword) {
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: '1h' });
    const res = NextResponse.json({ message: 'Authenticated' });
    res.cookies.set('token', token, { httpOnly: true });
    return res;
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
