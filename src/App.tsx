import React from 'react';
import { Questionnaire } from './components/Questionnaire';

const widgetConfig = {
  questionnaire_version: "1.0.0",
  upload_photo: true,
  start: "category_topics",
  end: {
    heading: "Because of you, a child...",
    body_photo_only: "Your photo will be sent to make a difference!",
    body_photo_and_questionnaire: "Your photo and thoughtful responses will be sent to make a difference!",
    body_skipped: "Thanks for visiting!"
  },
  category_topics: {
    type: "topic",
    cta: "Continue",
    options: [
      {
        key: "family",
        title: "Family",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
        go_to_key: "family_question"
      },
      {
        key: "pets",
        title: "Pets",
        image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800",
        go_to_key: "pets_question"
      }
    ]
  },
  family_question: {
    type: "textarea",
    title: "Tell us about the important people in your life",
    title_for_child: "Here's what your sponsor says about family: ",
    cta: "SUBMIT",
    go_to_key: "end"
  },
  pets_question: {
    type: "textarea",
    title: "What role do pets play in your life?",
    title_for_child: "Here's what your sponsor says about pets: ",
    cta: "SUBMIT",
    go_to_key: "end"
  }
};

function App() {
  return (
    <div className="min-h-screen bg-[#1a2b3c]">
      <Questionnaire config={widgetConfig} />
    </div>
  );
}

export default App;