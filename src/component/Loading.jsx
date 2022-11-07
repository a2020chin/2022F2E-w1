import { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);

const Loading = () => {
  
  const tl = useRef(null);
  const loading = useRef(null);




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
                  <a href="">註冊報名</a>
                </li>
                <li>
                  <a href="">登入</a>
                </li>
              </ul>
            </nav>
            <div className=' w-screen h-screen flex flex-col justify-center items-center'>
              <div className='mb-28'>
                <h1 className=' font-ArcadeClassic text-[160px]'>THE F2E<sup className=' text-[64px] align-[75px]'>4th</sup></h1>
                <h3>互動式網頁設計</h3>
              </div>

              <ul>
                <li className='py-3'><a className=' text-white hover:' href="">六角學院</a></li>
                <li className='py-3'><a className=' text-white hover:' href="">UI DESIGN</a></li>
                <li className='py-3'><a className=' text-white hover:' href="">FRONTEND</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Loading