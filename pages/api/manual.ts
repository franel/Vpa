import { NextApiRequest, NextApiResponse } from 'next';
import markdownpdf from 'markdown-pdf';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const mdPath = path.join(process.cwd(), 'public/docs/User-Admin-Manual.md');
  const pdfPath = path.join(process.cwd(), 'public/docs/User-Admin-Manual.pdf');

  await new Promise((resolve, reject) => {
    markdownpdf().from(mdPath).to(pdfPath, () => resolve(null));
  });

  res.setHeader('Content-Type', 'application/pdf');
  fs.createReadStream(pdfPath).pipe(res);
}
