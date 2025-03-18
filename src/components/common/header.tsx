import { RootState } from "../../store/store";
import { nextPerson } from "../../store/dataSlice";

import { useSelector, useDispatch } from "react-redux";
import { IonButton, IonHeader, IonToolbar, IonRouterLink } from "@ionic/react";
import "../pages/portfolio.css";


const Header: React.FC = () => {
    const dispatch = useDispatch();
    const { people, currentIndex } = useSelector((state: RootState) => state.portfolio);
    const person = people[currentIndex]; // Get current person details

    return (
        <>
            {/* Header Section */}
            <IonHeader>
                <IonToolbar>
                    <div className="nav">
                        <h2>Portfolio</h2>
                        <ul className="nav-item">
                            <li><IonRouterLink href="/portfolio">Home</IonRouterLink> </li>
                            <li><IonRouterLink href="/about">About</IonRouterLink></li>
                            <li><IonRouterLink href="/contact">Contact</IonRouterLink></li>
                            <li><IonRouterLink href="/projects">Projects</IonRouterLink></li>
                        </ul>

                        <IonButton onClick={() => {
                        dispatch(nextPerson()); // Update portfolio person
                       
                    }}>
                        Next
                    </IonButton>
                    </div>
                </IonToolbar>
            </IonHeader>
            
        </>
    );
};

export default Header;
