import DarkModeToggle from '@/components/DarkModeToggle';
import { Globe } from '@/components/magicui/globe'
import { Button } from '@/components/ui/button';
import { logout } from '@/utils/auth.logout';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Foydalanuvchi ma'lumotlarini olish
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div>
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Test
        </span>
        <Globe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>

      {/*  */}
      <div>
        <h1>Asosiy sahifa</h1>
        <p>Salom, {user.name || 'Foydalanuvchi'}!</p>

        <div className='flex items-center gap-4'>
          <DarkModeToggle />
          <Link to={"/profile"}>
            <Button className={"cursor-pointer"}>Profil</Button>
          </Link>
          <Button className={"cursor-pointer"} onClick={() => logout(navigate)}>Chiqish</Button>
        </div>
      </div>
      {/*  */}
    </div>
  )
}

export default Home