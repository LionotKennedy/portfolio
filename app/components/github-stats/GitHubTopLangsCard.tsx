// components/github-stats/GitHubTopLangsCard.tsx
import React from 'react';
import { Code2 } from 'lucide-react';

interface TopLang {
  language: string;
  percentage: number;
  color: string;
}

interface GitHubTopLangsCardProps {
  data: TopLang[];
  theme: {
    titleColor: string;
    textColor: string;
    iconColor: string;
    background: string;
    hideBorder: boolean;
  };
}

const GitHubTopLangsCard: React.FC<GitHubTopLangsCardProps> = ({ data, theme }) => {
  return (
    <div 
      className={`
        rounded-lg p-4 md:p-6 backdrop-blur-sm
        ${theme.hideBorder ? '' : 'border border-gray-200 dark:border-gray-700'}
        h-full
      `}
      style={{ backgroundColor: theme.background }}
    >
      <div className="flex items-center mb-4 md:mb-6">
        <Code2 size={20} className="md:w-6 md:h-6" style={{ color: theme.iconColor }} />
        <h3 
          className="text-lg md:text-xl font-bold ml-2 md:ml-3"
          style={{ color: theme.titleColor }}
        >
          Top Languages
        </h3>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        {data.map((lang, index) => (
          <div key={index} className="space-y-1 md:space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span 
                  className="font-medium text-sm md:text-base truncate"
                  style={{ color: theme.textColor }}
                >
                  {lang.language}
                </span>
              </div>
              <span 
                className="font-bold text-sm md:text-base ml-2"
                style={{ color: theme.textColor }}
              >
                {lang.percentage}%
              </span>
            </div>
            <div className="h-1.5 md:h-2 rounded-full bg-gray-200/30 dark:bg-gray-700/30 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{
                  backgroundColor: lang.color,
                  width: `${lang.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
        <p className="text-xs opacity-80" style={{ color: theme.textColor }}>
          Based on public repositories
        </p>
      </div>
    </div>
  );
};

export default GitHubTopLangsCard;