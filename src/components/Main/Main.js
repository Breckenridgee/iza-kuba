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
import "./Main.css";

const events = [
  {
    image: "images/tinder.jpg",
    title: "Poznaliśmy się",
    date: "Wrocław, Środa 26 października 2021",
    description: "Cała nasza przygoda zaczęła się od dwóch swipów w prawo..",
    styles: {objectPosition: 'center'}
  },
  {
    image: "images/meet.jpg",
    title: "Pierwsza randka",
    date: "Wrocław, Piątek 29 października 2021",
    description: "Długo nam nie zajęło zdecydowanie się na pierwsze spotkanie w cztery oczy. Choć nie mieliśmy wtedy dużo czasu wiedzieliśmy, że na jednym spotkaniu się nie skończy.",
    styles: {objectPosition: 'center'}
  },
  {
    image: "images/travel.jpg",
    title: "Pierwsza podróż",
    date: "United States, Maj 2022",
    description: "Pierwsza podróż, pierwsze wspomnienia. Wracamy z USA jako para, która wie, że chce spędzić życie podróźując razem.",
    styles: {objectPosition: 'center'}
  },
  {
    image: "images/cava.png",
    title: "Nasza rodzinka się powiększa",
    date: "Dąbrowa Górnicza, Sobota 12 sierpnia 2023",
    description: "Choć jedno z nas cały czas uważa, że to nie była nasz wspólna decyzja, ruszamy w drogę do Dąbrowy Górniczej i wracamy z kruszyną, która całkowicie odmienia nasze życie",
    styles: {objectPosition: 'center'}
  },
  {
    image: "images/engagement.jpg",
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
       <Image src="images/close.jpg" alt="Photo 1" objectPosition="top"/>
       <Time events={events} />
       <Image src="images/hands.jpg" alt="Photo 2" objectPosition="center"/>
       <Wedding />
       <Image src="images/far.jpg" alt="Photo 3" objectPosition="bottom" maxHeight="300px"/>
       <AboutUs />
       {/* <ImageUpload /> */}
       <Fotter/>
    </div>
  );
}

export default App;
