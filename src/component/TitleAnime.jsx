import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

function TitleAnime() {

  const tl = useRef(null);
  const count = useRef(0);
  const [muneHover, setMuneHover] = useState(1)
  const [amComplete, setAmComplete] = useState(false)
  

  useEffect(()=>{
    tl.current = gsap.timeline({
      onComplete: () => { 
        document.addEventListener("keyup", PopupKeyUp, false)
        setAmComplete(true)
      }
    })
      .to('.am_titleH1',{
        top: 0,
        duration: 0.8,
        ease: "bounce.out"
      })
      .to('.am_titleH3',{
        right: '20%',
        duration: 1,
        ease: "expo.inOut"
      },'>.3')
      // .to('.am_loadtitle',{
      //   duration: 0.8,
      //   opacity: 0.5,
      //   repeat: 3,
      //   yoyo: true
      // },'>.3')
      .to('.am_loadtitle',{
        duration: 1.2,
        opacity: 1,
        ease: "power3.out"
      },'>.5')
      .to('.am_loadtitle',{
        display: 'none'
      })


  },[])


  //解決同步獲取值
  useEffect(()=>{
    count.current = muneHover
  },[muneHover])


  const PopupKeyUp = (e) => {
    if (e.code === "ArrowUp") {
      setMuneHover((value)=> { return value == 1 ? 3 : value-1})
    }
    if (e.code === "ArrowDown") {
      setMuneHover((value) => { return value == 3 ? 1 : value+1})
    }
    if (e.code === "Enter" || e.code === "KeyZ") {
      count.current == 1 ? window.open('https://www.hexschool.com/') : count.current == 2 ? window.open('https://2022.thef2e.com/login') : window.open('https://2022.thef2e.com/login')
    }
  }


  return (
    <>
      <section className='relative bg-primaryGray-600 overflow-hidden'>
        <div className='am_loadtitle absolute w-full h-full bg-white z-[2] opacity-0'></div>
        <nav className={`fixed w-full flex justify-between items-center text-white p-6 ${ amComplete ? 'opacity-100' : 'opacity-0'}`}>
          <div className='flex'>
            <h3 className='font-ArcadeClassic border-r-4 pr-4 mr-4'>
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
              <a className='inline-block bg-[url("../../buttom.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#FF5B5B] focus:bg-[url("../../signupFocus.png")]' 
              href=""></a>
            </li>
            <li>
            <a className='inline-block bg-[url("../../buttom1.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#22C06F] focus:bg-[url("../../loginFocus.png")]' 
            href=""></a>
            </li>
          </ul>
        </nav>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <div className=' relative w-[655px] h-[324px] mb-28 text-[#844AE1]'>
            <h1 className={`am_titleH1 font-ArcadeClassic text-[160px] absolute top-[-50vh] ${ amComplete && 'text-shadow'}`}>THE F2E<sup className=' text-[64px] align-[75px]'>4th</sup></h1>
            <h3 className={`am_titleH3 whitespace-nowrap absolute bottom-0 right-[-60vw] ${ amComplete && 'text-shadow-sm'}`}>互動式網頁設計</h3>
          </div>

          <ul className={`${ amComplete ? 'opacity-100' : 'opacity-0' }`}>
            <li className='py-3 flex items-center group'>
              <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 1 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}
              >▶</div>
              <a 
              className='inline-block text-[24px] text-textWhite'
              onMouseEnter={()=>setMuneHover(1)}
              href="https://www.hexschool.com/">六角學院</a>
            </li>
            <li className='py-3 flex items-center group'>
              <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 2 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
              <a 
              className='inline-block text-[24px] text-textWhite'
              onMouseEnter={()=>setMuneHover(2)}
              href="https://2022.thef2e.com/login">UI DESIGN</a>
            </li>
            <li className='py-3 flex items-center group'>
              <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 3 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
              <a 
              className='inline-block text-[24px] text-textWhite'
              onMouseEnter={()=>setMuneHover(3)}
              href="https://2022.thef2e.com/login">FRONTEND</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default TitleAnime
