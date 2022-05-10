import { useCallback } from 'react';
import { emitCustomEvent } from 'react-custom-events';
import * as CustomEventConstants from '../components/CustomEventConstants';
import "survey-core/defaultV2.css";
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { json } from '../resources/softwareclasssurvey';

StylesManager.applyTheme("defaultV2");

export default function SoftwareTypeSurvey() {
    
  const survey = new Model(json);
  
  const alertResults = useCallback((sender:any) => {
    console.log(sender.data);
    
    let q1 = sender.data.solution_or_component;
    if (q1 != undefined) {
      console.log("q1 = " + q1);
      emitCustomEvent(CustomEventConstants.SOFTWARE_TYPE_SURVEY_EVENT, 'solution_or_component');
    }
  }, []);   
  
  survey.onValueChanged.add(alertResults);

  return <Survey model={survey} />;

}

    /*
    survey.onComplete.add(function (sender: any) {
        document.querySelector('#surveyResult')!.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });
    */
    //survey.completedHtml = "<p> Done </p>";

// Modern theme
//import 'survey-core/modern.min.css';
// Default theme
//import 'survey-core/survey.min.css';