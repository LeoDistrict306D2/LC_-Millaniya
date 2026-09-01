import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'rural-2025',
    title: 'Best Rural Club Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For the Handloom Market, and for raising weaver income without donating a rupee.',
  },
  {
    id: 'education-2025',
    title: 'Education Project of the Year',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'runner-up',
    description: 'For the Millaniya Maha Vidyalaya science room, completed over three years.',
  },
  {
    id: 'small-club-2023',
    title: 'Outstanding Small Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2023',
    level: 'merit',
  },
];
