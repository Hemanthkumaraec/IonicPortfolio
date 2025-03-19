import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IonPage, IonContent, IonInput, IonItem, IonList, IonTextarea } from "@ionic/react";
import Header from "../common/header";
import "./Contact.css";

const Contact: React.FC = () => {
  // ✅ Get the current index from Redux
  const currentIndex = useSelector((state: RootState) => state.portfolio.currentIndex);
  
  // ✅ Get the contact matching the current index
  const contact = useSelector((state: RootState) => state.contact.contacts[currentIndex]);

  return (
    <>
      <Header/>
      <div className="contact-content full-page" >
        <div>
          <h3>Members</h3>
          <p>We've been waiting for you</p>
          <p>We want to hear from you. Let us know how we can help you.</p>
          <h4>Send us a message</h4>

          <div className="contact-details">
            {/* ✅ Contact Form */}
            {contact ? (
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Address:</strong> {contact.address}</p>
              </div>
            ) : (
              <p>Loading contact details...</p> 
            )}
            <div className="form">
              <IonList>
                <IonItem className="form-input">
                  <IonInput label="Name" labelPlacement="floating" placeholder="Enter your name"></IonInput>
                </IonItem>

                <IonItem className="form-input">
                  <IonInput label="Contact no" labelPlacement="floating" type="tel" placeholder="Enter your contact number"></IonInput>
                </IonItem>

                <IonItem className="form-input">
                  <IonInput label="Email" labelPlacement="floating" type="email" placeholder="email@domain.com"></IonInput>
                </IonItem>

                <IonItem className="form-input">
                  <IonTextarea label="Message" labelPlacement="floating" placeholder="Enter your message"></IonTextarea>
                </IonItem>
              </IonList>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
