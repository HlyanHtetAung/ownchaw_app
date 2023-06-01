import React, { useEffect, useState } from "react";
import { PRE_STYLES } from "../styles";
import AstrologerWithQuestionBox from "../components/AstrologerWithQuestionBox";

const Astrologers = () => {
  const [allAstrologers, setAllAstrologers] = useState([]);
  useEffect(() => {
    const fetchAllAstrologers = async () => {
      const res = await fetch("http://localhost:3001/astrologer");
      const data = await res.json();
      setAllAstrologers(data.astrologer);
    };
    fetchAllAstrologers();
  }, []);

  return (
    <div className={`${PRE_STYLES.center_div} ${PRE_STYLES.padding_y}`}>
      <h3 className='text-black text-[30px] font-bold'>Astrologers</h3>
      <div className='my-[20px] flex flex-col gap-[20px]'>
        {allAstrologers.map((alAstro) => (
          <AstrologerWithQuestionBox
            key={alAstro.user_id}
            photoURL={alAstro.profile_image}
            name={alAstro.user_name}
            astroId={alAstro.user_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Astrologers;
