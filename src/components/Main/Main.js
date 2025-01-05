import React from 'react';
import '../../App.css';
// import ImageUpload from '../../ImageUpload.js';
import Carousel from '../Carousel/Carousel.js';
import Counter from '../Counter/Counter.js';
import Time from '../Time/Time.js';
import Banner from '../Banner/Banner.js';
import Wedding from '../Wedding/Wedding';
import img3 from '../../assets/photos/Us/IMG_5276.png';
import img4 from '../../assets/photos/Us/IMG_5662.png';
import img1 from '../../assets/photos/Us/IMG_5662.png';
import tinderPic from '../../assets/photos/Us/IMG_3885.png';
import meetPic from '../../assets/photos/Us/IMG_2347.png';
import familyPic from '../../assets/photos/Us/IMG_3934.png';
import engagementPic from '../../assets/photos/Us/engagementPic.png';

const images = [img1, img3, img4];
const events = [
  {
    image: meetPic,
    title: "Poznaliśmy się",
    date: "Środa 26 padziernika 2021",
    description: "Cała nasza przygoda zaczęła się dwóch swipów w prawo",
  },
  {
    image: tinderPic,
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
      {/* <Banner/> */}
       <Carousel images={images}/>
       <Counter />
       <Time events={events} />
       <Wedding />
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

      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2025 Iza & Kuba</p>
      </footer>
    </div>
  );
}

// Style dla strony głównej
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    backgroundColor: '#fdfdfd',
    fontFamily: "'Playfair Display', serif",
  },
  header: {
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lekko przezroczyste tło dla nagłówka
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  navItem: {
    margin: '0 15px',
    cursor: 'pointer',
    color: '#940306',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  headerText: {
    color: '#940306',
    fontSize: '28px',
    margin: 0,
  },
  section: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    marginBottom: '20px',
  },
  rectangle: {
    width: '100%',
    height: '300px', // Wysokość prostokąta
    borderRadius: '10px',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0, // Prostokąt poniżej tekstu
  },
  textContainer: {
    position: 'relative',
    zIndex: 1, // Tekst powyżej prostokatu
    color: '#fff', // Tekst w białym kolorze dla kontrastu
    textAlign: 'center',
    padding: '20px',
  },
  sectionTitle: {
    color: '#940306',
    marginBottom: '10px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  sectionDescription: {
    color: '#fff',
    fontSize: '18px',
  },
  sectionDescription2: {
    color: '#E6B9B9',
    fontSize: '18px',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px 0',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    color: '#940306',
    fontSize: '16px',
  },
};

export default App;
