import React, { useState } from 'react';
import { WidgetConfig, QuestionnaireAnswers, TopicOption } from '../types/questionnaire';
import { TopicQuestion } from './TopicQuestion';
import { TextAreaQuestion } from './TextAreaQuestion';
import { EndScreen } from './EndScreen';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionnaireProps {
  config: WidgetConfig;
}

export function Questionnaire({ config }: QuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState<'questions' | 'end'>('questions');
  const [currentQuestionKey, setCurrentQuestionKey] = useState<string>(config.start);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [skipped, setSkipped] = useState(false);

  const currentQuestion = config[currentQuestionKey];

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
    <div className="py-8 min-h-screen">
      <div className="mb-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 572.1 109.8" 
          className="mx-auto h-8"
        >
          <title>World Vision</title>
          <path 
            className="logo-edge__path" 
            fill="#ff6b00" 
            d="M370.9.6c-.2 0-.3-.1-.3-.3s.1-.3.3-.3h180.8v109.8C509.3 49.8 443.8 10.2 370.9.6"
          ></path>
          <path 
            className="logo-cross__path" 
            fill="#ffffff" 
            d="M521.9 64c1.2-18.1.8-28.6 3.9-31.5 2.9-2.6 8-3.4 16.8-4-19.2-2.2-18.8-1.6-20.7-20.4-1.9 18.7-1.5 18.1-20.7 20.4 8.8.6 13.9 1.4 16.8 4 3.1 2.8 2.7 13.4 3.9 31.5"
          ></path>
          <path 
            className="logo-text__path" 
            fill="#ffffff" 
            d="M141 68.7v39.1h10.8V76c3.6-3.1 6.2-2.1 13.4 3.8l4.4-9.8c-2.8-1.3-5.9-2-9-2-3.2-.1-6.4 1.3-8.5 3.7l-.5.6-.1-.1.1-3.6zM184.7 48h-10.8v59.7h10.8zM92.2 88.2c0 10.9 8.1 20 21.2 20s21.2-9 21.2-20-8.1-20-21.2-20-21.2 9.1-21.2 20m229.3-19.5h-10.8v39.1h10.8zM317.4 51c-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7 3.2 0 5.7-2.6 5.7-5.7s-2.4-5.7-5.5-5.7h-.2m10.8 28.4c-1 14.9 20.8 11.3 20.1 20.4-.3 3.6-3.4 4.9-6.8 4.8-5.4-.4-8.7-3.5-11.6-7l-3.2 7.2c4.1 2.3 8.6 3.7 13.3 4 9.4.6 17.2-3.4 17.8-12.5.9-14-21.6-12.3-21.2-19.4.2-3.1 3.7-4.7 7.4-4.5s6.6 2.4 9.9 5.3l2.9-6.5c-3.6-1.6-7.4-2.5-11.3-2.9-10.1-.6-16.8 4.7-17.3 11.1m-117.5 29.2c4.7 0 9.3-1.7 13-4.7l.2.1v3.7h10V48H223v23.8c-3.6-2.5-7.9-3.8-12.2-3.7-5.9 0-20 3.6-20 20.8-.1 12.7 11.2 19.7 19.9 19.7m70.5-.9h4.6l22.9-52.5h-5.9l-15.9 36.9-15.7-36.9H258zm191.3 0V86.2c0-14.5-11.1-18.2-17.7-18.2-4.7 0-8.6 1.8-12.6 4.5l-.2-.1v-3.7h-10v39.1h10.9V76.3c3.2-2.8 6.3-4 9-4 5.7 0 9.7 5.5 9.7 11.5v23.9zM64.1 60.3H58L45.7 92 32.6 55.5H20l19.4 52.1h5.9l12.6-32.2 12.5 32.2h5.9l19.4-52h-5.9L76.2 92zm59.1 27.9c0 9-3 16.2-9.8 16.2s-9.8-7.2-9.8-16.2 3-16.2 9.8-16.2 9.8 7.2 9.8 16.2m259.5 0c0 10.9 8.1 20 21.2 20s21.2-9 21.2-20-8.1-20-21.2-20-21.2 9.1-21.2 20m31 0c0 9-3 16.2-9.8 16.2s-9.8-7.2-9.8-16.2 3-16.2 9.8-16.2 9.8 7.2 9.8 16.2M223.1 76.5v23.6c-2.8 2.4-5.4 4.2-9.4 4.2-4.8 0-11-4-11-15.8 0-12.8 9.9-21.9 20.4-12M364.8 68.7h10.8v39.1h-10.8zM370.6 51c-3.2 0-5.7 2.6-5.7 5.7 0 3.2 2.6 5.7 5.7 5.7 3.2 0 5.7-2.6 5.7-5.7s-2.4-5.7-5.5-5.7h-.2M570.5 4.4c2.1 2.1 2.1 5.4 0 7.5-1 1-2.3 1.6-3.7 1.6-2.9 0-5.3-2.3-5.4-5.3 0-2.9 2.3-5.3 5.3-5.4 1.4 0 2.8.6 3.8 1.6zm-.4 7.1c1.9-1.8 1.9-4.8 0-6.7s-4.8-1.9-6.7 0c-1.9 1.8-1.9 4.8 0 6.7.9.9 2.1 1.4 3.3 1.4 1.3 0 2.5-.5 3.4-1.4zm-5.7-6.4h2.6c.5 0 1.1.1 1.5.4.6.6.7 1.5.2 2.2l-.1.1c-.3.3-.7.5-1.2.5l.6.3c.2.2.4.4.5.6l1.1 1.7h-1.4l-.9-1.5c-.1-.3-.4-.5-.6-.8-.2-.1-.4-.1-.7-.1h-.5v2.4h-1.2V5.1zm2 2.8c.3 0 .6-.1.9-.2.2-.2.4-.4.4-.7 0-.6-.4-.9-1.2-.9h-.9V8zM484.2 68.5c2.1 2.1 2 5.4 0 7.5-2.1 2.1-5.4 2-7.5 0-2.1-2.1-2-5.4 0-7.5 1-1 2.3-1.5 3.7-1.5s2.8.5 3.8 1.5zm-.4 7.1c.9-.9 1.4-2.1 1.4-3.4 0-2.6-2.1-4.7-4.7-4.8-2.6 0-4.7 2.1-4.8 4.7 0 1.3.5 2.5 1.4 3.4 1.9 2 4.9 2 6.7.1zm-5.7-6.3h2.5c.5 0 1.1.1 1.5.4.6.5.7 1.5.2 2.2l-.1.1c-.3.3-.7.5-1.2.5.2.1.4.2.6.4s.3.4.5.6l1.1 1.7h-1.4l-.9-1.5c-.1-.3-.4-.5-.6-.8-.2-.1-.4-.1-.7-.1h-.5v2.4h-1.2zm2 2.7c.3 0 .7-.1.9-.2.2-.2.4-.4.3-.7 0-.6-.4-.9-1.2-.9h-.9V72z"></path>
        </svg>
      </div>

      <div className="relative" style={{ minHeight: '300px' }}>
        <AnimatePresence mode="wait">
          {currentStep === 'questions' && currentQuestion?.type === 'topic' && (
            <motion.div
              key={currentQuestionKey + '-topic'}
              style={{ position: 'absolute', width: '100%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TopicQuestion
                question={currentQuestion}
                onSelect={handleTopicSelect}
                onBack={handleBackToTopics}
              />
            </motion.div>
          )}

          {currentStep === 'questions' && currentQuestion?.type === 'textarea' && (
            <motion.div
              key={currentQuestionKey + '-textarea'}
              style={{ position: 'absolute', width: '100%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TextAreaQuestion
                question={currentQuestion}
                onSubmit={handleTextAreaSubmit}
                onBack={handleBackToTopics}
              />
            </motion.div>
          )}

          {currentStep === 'end' && (
            <motion.div
              key="end"
              style={{ position: 'absolute', width: '100%' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <EndScreen config={config} answers={answers} skipped={skipped} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}