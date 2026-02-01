import React from 'react';
import { coursesAPI } from '../services/api';

const ImageWithFallback = ({ src, alt, fallback, ...props }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const isExternalImage = (url) => {
    return url && (url.includes('storage.littlesigns.co.zw') || url.startsWith('http'));
  };

  React.useEffect(() => {
    const loadImage = async () => {
      if (isExternalImage(src)) {
        try {
          const proxyUrl = await coursesAPI.getProxyImage(src);
          setImgSrc(proxyUrl);
        } catch (err) {
          console.error('Proxy failed, using fallback:', err);
          setImgSrc(fallback);
          setHasError(true);
        }
      } else {
        setImgSrc(src);
      }
    };

    if (src) {
      loadImage();
    }
  }, [src, fallback]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
      console.error('Image failed to load:', src);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            borderRadius: '4px'
          }}
        />
      )}
      <img 
        src={imgSrc} 
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease',
          ...props.style
        }}
        {...props}
      />
      <style>{`
        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default ImageWithFallback;
