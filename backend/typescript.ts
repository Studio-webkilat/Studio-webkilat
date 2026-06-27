// Studio Web Kilat - TypeScript Backend v1.0
// Dibuat oleh: Trimo Wawan
// Fungsi: API Express untuk cek status server

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint 1: Cek Status
app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    brand: "Studio Web Kilat",
    owner: "Trimo Wawan", 
    status: "API Node.js Aktif ⚡",
    stack: "TypeScript + Express"
  });
});

// Endpoint 2: Terima Pesan
app.post('/api/contact', (req: Request, res: Response) => {
  const { nama, brand, pesan } = req.body;
  console.log(`Pesan Baru dari: ${nama} | Brand: ${brand}`);
  
  res.status(200).json({
    status: "success",
    message: `Siap ${nama}. Tim kami akan WA Anda < 1 jam.`
  });
});

app.listen(PORT, () => {
  console.log(`Server Studio Web Kilat jalan di http://localhost:${PORT}`);
});
