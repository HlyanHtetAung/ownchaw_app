import React from 'react';

const Article = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[10px] md:gap-[20px] justify-between mt-[20px] cursor-pointer rounded-md p-[15px] hover:bg-slate-200">
      <img
        className="w-[400px] max-h-[250px] object-cover"
        src="https://e1.pxfuel.com/desktop-wallpaper/116/12/desktop-wallpaper-im-nayeon-android-iphone-twice-nayeon.jpg"
        alt="Something went wrong"
      />
      <div className="flex-1">
        <h2 className="font-bold text-[23px]">Title</h2>
        <p className="text-slate-500 font-normal leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut
          rem harum. Tempora earum nam at perspiciatis quam sunt, iste quod
          saepe deleniti qui vero dolorum quisquam delectus ad voluptas
          consequatur culpa officia quaerat aperiam possimus deserunt voluptatum
          quia voluptatem.
        </p>
      </div>
    </div>
  );
};

export default Article;
