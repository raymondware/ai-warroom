import React from 'react';
import { TextAreaQuestion as TextAreaQuestionType } from '../types/questionnaire';

interface TextAreaQuestionProps {
  question: TextAreaQuestionType;
  onSubmit: (answer: string) => void;
  onBack: () => void;
}

export function TextAreaQuestion({ question, onSubmit, onBack }: TextAreaQuestionProps) {
  const [answer, setAnswer] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answer);
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="topic-card mb-6">
          <h2 className="text-xl mb-4">{question.title}</h2>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="textarea-input"
            placeholder="Type your message..."
          />
        </div>

        <div className="flex justify-between items-center mb-8">
          <button type="button" onClick={onBack} className="btn-secondary flex items-center gap-2">
            ← Back to topics
          </button>
          <button type="button" onClick={() => onSubmit('')} className="btn-secondary">
            Skip message
          </button>
        </div>

        <button
          type="submit"
          className="btn-primary"
        >
          {question.cta}
        </button>

        <p className="text-xs text-gray-400 mt-8 text-center">
          For more information about World Vision's purpose, programs, or to see our annual financial reports visit www.worldvision.org
        </p>
      </form>
    </div>
  );
}