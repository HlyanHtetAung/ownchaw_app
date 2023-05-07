import React from 'react';
import { PRE_STYLES } from '../styles';

const Hero = () => {
  return (
    <div className="home_background_image h-[600px] flex items-center">
      <div
        className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y} flex flex-col gap-[10px]`}
      >
        <h1 className="text-white text-[40px] font-bold text-center">
          The Astrologer
        </h1>
        <p className="text-white leading-8 text-[18px] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis
          voluptas, inventore nihil labore, ducimus alias fuga nisi ullam ipsam
          repellendus consequatur facere enim veniam consequuntur quos. Autem
          provident nemo aut, repellat tempore maiores facere molestias eveniet,
          est corporis cum necessitatibus aspernatur velit tempora ea veniam
          cupiditate fugiat beatae excepturi harum ipsum nulla vero? Ipsum
          quidem nostrum minus debitis alias iusto exercitationem. Veniam,
          provident nemo aut, repellat tempore maiores facere molestias eveniet,
          est corporis cum necessitatibus aspernatur velit tempora ea veniam
          cupiditate fugiat beatae excepturi harum ipsum nulla vero? Ipsum
          quidem nostrum minus debitis alias iusto exercitationem. Veniam,
        </p>
      </div>
    </div>
  );
};

export default Hero;
