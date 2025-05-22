
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { siteType } = req.body;
  const html = '<h1>Selamat datang</h1><p>Ini adalah situs ' + siteType + '</p>';
  res.status(200).json({ code: html });
}
