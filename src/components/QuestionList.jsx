import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const QuestionList = ({
  questionOwner,
  bookingId,
  questionDate,
  question,
  questionStatus,
  setQuestions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const { userDetail } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const answerQuestionHandle = async () => {
    const formData = new FormData();
    formData.append("booking_id", bookingId);
    formData.append("answer", inputValue);
    formData.append("rating", 4.5);

    const data = await fetch(`http://localhost:3001/answer`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${userDetail.token}`,
      },
      body: formData,
    }).then((res) => res.json());
    setQuestions((prev) => [...prev]);
    setInputValue("");
  };

  return (
    <div className='p-[15px] bg-slate-200 rounded-md shadow-md flex flex-col gap-[15px]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-semibold'>{questionOwner}</h3>
        <h3 className='text-[20px] font-semibold'>
          {new Date(questionDate).toDateString()}
        </h3>
      </div>
      <p className='leading-7 text-[16px] font-normal text-slate-800'>
        {question}
      </p>

      <div className='flex gap-[10px] items-center justify-between'>
        {questionStatus !== "answered" ? (
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder='Type answer here..'
            type='text'
            className='flex-1 outline-none py-[5px] rounded-md px-[10px] text-[15px]'
          />
        ) : null}

        <button
          disabled={questionStatus === "answered" ? true : false}
          onClick={answerQuestionHandle}
          className='bg-blue-300 hover:bg-blue-500 hover:text-white duration-200 px-[20px] py-[5px] rounded-md font-semibold text-[14px]'
        >
          {questionStatus === "answered" ? "Answered" : "Send answer"}
        </button>
      </div>
    </div>
  );
};

export default QuestionList;
