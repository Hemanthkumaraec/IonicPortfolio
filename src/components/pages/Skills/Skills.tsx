import { IonPage, IonContent, IonCardHeader, IonCard, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import "./Skills.css";

const Priya: React.FC = () => {
  // Access Redux state properly
  const portDetails = useSelector((state: RootState) => state.details.details);

  return (

    <div className="pageContainer">


      <div className="profile">
        {portDetails.length > 0 ? (
          portDetails.map((detail) => (
            <>
              

              <div className="card">
              <div className='heading'>My Skills</div>
                <div className="skills">
                  <div className='imgcard'>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image1} alt="" />
                        <div className='head'>{detail.skill1}</div>
                        
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                  <div>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image2} alt="" />
                        <div className='head'>{detail.skill2}</div>
                    
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                  <div>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image3} alt="" />
                        <div className='head'>{detail.skill3}</div>
                        
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                  <div>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image4} alt="" />
                        <div className='head'>{detail.skill4}</div>
                        
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                  <div>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image5} alt="" />
                        <div className='head'>{detail.skill5}</div>
                        
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                  <div>
                    <IonCard>
                      <IonCardHeader>
                        <img className='pic' src={detail.image6} alt="" />
                        <div className='head'>{detail.skill6}</div>
                        
                      </IonCardHeader>

                      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                    </IonCard>
                  </div>
                 
                </div>
              </div>
              {/* <div className='projects'>
                <div className="project1" key={detail.id}>
                  <h1>{detail.title}</h1>
                  <a href={detail.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
              </div> */}
            </>
          ))
        ) : (
          <p>No projects added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Priya;
