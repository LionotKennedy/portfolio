// components/cards/ExperienceCard.tsx
import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Building2, Rocket, Users } from 'lucide-react';
import ItemLayout from '../about/ItemLayout';

interface Experience {
  title: string;
  description: string;
  period: string;
  company: string;
  location: string;
  type: 'freelance' | 'stage' | 'project' | 'internship';
  technologies?: string[];
  icon?: React.ReactNode;
}

const experienceData: Experience[] = [
  {
    title: "Refonte E-commerce",
    description: "Refonte complète pour améliorer performances et UX",
    period: "Mai - Juil. 2025",
    company: "Freelancer",
    location: "Madagascar",
    type: 'freelance',
    technologies: ['React', 'Node.js', 'Perf'],
    icon: <Rocket size={16} />
  },
  {
    title: "Gestion Courriers & Archives",
    description: "App web de gestion documentaire et archives",
    period: "Oct. - Nov. 2024",
    company: "Service régional solde",
    location: "Toliara",
    type: 'project',
    technologies: ['Web', 'Archives'],
    icon: <Building2 size={16} />
  },
  {
    title: "Suivi Facturation",
    description: "Stage en gestion et suivi de facturation",
    period: "Août - Nov. 2023",
    company: "OpenData Madagascar",
    location: "Antsirabe",
    type: 'internship',
    technologies: ['Data', 'Suivi'],
    icon: <Users size={16} />
  },
  {
    title: "Gestion Employés",
    description: "Système de gestion RH pour l'école",
    period: "Mars - Juin 2022",
    company: "ENI",
    location: "Toliara",
    type: 'project',
    technologies: ['RH', 'Web'],
    icon: <Users size={16} />
  },
  {
    title: "Gestion Caisse Église",
    description: "App de gestion financière pour organisation",
    period: "Fév. - Avr. 2022",
    company: "ENI",
    location: "Toliara",
    type: 'project',
    technologies: ['Finance', 'Web'],
    icon: <Code2 size={16} />
  }
];

const getTypeConfig = (type: Experience['type']) => {
  switch (type) {
    case 'freelance':
      return { color: 'bg-accent/20 text-accent-400 border-accent/30', bgHover: 'hover:bg-accent/5' };
    case 'internship':
      return { color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', bgHover: 'hover:bg-blue-500/5' };
    case 'project':
      return { color: 'bg-green-500/20 text-black-400 border-green-500/30', bgHover: 'hover:bg-green-500/5' };
    default:
      return { color: 'bg-accent/20 text-accent border-accent/30', bgHover: 'hover:bg-accent/5' };
  }
};

const ExperienceCard: React.FC = () => {
  useEffect(() => {
    const refreshAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.refresh();
    };
    refreshAOS();
  }, []);

  return (
    <ItemLayout
      className="col-span-full lg:col-span-6 !p-0 
      glass-effects
       overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
    >
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
        {/* Header */}
        <div
          className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/20 to-transparent flex-shrink-0"
          data-aos="fade-down"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/20 border border-accent/20">
              <Briefcase size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-foregroundS truncate">Expériences Professionnelles</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Projets & Missions</p>
            </div>
            <div className="flex flex-col items-end text-right flex-shrink-0">
              <span className="text-xl font-bold text-accent">5</span>
              <span className="text-[10px] text-muted-foreground uppercase">Projets</span>
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent p-3 sm:p-4">
          <div className="space-y-2.5 sm:space-y-3">
            {experienceData.map((exp, index) => {
              const typeConfig = getTypeConfig(exp.type);
              return (
                <div
                  key={index}
                  className={`group p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 ${typeConfig.bgHover} transition-all cursor-pointer`}
                  data-aos="slide-left"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${typeConfig.color.split(' ')[0]}`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-xs font-semibold text-foregroundS group-hover:text-accent-400 transition-colors truncate flex-1">{exp.title}</h4>
                        <span className={`flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded border ${typeConfig.color}`}>
                          {exp.type === 'freelance' ? 'Free' : exp.type === 'internship' ? 'Stage' : 'Projet'}
                        </span>
                      </div>
                      <p className="text-[10px] text-muted-foreground/80 line-clamp-1 mb-1.5">{exp.description}</p>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground/70 mb-2">
                        <span className="flex items-center gap-1"><Calendar size={10} className="text-accent" />{exp.period}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span className="truncate max-w-[80px] sm:max-w-[120px]">{exp.company}</span>
                      </div>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent-300 border border-accent/20">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0" data-aos="fade-up">
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Disponible
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{experienceData.filter(e => e.type === 'freelance').length} freelance</span>
            </div>
            <span className="text-accent font-medium flex items-center gap-1"><ExternalLink size={10} /> Voir plus</span>
          </div>
        </div>
      </div>
    </ItemLayout>
  );
};

export default ExperienceCard;