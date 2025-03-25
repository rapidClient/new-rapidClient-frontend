import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';

const AccountSetup = () => {
  return (
    <div className='bg-[#DCE8F5] md:min-h-screen flex items-center justify-center'>
      <div className='w-full md:max-w-2xl md:mx-4 py-8 px-4 md:px-18 bg-[#F5F7FA] flex flex-col items-center justify-center gap-4 md:shadow-md md:rounded-4xl'>
        <Image src={logo} alt='rapidClient logo' width={36} height={56} />
        <p className='text-[#26313D] text-2xl font-bold text-center'>
          Finish your account setup
        </p>

        <div className='flex flex-col gap-4 w-full'>
          <p className='text-[#3C4B5C] font-bold text-xl'>Provide your names</p>
          <input
            type='text'
            placeholder='First name'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
          <input
            type='text'
            placeholder='Middle name'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
          <input
            type='text'
            placeholder='Surname'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <p className='text-[#3C4B5C] font-bold text-xl'>Join organization</p>
          <input
            type='text'
            placeholder='Enter invitation code'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <p className='text-[#3C4B5C] font-bold text-xl'>
            Create your password
          </p>
          <input
            type='password'
            placeholder='Password'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
          <input
            type='password'
            placeholder='Confirm Password'
            className='bg-[#DCE8F5] p-4 w-full rounded-[28px] outline-none'
          />
        </div>
        <button className='bg-[#4188D9] p-4 w-full text-white rounded-[28px] text-lg font-bold cursor-pointer'>
          Create account
        </button>
      </div>
    </div>
  );
};

export default AccountSetup;
