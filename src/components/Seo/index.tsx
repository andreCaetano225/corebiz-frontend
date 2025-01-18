import { Helmet } from 'react-helmet';

export const ConfigSEO = () => {
  return (
    <>
      <Helmet>
        <title>Corebiz - Front end</title>
        <meta name="description" content="Frontend-Corebiz" />
        <meta property="og:title" content="Corebiz - Front end" />
        <meta property="og:image" content="/corebiz-favicon.png" />
      </Helmet>
    </>
  );
};
