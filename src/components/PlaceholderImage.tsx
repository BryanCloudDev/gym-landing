import React from 'react';

interface PlaceholderImageProps {
  text: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  text,
  width = '100%',
  height = '400px',
  backgroundColor = '#B81414'
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '8px',
  };

  return (
    <div style={style}>
      {text}
    </div>
  );
};

export default PlaceholderImage;
