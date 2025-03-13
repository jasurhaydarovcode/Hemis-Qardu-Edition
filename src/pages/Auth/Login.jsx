import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '@/API/config';

function Login() {
  let login = useRef('');
  let password = useRef('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  function loginUrl() {
    if (!login.current.value || !password.current.value) {
      setError('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }

    setLoading(true);
    setError('');

    const data = { login: login.current.value, password: password.current.value };

    axios.post(`${API_BASE_URL}/auth/login`, data)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.data.token || 'fake-token');
        localStorage.setItem('user', JSON.stringify(response.data.user || { name: 'Foydalanuvchi' }));

        navigate('/');
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          setError(error.response.data.message || 'Login yoki parol noto\'g\'ri');
        } else if (error.request) {
          setError('Server bilan bog\'lanishda xatolik yuz berdi. Internet aloqangizni tekshiring.');
        } else {
          setError('Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      loginUrl();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Hemis Qardu Edition</h2>

        <div>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
              onKeyDown={handleKeyDown}
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
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            onClick={() => loginUrl()}
            disabled={loading}
            className={`w-full py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Kuting...' : 'Kirish'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;