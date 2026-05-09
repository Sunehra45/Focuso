'use client'

import { DashboardLayout } from '../dashboard/layout';
import { ProductivityChart } from '../ui/analytics/chart';
import { ProductivityScoreChart } from '../ui/analytics/productivityscore'
import { SessionHistory } from '../ui/analytics/pomodorohistory';
import { isAuthenticated } from '../utils/auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

 export default function analytics (){
        useLayoutEffect(() => {
      const isAuth = isAuthenticated;
      if(!isAuth){
        redirect("/auth/login")
      }
    }, [])
 return(
        <>
    <DashboardLayout>
        <div className='w-full h-screen  flex flex-col justify-start md:justify-center items-center gap-2 md:gap-4'>
      <ProductivityChart/>
      <div className='flex gap-1 flex-col md:flex-row '>
           <ProductivityScoreChart/>
      <SessionHistory/>
      </div>
        </div>
    </DashboardLayout>
        </>
    )

}


