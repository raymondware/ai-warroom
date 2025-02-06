import React, { useState } from 'react';
import { WidgetConfig, QuestionnaireAnswers, TopicOption } from '../types/questionnaire';
import { PhotoUpload } from './PhotoUpload';
import { TopicQuestion } from './TopicQuestion';
import { TextAreaQuestion } from './TextAreaQuestion';
import { EndScreen } from './EndScreen';

interface QuestionnaireProps {
  config: WidgetConfig;
}

export function Questionnaire({ config }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState<'photo' | 'questions' | 'end'>('photo');
  const [currentQuestionKey, setCurrentQuestionKey] = useState<string>(config.start);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [skipped, setSkipped] = useState(false);

  const currentQuestion = config[currentQuestionKey];

  const handlePhotoComplete = () => {
    setCurrentStep('questions');
  };

  const handleBackToPhoto = () => {
    setCurrentStep('photo');
  };

  const handleBackToTopics = () => {
    setCurrentQuestionKey(config.start);
  };

  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep('end');
  };

  const handleTopicSelect = (option: TopicOption) => {
    setCurrentQuestionKey(option.go_to_key);
    if (option.go_to_key === 'end') {
      setCurrentStep('end');
    }
  };

  const handleTextAreaSubmit = (answer: string) => {
    const question = config[currentQuestionKey];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionKey]: answer,
    }));
    
    if (question.go_to_key === 'end') {
      setCurrentStep('end');
    } else {
      setCurrentQuestionKey(question.go_to_key);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mb-8">
        <img 
          src="https://www.worldvision.org/wp-content/themes/worldvision/assets/img/wv-logo.svg"
          alt="World Vision"
          className="h-8 mx-auto"
        />
      </div>

      {currentStep === 'photo' && (
        <PhotoUpload onComplete={handlePhotoComplete} />
      )}

      {currentStep === 'questions' && currentQuestion?.type === 'topic' && (
        <TopicQuestion
          question={currentQuestion}
          onSelect={handleTopicSelect}
          onBack={handleBackToPhoto}
        />
      )}

      {currentStep === 'questions' && currentQuestion?.type === 'textarea' && (
        <TextAreaQuestion
          question={currentQuestion}
          onSubmit={handleTextAreaSubmit}
          onBack={handleBackToTopics}
        />
      )}

      {currentStep === 'end' && (
        <EndScreen config={config} answers={answers} skipped={skipped} />
      )}
    </div>
  );
}