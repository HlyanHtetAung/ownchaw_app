import React from "react";
import { PRE_STYLES } from "../styles";
import Astrologer from "./Astrologer";

const MostRatedAstrologer = () => {
  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className='text-black text-[30px] font-bold text-center'>
        Most Rated Astrologer
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]'>
        <Astrologer
          imageUrl='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
          name='Miracle'
          ratedRating={4}
        />
        <Astrologer
          imageUrl='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
          name='Kuroky'
          ratedRating={4}
        />
        <Astrologer
          imageUrl='https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80'
          name='Shally'
          ratedRating={4}
        />
      </div>
    </div>
  );
};

export default MostRatedAstrologer;
