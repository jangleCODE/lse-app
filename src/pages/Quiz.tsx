import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import QuestionContainer from '../components/QuestionContainer';
import './Home.css';

import questionnaire from '../data/questionnaire.json'; 
import courseRecomm from '../data/courseList.json'; 
const Quiz: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><a href="/" >LSE - Quiz App</a></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LSE - English Short Quiz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QuestionContainer data={questionnaire} courses={courseRecomm}/>
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
