// components/github-stats/GitHubStatsCard.tsx
import React from 'react';
import { Star, GitFork, Users, GitBranch, GitCommit, User } from 'lucide-react';

interface GitHubStatsCardProps {
  data: {
    username: string;
    name: string;
    repos: number;
    stars: number;
    followers: number;
    following: number;
    totalCommits: number;
    contributions: number;
  };
  theme: {
    titleColor: string;
    textColor: string;
    iconColor: string;
    hideBorder: boolean;
  };
}

const GitHubStatsCard: React.FC<GitHubStatsCardProps> = ({ data, theme }) => {
  return (
    <div className={`
      rounded-lg p-4 md:p-6 backdrop-blur-sm
      ${theme.hideBorder ? '' : 'border border-gray-200 dark:border-gray-700'}
      bg-gradient-to-br from-white/5 to-white/10
      dark:from-gray-900/20 dark:to-gray-800/30
      shadow-sm hover:shadow-md transition-shadow duration-300
      h-full
    `}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
        <div className="mb-4 md:mb-0">
          <h3 
            className="text-lg md:text-xl font-bold"
            style={{ color: theme.titleColor }}
          >
            {data.name}
          </h3>
          <p className="text-xs md:text-sm opacity-80">@{data.username}</p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-2xl md:text-3xl font-bold" style={{ color: theme.textColor }}>
            {data.contributions.toLocaleString()}
          </p>
          <p className="text-xs opacity-70">Total Contributions</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <StatItem
          icon={<Star size={16} className="md:w-5 md:h-5" />}
          label="Stars"
          value={data.stars}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
        <StatItem
          icon={<GitFork size={16} className="md:w-5 md:h-5" />}
          label="Forks"
          value={data.followers}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
        <StatItem
          icon={<Users size={16} className="md:w-5 md:h-5" />}
          label="Followers"
          value={data.followers}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
        <StatItem
          icon={<GitBranch size={16} className="md:w-5 md:h-5" />}
          label="Repos"
          value={data.repos}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
        <StatItem
          icon={<GitCommit size={16} className="md:w-5 md:h-5" />}
          label="Commits"
          value={data.totalCommits}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
        <StatItem
          icon={<User size={16} className="md:w-5 md:h-5" />}
          label="Following"
          value={data.following}
          iconColor={theme.iconColor}
          textColor={theme.textColor}
        />
      </div>
      
      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
        <div className="flex justify-between items-center">
          <p className="text-xs opacity-70">Last updated</p>
          <p className="text-xs font-medium" style={{ color: theme.textColor }}>
            {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
          </p>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: number;
  iconColor: string;
  textColor: string;
}> = ({ icon, label, value, iconColor, textColor }) => (
  <div className="flex items-center space-x-2 md:space-x-3 p-2 rounded-lg bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
    <div style={{ color: iconColor }} className="flex-shrink-0">{icon}</div>
    <div className="min-w-0 flex-1">
      <p className="font-semibold text-sm md:text-base truncate" style={{ color: textColor }}>
        {value.toLocaleString()}
      </p>
      <p className="text-xs opacity-70 truncate">{label}</p>
    </div>
  </div>
);

export default GitHubStatsCard;