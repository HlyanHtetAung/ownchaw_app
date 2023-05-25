import React from 'react';
import { PRE_STYLES } from '../styles';
import Article from '../components/Article';

const Articles = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-black text-[30px] font-bold">Artilce List</h3>
        {/* Dropdown */}
      </div>
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default Articles;
