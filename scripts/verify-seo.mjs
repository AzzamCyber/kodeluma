async function checkSeo() {
  const res = await fetch('http://localhost:3000/courses/postgresql-dasar');
  const html = await res.text();

  console.log('Status:', res.status);
  console.log('Has og:image:', html.includes('property="og:image"'));
  console.log('Has twitter:card:', html.includes('name="twitter:card"'));
  console.log('Has Course Schema:', html.includes('"@type":"Course"'));
  console.log('Has Breadcrumb Schema:', html.includes('"@type":"BreadcrumbList"'));
  console.log('Has Canonical:', html.includes('rel="canonical"'));
  console.log('Has Domain kodeluma.azzamcodex.id:', html.includes('kodeluma.azzamcodex.id'));

  const homeRes = await fetch('http://localhost:3000');
  const homeHtml = await homeRes.text();
  console.log('\n--- HOME PAGE ---');
  console.log('Status:', homeRes.status);
  console.log('Has Organization Schema:', homeHtml.includes('"@type":"Organization"'));
  console.log('Has WebSite Schema:', homeHtml.includes('"@type":"WebSite"'));
  console.log('Has FAQPage Schema:', homeHtml.includes('"@type":"FAQPage"'));
  console.log('Has og:image:', homeHtml.includes('property="og:image"'));
}

checkSeo().catch(console.error);
