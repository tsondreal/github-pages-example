import { useCallback } from 'react';
// Modern theme
//import 'survey-core/modern.min.css';
// Default theme
//import 'survey-core/survey.min.css';
import "survey-core/defaultV2.css";
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { json } from '../resources/softwareclasssurvey';

StylesManager.applyTheme("defaultV2");

export default function SoftwareClassSurvey() {
    
  const survey = new Model(json);

  const alertResults = useCallback((sender:any) => {
      const results = JSON.stringify(sender.data);
      alert(results);
    }, []);    

    /*
    survey.onComplete.add(function (sender: any) {
        document.querySelector('#surveyResult')!.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });
    */
    //survey.completedHtml = "<p> Done </p>";
    //survey.onComplete.add(alertResults);

  return <Survey model={survey} />;

}