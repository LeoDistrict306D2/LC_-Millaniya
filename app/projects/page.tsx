import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { StoryPanel } from '@/components/StoryPanel';

export const metadata: Metadata = {
  title: 'Our work',
  description: `Every project run by ${club.name}.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} projects`}
        title="Everything we have done."
        standfirst="Newest first. Most of these took longer than they should have, and that is usually why they worked."
      />

      <div className="wrap band flex flex-col gap-16 md:gap-20">
        {entries.map((project, index) => (
          <StoryPanel key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
