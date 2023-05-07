import React from 'react';
import { PRE_STYLES } from '../styles';
import Astrologer from './Astrologer';

const MostRatedAstrologer = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className="text-black text-[30px] font-bold text-center">
        Most Rated Astrologer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
        <Astrologer
          imageUrl="https://cdn.kbizoom.com/media/2022/07/19170003/lisa-21072022-3.webp"
          name="lisa"
          ratedRating={4}
        />
        <Astrologer
          imageUrl="https://cdn.kbizoom.com/media/2022/07/19170003/lisa-21072022-3.webp"
          name="lisa"
          ratedRating={4}
        />
        <Astrologer
          imageUrl="https://cdn.kbizoom.com/media/2022/07/19170003/lisa-21072022-3.webp"
          name="lisa"
          ratedRating={4}
        />
      </div>
    </div>
  );
};

export default MostRatedAstrologer;
