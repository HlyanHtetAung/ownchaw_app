import React, { useEffect, useState } from 'react';
import { PRE_STYLES } from '../styles';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState('');

  const [html, setHtml] = useState('');
  useEffect(() => {
    
  }, [html]);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`http://localhost:3001/articles/${articleId}`);
      const data = await res.json();

      setArticle(data.articles[0]);
      setHtml(articleBody);
    };

    fetchArticle();
  }, [articleId]);

  console.log(article);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className="text-black text-[30px] font-bold">Horoscope</h3>
      <img
        className="w-full max-h-[400px] object-cover rounded-3xl my-[10px] shadow-lg"
        src="https://e1.pxfuel.com/desktop-wallpaper/116/12/desktop-wallpaper-im-nayeon-android-iphone-twice-nayeon.jpg"
        alt="Something went wrong"
      />
      <p className="text-slate-500 font-normal leading-8 text-[18px] mb-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut
        rem harum. Tempora earum nam at perspiciatis quam sunt, iste quod saepe
        deleniti qui vero dolorum quisquam delectus ad voluptas consequatur
        culpa officia quaerat aperiam possimus deserunt voluptatum quia
        voluptatem.
      </p>
      <p className="text-slate-500 font-normal leading-8 text-[18px] mb-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut
        rem harum. Tempora earum nam at perspiciatis quam sunt, iste quod saepe
        deleniti qui vero dolorum quisquam delectus ad voluptas consequatur
        culpa officia quaerat aperiam possimus deserunt voluptatum quia
        voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam aut rem harum. Tempora earum nam at perspiciatis quam sunt,
        iste quod saepe deleniti qui vero dolorum quisquam delectus ad voluptas
        consequatur culpa officia quaerat aperiam possimus deserunt voluptatum
        quia voluptatem.
      </p>
      <p className="text-slate-500 font-normal leading-8 text-[18px] mb-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aut
        rem harum. Tempora earum nam at perspiciatis quam sunt, iste quod saepe
        deleniti qui vero dolorum quisquam delectus ad voluptas consequatur
        culpa officia quaerat aperiam possimus deserunt voluptatum quia
        voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam aut rem harum. Tempora earum nam at perspiciatis quam sunt,
        iste quod saepe deleniti qui vero dolorum quisquam delectus ad voluptas
        consequatur culpa officia quaerat aperiam possimus deserunt voluptatum
        quia voluptatem.
      </p>
    </div>
  );
};

export default ArticleDetail;
