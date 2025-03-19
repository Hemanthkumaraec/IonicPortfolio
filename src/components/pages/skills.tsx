import { IonCardHeader, IonCard, IonCardContent } from "@ionic/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./Skills.css";
import Header from "../common/header"; // Include the header with the Next button

const Priya: React.FC = () => {
  // Get the current person's skills from Redux
  const currentPerson = useSelector((state: RootState) => state.skills.details[state.skills.currentIndex]);

  return (
    <>
      <Header /> {/* Include header with Next button */}
      <div className="pageContainer full-page">
        <div className="profile">
          <div className="card">
            {/* Show person's name under "My Skills" */}
            <div className="heading">My Skills - <span>{currentPerson.name}</span></div>
            <div className="skills">
              {currentPerson.skills.map((skill, index) => (
                <IonCard key={index}>
                  <IonCardHeader>
                    <img className="pic" src={skill.image} alt={skill.name} />
                    <div className="head">{skill.name}</div>
                  </IonCardHeader>
                  <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Priya;
