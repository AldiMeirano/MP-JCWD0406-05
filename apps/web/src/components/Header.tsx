'use client';

import { baseUrl } from '@/app/baseUrl/baseUrl';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import DropdownMenu from './DropDownMenu';
import { loginAction } from '@/lib/feature/userSlice';
import BottomBar from './Bottombar';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('white');
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    const keepLogin = async () => {
      try {
        const { data } = await axios.get(baseUrl + '/api/keeplogin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(loginAction(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div
    
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white "
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        <Link href="/">
          <h1 className="text-black font-bold text-3xl">
            MyEvent
          </h1>
        </Link>
        <div className='bg-red'>
          <BottomBar /> 
        </div>
        <ul className="text-black hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          {user.id ? (
            <DropdownMenu />
          ) : (
            <>
              <li className="p-4">
                <Link href="/find_event">Find Event</Link>
              </li>
              <li className="p-4">
                <Link href="/login">Login</Link>
              </li>
              <li className="p-4">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/find_event">Find Event</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/login">Login</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
