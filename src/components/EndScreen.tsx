import React from 'react';
import { WidgetConfig, QuestionnaireAnswers } from '../types/questionnaire';
import { Users } from 'lucide-react';

interface EndScreenProps {
  config: WidgetConfig;
  answers: QuestionnaireAnswers;
  skipped: boolean;
}

export function EndScreen({ config, answers, skipped }: EndScreenProps) {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="bg-[#1f3346] rounded-lg p-8 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-[#2a4257] rounded-lg flex items-center justify-center">
          <Users className="w-12 h-12 text-[#008294]" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">
          Because of You, a Child Will Feel Seen, Known, and Loved!
        </h2>
        
        <p className="text-gray-300 mb-8">
          Great! Your photo and answers will be placed on a card and sent to your child. Keep an eye out for a response to your card!
        </p>

        <div className="text-left mb-8">
          <h3 className="text-lg font-semibold mb-4">Here's what we're sending you:</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• A confirmation email and receipt</li>
            <li>• A sponsorship welcome kit</li>
            <li>• A letter from your sponsored child</li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          For more information about World Vision's purpose, programs, or to see our annual financial reports visit www.worldvision.org
        </p>
      </div>
    </div>
  );
}