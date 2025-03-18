import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './components/pages/Home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Master from './Master';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store/store';
import { goToAbout, goToPortfolio } from './Store/Slice/pageSlice';
import { setAbouts, addDetails } from './Store/Slice/detailSlice';
import "./App.css";



setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const handleAddDetails = (skill1: string, skill2: string, skill3: string, skill4: string, skill5: string, skill6: string, image1: string, image2: string, image3: string, image4: string, image5: string, image6: string) => {
    dispatch(addDetails({
      skill1, skill2, skill3, skill4, skill5, skill6,
      image1, image2, image3, image4, image5, image6,
      id: Date.now()
    }));
  };
  const handleAddAbouts = (name: string, designation: string, about: string, image: string, linkedin: string, instagram: string) => {
    dispatch(setAbouts([{ id: Date.now(), name, designation, about, image, linkedin, instagram }]));
  };
  
  
  
  



  return (
    <IonApp>
      <div >
        <button className='nav' onClick={() => { dispatch(goToPortfolio()); handleAddDetails("React", "Java", "Python", "Kotlin", "Html", "CSS", "./assets/react.png", "./assets/java.png", "./assets/pytho.jpg", "./assets/kotlin.jpg", "./assets/html.jpg", "./assets/css.png"); }}>Priya Profile</button>
        <button className='nav' onClick={() => { dispatch(goToPortfolio()); handleAddDetails("React", "c++", "Vue.js", "Kotlin", "Html", "CSS", "./assets/react.png", "./assets/c++.jpg", "./assets/vue.jpg", "./assets/kotlin.jpg", "./assets/html.jpg", "./assets/css.png"); }}>Hemanth Profile</button>
        <button className='nav' onClick={() => { dispatch(goToPortfolio()); handleAddDetails("React", "Angular.js", "Python", "Flutter", "Html", "CSS", "./assets/react.png", "./assets/angular.png", "./assets/pytho.jpg", "./assets/flutter.png", "./assets/html.jpg", "./assets/css.png"); }}>Varadharaj Profile</button>
        <button className='nav' onClick={() => { 
  dispatch(goToAbout()); 
  handleAddAbouts(
    "Priya Bharathi", "Web Developer", 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.", 
    "./assets/girl2.jpg",
    "https://www.linkedin.com/in/priyabharathi-sivakumar",
    "https://www.instagram.com/ms_little_heart_02/"
  ); 
}}>Priya About</button>

<button className='nav' onClick={() => { 
  dispatch(goToAbout()); 
  handleAddAbouts(
    "Hemanthkumar", "UI/UX Designer", 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.",
     "./assets/boy1.jpg",
    "https://www.linkedin.com/in/hemanthkumar",
    "https://www.instagram.com/hemanth_designs/"
  ); 
}}>Hemanth About</button>

<button className='nav' onClick={() => { 
  dispatch(goToAbout()); 
  handleAddAbouts(
    "Varadharaj", "AI Engineer", 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolore impedit reprehenderit illo quibusdam architecto aspernatur amet quisquam quo qui dolorum, nulla ullam quae est laborum! Consectetur dolores nostrum repellat.", 
    "./assets/boy2.jpg",
    "https://www.linkedin.com/in/varadharaj",
    "https://www.instagram.com/ai_varadharaj/"
  ); 
}}>Varadharaj About</button>

      </div>

      <Master />
    </IonApp>


  );
}



export default App;
