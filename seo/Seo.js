import Head from 'next/head';

function SEO({ title, description, image, url }) {
  const siteName = 'My Site Name';
  const siteUrl = 'https://www.mysite.com';
  const pageTitle = title ? `${title} | ${siteName}` : siteName;
  const pageDescription = description || 'This is a description of my page.';
  const pageUrl = url || siteUrl;
  const pageImage = image || 'https://www.mysite.com/images/my-default-image.jpg';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "${siteName}",
          "url": "${siteUrl}"
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "${siteUrl}"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "${title}",
            "item": "${pageUrl}"
          }]
        }`}
      </script>
    </Head>
  );
}

export default SEO;
