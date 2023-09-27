import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonLabel, IonRadio, IonRadioGroup } from '@ionic/react';
import React, { useState } from 'react';
import './Quiz.css';
import { checkmarkCircleSharp, closeCircleSharp } from 'ionicons/icons';
interface ContainerProps {
  data: Array;
}

const QuestionContainer: React.FC<ContainerProps> = (props) => {
  const listOfQuestion = props.data.questions;
  const [formData, setFormData] = useState({
    currentQuestion: 1,
    qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === 1),
    responses: [],
  });
  
  const [answer, setAnswer] = useState('');

  const handleOptionChange = (e: { detail: { value: React.SetStateAction<string>; }; }) => {
    setAnswer(e.detail.value)
  };

  const handleAnswer = (qId: number, ans: string) => {
    setFormData((prevData) => ({
      ...prevData,
      responses: prevData.responses.concat({
        'id' : qId,
        'answer' : ans
      })
    }));
    /* setFormData((prevData) => ({
      ...prevData,
      responses: {
        ...prevData.responses,
        ["questionNo"+qId]: answer,
      },
    })); */

    // Move to the next question
    /* const nextQuestionIndex = questions.findIndex(
      (question) => question.id === questionNo
    );
    if (nextQuestionIndex < questions.length - 1) {
      setFormData((prevData) => ({
        ...prevData,
        currentQuestion: questions[nextQuestionIndex + 1].id,
      }));
    } else {
      // Handle the case when all questions have been answered
      // You can navigate to the next step or perform other actions here
    } */
  };

  const onBtnBack = () => {
    //let prevAnswer = formData.responses.[idx]
    //console.log(formData.responses.fin)
    //setAnswer(formData.responses[f≈])
    if (formData.currentQuestion >= 1) {
      setFormData((prevData) => ({
        ...prevData,
        qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === formData.currentQuestion - 1),
        currentQuestion: formData.currentQuestion - 1,
      }));
    }
  }

  const onBtnNext = () => {
    handleAnswer(formData.currentQuestion,answer)

    if (formData.currentQuestion < listOfQuestion.length) {
      setFormData((prevData) => ({
        ...prevData,
        qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === formData.currentQuestion + 1),
        currentQuestion: formData.currentQuestion + 1,
      }));
    }
    else{
      setFormData((prevData) => ({
        ...prevData,
        currentQuestion: formData.currentQuestion + 1
      }));

    }
  }

  const quizForm = () => {
    return (
      <>
      <IonCardHeader>
        <IonCardSubtitle>Question # { formData.currentQuestion } </IonCardSubtitle>
        <IonCardTitle>{formData.qDetail.question}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRadioGroup value={answer} allowEmptySelection={false} onIonChange={handleOptionChange}>
        { formData.qDetail.options &&
          formData.qDetail.options.map((value: String,index: any) => {
            return(
                <div key={index}> 
                  <IonRadio aria-label="option label" value={value} labelPlacement="stacked" alignment="start" /> 
                  <IonLabel>&nbsp; {value}</IonLabel>
                </div>
            )
          })
        }
        </IonRadioGroup>
      </IonCardContent>
      </>
    )
  }

 const qAcard = (data: any) => {
   return (
      <>
        <IonButton key={data.index} color={data.color} fill={data.color === 'medium' ? "outline" : 'solid'}>
        { data.color !== 'medium' ? <IonIcon slot="start" icon={data.icon}></IonIcon> : ''}
          &nbsp; {data.val} 
        </IonButton>
        <br/>
      </>
   )
 }

  const answers = () => {
    return (
      <>
        { 
          //formData.responses.map((value: {id : number; answer: string},index: any) => {
          listOfQuestion.map( (qdata: { questionNo: number; question: string; correctAnswer: string; options: any}, index: any) => {
          let res = formData.responses.find((res: any) => res.id === qdata.questionNo)
          let isCorrect = 'incorrect'
          return (
            <IonCard key={index}>
                <IonCardHeader key={"header"+index}>
                  <IonCardSubtitle>Question #{qdata.questionNo}</IonCardSubtitle>
                  <IonCardTitle>{qdata.question}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent key={"cc"+index}>
                  {
                    qdata.options.map((val: String,index: any) => {
                      if((qdata.correctAnswer === val && val === res.answer) || (qdata.correctAnswer === val && val !== res.answer) ){
                        isCorrect = qdata.correctAnswer === res.answer ? 'correct' : 'incorrect';
                        return (
                          qAcard({ 'index' :index, 'icon':checkmarkCircleSharp, 'color': 'success',  'val':val  })
                        )
                      }
                      else if(qdata.correctAnswer !== res.answer && val === res.answer){
                        return (
                          qAcard({ 'index' :index, 'icon':closeCircleSharp, 'color': 'danger',  'val':val  })
                        )
                      }
                      else{
                        return (
                          qAcard({ 'index' :index, 'icon':closeCircleSharp, 'color': 'medium',  'val':val  })
                        )
                      }
                    })
                  }
                  <IonLabel>Your answer is <b>{isCorrect}</b>.</IonLabel>
                </IonCardContent>
              </IonCard>
          )

          })
        }
      </>
    )
  }


  return (
    <>
    {
      formData.currentQuestion <= 5 ?
      <IonCard>
        {quizForm()}      
        {formData.currentQuestion > 1 ? <IonButton fill="clear" onClick={onBtnBack}>Back</IonButton> : ''}
        <IonButton fill="clear" disabled={answer===''} onClick={onBtnNext}>{formData.currentQuestion != 5 ? 'Next' : 'Submit' }</IonButton>
      </IonCard>
      :
      <>
        {answers()}
      </>
    }
    </>
  );
};

export default QuestionContainer;