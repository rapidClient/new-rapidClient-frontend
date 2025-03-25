import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
import GoogleIcon from '@/app/assets/googleIcon';

const Register = () => {
  return (
    <div className='bg-[#DCE8F5] md:min-h-screen flex items-center justify-center'>
      <div className='md:max-w-2xl w-full md:mx-4 py-8 px-4 md:px-18 bg-[#F5F7FA] flex flex-col items-center justify-center gap-6 md:shadow-md md:rounded-4xl'>
        <Image src={logo} alt='rapidClient logo' width={36} height={56} />
        <p className='text-[#151C24] text-2xl font-bold text-center'>
          Get Started with <br />
          <span className='text-[#4188D9]'>rapidClient</span>
        </p>
        <input
          type='text'
          placeholder='Email'
          className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
        />
        <button className='bg-[#4188D9] p-4 w-full text-white rounded-[28px] text-lg font-bold cursor-pointer'>
          Create account
        </button>

        <div className='flex items-center w-full my-2'>
          <div className='flex-grow h-px bg-[#C5D4E5]'></div>
          <p className='mx-4 text-[#738599] text-xl'>OR</p>
          <div className='flex-grow h-px bg-[#C5D4E5]'></div>
        </div>

        <button className='border border-[#C5D4E5] p-4 w-full rounded-[28px] flex items-center justify-center gap-2 text-[#738599] cursor-pointer font-bold'>
          <GoogleIcon />
          Sign up with Google
        </button>

        <p className='text-[#738599] font-bold'>
          Already have an account?{' '}
          <span className='text-[#4188D9] cursor-pointer underline'>
            <Link href={'/login'}>Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
