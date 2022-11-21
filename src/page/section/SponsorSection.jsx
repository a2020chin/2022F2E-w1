import { useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);



const SponsorSection = () => {


  const tl = useRef(null);

  useEffect(() => {
    let sponsor = gsap.utils.toArray('.am_sponsor img')
    let sponsorName = gsap.utils.toArray('.am_sponsorName')
    tl.current = gsap.timeline({
      scrollTrigger:{
        trigger: '.am_sponsorSection',
        toggleActions: "restart none none none",
        start: '-20% top',
        // markers: true,
      }
    })
      .to('.am_sponsorTitle',{
        opacity: 1,
        duration: 1,
      })
      .to('.am_sponsor',{
        opacity: 1,
        stagger: {
          each: 0.8
        }
      })
      .to(sponsorName[0],{
        text: '凱鈿科技',
        duration: 0.8
      },'<')
      .to(sponsorName[1],{
        text: '鈦坦科技',
        duration: 0.8,
        delay: 0.8
      },'<')
      .to(sponsorName[2],{
        text: '板塊設計',
        duration: 0.8,
        delay: 0.8
      },'<')
      .to(sponsor,{
        duration:1,
        transform: 'translate(-5px, -5px)',
        stagger: {
          each: 0.8
        }
      },'<')
      .to(sponsor,{
        filter:'drop-shadow(10px 10px 0 rgba(34,34,34,0.5))',
        stagger: {
          each: 0.8
        }
      },'<.5')
      .to('.am_job',{
        opacity: 1,
        visibility: 'visible',
      })

      return ()=>{
        tl.current.kill()
      }
  },[])


  

  return (
    <>
      <section className="am_sponsorSection flex justify-center items-end pb-40">
        <div>
          <h2 className="am_sponsorTitle text-center mb-14 opacity-0"><span className="text-[#9E63FF]">鑽石級</span>贊助商</h2>
          <ul className="flex gap-16 mb-14">
            <li className="am_sponsor group cursor-pointer opacity-0">
              <img className="mb-6" src="./images/KDANMOBILE.png" alt="" />
              <h4 className="am_sponsorName h-[72px] text-center duration-300 group-hover:text-[#9E63FF]">
              </h4>
            </li>
            <li className="am_sponsor group cursor-pointer opacity-0">
              <img className="mb-6" src="./images/TITANSOFT.png" alt="" />
              <h4 className="am_sponsorName h-[72px] text-center duration-300 group-hover:text-[#9E63FF]">
              </h4>
            </li>
            <li className="am_sponsor group cursor-pointer opacity-0">
              <img className="mb-6" src="./images/BlockStudio.png" alt="" />
              <h4 className="am_sponsorName h-[72px] text-center duration-300 group-hover:text-[#9E63FF]">
              </h4>
            </li>
          </ul>
          <a href='https://2022.thef2e.com/jobs' target='_blank' className='am_job invisible opacity-0 w-max mx-auto flex justify-center items-center text-2xl cursor-pointer text-primaryGray-600 p-4 bg-primaryGray-100 border-4 border-primaryGray-600 hover:text-[#9E63FF]'>
            <img className='inline-block w-6 h-6 mr-2' src="./images/blackLoading.gif" alt="" />
            求職專區
          </a>
        </div>
      </section>
    </>
  )
}

export default SponsorSection