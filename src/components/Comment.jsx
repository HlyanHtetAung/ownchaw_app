import React from "react";

const Comment = ({ commentText, commentOwner, photoURL }) => {
  return (
    <div className='flex gap-[20px] py-[20px]'>
      <img
        className={`w-[50px] h-[50px] rounded-full object-cover`}
        alt='something went wrong'
        src={`http://localhost:3001/${photoURL}`}
      />
      <div className='flex-1'>
        <p className='font-bold text-gray-500'>{commentOwner}</p>
        <p>{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
