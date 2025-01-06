import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
// import Password from './components/Password/Password';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (isLoggedIn === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={isLoggedIn ? <Main /> : <Navigate to="/pass" />} /> */}
        <Route path="/pass" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
