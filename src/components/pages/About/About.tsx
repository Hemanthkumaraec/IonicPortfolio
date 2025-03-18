import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import "./About.css";
import { logoInstagram, logoLinkedin } from 'ionicons/icons';

const About: React.FC = () => {
  const portAbout = useSelector((state: RootState) => state.details.abouts);

  const openProfile = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert("No profile link available!");
    }
  };

  return (
    <div className="aboutcontainer">
      {portAbout.length > 0 ? (
        portAbout.map((about) => (
          <div className='about' key={about.id}>
            {about.image && <img className='image' src={about.image} alt={about.name} />}
            <div className='aboutdata'>
              <h1>About Me</h1>
              <h2>{about.name} - {about.designation}</h2>
              <p>{about.about}</p>
              <div className='icons'>
                <button onClick={() => openProfile(about.linkedin)}>
                  <IonIcon icon={logoLinkedin} size='large' />
                </button>
                <button onClick={() => openProfile(about.instagram)}>
                  <IonIcon icon={logoInstagram} size='large' />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No profile selected.</p>
      )}
    </div>
  );
};

export default About;
