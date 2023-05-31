import React, { useState } from 'react';
import InputTextBox from '../components/InputTextBox';
import { Link } from 'react-router-dom';

const INITIAL_SIGNUP_INPUT = {
  username: '',
  email: '',
  password: '',
  path: '',
};

const SignUp = () => {
  const [signUpInput, setSignUpInput] = useState(INITIAL_SIGNUP_INPUT);

  const changeSignUpInputHandle = (objProperty, value) => {
    setSignUpInput((prev) => ({ ...prev, [objProperty]: value }));
  };

  const signUpHandle = async (e) => {
    e.preventDefault();
    const { username, email, password, path } = signUpInput;
    console.log(path, username);
    const formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('path', path);
    formData.append('user_type', 'user');

    // "astrologer"

    const data = await fetch('http://localhost:3001/signup', {
      method: 'PUT',
      body: formData,
    }).then((res) => res.json());
    console.log('sign up data', data);
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
      <form
        onSubmit={signUpHandle}
        className="bg-slate-700 flex flex-col gap-[10px] p-[20px] rounded-xl mx-auto w-[80%] sm:w-[400px]"
      >
        <h1 className="font-bold text-[25px] text-white">Login Page</h1>
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
