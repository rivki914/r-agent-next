
import React, { useState } from 'react';

export default function Home() {
  const [siteType, setSiteType] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const generateSite = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ siteType }),
    });
    const data = await res.json();
    setGeneratedCode(data.code);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>R-Agent: Web Generator</h1>
      <input
        value={siteType}
        onChange={(e) => setSiteType(e.target.value)}
        placeholder="Contoh: portofolio, blog, toko"
        style={{ width: '300px', padding: '8px' }}
      />
      <button onClick={generateSite} style={{ marginLeft: 10 }}>Buat Web</button>
      <pre style={{ marginTop: 20, background: '#eee', padding: 10 }}>
        {generatedCode}
      </pre>
    </div>
  );
}
