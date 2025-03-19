import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { nextPerson as nextPortfolioPerson } from "../../store/dataSlice"; // Portfolio
import { nextPerson as nextAboutPerson } from "../../store/aboutSlice"; // About
import { nextPerson as nextSkillsPerson } from "../../store/skillsSlice"; // Skills

import { IonButton, IonHeader, IonToolbar, IonRouterLink } from "@ionic/react";
import "../pages/portfolio.css";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const currentPath = window.location.pathname; // Get current page path

    return (
        <IonHeader>
            <IonToolbar>
                <div className="nav">
                    <h2>Portfolio</h2>
                    <ul className="nav-item">
                        <li><IonRouterLink href="/portfolio">Home</IonRouterLink></li>
                        <li><IonRouterLink href="/about">About</IonRouterLink></li>
                        <li><IonRouterLink href="/contact">Contact</IonRouterLink></li>
                        <li><IonRouterLink href="/skills">Skills</IonRouterLink></li>
                       
                    </ul>

                    {/* Next button should update Portfolio, About, or Skills depending on the page */}
                    <IonButton
                        onClick={() => {
                            if (currentPath === "/about") {
                                dispatch(nextAboutPerson()); // Update About page
                            } else if (currentPath === "/skills") {
                                dispatch(nextSkillsPerson()); // Update Skills page
                            } else {
                                dispatch(nextPortfolioPerson()); // Default: Update Portfolio page
                            }
                        }}
                    >
                        Next
                    </IonButton>
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
