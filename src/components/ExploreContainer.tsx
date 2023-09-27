import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  console.log('ExploreContainer')
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Hello Devs! </IonCardTitle>
        <IonCardSubtitle>Showcase your expertise by clicking the button below.</IonCardSubtitle>
      </IonCardHeader>

      <IonButton fill="clear" href="/quiz" color="success">Start</IonButton>
    </IonCard>
  );
};

export default ExploreContainer;
