import React from 'react';
import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <DNA height={80} width={80} />
    </div>
  );
};

export default Loader;
