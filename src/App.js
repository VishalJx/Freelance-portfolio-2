import './App.css';
import {motion} from "framer-motion";
import EmailOnRight from './components/EmailOnRight';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PapersPage from './pages/PapersPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import SocialsOnLeft from './components/SocialsOnLeft';


function App() {
  return (
    <main className="w-full xl:flex items-center gap-20 justify-between">
      <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5}}
          className="hidden xl:inline-flex w-32 h-full fixed items-end top-5 left-10">
          <SocialsOnLeft/>
      </motion.div>
      <div className="w-full mx-auto">
        <HomePage/>
        <AboutPage/>
        <PapersPage/>
        <ProjectPage/>
        <ContactPage/>
      </div>
      <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
            className="hidden xl:inline-flex w-32 h-full fixed items-end top-5 right-10">
            <EmailOnRight/>
        </motion.div>
    </main>
  );
}

export default App;
