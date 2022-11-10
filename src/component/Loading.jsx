import { useEffect, useRef, useState } from 'react'
import { gsap, Expo } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";

import btnImg from '../../public/buttom.png';


gsap.registerPlugin(TextPlugin);

const Loading = () => {
  
  const tl = useRef(null);
  const loading = useRef(null);

  const [MuneHover, setMuneHover] = useState(1)

  


  useEffect(() => {

    let ctx = gsap.context(()=>{
      tl.current = gsap.timeline({})
        .to('.am_loadword span',{
          duration: 0.4,
          y: -25,
          stagger: {
            each: 0.2
          }
        })
        .to('.am_loadword span',{
          duration: 0.4,
          y: 0,
          stagger: {
            each: 0.2
          }
        },'1')
        .to('.am_loadbar',{
          width: '100%',
          duration: 1.2,
          delay: 0.7,
          ease: Expo.easeInOut
        },'<')
        .to('.am_loadword',{
          opacity: 0,
          duration: 0.3
        })
        .to('.am_loadbar',{
          height: '100%',
        },'>0.8')
        .to('.am_loadtitle',{
          width: '100%'
          
        },'>0.2')


      
    },loading )


    return () => ctx.revert();
  },[])

  return (
    <>
      <section className='relative overflow-hidden' ref={loading}>
        <div className='absolute w-full h-full bg-primaryGray-600 flex justify-center items-center top-0'>
          <h3 className='am_loadword -translate-y-8 text-textWhite flex'>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </h3>
          <div className='am_loadbar absolute bg-primaryGray-200 h-[2px] w-0 left-0 z-[2]'></div>
          <div className='am_loadtitle absolute bg-primaryGray-600 h-full w-0 right-0 z-[3]'>
            <nav className='fixed w-full flex justify-between items-center text-white p-6'>
              <div className='flex'>
                <h3 className=' font-ArcadeClassic border-r-4 pr-4 mr-4'>
                  <a href="">THE F2E</a>
                </h3>
                <ul className='flex items-center gap-8'>
                  <li>
                    <a href="">關卡資訊</a>
                  </li>
                  <li>
                    <a href="">求職專區</a>
                  </li>
                  <li>
                    <a href="">Q&A</a>
                  </li>
                </ul>
              </div>
              <ul className='flex'>
                <li>
                  <a className='inline-block bg-[url("../../buttom.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#FF5B5B] focus:bg-[url("../../signupFocus.png")]' href=""></a>
                </li>
                <li>
                <a className='inline-block bg-[url("../../buttom1.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#22C06F] focus:bg-[url("../../loginFocus.png")]' href=""></a>
                </li>
              </ul>
            </nav>
            <div className=' w-screen h-screen flex flex-col justify-center items-center'>
              <div className='mb-28 text-[#844AE1]'>
                <h1 className='font-ArcadeClassic text-[160px] text-shadow'>THE F2E<sup className=' text-[64px] align-[75px]'>4th</sup></h1>
                <h3 className='text-center text-shadow-sm'>互動式網頁設計</h3>
              </div>

              <ul>
                <li className='py-3 flex items-center group'>
                  <div className={`text-textWhite text-[24px] leading-none mr-6 ${MuneHover == 1 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}
                  >▶</div>
                  <a 
                  className='inline-block text-[24px] text-textWhite'
                  onMouseEnter={()=>setMuneHover(1)}
                  
                  href="">六角學院</a>
                </li>
                <li className='py-3 flex items-center group'>
                  <div className={`text-textWhite text-[24px] leading-none mr-6 ${MuneHover == 2 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
                  <a 
                  className='inline-block text-[24px] text-textWhite'
                  onMouseEnter={()=>setMuneHover(2)}
                  
                  href="">UI DESIGN</a>
                </li>
                <li className='py-3 flex items-center group'>
                  <div className={`text-textWhite text-[24px] leading-none mr-6 ${MuneHover == 3 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
                  <a 
                  className='inline-block text-[24px] text-textWhite'
                  onMouseEnter={()=>setMuneHover(3)}
                  
                  href="">FRONTEND</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loading