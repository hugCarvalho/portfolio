// Import Swiper React components
import { useLocation } from "react-router-dom";
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CafeStart from '../images/cafes-01.png';
import CafeStart2 from '../images/cafes-02.png';
import CafeSignup from '../images/cafes-03.png';
import CafeList from '../images/cafes-04.png';
import CafeMap from '../images/cafes-05.png';
import CafeAdmin from '../images/cafes-06.png';
import CafeSettings from '../images/cafes-07.png';
import portfolio2About from '../images/portfolio2-about.png';
import portfolio2Contact from '../images/portfolio2-contact.png';
import Portfolio2Home from '../images/portfolio2-home.png';
import portfolio2Projects from '../images/portfolio2-projects.png';
import GameInstructions from '../images/Screenshot-1.png';
import GameWon from '../images/Screenshot-2.png';
import GameLost from '../images/Screenshot-3.png';
import GameHighscores from '../images/Screenshot-4.png';
import GameOptions from '../images/Screenshot-5.png';
import { PersonTestimony, VerticalSliderCard } from './VerticalSliderCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';
// import 'swiper/css/scrollbar';

const pics = {
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
