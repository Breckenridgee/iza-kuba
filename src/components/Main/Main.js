import React from 'react';
import '../../App.css';
// import ImageUpload from '../ImageUpload/ImageUpload';
import Carousel from '../Carousel/Carousel.js';
import Counter from '../Counter/Counter.js';
import Time from '../Time/Time.js';
import Wedding from '../Wedding/Wedding';
import Fotter from '../Footer/Footer';
import Image from '../Image/Image';
import AboutUs from '../AboutUs/AboutUs';
import img1 from '../../assets/photos/Us/181-I&K-4N6A7940.jpg';
import img2 from '../../assets/photos/Us/076-I&K-4N6A6544.jpg';
import img3 from '../../assets/photos/Us/115-I&K-4N6A6991.jpg';
import tinderPic from '../../assets/photos/Us/120-I&K-4N6A7056.jpg';
import meetPic from '../../assets/photos/Us/129-I&K-4N6A7185.jpg';
import familyPic from '../../assets/photos/Us/cava.png';
import engagementPic from '../../assets/photos/Us/144-I&K-4N6A7428.jpg';
import travelPic from '../../assets/photos/Us/106-I&K-4N6A6880.jpg';
import "./Main.css";

const events = [
  {
    image: tinderPic,
    title: "Poznaliśmy się",
    date: "Wrocław, Środa 26 października 2021",
    description: "Cała nasza przygoda zaczęła się od dwóch swipów w prawo..",
    styles: {objectPosition: 'center'}
  },
  {
    image: meetPic,
    title: "Pierwsza randka",
    date: "Wrocław, Piątek 29 października 2021",
    description: "Długo nam nie zajęło zdecydowanie się na pierwsze spotkanie w cztery oczy. Choć nie mieliśmy wtedy dużo czasu wiedzieliśmy, że na jednym spotkaniu się nie skończy.",
    styles: {objectPosition: 'center'}
  },
  {
    image: travelPic,
    title: "Pierwsza podróż",
    date: "United States, Maj 2022",
    description: "Pierwsza podróż, pierwsze wspomnienia. Wracamy z USA jako para, która wie, że chce spędzić życie podróźując razem.",
    styles: {objectPosition: 'center'}
  },
  {
    image: familyPic,
    title: "Nasza rodzinka się powiększa",
    date: "Dąbrowa Górnicza, Sobota 12 sierpnia 2023",
    description: "Choć jedno z nas cały czas uważa, że to nie była nasz wspólna decyzja, ruszamy w drogę do Dąbrowy Górniczej i wracamy z kruszyną, która całkowicie odmienia nasze życie",
    styles: {objectPosition: 'center'}
  },
  {
    image: engagementPic,
    title: "Zaręczyny",
    date: "Cypr, Niedziela 19 listopada 2023",
    description: "Kolejna podróż, kolejne wspomnienia. Jedziemy na klify obejrzeć kolejny wspólny zachód słońca. Wracamy już jako narzeczeni.",
    styles: {objectPosition: "top"}
  },
];

const App = () => {
  return (
    <div className="main-container">
       <Carousel/>
       <Counter />
       <Image src={img1} alt="Photo 1" objectPosition="top"/>
       <Time events={events} />
       <Image src={img2} alt="Photo 2" objectPosition="center"/>
       <Wedding />
       <Image src={img3} alt="Photo 3" objectPosition="bottom" maxHeight="300px"/>
       <AboutUs />
       {/* <ImageUpload /> */}
       <Fotter/>
    </div>
  );
}

export default App;
