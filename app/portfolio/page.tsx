import { Metadata } from 'next';
import {
  HeroSection,
  SkillsSection,
  ExperienceSection,
  AwardsSection,
  ContributionsSection,
  ContactSection,
  ScrollReveal,
} from './components';
import ProjectsSection from './components/ProjectsSection';

export const metadata: Metadata = {
  title: '포트폴리오 - 리바이 개발블로그',
  description: '리바이의 프로젝트 포트폴리오',
  alternates: {
    canonical: 'https://www.eunwoo-levi.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-zinc-950'>
      <HeroSection />
      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <AwardsSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <ContributionsSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
