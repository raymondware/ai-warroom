import React from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploadProps {
  onComplete: () => void;
}

export function PhotoUpload({ onComplete }: PhotoUploadProps) {
  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-[#1f3346] rounded-lg p-6 mb-6">
        <div className="aspect-video bg-[#2a4257] rounded-lg flex items-center justify-center mb-4">
          <Upload className="w-12 h-12 text-[#008294]" />
        </div>
        <p className="text-center text-gray-300">
          Your photo will appear here
        </p>
      </div>

      <button
        onClick={onComplete}
        className="btn-primary"
      >
        Continue
      </button>

      <p className="text-xs text-gray-400 mt-8 text-center">
        For more information about World Vision's purpose, programs, or to see our annual financial reports visit www.worldvision.org
      </p>
    </div>
  );
}