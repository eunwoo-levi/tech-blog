import { Metadata } from 'next';
import {
  HeroSection,
  ExperienceSection,
  AwardsSection,
  ContributionsSection,
  ContactSection,
} from './components';

export const metadata: Metadata = {
  title: '포트폴리오 - 리바이 기술블로그',
  description: '리바이의 프로젝트 포트폴리오',
  alternates: {
    canonical: 'https://www.eunwoo-levi.com/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className='min-h-screen bg-zinc-950'>
      <HeroSection />
      <ExperienceSection />
      <AwardsSection />
      <ContributionsSection />
      <ContactSection />
    </div>
  );
}
