import type { Project } from '@/lib/types';

/**
 * Projects.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1200,
});

export const projects: Project[] = [
  {
    id: 'handloom',
    slug: 'handloom',
    title: 'Handloom Market',
    summary:
      'Helping the Millaniya weavers reach buyers directly, instead of through a middleman taking most of the margin.',
    category: 'community-service',
    year: '2025/26',
    date: '2025-08-30',
    location: 'Millaniya',
    featured: true,
    heroImage: placeholder('A weaver at a handloom in Millaniya'),
    story: [
      'Eleven women in and around Millaniya weave for a living. Until recently almost all of it went through one buyer who paid roughly a third of what the cloth fetched in Colombo.',
      'The club did not raise money for them, because they did not need money — they needed customers. We built them a shared stall at the Kalutara weekend market, photographed the work properly, and set up a single Instagram account the group runs itself.',
      'Average income per weaver is up 68% on the year before. None of that is our money. That is the part we are pleased about.',
    ],
    objectives: [
      'Secure a shared market stall the group can staff on a rota',
      'Photograph the work to a standard that sells it online',
      'Hand the account and the stall booking to the group entirely',
    ],
    impact: [
      { id: 'weavers', value: 11, label: 'Weavers in the group' },
      { id: 'income', value: 68, suffix: '%', label: 'Average income increase' },
      { id: 'pieces', value: 340, label: 'Pieces sold directly' },
    ],
  },
  {
    id: 'science-room',
    slug: 'science-room',
    title: 'The Science Room',
    summary:
      'A working science laboratory at Millaniya Maha Vidyalaya, built over three years and four fundraisers.',
    category: 'education',
    year: '2024/25',
    date: '2025-01-18',
    location: 'Millaniya Maha Vidyalaya',
    featured: true,
    heroImage: placeholder('Students working in the new school science room'),
    story: [
      'The school had taught practical science on paper for eleven years. There was a room, and there was nothing in it.',
      'It took three years. Four fundraisers, one failed grant application, and a long argument with ourselves about whether to accept a donation of equipment that was twenty years old and half broken. We did not.',
      'The room opened in January with benches, gas, water, and enough glassware for a class of thirty to work in pairs. The school maintains it; we do not.',
    ],
    objectives: [
      'Fit out the room properly rather than partially',
      'Raise the full cost locally rather than accepting unusable donations',
      'Leave maintenance with the school, funded from their budget',
    ],
    impact: [
      { id: 'students', value: 420, label: 'Students with access' },
      { id: 'years', value: 3, label: 'Years to complete' },
      { id: 'raised', value: 1850000, prefix: 'Rs ', label: 'Raised locally' },
    ],
  },
  {
    id: 'water-rota',
    slug: 'water-rota',
    title: 'Dry Season Water Rota',
    summary:
      'A tractor-and-bowser rota supplying four hamlets through the dry months, run with the village committees.',
    category: 'community-service',
    year: '2024/25',
    date: '2024-07-06',
    location: 'Millaniya and surrounding hamlets',
    featured: true,
    heroImage: placeholder('A water bowser filling household tanks in a hamlet'),
    story: [
      'Four hamlets above the main road lose their wells every dry season. They always have; everyone knows it; nothing had been organised about it.',
      'The rota is deliberately unremarkable: a borrowed tractor, a hired bowser, a schedule agreed with the four village committees, and a WhatsApp group. It ran for eleven weeks last year without us needing to be there for most of it.',
    ],
    impact: [
      { id: 'households', value: 118, label: 'Households supplied' },
      { id: 'weeks', value: 11, label: 'Weeks of the dry season' },
      { id: 'litres', value: 396000, suffix: ' L', label: 'Water delivered' },
    ],
  },
  {
    id: 'home-garden',
    slug: 'home-garden',
    title: 'Home Gardens',
    summary:
      'Seed, seedlings and a season of advice for 90 households, aimed at cutting monthly vegetable spend.',
    category: 'environment',
    year: '2023/24',
    date: '2024-04-20',
    location: 'Millaniya',
    heroImage: placeholder('A household vegetable garden in Millaniya'),
    impact: [
      { id: 'households', value: 90, label: 'Households' },
      { id: 'saving', value: 4200, prefix: 'Rs ', label: 'Average monthly saving' },
    ],
  },
  {
    id: 'exam-hall',
    slug: 'exam-hall',
    title: 'Exam Hall Lighting',
    summary:
      'Rewiring and lighting the village hall so it could be used as an examination centre.',
    category: 'education',
    year: '2023/24',
    date: '2023-11-11',
    location: 'Millaniya village hall',
    heroImage: placeholder('The village hall after rewiring, set out for examinations'),
    impact: [
      { id: 'candidates', value: 160, label: 'Candidates per sitting' },
      { id: 'travel', value: 22, suffix: ' km', label: 'Travel saved per candidate' },
    ],
  },
  {
    id: 'first-fair',
    slug: 'first-fair',
    title: 'The First Fair',
    summary: 'The club’s first project — a village fair that funded everything that came after.',
    category: 'fundraising',
    year: '2016/17',
    date: '2016-08-14',
    location: 'Millaniya',
    heroImage: placeholder('The club’s first village fair'),
    impact: [
      { id: 'attendance', value: 900, suffix: '+', label: 'Attendance' },
      { id: 'raised', value: 210000, prefix: 'Rs ', label: 'Raised' },
    ],
  },
];
