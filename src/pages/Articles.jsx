import React, { useEffect, useState } from 'react';
import { PRE_STYLES } from '../styles';
import Article from '../components/Article';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('http://localhost:3001/articles');
      const data = await res.json();
      setArticles(data.articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-black text-[30px] font-bold">Artilce List</h3>
        {/* Dropdown */}
      </div>
      {articles?.map((arc) => (
        <Article
          key={arc.artical_id}
          astrologerId={arc.astrologer_id}
          articleIntro={arc.artical_intro}
          articleBody={arc.artical_body}
        />
      ))}
    </div>
  );
};

export default Articles;
