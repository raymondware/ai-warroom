import React from 'react';
import { TopicQuestion as TopicQuestionType, TopicOption } from '../types/questionnaire';
import { Users, Fish } from 'lucide-react';

interface TopicQuestionProps {
  question: TopicQuestionType;
  onSelect: (option: TopicOption) => void;
  onBack: () => void;
}

export function TopicQuestion({ question, onSelect, onBack }: TopicQuestionProps) {
  const getIcon = (key: string) => {
    switch (key) {
      case 'family':
        return <Users className="w-12 h-12 text-[#008294]" />;
      case 'pets':
        return <Fish className="w-12 h-12 text-[#008294]" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <h2 className="text-xl mb-2">Add a message</h2>
      <p className="text-gray-300 mb-6">Say hello with a quick note! Pick a topic and share a little about yourself.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {question.options.map((option) => (
          <button
            key={option.key}
            onClick={() => onSelect(option)}
            className="topic-card"
          >
            {getIcon(option.key)}
            <span className="text-sm font-medium mt-2">{option.title.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button onClick={onBack} className="btn-secondary flex items-center gap-2">
          ← Back to photo
        </button>
        <button onClick={() => onSelect({ key: 'skip', title: '', image: '', go_to_key: 'end' })} className="btn-secondary">
          Skip message
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center">
        For more information about World Vision's purpose, programs, or to see our annual financial reports visit www.worldvision.org
      </p>
    </div>
  );
}