import { Bitter, Nunito_Sans } from 'next/font/google';

/**
 * Bitter for headings, Nunito Sans for text.
 *
 * Bitter is a slab serif with slightly soft terminals — it reads as warm and
 * printed rather than corporate, which suits a village club better than a
 * geometric sans. Nunito Sans has generous, rounded letterforms that carry the
 * same warmth into long copy.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const fontVariables = `${bitter.variable} ${nunito.variable}`;
