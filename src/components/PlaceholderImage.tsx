import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  backgroundColor: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ width, height, text, backgroundColor }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage;
