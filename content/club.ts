import type { Club } from '@/lib/types';

/**
 * Leo Club of Millaniya — club record.
 *
 * A rural club, so the voice is warm and specific rather than institutional.
 * Copy should name places and people wherever it can.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Millaniya',
  shortName: 'Millaniya',
  tagline: 'Held together by the people here.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A Leo club serving Millaniya and the villages around it in the Kalutara district. Most of what we do happens on somebody’s land, in somebody’s hall, with people we already know — which is the advantage of being a small club in a small place.',
  charterDate: '2016-02-21',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Millaniya',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Millaniya emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of Millaniya with villagers at a community day',
    width: 1800,
    height: 1350,
  },

  contact: {
    email: 'leoclubofmillaniya@gmail.com',
    address: 'Millaniya, Kalutara District, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leoclubofmillaniya',
    instagram: 'https://www.instagram.com/leomillaniya',
    email: 'leoclubofmillaniya@gmail.com',
  },

  siteUrl: 'https://millaniya.leo306d2.org',

  stats: [
    { id: 'years', value: 9, label: 'Years of service' },
    { id: 'members', value: 34, label: 'Members' },
    { id: 'villages', value: 7, label: 'Villages we work in' },
    { id: 'families', value: 640, suffix: '+', label: 'Families reached' },
  ],

  about: {
    story: [
      'Millaniya is not a big place. That turns out to matter more than anything else about this club.',
      'When we chartered in 2016 we spent the first year copying what larger urban clubs did — big one-day events, a lot of photographs, a great deal of driving. It did not suit us. Nobody here needs a delegation arriving for an afternoon.',
      'What works instead is smaller and slower. A handloom cooperative that needed a market more than it needed charity. A school science room that took three years and four fundraisers. A dry-season water rota that only worked because a member’s uncle owned the tractor.',
      'Everything we run is built on somebody already knowing somebody. That is not a weakness of a village club. It is the whole method.',
    ],
    mission:
      'To serve the villages around Millaniya through work built on existing relationships, at a pace the community sets rather than one we impose.',
    vision:
      'A district where the small rural clubs are seen as a model rather than as smaller versions of the city ones.',
    values: [
      {
        title: 'Start with who we know',
        description:
          'Every project begins with someone in the club who already has a relationship there. Cold outreach in a village is a wasted afternoon.',
      },
      {
        title: 'Trade, do not donate',
        description:
          'Where a community has something to sell, we help them sell it. Charity where commerce would work is a slow insult.',
      },
      {
        title: 'Take the time it takes',
        description:
          'The science room took three years. Rushing it would have meant a worse room and a fundraiser nobody could repeat.',
      },
      {
        title: 'Nobody drives home alone',
        description:
          'Members work in pairs, always. Rural roads after dark are the most dangerous thing about what we do.',
      },
    ],
  },
};
