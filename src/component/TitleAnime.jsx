import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";

import PurposeSection from './PurposeSection'




gsap.registerPlugin(TextPlugin);

function TitleAnime() {

  const tl = useRef(null);
  const t2 = useRef(null);
  const count = useRef(0);
  const [muneHover, setMuneHover] = useState(1)
  const [amComplete, setAmComplete] = useState(false)
  const [amNextSection, setAmNextSection] = useState(false)
  const runNextSection = useRef(false)
  

  useEffect(()=>{
    tl.current = gsap.timeline({
      onComplete: () => { 
        document.addEventListener("keyup", menuKey, false)
        document.addEventListener("wheel", next, false)
        setAmComplete(true)
        
        // gsap.to('.am_mouse',{
        //   transform: 'translateY(50px)',
        //   duration: 1,
        //   repeat: -1,
        //   yoyo: true
        // })
      }
    })
      .to('.am_titleH1',{
        transform: 'translate(0)',
        duration: 0.8,
        ease: "bounce.out"
      })
      .to('.am_titleH3',{
        transform: 'translate(0)',
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
        duration: 0.6,
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

  const menuKey = (e) => {
    if (e.code === "ArrowUp") {
      setMuneHover((muneHover)=> { return muneHover == 1 ? 3 : muneHover-1})
    }
    if (e.code === "ArrowDown") {
      setMuneHover((muneHover) => { return muneHover == 3 ? 1 : muneHover+1})
    }
    if (e.code === "Enter" || e.code === "KeyZ") {
      count.current == 1 ? window.open('https://www.hexschool.com/') : count.current == 2 ? toNextSection() : toNextSection()
    }
  }
  const next = (e) => {
    if(!runNextSection.current){
      e.deltaY == 100 ? toNextSection() : ''
    }
  }


  const toNextSection = () => {
    runNextSection.current = true
    t2.current = gsap.timeline({
      onComplete: () => {
        setAmNextSection(true)
      }
    })
      .to('.am_toNextSection',{
        duration: 0.2,
        display: 'block',
        opacity: 0.9,
        repeat: 5,
        delay: 0.5,
        yoyo: true,
      })
      .to('.am_toNextSectionLogo',{
        display: 'flex'
      },'>.2')
      .to('.am_toNextSectionLogo img',{
        duration: 0.8,
        opacity: 1,
      })
      .to('.am_toNextSectionB',{
        duration: 0.8,
        display: 'block',
        background: 'radial-gradient(circle , transparent 0%, transparent 0.01%, #000000 0.01%, #000000 100%)'
      })
  }


  const nextSection = <section className='relative bg-primaryGray-600 overflow-hidden'>
    <div className='am_loadtitle absolute w-full h-full bg-white z-[2] opacity-0'></div>
    <div className='am_toNextSection hidden absolute w-full h-full z-[2] bg-[#42403d] opacity-0'></div>
    <div className='am_toNextSectionLogo hidden absolute w-full h-full z-[2]  justify-center items-center'>
      <img className='w-4/5 md:w-1/2 opacity-0' src="./images/HexSchool.png" alt="" />
    </div>
    <div className='am_toNextSectionB hidden absolute w-full h-full bg-gradient-toNextSection z-[3]'></div>

    <nav className={`w-full flex justify-between items-center text-white p-6 ${amComplete ? 'opacity-100' : 'opacity-0'}`}>
      <div className='flex'>
        <h3 className='font-ArcadeClassic border-r-4 pr-4 mr-4'>
          <a className='duration-200 hover:text-[#844AE1]' href="#">THE F2E</a>
        </h3>
        <ul className='flex items-center gap-8'>
          <li>
            <a className='duration-200 hover:text-[#844AE1]' href="https://2022.thef2e.com/news">關卡資訊</a>
          </li>
          <li>
            <a className='duration-200 hover:text-[#844AE1]' href="https://2022.thef2e.com/jobs">求職專區</a>
          </li>
          <li>
            <a className='duration-200 hover:text-[#844AE1]' href="https://2022.thef2e.com/#qaTab">Q&A</a>
          </li>
        </ul>
      </div>
      <ul className='flex'>
        <li>
          <button className='inline-block bg-[url("https://i.imgur.com/UGb8d9S.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#FF5B5B] focus:bg-[url("https://i.imgur.com/ZueI99Y.png")] disabled:bg-[url("https://i.imgur.com/Bfg5Zxe.png")]' disabled></button>
        </li>
        <li>
          <a className='inline-block bg-[url("https://i.imgur.com/KWznTqO.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#22C06F] focus:bg-[url("https://i.imgur.com/YuX8tzj.png")]'
            href="https://2022.thef2e.com/login"></a>
        </li>
      </ul>
    </nav>
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='mt-16 mb-24 text-[#844AE1]'>
        <h1 className={`am_titleH1 whitespace-nowrap font-ArcadeClassic text-[160px]  -translate-y-[100vh] ${amComplete && 'text-shadow'}`}>THE F2E<sup className=' text-[64px] align-[75px]'>4th</sup></h1>
        <h3 className={`am_titleH3 whitespace-nowrap text-center translate-x-[100vw] right-[-60vw] ${amComplete && 'text-shadow-sm'}`}>互動式網頁設計</h3>
      </div>

      <ul className={`${amComplete ? 'opacity-100' : 'opacity-0'}`}>
        <li className='py-3 flex items-center group'>
          <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 1 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}
          >▶</div>
          <a
            className='inline-block text-[24px] text-textWhite'
            onMouseEnter={() => {
              setMuneHover(1)
              toNextSection()
            }}
            href="https://www.hexschool.com/">六角學院</a>
        </li>
        <li className='py-3 flex items-center group'>
          <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 2 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
          <a
            className='inline-block text-[24px] text-textWhite'
            onMouseEnter={() => {setMuneHover(2)}}
            onClick={(e) =>{
              e.preventDefault()
              toNextSection()
            }}
            href="https://2022.thef2e.com/login">UI DESIGN</a>
        </li>
        <li className='py-3 flex items-center group'>
          <div className={`text-textWhite text-[24px] leading-none mr-6 ${muneHover == 3 ? 'visible animate-[flicker_1.5s_steps(1)_infinite]' : 'invisible'}`}>▶</div>
          <a
            className='inline-block text-[24px] text-textWhite'
            onMouseEnter={() => {setMuneHover(3)}}
            onClick={(e) =>{
              e.preventDefault()
              toNextSection()
            }}
            href="https://2022.thef2e.com/login">FRONTEND</a>
        </li>
      </ul>
    </div>
    {/* <img className='am_mouse absolute right-1/2 bottom-[5%] object-none inline-block' src="./images/arrow.svg" alt="" /> */}
  </section>;



  return (
    <>
      {amNextSection ? <PurposeSection/> : nextSection }
    </>
  )
}

export default TitleAnime
