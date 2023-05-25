import React, { useState } from 'react';

const AstrologerWithQuestionBox = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="p-[15px] bg-slate-200 rounded-md shadow-md flex flex-col gap-[15px]">
      <div className="flex gap-[20px] justify-between">
        <img
          src="https://cdn.kbizoom.com/media/2022/07/19170003/lisa-21072022-3.webp"
          className="object-cover w-[200px] h-[200px]"
          alt="Something went wrong"
        />
        <div className="flex-1 flex flex-col gap-[10px]">
          <h3 className="text-[20px] font-bold">Messi</h3>
          <p className="leading-7 text-[16px] font-normal text-slate-800 h-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
            accusantium beatae quibusdam voluptates quia pariatur, placeat
            voluptatem a quae facere ab, numquam officia rem aliquid ut vitae
            unde natus debitis delectus iusto et. Voluptas nihil quaerat dolore
            similique, reiciendis exercitationem itaque consectetur at, nemo
            labore maxime omnis natus nam eveniet.
          </p>
          <div className="flex gap-[10px] items-center justify-between">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Type answer here.."
              type="text"
              className="flex-1 outline-none py-[5px] rounded-md px-[10px] text-[15px]"
            />
            <button className="bg-blue-300 hover:bg-blue-500 hover:text-white duration-200 px-[20px] py-[5px] rounded-md font-semibold text-[14px]">
              Send Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerWithQuestionBox;
