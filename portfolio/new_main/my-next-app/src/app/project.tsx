import React from 'react';

interface ListProps {
    count: number;
}

const generateList = (count: number): React.ReactNode[] => {
    return Array.from({ length: count }, (_, index) => (
      <li key={index}>Item {index + 1}</li>
    ));
  };

export default generateList;