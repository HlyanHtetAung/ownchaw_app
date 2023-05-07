import React from 'react';
import { PRE_STYLES } from '../styles';
import Article from './Article';

const TodayArticles = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className="text-black text-[30px] font-bold text-center">
        Today Articles
      </h3>
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default TodayArticles;
