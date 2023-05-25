import React, { useState } from 'react';

const QuestionList = ({
  questionOwner,
  questionOwnerId,
  questionDate,
  question,
}) => {
  const [inputValue, setInputValue] = useState('');

  const answerQuestionHandle = () => {
    console.log(inputValue);

    setInputValue('');
  };

  return (
    <div className="p-[15px] bg-slate-200 rounded-md shadow-md flex flex-col gap-[15px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-semibold">Messi</h3>
        <h3 className="text-[20px] font-semibold">11/25/2022</h3>
      </div>
      <p className="leading-7 text-[16px] font-normal text-slate-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
        accusantium beatae quibusdam voluptates quia pariatur, placeat
        voluptatem a quae facere ab, numquam officia rem aliquid ut vitae unde
        natus debitis delectus iusto et. Voluptas nihil quaerat dolore
        similique, reiciendis exercitationem itaque consectetur at, nemo labore
        maxime omnis natus nam eveniet.
      </p>
      <div className="flex gap-[10px] items-center justify-between">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Type answer here.."
          type="text"
          className="flex-1 outline-none py-[5px] rounded-md px-[10px] text-[15px]"
        />
        <button
          onClick={answerQuestionHandle}
          className="bg-blue-300 hover:bg-blue-500 hover:text-white duration-200 px-[20px] py-[5px] rounded-md font-semibold text-[14px]"
        >
          Send Answer
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
