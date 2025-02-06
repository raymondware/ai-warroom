export interface WidgetConfig {
  questionnaire_version: string;
  upload_photo: boolean;
  start: string;
  end: {
    heading: string;
    body_photo_only: string;
    body_photo_and_questionnaire: string;
    body_skipped: string;
  };
  [key: string]: any;
}

export interface TopicOption {
  key: string;
  title: string;
  image: string;
  go_to_key: string;
}

export interface TopicQuestion {
  type: 'topic';
  cta: string;
  options: TopicOption[];
}

export interface TextAreaQuestion {
  type: 'textarea';
  title: string;
  title_for_child: string;
  cta: string;
  go_to_key: string;
}

export type Question = TopicQuestion | TextAreaQuestion;

export interface QuestionnaireAnswers {
  [key: string]: string;
}