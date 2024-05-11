import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
  isLoading: boolean;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick, isLoading }) => {
  return (
    <Button
      style={{
        display: 'block',
        margin: '0 auto',
        marginBottom: '20px',
        padding: '12px',
        color: 'white',
        background: '#4051b5',
      }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Load More'}
    </Button>
  );
};

export default LoadMoreBtn;
