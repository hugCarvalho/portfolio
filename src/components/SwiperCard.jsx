// Import Swiper React components
import { useLocation } from "react-router-dom";
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Bgg2 from '../images/bgg_02.png';
import Bgg3 from '../images/bgg_03.png';
import Bgg4 from '../images/bgg_04.png';
import Bgg5 from '../images/bgg_05.png';
import CafeStart from '../images/cafes-01.png';
import CafeStart2 from '../images/cafes-02.png';
import CafeSignup from '../images/cafes-03.png';
import CafeList from '../images/cafes-04.png';
import CafeMap from '../images/cafes-05.png';
import CafeAdmin from '../images/cafes-06.png';
import CafeSettings from '../images/cafes-07.png';
import Karaoke from '../images/karaoke-01.png';
import Karaoke2 from '../images/karaoke-02.png';
import Karaoke3 from '../images/karaoke-03.png';
import portfolio2About from '../images/portfolio2-about.png';
import portfolio2Contact from '../images/portfolio2-contact.png';
import Portfolio2Home from '../images/portfolio2-home.png';
import portfolio2Projects from '../images/portfolio2-projects.png';
import GameInstructions from '../images/Screenshot-1.png';
import GameWon from '../images/Screenshot-2.png';
import GameLost from '../images/Screenshot-3.png';
import GameHighscores from '../images/Screenshot-4.png';
import GameOptions from '../images/Screenshot-5.png';
import Travel1 from '../images/travel_01.png';
import Travel2 from '../images/travel_02.png';
import Travel4 from '../images/travel_04.png';
import Travel5 from '../images/travel_05.png';
import Travel6 from '../images/travel_06.png';
import Travel7 from '../images/travel_07.png';
import Travel8 from '../images/travel_08.png';

import { PersonTestimony, VerticalSliderCard } from './VerticalSliderCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';
// import 'swiper/css/scrollbar';

const pics = {
  karaokeStart: Karaoke,
  karaokeList: Karaoke2,
  karaokeHistory: Karaoke3,
  cafeStart: CafeStart,
  cafeStart2: CafeStart2,
  cafeSignup: CafeSignup,
  cafeList: CafeList,
  cafeMap: CafeMap,
  cafeAdmin: CafeAdmin,
  cafeSettings: CafeSettings,
  gameWon: GameWon,
  gameLost: GameLost,
  gameInstructions: GameInstructions,
  gameHighscores: GameHighscores,
  gameOptions: GameOptions,
  portfolio2Home: Portfolio2Home,
  portfolio2About: portfolio2About,
  portfolio2Projects: portfolio2Projects,
  portfolio2Contact: portfolio2Contact,
  bgg2: Bgg2,
  bgg3: Bgg3,
  bgg4: Bgg4,
  bgg5: Bgg5,
  travel1: Travel1,
  travel2: Travel2,
  travel4: Travel4,
  travel5: Travel5,
  travel6: Travel6,
  travel7: Travel7,
  travel8: Travel8,
}

export const SwiperCard = ({dataArr}) => {
  const {pathname} = useLocation()

  return (
    <Swiper
      modules={[Pagination, A11y, Navigation]}
      navigation
      spaceBetween={5}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      >
      {
        pathname === "/projects" && dataArr.map((img, i) => {
          const [id, altText] = img

          return <SwiperSlide key={i}>
            <img src={pics[id]} style={{height: "252px"}} alt={altText}/>
          </SwiperSlide>
        })
      }
      {
        pathname === "/about" && dataArr.map((data, i) => {
          const {name, img, altText, jobTitle, testimony} = data

          return <SwiperSlide key={i}>
            <VerticalSliderCard
              name={name}
              src={img}
              altText={altText}
              jobTitle={jobTitle}
              testimony={<PersonTestimony text={testimony}/>
              }
          />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}
