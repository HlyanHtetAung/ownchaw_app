import React, { useEffect, useState } from "react";
import { PRE_STYLES } from "../styles";
import Article from "./Article";

const TodayArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("http://localhost:3001/articles");
      const data = await res.json();
      setArticles(data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className='text-black text-[30px] font-bold text-center'>
        Today Articles
      </h3>
      {articles?.map((arc) => (
        <Article
          key={arc.artical_id}
          articleId={arc.artical_id}
          astrologerId={arc.astrologer_id}
          articleIntro={arc.artical_intro}
          articleBody={arc.artical_body}
          photoURL={arc.artical_photo}
        />
      ))}
    </div>
  );
};

export default TodayArticles;
