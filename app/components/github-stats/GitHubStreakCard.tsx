// components/github-stats/GitHubStreakCard.tsx
import React from 'react';
import { Flame, Trophy, Calendar, Zap } from 'lucide-react';

interface GitHubStreakCardProps {
  data: {
    currentStreak: number;
    longestStreak: number;
    totalContributions: number;
    contributionsThisYear: number;
    todayContributions: number;
  };
  theme: {
    background: string;
    ringColor: string;
    labelColor: string;
    hideBorder: boolean;
  };
}

const GitHubStreakCard: React.FC<GitHubStreakCardProps> = ({ data, theme }) => {
  return (
    <div 
      className={`
        rounded-lg p-4 md:p-6 backdrop-blur-sm
        ${theme.hideBorder ? '' : 'border border-gray-200 dark:border-gray-700'}
        relative overflow-hidden
        h-full
      `}
      style={{ backgroundColor: theme.background }}
    >
      <div 
        className="absolute -top-10 -right-10 w-20 h-20 md:w-40 md:h-40 rounded-full opacity-10 md:opacity-20"
        style={{ backgroundColor: theme.ringColor }}
      />
      
      <div className="relative">
        <div className="flex items-center mb-4 md:mb-8">
          <div className="flex items-center">
            <Flame className="mr-2" size={20} style={{ color: theme.labelColor }} />
            <h3 
              className="text-lg md:text-xl font-bold"
              style={{ color: theme.labelColor }}
            >
              Contribution Streak
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/5 dark:bg-black/5">
            <div 
              className="text-2xl md:text-4xl font-bold mb-1 md:mb-2"
              style={{ color: theme.labelColor }}
            >
              {data.currentStreak}
            </div>
            <div className="flex items-center justify-center" style={{ color: theme.labelColor }}>
              <Flame size={14} className="mr-1" />
              <span className="text-xs md:text-sm">Current streak</span>
            </div>
          </div>
          
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/5 dark:bg-black/5">
            <div 
              className="text-2xl md:text-4xl font-bold mb-1 md:mb-2"
              style={{ color: theme.labelColor }}
            >
              {data.longestStreak}
            </div>
            <div className="flex items-center justify-center" style={{ color: theme.labelColor }}>
              <Trophy size={14} className="mr-1" />
              <span className="text-xs md:text-sm">Longest streak</span>
            </div>
          </div>
          
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/5 dark:bg-black/5">
            <div 
              className="text-xl md:text-3xl font-bold mb-1 md:mb-2"
              style={{ color: theme.labelColor }}
            >
              {data.contributionsThisYear.toLocaleString()}
            </div>
            <div className="flex items-center justify-center" style={{ color: theme.labelColor }}>
              <Calendar size={14} className="mr-1" />
              <span className="text-xs md:text-sm">This year</span>
            </div>
          </div>
          
          <div className="text-center p-2 md:p-3 rounded-lg bg-white/5 dark:bg-black/5">
            <div 
              className="text-xl md:text-3xl font-bold mb-1 md:mb-2"
              style={{ color: theme.labelColor }}
            >
              {data.totalContributions.toLocaleString()}
            </div>
            <div className="flex items-center justify-center" style={{ color: theme.labelColor }}>
              <Zap size={14} className="mr-1" />
              <span className="text-xs md:text-sm">Total</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-8">
          <div className="flex justify-between text-xs md:text-sm mb-1 md:mb-2" style={{ color: theme.labelColor }}>
            <span>Streak progress</span>
            <span>{data.currentStreak}/{data.longestStreak} days</span>
          </div>
          <div className="h-1.5 md:h-2 rounded-full bg-gray-200/20 dark:bg-gray-700/20 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{
                backgroundColor: theme.ringColor,
                width: `${(data.currentStreak / data.longestStreak) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 text-xs opacity-70" style={{ color: theme.labelColor }}>
            {data.todayContributions} contributions today
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStreakCard;