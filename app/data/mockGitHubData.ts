// app/data/mockGitHubData.ts
export const mockGitHubData = {
  stats: {
    username: 'LionotKennedy',
    name: 'Lionot Kennedy',
    repos: 24,
    stars: 42,
    followers: 12,
    following: 8,
    totalCommits: 156,
    contributions: 1103,
  },
  topLangs: [
    { language: 'TypeScript', percentage: 38, color: '#3178c6' },
    { language: 'JavaScript', percentage: 25, color: '#f1e05a' },
    { language: 'Python', percentage: 18, color: '#3572A5' },
    { language: 'CSS', percentage: 12, color: '#563d7c' },
    { language: 'HTML', percentage: 7, color: '#e34c26' },
    { language: 'Java', percentage: 5, color: '#b07219' },
  ],
  streak: {
    currentStreak: 15,
    longestStreak: 42,
    totalContributions: 1103,
    contributionsThisYear: 256,
    todayContributions: 12,
  },
  pinnedRepos: [
    {
      username: 'LionotKennedy',
      repo: 'portfolio',
      description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
      language: 'TypeScript',
      stars: 12,
      forks: 3,
      url: 'https://github.com/LionotKennedy/portfolio',
    },
  ],
};