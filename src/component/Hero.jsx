import React from 'react'
import bgImg from "../assets/cyber-bg.png"
import {BsCloudArrowUpFill} from "react-icons/bs"
import { FaDatabase} from "react-icons/fa"
import {HiServer} from "react-icons/hi"
import {HiPaperAirplane} from "react-icons/hi"

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between pt-24 md:pt-0'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full text-center md:text-start px04 md:px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl text-[17px]'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500 space-x-2'><BsCloudArrowUpFill size={20} className=' text-indigo-600 self-center' /><span className='self-center'> App Security</span></p>
                    <p className='flex px-4 py-2 text-slate-500 space-x-2'><FaDatabase size={20} className=' text-indigo-600 self-center' /> <span className='self-center'>Dashboard Design</span></p>
                    <p className='flex px-4 py-2 text-slate-500 space-x-2'><HiServer size={20} className=' text-indigo-600 self-center' /> <span className='self-center'>Cloud Data</span></p>
                    <p className='flex px-4 py-2 text-slate-500 space-x-2'><HiPaperAirplane size={20} className=' text-indigo-600 self-center' /> <span className='self-center'>API</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero