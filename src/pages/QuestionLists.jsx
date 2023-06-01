import React, { useEffect, useState } from "react";
import { PRE_STYLES } from "../styles";

import QuestionList from "../components/QuestionList";
import { useSelector } from "react-redux";

const QuestionLists = () => {
  const { userDetail } = useSelector((state) => state.user);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetch(
        `http://localhost:3001/questions?user_id=${userDetail.userId}`
      ).then((res) => res.json());
      setQuestions(data.question);
      console.log("dakasjdlkfjasjdf", data);
    };

    fetchQuestions();
  }, [questions]);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <div className='flex items-center justify-between'>
        <h3 className='text-black text-[30px] font-bold'>Questions List</h3>
      </div>
      <div className='flex flex-col gap-[20px] my-[20px]'>
        {questions.map((ques) => (
          <QuestionList
            questionOwner={ques.user_booking_user_idTouser.user_name}
            bookingId={ques.booking_id}
            question={ques.question}
            questionDate={ques.booking_date}
            questionStatus={ques.status}
            setQuestions={setQuestions}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionLists;
