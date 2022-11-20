import { useEffect, useState} from 'react'

import { gsap } from 'gsap'

const Timeline = () => {
  const [ mouseHover, setMouseHover] = useState(0)
  const timelineContent = [
    '每個挑戰主題提供一週開發時間\n未在隔週一中午12:00前登陸作品者，當週即為挑戰失敗！',
    '報名時間 10/13(四)早上 11:00 - 11/06(日)晚上 23:59\n截止前可修改報名組別',
    'UI組、團體組開賽10/31\n前端組開賽11/7',
    'UI組：10/31（一）~11/21（一）\n前端組：11/7（一）~11/28（一）\n團體組：11/7（一）~11/28（一）',
    '12/5(五)公布初選佳作名單\n12/23(五)公布企業得獎名單'
  ]


  useEffect(() => {
    timelineContentAnime()
  },[mouseHover])

  const timelineContentAnime = () => {
      gsap.fromTo('.am_li',{
        opacity: 0
      },{
        opacity: 1
      })
    }
  

  return (
    <div className='absolute bottom-0 w-full h-[calc(100vh_-_240px)] z-10'>
      <div className='flex justify-center'>
        <ul className='flex border-4 border-primaryGray-600 bg-white p-1 gap-5 text-4xl leading-none delay-300'>
          <li className='cursor-pointer hover:text-[#844AE1]'
          onMouseEnter={ () => {
            setMouseHover(0)
          }}
          >比賽流程</li>
          <li className='cursor-pointer hover:text-[#844AE1]'
          onMouseEnter={ () => {
            setMouseHover(1)
          }}
          >開放報名</li>
          <li className='cursor-pointer hover:text-[#844AE1]'
          onMouseEnter={ () => {
            setMouseHover(2)
          }}
          >組別開賽</li>
          <li className='cursor-pointer hover:text-[#844AE1]'
          onMouseEnter={ () => {
            setMouseHover(3)
          }}
          >登陸作品</li>
          <li className='cursor-pointer hover:text-[#844AE1]'
          onMouseEnter={ () => {
            setMouseHover(4)
          }}
          >公布得獎</li>
        </ul>
      </div>
      <div className='w-full h-[calc(100%_-_56px)] border-[10px] border-primaryGray-600 rounded-lg'>
        <div className='h-1/4 border-b-8 border-primaryGray-600 bg-primaryGray-300 flex justify-center items-center text-[32px] text-center whitespace-pre-line'>
          <div className='am_li'>
          {timelineContent[mouseHover]}
          </div>
        </div>
        <div className='relative h-3/4 bg-white px-24 py-3'>
          <img className='w-full h-full' src="./images/map.png" alt="" />
          <div className='absolute bottom-[15%] right-[78%] flex flex-col items-center cursor-pointer'
          onMouseEnter={ () => {
            setMouseHover(1)
          }}
          >
            <img className={`duration-300 ${mouseHover === 1 ? 'scale-[2] mb-6' : 'mb-2'}`} src="./images/signIcon.svg" alt="" />
            <p className={`text-white duration-300 ${mouseHover === 1 ? 'text-2xl' : 'text-base'}`}>開放報名</p>
          </div>
          <div className='absolute bottom-[34%] right-[62%] flex flex-col items-center cursor-pointer group'
          onMouseEnter={ () => {
            setMouseHover(2)
          }}
          >
            <img className={`duration-300 ${mouseHover === 2 ? 'scale-[2] mb-6' : 'mb-2'}`} src="./images/startIcon.svg" alt="" />
            <p className={`text-white duration-300 ${mouseHover === 2 ? 'text-2xl' : 'text-base'}`}>各組別開賽</p>
          </div>
          <div className='absolute bottom-[27%] right-[36.5%] flex flex-col items-center cursor-pointer group'
          onMouseEnter={ () => {
            setMouseHover(3)
          }}
          >
            <img className={`duration-300 ${mouseHover === 3 ? 'scale-[2] mb-6' : 'mb-2'}`} src="./images/uploadIcon.svg" alt="" />
            <p className={`text-white duration-300 ${mouseHover === 3 ? 'text-2xl' : 'text-base'}`}>登陸作品</p>
          </div>
          <div className='absolute bottom-[45%] right-[15%] flex flex-col items-center cursor-pointer group'
          onMouseEnter={ () => {
            setMouseHover(4)
          }}
          >
            <img className={`w-[168px] h-[140px] duration-300 ${mouseHover === 4 ? 'scale-125 mb-6' : 'mb-2'}`} src="./images/treasurecChest.png" alt="" />
            <p className={`text-white duration-300 ${mouseHover === 4 ? 'text-2xl' : 'text-base'}`}>頒獎</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline