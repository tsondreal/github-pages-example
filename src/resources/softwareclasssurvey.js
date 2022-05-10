export const json = {
    "pages": [
     {
      "name": "page1",
      "clearInvisibleValues": "onHidden",
      "elements": [
      {
        "type": "radiogroup",
        "name": "solution_or_component",
        "title": "Is this an Application or an IT component",
        "isRequired": true,
        "choices": [
            {
                "value": "solution",
                "text": "This is an application used by the end user in a business context"
            }, {
                "value": "itComponent",
                "text": "This is technology (software or service) that end user Applications require to function"
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "solution_business_it_facing",
        "visibleIf": "{solution_or_component} = solution",
        "title": "Is the End User business or IT facing",
        "isRequired": true,
        "choices": [
            {
                "value": "businessFacing",
                "text": "Business-facing:  Lines of business, external business customers, external business partners"
            }, {
                "value": "itFacing",
                "text": "IT-facing:  Software delivery, operations, support, platform, and infrastructure teams"
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "solution_business_facing",
        "visibleIf": "{solution_business_it_facing} = businessfacing",
        "title": "What is the type of this business-facing solution",
        "isRequired": true,
        "choices": [
            {
                "value": "businessSolution",
                "text": "Business solution:  Enable product and external customer focused business capabilities"
            }, {
                "value": "sharedSolution",
                "text": "Shared and corporate solution:  Core operating capabilities of Allstate"
            }, {
              "value": "workplaceSolution",
              "text": "Workplace solution:  Workforce enablement"
          }
        ]
      },
      {
        "type": "dropdown",
        "name": "business_solution_dropdown",
        "visibleIf": "{solution_business_facing} = businessSolution",
        "title": "Select the Application category",
        "isRequired": true,
        "colCount": 0,
        "choices": [
            "Product Management",
            "Sales and Marketing",
            "Manufacturing and Delivery",
            "Customer Service",
        ]
    },
  
      

      {
        "type": "rating",
        "name": "recommend friends",
        "visibleIf": "{solution_or_component} = never",
        "title": "How likely are you to recommend the Product to a friend or co-worker?",
        "mininumRateDescription": "Will not recommend",
        "maximumRateDescription": "I will recommend"
      },

      ]
     },

     {
      "name": "page2",
      "clearInvisibleValues": "onHidden",
      "elements": [
      {
        "type": "radiogroup",
        "name": "solution_or_component",
        "title": "Is this an Application or an IT component",
        "isRequired": true,
        "choices": [
            {
                "value": "solution",
                "text": "This is an application used by the end user in a business context"
            }, {
                "value": "itComponent",
                "text": "This is technology (software or service) that end user Applications require to function"
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "solution_business_it_facing",
        "visibleIf": "{solution_or_component} = solution",
        "title": "Is the End User business or IT facing",
        "isRequired": true,
        "choices": [
            {
                "value": "businessFacing",
                "text": "Business-facing:  Lines of business, external business customers, external business partners"
            }, {
                "value": "itFacing",
                "text": "IT-facing:  Software delivery, operations, support, platform, and infrastructure teams"
            }
        ]
      },
      {
        "type": "radiogroup",
        "name": "solution_business_facing",
        "visibleIf": "{solution_business_it_facing} = businessfacing",
        "title": "What is the type of this business-facing solution",
        "isRequired": true,
        "choices": [
            {
                "value": "businessSolution",
                "text": "Business solution:  Enable product and external customer focused business capabilities"
            }, {
                "value": "sharedSolution",
                "text": "Shared and corporate solution:  Core operating capabilities of Allstate"
            }, {
              "value": "workplaceSolution",
              "text": "Workplace solution:  Workforce enablement"
          }
        ]
      },
      {
        "type": "dropdown",
        "name": "business_solution_dropdown",
        "visibleIf": "{solution_business_facing} = businessSolution",
        "title": "Select the Application category",
        "isRequired": true,
        "colCount": 0,
        "choices": [
            "Product Management",
            "Sales and Marketing",
            "Manufacturing and Delivery",
            "Customer Service",
        ]
    },
  
      

      {
        "type": "rating",
        "name": "recommend friends",
        "visibleIf": "{solution_or_component} = never",
        "title": "How likely are you to recommend the Product to a friend or co-worker?",
        "mininumRateDescription": "Will not recommend",
        "maximumRateDescription": "I will recommend"
      },

      ]
     }


    ],
    "showQuestionNumbers": "off"
   };
