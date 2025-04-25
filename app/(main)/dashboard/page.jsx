"use client";

import { useUserDetail } from '@/app/layout';
import Header from '@/components/custom/Header';
import WebTemplateList from '@/components/custom/WebTemplateList';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
  const router = useRouter();
    const {userDetail, setUserDetail} = useUserDetail();

  return (
    <div>
        <Header />
        <div className='p-10 md:px-28 lg:px-44 py-10 flex flex-col mt-16'>
            <h1 className='font-extrabold text-5xl text-center'>Dashboard</h1>
            <div className='flex flex-row  items-center justify-between mt-10'>
                <h2 className='font-bold text-2xl'>Hello, {userDetail?.name}</h2>
                <Button variant='default' className='mt-4' onClick={() => router.push("/editor/123")} > + Create New Website</Button>
            </div>
            <WebTemplateList />
        </div>
    </div>
  )
}

export default Dashboard;