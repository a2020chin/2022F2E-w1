import { useState } from 'react'

import NavComponent from '../component/NavComponent'
import AwardSection from './section/AwardSection'
import PurposeSection from './section/PurposeSection'
import LecturerScetion from './section/LecturerScetion'
import SponsorSection from './section/SponsorSection'

import { AnimeContext } from "../component/Context";


const HomePage = () => {
	const [animeComplete, setAnimeComplete] = useState(false);

  return (
  	<>
		  <AnimeContext.Provider value={{ animeComplete, setAnimeComplete }}>
  	  	<NavComponent />
  	  	<PurposeSection/>
		    {animeComplete ? <AwardSection /> : ''}
		    {animeComplete ? <LecturerScetion /> : ''}
		    {animeComplete ? <SponsorSection /> : ''}
		  </AnimeContext.Provider>
  	</>
  )
}

export default HomePage