import React from 'react';
import { PRE_STYLES } from '../styles';

import QuestionList from '../components/QuestionList';

const QuestionLists = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-black text-[30px] font-bold">Questions List</h3>
      </div>
      <div className="flex flex-col gap-[20px] my-[20px]">
        <QuestionList />
        <QuestionList />
        <QuestionList />
      </div>
    </div>
  );
};

export default QuestionLists;
