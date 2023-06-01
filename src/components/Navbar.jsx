import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRE_STYLES } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userSlice";

const Navbar = () => {
  const { userDetail } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='bg-navbarColor font-poppins sticky top-0 left-0 z-50'>
      <div
        className={`${PRE_STYLES.center_div} py-[18px] flex items-center justify-between flex-wrap`}
      >
        <Link to='/'>
          <h3 className='font-bold text-white text-xl'>Astrological Reading</h3>
        </Link>
        <div className='flex items-center gap-[20px] text-white font-semibold'>
          <Link to='/astrologers'>
            <p>Astrologers</p>
          </Link>
          <Link to='/articles'>
            <p>Articles</p>
          </Link>
          {userDetail.role === "user" && (
            <>
              <Link to='/answer'>
                <p>Answer</p>
              </Link>
            </>
          )}
          {userDetail.role === "astrologer" && (
            <>
              <Link to='/questionsList'>
                <p>Questions</p>
              </Link>
              <Link to='/createArticle'>
                <p>Create Article</p>
              </Link>
            </>
          )}
          {userDetail.user_name ? (
            <div className='flex gap-[10px] items-center bg-slate-500 p-[10px] rounded-md'>
              <p>Welcome {userDetail.user_name}</p>
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/");
                }}
                className='bg-blue-500 hover:bg-blue-300 px-[10px] py-[3px] rounded-md'
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to='/login'>
              <p>Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
