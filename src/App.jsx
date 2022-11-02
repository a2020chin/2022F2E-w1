import { useEffect , useRef } from 'react'



function App() {
  const loading = useRef();

  useEffect(() => {
    
  },[])


  return (
    <div className=" bg-primaryGray-600 h-screen w-screen flex flex-col items-center justify-center" ref={loading}>
        <h5 className='mb-4 text-textWhite'>LOADING...</h5>
        <div className='border-2 border-textWhite w-80 h-8 rounded'>
          <div className='w-0 h-full bg-white'></div>
        </div>
    </div>
  )
}

export default App
