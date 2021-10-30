
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Routes} from './components/Routes';
import { useState } from 'react';
const  App = () => {
  const [darkTheme,setDarkThem] = useState(false)
  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkThem={setDarkThem} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
