import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><a href="/home" >LSE - Quiz App</a></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LSE - English Short Quiz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Hello Devs! </IonCardTitle>
            <IonCardSubtitle>Showcase your expertise by clicking the button below.</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear" href="/quiz" color="success">Start</IonButton>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
