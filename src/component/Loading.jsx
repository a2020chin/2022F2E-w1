import { useEffect, useRef, useState} from 'react'
import { gsap, Expo } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";

import btnImg from '../../public/buttom.png';


gsap.registerPlugin(TextPlugin);

const Loading = ({children}) => {

  const [amComplete, setAmComplete] = useState(false)
  
  const tl = useRef(null);

  // 動畫事件
  useEffect(() => {
      tl.current = gsap.timeline({
        onComplete: () => { 
          setAmComplete(true)
        }
      })
        .to('.am_loadword span',{
          duration: 0.3,
          y: -25,
          stagger: {
            each: 0.15
          }
        })
        .to('.am_loadword span',{
          duration: 0.3,
          y: 0,
          stagger: {
            each: 0.15
          }
        },'1')
        .to('.am_loadbar',{
          width: '100%',
          duration: 1,
          ease: Expo.easeInOut
        },'<')
        .to('.am_loadword',{
          opacity: 0,
          duration: 0.3
        })
        .to('.am_loadbar',{
          height: '100%',
        },'>0.6')
        .to('.am_loadbar',{
          opacity: 0,
        },'>0.5')

  },[])



  const loadAnime = <section className='relative overflow-hidden'>
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
    </div>
  </section>;

  return (
    <>
      {amComplete ? children : loadAnime}
    </>
  )
}


export default Loading