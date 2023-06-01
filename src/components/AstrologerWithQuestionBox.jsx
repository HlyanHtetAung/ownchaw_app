import React, { useState } from "react";
import { useSelector } from "react-redux";

const AstrologerWithQuestionBox = ({ photoURL, name, astroId }) => {
  const { userDetail } = useSelector((state) => state.user);
  console.log(userDetail);
  const [inputValue, setInputValue] = useState("");

  const questionBoxInputHandle = async (e) => {
    const formData = new FormData();
    formData.append("user_id", userDetail.userId);
    formData.append("astrologer_id", astroId);
    formData.append("question_type_id", 1);
    formData.append("question", inputValue);

    e.preventDefault();
    const data = await fetch(`http://localhost:3001/question`, {
      method: "POST",
      headers: {
        authorization: `bearer ${userDetail.token}`,
      },
      body: formData,
    }).then((res) => res.json());
    alert(data.message);
    setInputValue("");
  };

  return (
    <div className='p-[15px] bg-slate-200 rounded-md shadow-md flex flex-col gap-[15px]'>
      <div className='flex gap-[20px] justify-between'>
        <img
          src={`http://localhost:3001/${photoURL}`}
          className='object-cover w-[200px] h-[200px]'
          alt='Something went wrong'
        />
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h3 className='text-[20px] font-bold'>{name}</h3>
          <p className='leading-7 text-[16px] font-normal text-slate-800 h-full'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
            accusantium beatae quibusdam voluptates quia pariatur, placeat
            voluptatem a quae facere ab, numquam officia rem aliquid ut vitae
            unde natus debitis delectus iusto et. Voluptas nihil quaerat dolore
            similique, reiciendis exercitationem itaque consectetur at, nemo
            labore maxime omnis natus nam eveniet.
          </p>
          <form
            onSubmit={questionBoxInputHandle}
            className='flex gap-[10px] items-center justify-between'
          >
            <input
              required
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder='Type answer here..'
              type='text'
              className='flex-1 outline-none py-[5px] rounded-md px-[10px] text-[15px]'
            />
            <button
              type='submit'
              className='bg-blue-300 hover:bg-blue-500 hover:text-white duration-200 px-[20px] py-[5px] rounded-md font-semibold text-[14px]'
            >
              Send Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AstrologerWithQuestionBox;
