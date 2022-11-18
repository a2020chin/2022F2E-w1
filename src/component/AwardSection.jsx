import { useEffect, useRef, useState} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AwardSection = () => {

  const t1 = useRef(null)

  useEffect(() => {
    t1.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".am_awardSection",
        // markers: true,
        start: '-50% 0',
        end: '0 100%',
        // pin: true, 
        scrub: 1,
        // pinSpacer: true
      },
    })
  },[])

  return (
    <>
      <section className='am_awardSection flex flex-col justify-end'>
        <div className="px-20 mb-4">
          <h3 className='text-center mb-4'>區區修煉已經無法滿足了嗎？還有比賽等著你！</h3>
          <div className=" max-w-[1160px] mx-auto p-6 border-8 border-primaryGray-600 rounded-2xl shadow-[10px_10px_0_rgba(0,_0,_0,_0.25)]">
            <div className='mb-10'>
              <h5 className='text-[#9E63FF] mb-6'>獎項</h5>
              <ul className='text-2xl'>
                <li>1. 初選佳作 共六十位 數位獎狀（每週主題個人組十位、團體組十位）</li>
                <li>2. 個人企業獎 共六位 NTD 3,000/位（每週主題各兩位，設計一位、前端一位）</li>
                <li>3. 團體企業獎 共三組 NTD 10,000/組（每週主題各一組）</li>
                <li>以上皆提供完賽數位獎狀</li>
              </ul>
            </div>
            <div>
              <h5 className='text-[#9E63FF] mb-6'>評審機制：</h5>
              <ul className='text-2xl'>
                <li>初選：將由六角學院前端、UI 評審進行第一波篩選。</li>
                <li>決選：由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</li>
              </ul>
            </div>
          </div>
        </div>
        <img className='w-full h-72' src="./images/gold.png" alt="" />
      </section>
    </>
  )
}

export default AwardSection
