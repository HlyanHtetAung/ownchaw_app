import { Rating } from '@mui/material';

const Astrologer = ({ imageUrl, name, ratedRating }) => {
  return (
    <div className="rounded-md h-[500px] shadow-lg bg-gray-200 p-[10px] flex flex-col gap-[5px] cursor-pointer">
      <img
        src={imageUrl}
        className="object-cover w-full h-[350px] flex-1"
        alt="Something went wrong"
      />
      <div className="flex items-center justify-between">
        <p className="font-bold text-black text-[20px] ">{name}</p>
        <Rating
          name="read-only"
          defaultValue={ratedRating}
          //   value={starValue}
          //   onChange={(e, newValue) => setStarValue(newValue)}
          size="large"
          readOnly
        />
      </div>
    </div>
  );
};

export default Astrologer;
