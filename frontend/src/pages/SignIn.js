import React, { useState } from 'react';
import axios from 'axios';
import empty_cart from '../assets/images/empty_cart.svg';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://inventory-1lfe.onrender.com/auth/login', {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data.user);
        if (res.data.user === 'Admin') {
          swal({
            title: 'Login Successfully',
            icon: 'success',
            successMode: true,
          });
          navigate('/admin');
        }
        if (res.data.user !== 'Admin') {
          swal({
            title: 'Login Successfully',
            icon: 'success',
            successMode: true,
          });
        }
      })
      .catch((err) => {
        console.log(err.response.data, username, password);
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-screen items-center justify-center ">
      <div className="bg-[#088AB2] h-full flex justify-center items-center lg:rounded-tr-[30px] lg:rounded-br-[30px]">
        <img src={empty_cart} className="App-logo" alt="logo" />
      </div>
      <div className="overscroll-y-auto ">
        <div className="p-5">
          <div className="text-center mt-[40px] mb-[79px]">
            <h1 className="text-[32px]">Welcome Back!</h1>
            <p className="text-[#2A2A2A] text-[20px]">
              Do not run out of stock. Keep track of your Inventory!
            </p>
          </div>
          <form className="" onSubmit={handleLogin}>
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                  <input
                    type="text"
                    name="username"
                    id="email"
                    className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-[30px]">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 mb-[15px]"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-full">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block flex-1 border-0 bg-transparent focus:outline-transparent focus:border-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input type="checkbox" className="checked:bg-blue-500 ..." />
              Remember me
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="mt-[30px] text-white bg-blue-700 text-[20px] py-[15px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 text-center dark:bg-[#088AB2] dark:hover:bg-[#088AB2] dark:focus:ring-blue-800"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
