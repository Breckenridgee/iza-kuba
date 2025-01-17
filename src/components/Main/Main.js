import React from 'react';
import '../../App.css';
// import ImageUpload from '../../ImageUpload.js';
import Carousel from '../Carousel/Carousel.js';
import Counter from '../Counter/Counter.js';
import Time from '../Time/Time.js';
import Wedding from '../Wedding/Wedding';
import Fotter from '../Footer/Footer';
import Image from '../Image/Image';
import AboutUs from '../AboutUs/AboutUs';
import img5 from '../../assets/photos/Us/181-I&K-4N6A7940.jpg';
import img6 from '../../assets/photos/Us/076-I&K-4N6A6544.jpg';
import tinderPic from '../../assets/photos/Us/120-I&K-4N6A7056.jpg';
import meetPic from '../../assets/photos/Us/129-I&K-4N6A7185.jpg';
import familyPic from '../../assets/photos/Us/IMG_6043.JPEG';
import engagementPic from '../../assets/photos/Us/engagementPic2.png';

// const images = [img1, img3];
const events = [
  {
    image: tinderPic,
    title: "Poznaliśmy się",
    date: "Wrocław, Środa 26 października 2021",
    description: "Cała nasza przygoda zaczęła się dwóch swipów w prawo",
  },
  {
    image: meetPic,
    title: "Pierwsza randka",
    date: "Wrocław, Piątek 29 października 2021",
    description: "Długo nam nie zajęło zdecydowanie się na pierwsze spotkanie w cztery oczy. Choć nie mieliśmy wtedy duo czasu wiedzieliśmy, że na jednym spotkaniu się nie skończy.",
  },
  {
    image: familyPic,
    title: "Nasza rodzinka się powiększa",
    date: "Dąbrowa Górnicza, Sobota 12 sierpnia 2023",
    description: "Choć jedno z nas cały czas uważa, że to nie była nasz wspólna decyzja, ruszamy w drogę do Dąbrowy Górniczej i wracamy z kruszyną, która całkowicie odmienia nasze życie",
  },
  {
    image: engagementPic,
    title: "Zaręczyny",
    date: "Cypr, Niedziela 19 listopada 2023",
    description: "I kiedy już myśleliśmy, że nic nas nie zaskoczy, Kuba postanowił zmienić nasze kolejne wspólne wakacje w nowy początek naszego życia",
  },
];

const App = () => {
  return (
    <div style={styles.container}>
       <Carousel/>
       <Counter />
       <Image src={img5} alt="Como 2023" />
       <Time events={events} />
       <Image src={img6} alt="Italy 2023" />
       <Wedding />
       <AboutUs />
       <Fotter/>
      {/* <header style={styles.header}>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Ślub</li>
            <li style={styles.navItem}>Wesele</li>
            <li style={styles.navItem}>Poprawiny</li>
            <li style={styles.navItem}>Galeria</li>
          </ul>
        </nav>
        <h1 style={styles.headerText}>Nasza Historia... kolejny wspólny krok</h1>
      </header>

      <section style={styles.section}>
        <div style={{ ...styles.rectangle, backgroundColor: '#E6B9B9' }} />
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>Ślub</h2>
          <p style={styles.sectionDescription}>Data: 18.06.2025r</p>
          <p style={styles.sectionDescription}>Miejsce: Hotel Dębowy w Bielawie</p>
          <p style={styles.sectionDescription}>Janusza Korczaka 1, 58-260 Bielawa</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{ ...styles.rectangle, backgroundColor: '#fff' }} />
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>Wesele</h2>
          <p style={styles.sectionDescription2}>Wszystko co musisz wiedzieć o weselu.</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{ ...styles.rectangle, backgroundColor: '#E6B9B9' }} />
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>Poprawiny</h2>
          <p style={styles.sectionDescription}>Wszystko co musisz wiedzieć o poprawinach.</p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={{ ...styles.rectangle, backgroundColor: '#fff' }} />
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>Nasza wspólna galeria</h2>
          <p style={styles.sectionDescription2}>Dodaj zdjęcia, abyśmy od razu mogli wspominać nasz wyjątkowy dzień.</p>
          <ImageUpload />
        </div>
      </section> */}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    margin: '0',
    backgroundColor: '#fdfdfd',
  }
}

export default App;
