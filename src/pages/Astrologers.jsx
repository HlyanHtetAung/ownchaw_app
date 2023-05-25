import React from 'react';
import { PRE_STYLES } from '../styles';
import AstrologerWithQuestionBox from '../components/AstrologerWithQuestionBox';

const Astrologers = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className="text-black text-[30px] font-bold">Astrologers</h3>
      <div className="my-[20px] flex flex-col gap-[20px]">
        <AstrologerWithQuestionBox />
        <AstrologerWithQuestionBox />
        <AstrologerWithQuestionBox />
        <AstrologerWithQuestionBox />
      </div>
    </div>
  );
};

export default Astrologers;
