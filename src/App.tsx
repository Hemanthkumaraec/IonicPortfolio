import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { setupIonicReact } from '@ionic/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Master from './master';
import "./App.css"
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/Contact';
import About from './components/pages/about'
import { IonReactRouter } from '@ionic/react-router';
import Skills from './components/pages/skills';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/contact" component={Contact} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
