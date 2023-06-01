import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Article = ({ articleId, astrologerId, articleIntro, articleBody }) => {
  return (
    <Link to={`/article/${articleId}`}>
      <div className="flex flex-col lg:flex-row gap-[10px] md:gap-[20px] justify-between mt-[20px] cursor-pointer rounded-md p-[15px] hover:bg-slate-200">
        <img
          className="w-[400px] max-h-[250px] object-cover"
          src="https://e1.pxfuel.com/desktop-wallpaper/116/12/desktop-wallpaper-im-nayeon-android-iphone-twice-nayeon.jpg"
          alt="Something went wrong"
        />
        <div className="flex-1">
          <h2 className="font-bold text-[23px]">Title</h2>
          <p>{articleIntro}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
        </div>
      </div>
    </Link>
  );
};

export default Article;
