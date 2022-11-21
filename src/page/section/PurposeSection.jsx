import { useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import TimelineSection from './TimelineSection'
import { useAnime } from '../../component/Context'

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const PurposeSection = () => {

  const tl = useRef(null);
  const t2 = useRef(null);
  const timelineScroll = useRef(null);
  const [amComplete, setAmComplete] = useState(false)

  const [muneHover, setMuneHover] = useState([1,1])

  const { setAnimeComplete } = useAnime();
  
  useEffect(()=>{

    tl.current = gsap.timeline({
      onComplete: () => {
        document.addEventListener("keyup", menuKey, false)
        amScroll()
        setAmComplete(true)
        setAnimeComplete(true)
      }
    })
      .to('.am_arriveSection div',{
        delay: 0.3,
        duration: 2.5,
        height: 0
      })
      .to('.am_gold',{
        duration: 3,
        left: -2800
      },'<')
      .to('.am_gold',{
        duration: 1.5,
        bottom: -400
      },'<1.5')
      .to('.am_Ash',{
        duration: 2.5,
        left: 40,
        ease: "back.out(1.4)"
      },'<-0.1')
      .to('.am_Ash2',{
        duration: 2.5,
        left: 320,
        ease: "back.out(1.4)"
      },'<0.3')
      .to('.am_zombie1',{
        top: 84,
        right: 384
      },'<')
      .to('.am_zombie2',{
        top: 116,
        right: 192
      },'<')
      .to('.am_zombie3',{
        top: 148,
        right: 0
      },'<')
      .to('.am_card li, .am_card2 li',{
        duration: 1,
        opacity: 1,
        transform: 'translate(0)',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_challenge',{
        text: '挑戰者',
        duration: 0.4,
      })
      .to('.am_challenge2',{
        text: '要做什麼呢？',
        duration: 0.8,
      })

    return ()=>{
      tl.current.kill()
    }
      
  },[])


  const amScroll = () => {
    let topic = gsap.utils.toArray('.bg-boardImg')
    t2.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".am_ruleSection",
        // markers: true,
        start: 'top 0',
        end: '600%',
        pin: true, 
        scrub: 1,
        pinSpacer: true
      },
    })
    t2.current.to('.am_cardAndZombie',{
        xPercent: '-100',
        display: 'none',
        ease: "none",
      })
      .to('.am_menuSelect div',{
        opacity: 0,
        display: 'none'
      },'<')
      .fromTo('.am_rule',{
        ease: "none",
        display: 'block',
        xPercent: '100'
      },{
        ease: "none",
        xPercent: '0'
      })
      .to('.am_menuSelect',{
        display: 'flex'
      },'<')
      .to('.am_wait',{
        display: 'flex',
        opacity: 1,
      },'<')
      .to('.am_rule',{
        display: 'none',
        opacity: 0
      })
      .fromTo('.am_topic',{
        display: 'block',
        xPercent: 200,
      },{
        xPercent: 0,
      })
      .to('.am_challengeUi',{
        opacity: 0
      })
      .to('.am_Ash,.am_Ash2',{
        bottom: -250,
        top: '',
      },'<')
      .to('.am_card2',{
        yPercent: 350,
      },'<')
      .to(topic,{
        ease: "none",
        width: 1080,
        height: 640,
        gap: '12px',
        'justify-content': 'normal',
        'background-size': '1080px 640px' ,
      })
      .to('.am_board3',{
        right: 0,
        padding: '92px 80px'
      },'<')
      .to('.am_board2',{
        right: 40,
        padding: '92px 80px'
      },'<')
      .to('.am_board1',{
        right: 80,
        padding: '92px 80px'
      },'<')
      .to('.am_boardIcon',{
        width: 120,
        height: 120
      },'<')
      .to('.am_boardWeek',{
        'font-size' : 56,
        'align-self': 'end'
      },'<')
      .to('.am_boardLevel, .am_boardTitle',{
        'font-size' : 80
      },'<')
      .to('.am_boardNews',{
        'font-size' : 32,
        padding: 8,
        background: 'white',
        'align-self': 'center',
        'border': '2px solid #222222', 
      },'<')
      .to('.am_boardNews img',{
        opacity: 1
      },'<')
      .to('.am_boardCompany',{
        'font-size' : 56,
        'text-align': 'center'
      },'<')
      .to('.am_board1',{
        xPercent: -200,
      },'>1')
      .to('.am_board2',{
        xPercent: -200,
      },'>1')
      .to('.am_board3',{
        xPercent: -200,
      },'>1')
      .to('.am_Ash,.am_Ash2',{
        bottom: '',
        top: 16,
        width: 160,
        height: 160,
      })
      .to('.am_Ash',{
        left: 24
      },'<')
      .to('.am_Ash2',{
        left: 184
      },'<')
      .fromTo(timelineScroll.current,{
        display: 'none',
        bottom: '-100%',
      },{
        display: 'block',
        bottom: 0,
      },'<')
      .to('.am_card2',{
        opacity: 0
      },'>2')
  }



  const menuKey = (e) => {
    if (e.code === "ArrowUp") {
      setMuneHover(value => [value[0],value[1] == 2 ? 1 : value[1]+1])
    }
    if (e.code === "ArrowDown") {
      setMuneHover(value => [value[0],value[1] == 1 ? 2 : value[1]-1])
    } 
    if (e.code === "ArrowRight") {
      setMuneHover(value => [value[0] == 2 ? 1 : value[0]+1,value[1]])  
    }
    if (e.code === "ArrowLeft") {
      setMuneHover(value => [value[0] == 1 ? 2 : value[0]-1,value[1]])
    }
  }

 


  return (
    <>
      <section className={`am_ruleSection relative  flex flex-col justify-end overflow-hidden`}>
        
        <div className={`am_arriveSection absolute flex justify-between flex-col w-full h-full z-10 ${amComplete ? 'hidden' : 'block'}`}>
          <div className='w-full h-1/2 bg-black'></div>
          <div className='w-full h-1/2 bg-black'></div>
        </div>;
        
        <div className='am_NextRule relative w-full h-[calc(75vh_-_132px)] flex flex-col justify-between px-14'>
            <div className={`am_gold absolute h-1/2 bottom-0 w-[200%] bg-goldImg bg-repeat-x z-[1] ${amComplete ? 'hidden' : 'block'}`}></div>

            <div className='am_cardAndZombie w-full'>
              <ul className='am_card flex gap-6'>
                <li className='shadow-[8px_8px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB] border-4 border-primaryGray-600 rounded-lg text-primaryGray-600 text-base sm:text-base md:text-xl lg:text-2xl p-4 -translate-x-8 opacity-0'>羨慕別人的酷酷網頁動畫</li>
                <li className='shadow-[8px_8px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB] border-4 border-primaryGray-600 rounded-lg text-primaryGray-600 text-base sm:text-base md:text-xl lg:text-2xl p-4 -translate-x-8 opacity-0'>滿足不了同事的許願</li>
                <li className='shadow-[8px_8px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB] border-4 border-primaryGray-600 rounded-lg text-primaryGray-600 text-base sm:text-base md:text-xl lg:text-2xl p-4 -translate-x-8 opacity-0'>動畫技能樹太雜無從下手</li>
              </ul>
              <img className='am_zombie1 absolute top-[84px] right-96 w-80 h-80 ' src="./images/zombie.png" alt="" />
              <img className='am_zombie2 absolute top-[84px] right-96  w-80 h-80 ' src="./images/zombie.png" alt="" />
              <img className='am_zombie3 absolute top-[84px] right-96 w-80 h-80' src="./images/zombie.png" alt="" />
            </div>

            <div className='am_rule w-full px-20 mt-5 hidden'>
              <h4 >活動說明：</h4>
              <p className='text-[32px]'>本活動需由UI設計師和前端工程師合作，採接力完成作品的形式，一週先由UI設計師投稿設計作品，下一週則由前端工程師認領作品，並將其完整產出。 今年三大主題與各路廠商強強聯手，挑戰者們準備好攜手合作打造最強互動式網頁設計了嗎？</p>
            </div>




            <div className='am_topic hidden w-full h-full'> 
              <div className='am_board3 absolute bg-boardImg bg-[url("https://i.imgur.com/xlEO9za.png")] bg-[length:350px_240px] w-[350px] h-[240px] py-8 px-4 flex flex-col justify-between top-0 right-[120px]'>
                <div className='flex justify-between'>
                  <p className='am_boardWeek text-2xl'>WEEK3</p>
                  <img className='am_boardIcon w-8 h-8' src="./images/week3icon.png" alt="" />
                </div>
                <h3 className='am_boardTitle break-normal overflow-y-hidden text-[28px]'>Scrum新手村</h3>
                <div className='flex justify-between'>
                  <h4 className='am_boardLevel text-[28px]'>JS draggable</h4>
                  <a href='https://2022.thef2e.com/news/week3' target='_blank' className='am_boardNews flex text-xl self-end cursor-pointer hover:text-[#844AE1]'>
                    <img className='inline-block w-6 h-6 mr-2 opacity-0' src="./images/blackLoading.gif" alt="" />
                    關卡資訊
                  </a>
                </div>
                <p className='am_boardCompany text-2xl text-end'>鈦坦科技</p>
              </div>
              <div className='am_board2 absolute bg-boardImg bg-[url("https://i.imgur.com/xlEO9za.png")] bg-[length:350px_240px] w-[350px] h-[240px] py-8 px-4 flex flex-col justify-between top-6 right-44'>
                <div className='flex justify-between'>
                  <p className='am_boardWeek text-2xl'>WEEK2</p>
                  <img className='am_boardIcon w-8 h-8' src="./images/week2icon.png" alt="" />
                </div>
                <h3 className='am_boardTitle break-normal overflow-y-hidden text-[28px]'>今晚，我想來點點簽</h3>
                <div className='flex justify-between'>
                  <h4 className='am_boardLevel text-[28px]'>canavas</h4>
                  <a href='https://2022.thef2e.com/news/week2' target='_blank' className='am_boardNews flex text-xl self-end cursor-pointer hover:text-[#844AE1]'>
                    <img className='inline-block w-6 h-6 mr-2 opacity-0' src="./images/blackLoading.gif" alt="" />
                    關卡資訊
                  </a>
                </div>
                <p className='am_boardCompany text-2xl text-end'>凱鈿行動科技</p>
              </div>
              <div className='am_board1 absolute bg-boardImg bg-[url("https://i.imgur.com/xlEO9za.png")] bg-[length:350px_240px] w-[350px] h-[240px] py-8 px-4 flex flex-col justify-between top-12 right-[232px]'>
                <div className='flex justify-between'>
                  <p className='am_boardWeek text-2xl'>WEEK1</p>
                  <img className='am_boardIcon w-8 h-8' src="./images/week1icon.png" alt="" />
                </div>
                <h3 className='am_boardTitle break-normal overflow-y-hidden text-[28px]'>THE F2E活動網站設計</h3>
                <div className='flex justify-between'>
                  <h4 className='am_boardLevel text-[28px]'>視差滾動</h4>
                  <a href='https://2022.thef2e.com/news/week1' target='_blank' className='am_boardNews flex text-xl self-end cursor-pointer hover:text-[#844AE1]'>
                    <img className='inline-block w-6 h-6 mr-2 opacity-0' src="./images/blackLoading.gif" alt="" />
                    關卡資訊
                  </a>
                </div>
                <p className='am_boardCompany text-2xl text-end'>板塊設計</p>
              </div>          
            </div>




            <img className='am_Ash absolute w-80 h-80 top-auto -bottom-4 left-full z-[3]' src="./images/Ash.png" alt="" />
            <img className='am_Ash2 absolute w-80 h-80 top-auto -bottom-4 left-full z-[3]' src="./images/Ash.png" alt="" />

            <ul className='am_card2 flex justify-end gap-6 mb-8'>
              <li className=' shadow-[8px_8px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB] border-4 border-primaryGray-600 rounded-lg text-primaryGray-600 text-base sm:text-base md:text-xl lg:text-2xl p-4 translate-x-8 opacity-0'>UI DESIGNER</li>
              <li className=' shadow-[8px_8px_0px_rgba(0,0,0,0.25)] bg-[#FBFBFB] border-4 border-primaryGray-600 rounded-lg text-primaryGray-600 text-base sm:text-base md:text-xl lg:text-2xl p-4 translate-x-8 opacity-0'>FRONT-END DEVELOPER </li>
            </ul>



        </div>
        <div className='am_challengeUi w-full h-[25vh] flex gap-6 bg-primaryGray-300 border-[10px] border-[#222222] rounded-lg px-3 py-2 z-[9]'>
          <div className='w-1/2 h-full p-4 bg-primaryGray-500 border-8 border-primaryGray-400 rounded-lg'>
            <h2 className='am_challenge text-white leading-tight mb-2'>
            </h2>
            <h2 className='am_challenge2 text-white leading-tight'>
            </h2>
          </div>
          <div className={`w-1/2 h-full ${ amComplete ? 'block' : 'hidden' } `}>
            <div className={`am_menuSelect h-full grid grid-cols-2 gap-y-7 p-4 bg-primaryGray-100 border-8 border-primaryGray-400 rounded-lg justify-center items-center `}> 
              <div className=' flex justify-center items-center '>
                <img className={`w-8 h-8 mr-6 ${muneHover[0] == 1 && muneHover[1] == 1 ? 'visible' : 'invisible'}`} src="./images/blackLoading.gif" alt="" />
                <h4
                  className=' leading-none cursor-pointer'
                  onMouseEnter={() => setMuneHover(() => ([1, 1]))}
                >攜手合作</h4>
              </div>
              <div className=' flex justify-center items-center'>
                <img className={`w-8 h-8 mr-6 ${muneHover[0] == 2 && muneHover[1] == 1 ? 'visible' : 'invisible'}`} src="./images/blackLoading.gif" alt="" />
                <h4
                  className=' leading-none cursor-pointer'
                  onMouseEnter={() => setMuneHover(() => ([2, 1]))}
                >耍廢</h4>
              </div>
              <div className=' flex justify-center items-center'>
                <img className={`w-8 h-8 mr-6 ${muneHover[0] == 1 && muneHover[1] == 2 ? 'visible' : 'invisible'}`} src="./images/blackLoading.gif" alt="" />
                <h4
                  className=' leading-none cursor-pointer'
                  onMouseEnter={() => setMuneHover(() => ([1, 2]))}
                >裝沒看到</h4>
              </div>
              <div className=' flex justify-center items-center'>
                <img className={`w-8 h-8 mr-6 ${muneHover[0] == 2 && muneHover[1] == 2 ? 'visible' : 'invisible'}`} src="./images/blackLoading.gif" alt="" />
                <h4
                  className=' leading-none cursor-pointer'
                  onMouseEnter={() => setMuneHover(() => ([2, 2]))}
                >逃跑</h4>
              </div>
              <div className='am_wait hidden justify-center items-center opacity-0'>
                <img className='w-8 h-8 mr-6' src="./images/blackLoading.gif" alt="" />
                <h4 className=' leading-none cursor-pointer'>等不及了</h4>
              </div>
            </div>
          </div>
        </div>
       
        




      <div className='hidden relative' ref={timelineScroll}>
        <TimelineSection />
      </div>


      </section>
    </>
  )
}

export default PurposeSection