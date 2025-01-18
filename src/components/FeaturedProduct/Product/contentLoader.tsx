import ContentLoader from 'react-content-loader';

export const ContentLoaderProduct = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={200}
        height={300}
        viewBox="0 0 200 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="200" height="150" />
        <rect x="0" y="160" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="185" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="210" rx="5" ry="5" width="120" height="15" />
        <rect x="0" y="240" rx="5" ry="5" width="80" height="30" />
      </ContentLoader>
    </>
  );
};
