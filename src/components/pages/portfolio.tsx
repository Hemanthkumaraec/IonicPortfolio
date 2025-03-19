import { RootState } from "../../store/store";

import { useSelector, useDispatch } from "react-redux";
import {  IonCard, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonRouterLink } from "@ionic/react";
import "./portfolio.css";
import Header from "../common/header";

const Portfolio: React.FC = () => {
    const dispatch = useDispatch();
    const { people, currentIndex } = useSelector((state: RootState) => state.portfolio);
    const person = people[currentIndex]; // Get current person details

    return (
        <>
        <Header/>
            {/* Content Section */}
            <IonContent className="ion-padding full-page">
                <IonCard className="hero-section">
                    <IonCardHeader className="hero-card">
                        <IonCardTitle><h1>{person.name}</h1></IonCardTitle>
                        <IonCardSubtitle><h3>{person.title}</h3></IonCardSubtitle>
                        <IonCardContent><p>{person.about}</p></IonCardContent>
                        <button className="btn-cv">Download CV</button>
                    </IonCardHeader>

                    <div className="img">
                        <img alt="user image" src={person.image} />
                    </div>
                </IonCard>




                <h2>Projects</h2>
                <IonGrid fixed>
                    <IonRow>
                        {person.projects.map((project, index) => (
                            <IonCol key={index} size="12" sizeMd="4" sizeLg="4">
                                <IonCard className="project-section">
                                    <img alt="project images" src={project.image} />
                                    <IonCardHeader>
                                        <IonCardTitle><strong>{project.title}</strong></IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{project.description}</p>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                



        </IonContent >
        </>
    );
};

export default Portfolio;
