// components/github-stats/GitHubPinnedRepoCard.tsx
import React from 'react';
import { Star, GitFork, ExternalLink, FolderGit, Code2 } from 'lucide-react';
import Link from 'next/link';

interface GitHubPinnedRepoCardProps {
  data: {
    username: string;
    repo: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  };
  theme: {
    titleColor: string;
    textColor: string;
    iconColor: string;
    hideBorder: boolean;
  };
}

const GitHubPinnedRepoCard: React.FC<GitHubPinnedRepoCardProps> = ({ data, theme }) => {
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'CSS': '#563d7c',
      'HTML': '#e34c26',
      'Java': '#b07219',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
    };
    return colors[lang] || '#007acc';
  };

  return (
    <Link href={data.url} target="_blank" className="block h-full">
      {/* <div className={`
        rounded-lg p-4 md:p-6 backdrop-blur-sm
        ${theme.hideBorder ? '' : 'border border-gray-200 dark:border-gray-700'}
        bg-gradient-to-br from-white/5 to-white/10
        dark:from-gray-900/20 dark:to-gray-800/30
        hover:from-white/10 hover:to-white/15
        dark:hover:from-gray-900/30 dark:hover:to-gray-800/40
        transition-all duration-300 hover:scale-[1.01] hover:shadow-md
        cursor-pointer group h-full
      `}> */}
      <div>
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div className="flex items-center space-x-2 md:space-x-3">
            <FolderGit size={20} className="md:w-6 md:h-6" style={{ color: theme.iconColor }} />
            <div className="min-w-0">
              <h4
                className="font-bold text-base md:text-lg truncate group-hover:underline"
                style={{ color: theme.titleColor }}
              >
                {data.repo}
              </h4>
              <p className="text-xs opacity-70 truncate" style={{ color: theme.textColor }}>
                {data.username}/{data.repo}
              </p>
            </div>
          </div>
          <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 flex-shrink-0" />
        </div>

        <p
          className="text-sm mb-4 md:mb-6 line-clamp-2 h-10 md:h-12"
          style={{ color: theme.textColor }}
        >
          {data.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex items-center space-x-1 md:space-x-2">
              <div
                className="w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: getLanguageColor(data.language) }}
              />
              <span
                className="text-xs md:text-sm truncate max-w-[80px] md:max-w-[100px]"
                style={{ color: theme.textColor }}
              >
                {data.language}
              </span>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="flex items-center space-x-1">
                <Star size={14} className="opacity-70 flex-shrink-0" />
                <span
                  className="text-xs md:text-sm"
                  style={{ color: theme.textColor }}
                >
                  {data.stars}
                </span>
              </div>

              <div className="flex items-center space-x-1">
                <GitFork size={14} className="opacity-70 flex-shrink-0" />
                <span
                  className="text-xs md:text-sm"
                  style={{ color: theme.textColor }}
                >
                  {data.forks}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-xs opacity-50" style={{ color: theme.textColor }}>
            <Code2 size={12} />
            <span>Public</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200/20 dark:border-gray-700/20">
          <div className="flex justify-between items-center">
            <span className="text-xs opacity-70">Updated</span>
            <span className="text-xs font-medium" style={{ color: theme.textColor }}>
              2 days ago
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GitHubPinnedRepoCard;