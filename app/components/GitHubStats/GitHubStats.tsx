
// src/components/GitHubStats/GitHubStats.tsx
"use client";

import React, { useState, useEffect } from 'react';

interface GitHubStatsProps {
    username: string;
    theme?: 'transparent' | 'dark' | 'light';
    showBorder?: boolean;
    titleColor?: string;
    textColor?: string;
    iconColor?: string;
    textBold?: boolean;
    background?: string;
}

interface StatsData {
    totalStars: number;
    totalCommits: number;
    totalPRs: number;
    totalIssues: number;
    contributedTo: number;
    languages: Array<{
        name: string;
        value: number;
        color: string;
    }>;
    repos: Array<{
        name: string;
        stars: number;
        description: string;
        language: string;
    }>;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
    username,
    theme = 'transparent',
    showBorder = false,
    titleColor = '#0066cc',
    textColor = '#000000',
    iconColor = '#FEFE5B',
    textBold = false,
    background
}) => {
    const [stats, setStats] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchGitHubStats();
    }, [username]);

    const fetchGitHubStats = async () => {
        try {
            setLoading(true);
            setError(null);

            // Simulation des données GitHub
            const mockStats: StatsData = {
                totalStars: 847,
                totalCommits: 2341,
                totalPRs: 128,
                totalIssues: 89,
                contributedTo: 42,
                languages: [
                    { name: 'TypeScript', value: 45, color: '#3178c6' },
                    { name: 'JavaScript', value: 30, color: '#f1e05a' },
                    { name: 'React', value: 15, color: '#61dafb' },
                    { name: 'Python', value: 10, color: '#3776ab' }
                ],
                repos: [
                    { name: 'portfolio', stars: 156, description: 'Mon portfolio personnel', language: 'TypeScript' },
                    { name: 'nextjs-app', stars: 89, description: 'Application Next.js', language: 'JavaScript' },
                    { name: 'react-components', stars: 234, description: 'Bibliothèque de composants', language: 'TypeScript' }
                ]
            };

            setTimeout(() => {
                setStats(mockStats);
                setLoading(false);
            }, 1000);

        } catch (err) {
            setError('Erreur lors du chargement des stats GitHub');
            setLoading(false);
        }
    };

    const getThemeStyles = () => {
        const baseStyles = {
            backgroundColor: background || (theme === 'transparent' ? 'transparent' : theme === 'dark' ? '#1a1a1a' : '#ffffff'),
            color: textColor,
            border: showBorder ? `1px solid ${textColor}20` : 'none',
            borderRadius: '8px',
            padding: '16px'
        };
        return baseStyles;
    };

    if (loading) {
        return (
            <div
                className="glass-effect p-4 rounded-lg"
                style={getThemeStyles()}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse"></div>
                    <h3
                        className={`text-lg ${textBold ? 'font-bold' : 'font-semibold'}`}
                        style={{ color: titleColor }}
                    >
                        Chargement des stats...
                    </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full animate-pulse w-1/3"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-effect p-4 rounded-lg border border-red-500">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (!stats) return null;

    return (
        <>
            {/* Top Languages Card */}
            <div
                className="glass-effect p-4 rounded-lg backdrop-blur-md"
                style={getThemeStyles()}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: iconColor }}
                    >
                        <span className="text-white text-sm">&lt;/&gt;</span>
                    </div>
                    <h3
                        className={`text-lg ${textBold ? 'font-bold' : 'font-semibold'}`}
                        style={{ color: titleColor }}
                    >
                        Top Languages
                    </h3>
                </div>

                <div className="space-y-3">
                    {stats.languages.map((lang) => (
                        <div key={lang.name}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm" style={{ color: textColor }}>{lang.name}</span>
                                <span className="text-xs opacity-70" style={{ color: textColor }}>
                                    {lang.value}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="h-2 rounded-full transition-all duration-500"
                                    style={{
                                        width: `${lang.value}%`,
                                        backgroundColor: lang.color
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* GitHub Stats Card */}
            <div
                className="glass-effect p-4 rounded-lg backdrop-blur-md"
                style={getThemeStyles()}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: iconColor }}
                    >
                        <span className="text-white text-sm">⚡</span>
                    </div>
                    <h3
                        className={`text-lg ${textBold ? 'font-bold' : 'font-semibold'}`}
                        style={{ color: titleColor }}
                    >
                        GitHub Stats
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: textColor }}>
                            {stats.totalStars}
                        </div>
                        <div className="text-xs opacity-70" style={{ color: textColor }}>
                            Total Stars
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: textColor }}>
                            {stats.totalCommits}
                        </div>
                        <div className="text-xs opacity-70" style={{ color: textColor }}>
                            Total Commits
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: textColor }}>
                            {stats.totalPRs}
                        </div>
                        <div className="text-xs opacity-70" style={{ color: textColor }}>
                            Total PRs
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: textColor }}>
                            {stats.contributedTo}
                        </div>
                        <div className="text-xs opacity-70" style={{ color: textColor }}>
                            Contributed To
                        </div>
                    </div>
                </div>
            </div>

            {/* Streak Stats Card */}
            <div
                className="glass-effect p-4 rounded-lg backdrop-blur-md"
                style={getThemeStyles()}
            >
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: iconColor }}
                    >
                        <span className="text-white text-sm">🔥</span>
                    </div>
                    <h3
                        className={`text-lg ${textBold ? 'font-bold' : 'font-semibold'}`}
                        style={{ color: titleColor }}
                    >
                        Current Streak
                    </h3>
                </div>

                <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ color: textColor }}>
                        🔥 42
                    </div>
                    <div className="text-sm opacity-80" style={{ color: textColor }}>
                        jours de contribution consécutifs
                    </div>
                </div>
            </div>

            {/* Pinned Repos Card */}
            <div
                className="glass-effect p-4 rounded-lg backdrop-blur-md"
                style={getThemeStyles()}
            >
                <h3
                    className={`text-lg ${textBold ? 'font-bold' : 'font-semibold'} mb-4`}
                    style={{ color: titleColor }}
                >
                    Pinned Repositories
                </h3>

                <div className="space-y-3">
                    {stats.repos.map((repo) => (
                        <div
                            key={repo.name}
                            className="border rounded-lg p-3 backdrop-blur-sm"
                            style={{ borderColor: `${textColor}20` }}
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm mb-1" style={{ color: titleColor }}>
                                        {repo.name}
                                    </h4>
                                    <p className="text-xs opacity-80 mb-2" style={{ color: textColor }}>
                                        {repo.description}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500 text-xs">⭐</span>
                                            <span className="text-xs" style={{ color: textColor }}>{repo.stars}</span>
                                        </div>
                                        <span
                                            className="text-xs px-2 py-1 rounded-full"
                                            style={{
                                                backgroundColor: `${textColor}20`,
                                                color: textColor
                                            }}
                                        >
                                            {repo.language}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default GitHubStats;