const NavComponent = () => {
  return (
    <nav className={`fixed top-0 w-full flex justify-between items-center text-primaryGray-600 p-6 z-20`}>
      <div className='flex'>
        <h3 className='font-ArcadeClassic border-r-4 border-r-primaryGray-600 pr-4 mr-4'>
          <a className='duration-200 hover:text-[#844AE1]' href="">THE F2E</a>
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
          <button className='inline-block cursor-pointer bg-[url("https://i.imgur.com/UGb8d9S.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#FF5B5B] focus:bg-[url("https://i.imgur.com/ZueI99Y.png")] disabled:bg-[url("https://i.imgur.com/Bfg5Zxe.png")]' disabled></button>
        </li>
        <li>
        <a className='inline-block bg-[url("https://i.imgur.com/KWznTqO.png")] bg-cover w-40 h-[72px] duration-300 hover:drop-shadow-[4px_4px_20px_#22C06F] focus:bg-[url("https://i.imgur.com/YuX8tzj.png")]' 
        href="https://2022.thef2e.com/login"></a>
        </li>
      </ul>
    </nav>
  )
}

export default NavComponent