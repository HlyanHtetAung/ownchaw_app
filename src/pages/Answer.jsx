import React, { useEffect, useState } from "react";
import { PRE_STYLES } from "../styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Answer = () => {
  const { userDetail } = useSelector((state) => state.user);
  const [answersList, setAnswersList] = useState([]);
  const navigate = useNavigate();
  if (!userDetail.user_name) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchAnswers = async () => {
      const data = await fetch(
        `http://localhost:3001/answer?user_id=${userDetail.userId}`,
        {
          headers: {
            Authorization: `Bear ${userDetail.token}`,
          },
        }
      ).then((res) => res.json());

      setAnswersList(data.answer);
      console.log("answer data", data);
      //   setAnswersList(data.question);
    };

    fetchAnswers();
  }, []);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <div className='flex items-center justify-between'>
        <h3 className='text-black text-[30px] font-bold'>Answer List</h3>
      </div>
      {answersList.map((ansList) => (
        <div className='flex flex-col gap-[10px] my-[20px]'>
          <div className='p-[15px] bg-slate-200 rounded-md shadow-md flex flex-col gap-[15px]'>
            <div className='flex flex-col gap-[10px]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[20px] font-bold text-slate-700'>
                  Question
                </h1>
                <h3 className='text-[15px] font-semibold'>
                  {new Date(ansList.booking_date).toDateString()}
                </h3>
              </div>

              <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-semibold'>
                  {ansList.question}
                </h3>
              </div>
            </div>
            <div className='w-full h-[1px] bg-black'></div>
            {ansList.answer.length > 0 ? (
              <div className='flex flex-col gap-[10px]'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-[20px] font-bold text-slate-700'>
                    Answer
                  </h1>
                  <h3 className='text-[15px] font-semibold'>
                    {new Date(ansList.answer[0].answer_date).toDateString()}
                  </h3>
                </div>

                <div className='flex items-center justify-between'>
                  <h3 className='text-[20px] font-semibold'>
                    {ansList.answer[0].answer}
                  </h3>
                  <p className='bg-blue-200 px-[10px] py-[5px] rounded-md text-slate-900'>
                    {ansList.status}
                  </p>
                </div>
              </div>
            ) : (
              <p className='bg-blue-200 px-[10px] py-[5px] rounded-md text-slate-900 text-center'>
                {ansList.status}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answer;
