import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@/components/Buttons/LoadingButton';
import { API_URLS } from '@/API/config';

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

    axios.post(API_URLS.AUTH.LOGIN, data)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.data.token || 'fake-token');
        localStorage.setItem('user', JSON.stringify(response.data.user || { name: 'Foydalanuvchi' }));

        navigate('/');
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          setError(error.response.data.data.message || 'Login yoki parol noto\'g\'ri');
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
    <div >
      <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <a href="#">
          <div className="text-white font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
              </svg>
            </div>
            Hemis Qardu Edition
          </div>
        </a>
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
            bis_skin_checked="1"></div>
          <div
            className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">Kirish</h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">Xush kelibsiz, ID va Parolingizni kiriting va davom eting.
              </p>
            </div>
            <div className="p-6 pt-0">
              <div>
                <div>
                  {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div
                    className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label htmlFor="talabaId"
                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Talaba ID</label>
                    </div>
                    <input ref={login} type="text" id="talabaId" name="talabaId" placeholder="Talaba ID ni kiriting"
                      autocomplete="off"
                      onKeyDown={handleKeyDown}
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div
                    className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label
                        className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Parol</label>
                    </div>
                    <div className="flex items-center">
                      <input ref={password} id="password" onKeyDown={handleKeyDown} type="password" name="password" placeholder='Parolni kiriting'
                        className="block w-full border-0 p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none text-white focus:ring-0 focus:ring-teal-500 sm:leading-7" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <LoadingButton
                  onClick={() => loginUrl()}
                  disabled={loading}
                  loading={loading}
                  type="submit"
                >
                  Kirish
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;