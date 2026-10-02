const key = '8f4a91c7d2e64b3a9f0c6e7d1a52b884';
const host = 'beinmeditech.com';
const sitemap = await fetch(`https://${host}/sitemap.xml`).then((response) => {
  if (!response.ok) throw new Error(`Unable to read sitemap: ${response.status}`);
  return response.text();
});
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
if (!response.ok && response.status !== 202) throw new Error(`IndexNow submission failed: ${response.status}`);
console.log(`Submitted ${urlList.length} canonical URLs to IndexNow (${response.status}).`);
