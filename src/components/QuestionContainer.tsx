import { IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonThumbnail } from '@ionic/react';
import React, { useState } from 'react';
import './Quiz.css';
import { checkmarkCircleSharp, closeCircleSharp } from 'ionicons/icons';


const QuestionContainer = (props: any) => {
  const listOfQuestion = props.data.questions;
  const listOfCourseRecomm = props.courses.courses;
  const [formData, setFormData] = useState({
    currentQuestion: 1,
    qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === 1),
    responses: [] as { id: number; answer: string }[],
  });
  
  const [answer, setAnswer] = useState('');

  const handleOptionChange = (e: { detail: { value: React.SetStateAction<string>; }; }) => {
    setAnswer(e.detail.value)
  };

  const handleAnswer = (qId: number, ans: string) => {
    const prevAns = formData.responses.find((ansData: {id: number} )=> ansData?.id === formData.currentQuestion);
    if(prevAns !== undefined){
      const indx = formData.responses.findIndex((ansData: {id: number} )=> ansData?.id  === formData.currentQuestion);
      if (formData.responses[indx] !== undefined) {
        formData.responses[indx].answer = ans;
      }
    }else{
      setFormData((prevData) => ({
        ...prevData,
        responses: [...prevData.responses, {
          'id' : qId,
          'answer' : ans
        }],
      }));
    }
  };

  const onBtnBack = () => {
    if (formData.currentQuestion >= 1) {
      setFormData((prevData) => ({
        ...prevData,
        qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === formData.currentQuestion - 1),
        currentQuestion: formData.currentQuestion - 1,
      }));
      const foundResponse = formData.responses.find((ansData: { id: number }) => ansData?.id === formData.currentQuestion - 1);
      if (foundResponse !== undefined) {
        setAnswer(foundResponse.answer);
      }
      
    }
  }

  const onBtnNext = () => {
    if(answer != ''){
      handleAnswer(formData.currentQuestion,answer)
    }

    if (formData.currentQuestion < listOfQuestion.length) {
      setFormData((prevData) => ({
        ...prevData,
        qDetail: props.data.questions.find((item: { questionNo: number; }) => item.questionNo === formData.currentQuestion + 1),
        currentQuestion: formData.currentQuestion + 1,
      }));
      setAnswer('')
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
                  <IonRadio aria-label="option label" value={value} labelPlacement="stacked" alignment="start"/> 
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

  const courseSuggestion = (score:number) => {
    return (
      <IonGrid>
        <IonRow>
        {
          listOfCourseRecomm.map((val: { userScore:number; courseTitle: string; courseDescription: string; }) => {
            if(val.userScore === score){
              return (
                <IonCol>
                <IonCard color="secondary" className="courseCard">
                <IonCardHeader>
                  <IonCardTitle>{val.courseTitle}</IonCardTitle>
                  <IonCardSubtitle>{val.courseDescription}</IonCardSubtitle>
                </IonCardHeader>
                <IonButton fill="clear" href="https://testandtrain.com/" target="_blank">Click here to know more.</IonButton>
                </IonCard>
                </IonCol>
              )
            }
            
          })
        }
        </IonRow>
      </IonGrid>
    );
  }

  const qAcard = (data: any) => {
    return (
        <>
          <IonButton size="small" key={data.index} color={data.color} fill={data.color === 'medium' ? "outline" : 'solid'}>
          { data.color !== 'medium' ? <IonIcon slot="start" icon={data.icon}></IonIcon> : ''}
            &nbsp; {data.val} 
          </IonButton>
          <br/>
        </>
    )
  }

  const answers = () => {
    let ctrCorrect = 0;
    return (
      <>
        {
          listOfQuestion.map( (qdata: { questionNo: number; correctAnswer: string;}) => {
            let res = (formData.responses as { answer: string; id: number }[]).find(res => res.id === qdata.questionNo);

            if (res !== undefined) {
              ctrCorrect = (qdata.correctAnswer === res.answer) ? ctrCorrect + 1 : ctrCorrect;
            }
          })
        }
        <IonCard>
          <IonCardHeader>
          <IonCardSubtitle>Total Correct answers: </IonCardSubtitle>
          <IonCardTitle>{ctrCorrect} out of 5 questions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonCardSubtitle>Course recommendation: </IonCardSubtitle>
            {courseSuggestion(ctrCorrect)}
          </IonCardContent>
        </IonCard>
        
        { 
          listOfQuestion.map( (qdata: { questionNo: number; question: string; correctAnswer: string; options: any}, index: any) => {
          //let res = formData.responses.find((res: any) => res.id === qdata.questionNo)
          let res = (formData.responses as { answer: string; id: number }[]).find(res => res.id === qdata.questionNo);
          if (res !== undefined) {
          let responseAnswer = res.answer;
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
                      if((qdata.correctAnswer === val && val === responseAnswer) || (qdata.correctAnswer === val && val !== responseAnswer) ){
                        isCorrect = qdata.correctAnswer === responseAnswer ? 'correct' : 'incorrect';
                        return (
                          qAcard({ 'index' :index, 'icon':checkmarkCircleSharp, 'color': 'success',  'val':val  })
                        )
                      }
                      else if(qdata.correctAnswer !== responseAnswer && val === responseAnswer){
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
          }
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