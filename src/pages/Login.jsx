import { useState } from 'react';
import InputTextBox from '../components/InputTextBox';

const INITIAL_LOGIN_INPUT = {
  username: '',
  password: '',
};

const Login = () => {
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN_INPUT);

  const changeLoginInputHanlde = (objProperty, value) => {
    setLoginInput((prev) => ({ ...prev, [objProperty]: value }));
  };

  const loginHandle = (e) => {
    e.preventDefault();
    const { username, password } = loginInput;
    console.log(username, password);

    // to clean up input
    setLoginInput(INITIAL_LOGIN_INPUT);
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
      <form
        onSubmit={loginHandle}
        className="bg-slate-700 flex flex-col gap-[10px] p-[20px] rounded-xl mx-auto w-[80%] sm:w-[400px]"
      >
        <h1 className="font-bold text-[25px] text-white">Login Page</h1>
        <InputTextBox
          inputSetStateFunc={changeLoginInputHanlde}
          label="username"
          inputStateValue={loginInput['username']}
          inputType="text"
        />
        <InputTextBox
          inputSetStateFunc={changeLoginInputHanlde}
          label="password"
          inputStateValue={loginInput['password']}
          inputType="text"
        />
        <button className="bg-slate-900 py-[10px] text-white rounded-md font-bold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
