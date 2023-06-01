import React, { useEffect, useState } from 'react';
import InputTextBox from '../components/InputTextBox';
import { Link } from 'react-router-dom';

import { BiDownArrow } from 'react-icons/bi';

const INITIAL_SIGNUP_INPUT = {
  username: '',
  email: '',
  password: '',
  path: '',
  userType: 'Please select user type',
};

const USER_OPTONS = [
  {
    value: 'astrologer',
    label: ' Astrogoler',
  },
  {
    value: 'user',
    label: ' User',
  },
];

const SignUp = () => {
  const [signUpInput, setSignUpInput] = useState(INITIAL_SIGNUP_INPUT);
  const [openDropdown, setOpenDropdown] = useState(false);
  const changeSignUpInputHandle = (objProperty, value) => {
    setSignUpInput((prev) => ({ ...prev, [objProperty]: value }));
  };

  const signUpHandle = async (e) => {
    e.preventDefault();

    const { username, email, password, path, userType } = signUpInput;

    const formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('path', path);
    formData.append('user_type', userType);

    // "astrologer"

    // const data = await fetch('http://localhost:3001/signup', {
    //   method: 'PUT',
    //   body: formData,
    // }).then((res) => res.json());

    setSignUpInput(INITIAL_SIGNUP_INPUT);
  };

  const selectUserRoleHandle = (value) => {
    setSignUpInput((prev) => ({ ...prev, userType: value }));
    setOpenDropdown(false);
  };

  useEffect(() => {
    const handleWindowClick = () => setOpenDropdown(false);

    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  });

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
      <form
        onSubmit={signUpHandle}
        className="bg-slate-700 flex flex-col gap-[10px] p-[20px] rounded-xl mx-auto w-[80%] sm:w-[400px]"
      >
        <h1 className="font-bold text-[25px] text-white">Sign Up Page</h1>
        <InputTextBox
          inputSetStateFunc={changeSignUpInputHandle}
          label="email"
          inputStateValue={signUpInput['email']}
          inputType="email"
        />
        <InputTextBox
          inputSetStateFunc={changeSignUpInputHandle}
          label="username"
          inputStateValue={signUpInput['username']}
          inputType="text"
        />
        <InputTextBox
          inputSetStateFunc={changeSignUpInputHandle}
          label="path"
          inputStateValue={signUpInput['path']}
          inputType="file"
        />
        <InputTextBox
          inputSetStateFunc={changeSignUpInputHandle}
          label="password"
          inputStateValue={signUpInput['password']}
          inputType="password"
        />
        <div className="relative">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown((prev) => !prev);
            }}
            className={`flex items-center justify-between px-[10px] py-[10px] bg-slate-500  text-white cursor-pointer font-bold ${
              openDropdown ? 'rounded-tl-lg rounded-tr-lg' : 'rounded-md'
            }`}
          >
            <p>{signUpInput['userType']}</p>
            <BiDownArrow />
          </div>
          <div
            className={`flex flex-col font-semibold absolute w-full cursor-pointer ${
              openDropdown
                ? 'top-[100%] opacity-1 pointer-events-auto duration-200 ease-in-out'
                : 'top-[50%] left-0 opacity-0 pointer-events-none'
            }`}
          >
            {USER_OPTONS.map((usr, index) => (
              <p
                key={index}
                onClick={() => selectUserRoleHandle(usr.value)}
                className="px-[10px] py-[10px] bg-slate-200 cursor-pointer hover:bg-slate-900 hover:text-white"
              >
                {usr.label}
              </p>
            ))}
          </div>
        </div>
        <button className="bg-slate-900 py-[10px] text-white rounded-md font-bold">
          Sign Up
        </button>
        <Link to="/login">
          <p className="text-center text-white underline">
            Already have an account? Go To login
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
