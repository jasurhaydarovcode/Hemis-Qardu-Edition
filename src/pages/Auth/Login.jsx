import React, { useRef } from 'react';
import axios from 'axios';
function Login() {
  let login = useRef('');
  let password = useRef('');

  function loginUrl() {
    const data = { login: login.current.value, password: password.current.value };
    console.log(data);
    axios.post('https://student.qarshidu.uz/rest//v1/auth/login' , data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Hemis Qardu Edition</h2>

        <div>
          <div className="mb-4">
            <label htmlFor="talabaId" className="block text-gray-700 text-sm font-medium mb-2">
              Talaba ID
            </label>
            <input
              ref={login}
              type="text"
              id="talabaId"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Talaba ID ni kiriting"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Parol
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Parolni kiriting"
            />
          </div>

          <button
            onClick={() => loginUrl()}
            className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;