import { useState } from 'react';
import InputTextBox from '../components/InputTextBox';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetail } from '../redux/userSlice';

const INITIAL_LOGIN_INPUT = {
  email: '',
  password: '',
};

const Login = () => {
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN_INPUT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeLoginInputHanlde = (objProperty, value) => {
    setLoginInput((prev) => ({ ...prev, [objProperty]: value }));
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    const { email, password } = loginInput;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const data = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    dispatch(setUserDetail({ data }));
    navigate('/');
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
          label="email"
          inputStateValue={loginInput['email']}
          inputType="text"
        />
        <InputTextBox
          inputSetStateFunc={changeLoginInputHanlde}
          label="password"
          inputStateValue={loginInput['password']}
          inputType="password"
        />
        <button className="bg-slate-900 py-[10px] text-white rounded-md font-bold">
          Login
        </button>
        <Link to="/signUp">
          <p className="text-center text-white underline">
            Click here to signUp
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
