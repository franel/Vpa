import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const required = [
    'JWT_SECRET',
    'ENCRYPTION_KEY',
    'ADMIN_EMAIL',
    'ADMIN_PASSWORD',
    'MEGA_EMAIL',
    'MEGA_PASSWORD'
  ];
  const allExist = required.every((key) => !!process.env[key]);
  res.status(200).json({ envExists: allExist });
}
