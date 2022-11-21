import { useEffect, useState, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const LecturerScetion = () => {

  const [ mouseHover, setMouseHover] = useState(0)
  const t1 = useRef(null)

  const lecturerContent = [
    '各界大神接力分享\n11/3~11/24 每週四線上直播\n免費公開場',
    '網站的動態趨勢\n11/3（四）20:00~21:30\n李明',
    'jQuary也可以做到的互動效果\n11/10（四）20:00~21:30\nLeo',
    '做事不能拖拖拉拉，但網頁可以：draggle.js介紹\n11/17（四）20:00~21:30\n邱繼緯',
    '互動式網頁設計工程師該具備哪些技能\n11/24（四）20:00~21:30\n吳哲宇',
  ]
  const lecturerContentSpan = [
    '',
    '板塊設計創辦人暨設計總監',
    'Angular Taiwan傳教士',
    '前端工程師',
    '墨雨互動設計創辦人、生成式藝術家'
  ]



  useEffect(() => {

    return () => {
      t1.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".am_lecturerSection",
          // markers: true,
          start: '0 0',
          end: '300%',
          pin: true, 
          scrub: 1,
          pinSpacer: true
        },
      })
      .to('.am_master',{
        opacity: 1
      })
      .to('.am_lecturerUi',{
        opacity: 1
      },'<.5')
      .to('.am_master,.am_lecturerContent',{
        opacity: 0,
        display: 'none',
      },'>1')
      .fromTo('.am_personal,.am_group',{
        opacity: 0
      },{
        display: 'flex',
        opacity: 1
      })
      .to('.am_countdown',{
        display: 'flex',
        opacity: 1
      },'<')
      .to('.am_countdown div',{
        opacity: 1
      })
      

    }
  },[])


  useEffect(() => {
    lecturerContentAnime()
  },[mouseHover])



  const newDate = useRef(new Date());

  const [currentDate, setCurrentDate] = useState(newDate.current.getDate())
  const [currentHours, setCurrentHours] = useState(newDate.current.getHours())
  const [currentMinutes, setCurrentMinutes] = useState(newDate.current.getMinutes())
  const [currentSeconds, setCurrentSeconds] = useState(newDate.current.getSeconds())
  setInterval(() => {
    newDate.current = new Date()
    setCurrentDate(newDate.current.getDate())
    setCurrentHours(newDate.current.getHours())
    setCurrentMinutes(newDate.current.getMinutes())
    setCurrentSeconds(newDate.current.getSeconds())
  }, 1000);

  const lecturerContentAnime = () => {
      gsap.fromTo('.am_lecturerContent',{
        opacity: 0
      },{
        opacity: 1
      })
    }

  return (
    <>
      <section className="am_lecturerSection relative flex flex-col justify-end items-center">
      
        <ul className="am_master w-[640px] h-[calc(75vh_-_160px)] grid grid-cols-2 grid-rows-2 mb-7 opacity-0">
          <li className="relative -mr-1 -mb-1 border-4 border-primaryGray-600 border-dashed overflow-hidden"
          onMouseEnter={ () => {
            setMouseHover(1)
          }}
          >
            <div className="opacity-50 duration-700 hover:opacity-100
            before:absolute before:inset-0 before:z-[1] before:duration-700 before:bg-master1 before:bg-cover before:cursor-pointer before:filter-pixelate before:hover:opacity-0
            after:content-[''] after:absolute after:inset-0 after:bg-master1 after:bg-cover"></div>
          </li>
          <li className="relative -mb-1 border-4 border-primaryGray-600 border-dashed overflow-hidden"
          onMouseEnter={ () => {
            setMouseHover(2)
          }}
          >
            <div className="opacity-50 duration-700 hover:opacity-100
            before:content-[''] before:absolute before:inset-0 before:z-[1] before:duration-700 before:bg-master2 before:bg-cover before:cursor-pointer before:filter-pixelate before:hover:opacity-0
            after:content-[''] after:absolute after:inset-0 after:bg-master2 after:bg-cover
            "></div>
          </li>
          <li className="relative -mr-1 border-4 border-primaryGray-600 border-dashed overflow-hidden"
          onMouseEnter={ () => {
            setMouseHover(3)
          }}
          >
            <div className="opacity-50 duration-700 hover:opacity-100
            before:content-[''] before:absolute before:inset-0 before:z-[1] before:duration-700 before:bg-master3 before:bg-cover before:cursor-pointer before:filter-pixelate before:hover:opacity-0
            after:content-[''] after:absolute after:inset-0 after:bg-master3 after:bg-cover
            "></div>
          </li>
          <li className="relative border-4 border-primaryGray-600 border-dashed overflow-hidden"
          onMouseEnter={ () => {
            setMouseHover(4)
          }}
          >
            <div className="opacity-50 duration-700 hover:opacity-100
            before:content-[''] before:absolute before:inset-0 before:z-[1] before:duration-700 before:bg-master4 before:bg-cover before:cursor-pointer before:filter-pixelate before:hover:opacity-0
            after:content-[''] after:absolute after:inset-0 after:bg-master4 after:bg-cover
            "></div>
          </li>
        </ul>

        <div className='am_lecturerUi relative flex gap-6 w-full h-[25vh] bg-primaryGray-300 border-[10px] border-[#222222] rounded-lg px-3 py-2 z-[9] opacity-0'>
          <h4 className="am_lecturerContent absolute inset-0 h-full text-center whitespace-pre-line ">
            {lecturerContent[mouseHover]}
            <span className=" text-2xl ml-4 align-middle">{lecturerContentSpan[mouseHover]}</span>
          </h4>
          

          <div className='am_personal w-1/2 h-full p-4 items-center bg-primaryGray-500 border-8 border-primaryGray-400 rounded-lg hidden'>
            <h2 className='text-white'>總挑戰者：1218</h2>
          </div>
          <div className='am_group w-1/2 h-full items-center p-4 bg-primaryGray-100 border-8 border-primaryGray-400 rounded-lg gap-4 hidden'>
            <div className='w-1/2 flex justify-center items-center'>
              <h4>個人組：1218</h4>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <h4>團體組：47</h4>
            </div>
          </div>

        </div>
        

        <div className='am_countdown absolute w-1/3 h-max inset-1/2 flex-col items-center -translate-x-1/2 -translate-y-3/4 opacity-0 hidden'>
        <a className='inline-block bg-[url("https://i.imgur.com/KWznTqO.png")] bg-cover w-[400px] h-[180px] duration-300 hover:drop-shadow-[4px_4px_20px_#22C06F] focus:bg-[url("https://i.imgur.com/YuX8tzj.png")]' 
        href="https://2022.thef2e.com/login"></a>
          <div className='w-full p-3 opacity-0'>
            <h5 className='mb-1 text-center'>COUNTDOWN</h5>
            <div className='w-full flex gap-6 justify-between'>
              <p className='inline-block'>{`${28 - currentDate}day`}</p>
              <p className='inline-block'>{`${24 - currentHours}hours`}</p>
              <p className='inline-block'>{`${60 - currentMinutes}mins`}</p>
              <p className='inline-block'>{`${60 - currentSeconds}secs`}</p>
            </div>
          </div>
        </div>
        
      </section>
      <svg className="absolute w-0 h-0">
        <filter id="pixelate" x="0" y="0">
          <feFlood x="4" y="4" height="2" width="2"/>
          <feComposite width="8" height="8"/>
          <feTile result="a"/>
          <feComposite in="SourceGraphic" in2="a" operator="in"/>
          <feMorphology operator="dilate"radius="5"/>
        </filter>
      </svg>
    </>
  )
}

export default LecturerScetion