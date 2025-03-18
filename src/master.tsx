import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/Contact";
import Header from "./components/common/header";

const Master: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Header} />
        <Route exact path="/contact" component={Contact} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Master;
