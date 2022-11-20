import { useState } from 'react'

import NavComponent from './NavComponent'
import AwardSection from './AwardSection'
import PurposeSection from './PurposeSection'
import LecturerScetion from './LecturerScetion'
import SponsorSection from './SponsorSection'

import { AnimeContext } from "./Context";


const HomePage = () => {
	const [animeComplete, setAnimeComplete] = useState(false);

  return (
  	<>
			<AnimeContext.Provider value={{ setAnimeComplete }}>
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