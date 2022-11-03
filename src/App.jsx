import { useLayoutEffect , useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";



function App() {


  const tl = useRef();
  const loading = useRef(null);
  gsap.registerPlugin(TextPlugin);

  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({repeat: -1})
        .to('.am_load span', {
        duration: 1,
        opacity: 0,
        rotate: 180,
        y: -25,
        stagger: {
          each: 0.25
        },
      }, ).to('.am_load span', {
        duration: 1,
        opacity: 1,
        rotate: 360,
        y: 0,
        stagger: {
          each: 0.25
        },
      }, '1')

      gsap.to('.am_bar', {
        duration: 0,
        opacity: 1,
        width: '0%',
      })
      gsap.to('.am_bar', {
        duration: 3.5,
        opacity: 1,
        width: '100%',
      })
    }, loading)

    return () => ctx.revert();
  },[])


  return (
    <div className=" bg-primaryGray-600 h-screen w-screen flex flex-col items-center justify-center" ref={loading}>
        <h5 className='am_load mb-4 text-textWhite flex'>
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
        </h5>
        <div className='border-2 border-textWhite w-80 h-8 rounded'>
          <div className='am_bar h-full bg-white'>
          </div>
        </div>
    </div>
  )
}

export default App
