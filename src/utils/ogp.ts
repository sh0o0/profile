async function fetchHtml(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  return html;
}

function extractOGP(html: string) {
  const ogImageRegex = /<meta property="og:image" content="(.*?)"/;
  const match = html.match(ogImageRegex);
  return match ? match[1] : null;
}
export
  async function getOGPImage(url: string) {
  const html = await fetchHtml(url);
  const ogpImage = extractOGP(html);
  return ogpImage;
}
