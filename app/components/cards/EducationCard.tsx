// components/cards/EducationCard.tsx
import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, School, Award, BookOpen } from 'lucide-react';
import ItemLayout from '../about/ItemLayout';

interface Education {
  degree: string;
  field: string;
  period: string;
  institution: string;
  location?: string;
  status?: 'completed' | 'ongoing';
  icon?: React.ReactNode;
}

const educationData: Education[] = [
  {
    degree: "Master One",
    field: "Filière Informatique",
    period: "Fév. 2025 - Sept. 2025",
    institution: "Ecole National de l'Informatique",
    location: "Tuléar",
    status: 'ongoing',
    icon: <Award size={16} />
  },
  {
    degree: "Licence Pro",
    field: "3ème année Info",
    period: "Janv. 2024 - Sept. 2025",
    institution: "Ecole Nationale d'Informatique",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Licence Pro",
    field: "2ème année Info",
    period: "Fév. 2023",
    institution: "ENI",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Licence Pro",
    field: "1ère année Info",
    period: "Fév. 2022",
    institution: "Ecole Nationale d'Informatique",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Baccalauréat",
    field: "Série D",
    period: "Août 2018 - Sept. 2019",
    institution: "Lycée Antaninarenina",
    location: "Tuléar",
    status: 'completed',
    icon: <School size={16} />
  }
];

const EducationCard: React.FC = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    const refreshAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.refresh();
    };
    refreshAOS();
  }, []);

  return (
    <ItemLayout
      className="col-span-full lg:col-span-6 !p-0 glass-effects 
      overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
    >
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
        {/* Header */}
        <div
          className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0"
          data-aos="fade-down"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
              <GraduationCap size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-foregrounds truncate">
                Diplômes & Formations
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Parcours académique
              </p>
            </div>
            <div className="flex flex-col items-end text-right flex-shrink-0">
              <span className="text-xl font-bold text-accent">5</span>
              <span className="text-[10px] text-muted-foreground uppercase">Diplômes</span>
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-3 sm:p-4">

          {/* Mobile: Timeline */}
          <div className="lg:hidden space-y-3">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 group"
                data-aos="slide-right"
                data-aos-delay={index * 100}
              >
                {index !== educationData.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-[-12px] w-0.5 bg-gradient-to-b from-accent to-accent/20" />
                )}
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${edu.status === 'ongoing' ? 'border-accent bg-accent/20' : 'border-accent/40 bg-background/80'
                  }`}>
                  <div className={`w-2 h-2 rounded-full ${edu.status === 'ongoing' ? 'bg-accent' : 'bg-accent/60'}`} />
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-semibold text-foregrounds">{edu.degree}</h4>
                    {edu.status === 'ongoing' && (
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">En cours</span>
                    )}
                  </div>
                  <p className="text-[10px] font-medium mb-1.5">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={10} />{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="truncate">{edu.institution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-1 gap-2.5">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all flex items-center gap-3"
                data-aos="fade-left"
                data-aos-delay={index * 80}
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${edu.status === 'ongoing' ? 'bg-accent/20 text-accent' : 'bg-white/10 text-muted-foreground group-hover:text-accent'
                  }`}>
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-xs font-semibold text-foregrounds truncate">{edu.degree}</h4>
                    {edu.status === 'ongoing' && (
                      <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">En cours</span>
                    )}
                  </div>
                  <p className="text-[10px] text-black/900 mb-1">{edu.field}</p>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Calendar size={10} /><span>{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="truncate">{edu.institution}</span>
                    {edu.location && (
                      <><span className="w-1 h-1 rounded-full bg-muted-foreground/40" /><MapPin size={10} /><span>{edu.location}</span></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0" data-aos="fade-up">
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Formation continue
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{educationData.filter(e => e.status === 'completed').length} complétés</span>
            </div>
            <span className="text-accent font-medium">Master two en cours</span>
          </div>
        </div>
      </div>
    </ItemLayout>
  );
};

export default EducationCard;

