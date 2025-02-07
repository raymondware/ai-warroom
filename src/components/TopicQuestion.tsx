import React from 'react';
import { TopicQuestion as TopicQuestionType, TopicOption } from '../types/questionnaire';
import { Users, Fish, Coffee, Star } from 'lucide-react';

interface TopicQuestionProps {
  question: TopicQuestionType;
  onSelect: (option: TopicOption) => void;
  onBack: () => void;
}

export function TopicQuestion({ question, onSelect, onBack }: TopicQuestionProps) {
  const getIcon = (key: string) => {
    switch (key) {
      case 'family':
        return <Users className="w-12 h-12 text-[#ff6b00]" />;
      case 'pets':
        return <Fish className="w-12 h-12 text-[#ff6b00]" />;
      case 'hobby':
        return <Star className="w-12 h-12 text-[#ff6b00]" />;
      case 'food':
        return <Coffee className="w-12 h-12 text-[#ff6b00]" />;
      default:
        return null;
    }
  };

  const options = [...question.options];

  return (
    <div className="px-4 mx-auto max-w-md">
      <h2 className="mb-2 text-xl">Add a message</h2>
      <p className="mb-6 text-gray-300">Say hello with a quick note! Pick a topic and share a little about yourself.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {options.map((option) => (
          <button
            key={option.key}
            onClick={() => onSelect(option)}
            className="topic-card"
          >
            {getIcon(option.key)}
            <span className="mt-2 text-sm font-medium">{option.title.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button onClick={onBack} className="flex gap-2 items-center btn-secondary">
          ← Back to photo
        </button>
        <button onClick={() => onSelect({ key: 'skip', title: '', image: '', go_to_key: 'end' })} className="btn-secondary">
          Skip message
        </button>
      </div>

      <p className="mt-8 text-xs text-center text-gray-400">
        For more information about World Vision's purpose, programs, or to see our annual financial reports visit www.worldvision.org
      </p>
    </div>
  );
}