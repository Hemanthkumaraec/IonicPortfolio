import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { IonContent } from "@ionic/react";
import Header from "../common/header";
import { logoLinkedin, logoInstagram } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import "./about.css";

const About: React.FC = () => {
    const portAbout = useSelector((state: RootState) => state.about.people[state.about.currentIndex]);

    const openProfile = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <Header />
            <div className="aboutcontainer full-page">
                <div className="about">
                    {portAbout.image && <img className="image" src={portAbout.image} alt={portAbout.name} />}
                    <div className="aboutdata">
                        <h1>About Me</h1>
                        <h2>{portAbout.name} - {portAbout.designation}</h2>
                        <p>{portAbout.about}</p>
                        <div className="icons">
                            <button onClick={() => openProfile(portAbout.linkedin)}>
                                <IonIcon icon={logoLinkedin} size="large" />
                            </button>
                            <button onClick={() => openProfile(portAbout.instagram)}>
                                <IonIcon icon={logoInstagram} size="large" />
                            </button>
                        </div>
                    </div>
                </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum sint repellat ipsam perferendis fugit similique atque modi, debitis ea distinctio voluptates possimus ab ratione molestias veniam tenetur! Sed, ratione.
            </div>
        </>
    );
};

export default About;
