import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const props = {
  title: 'My Project',
  description: 'A cool project description.',
  highlights: ['Feature A', 'Feature B', 'Feature C'],
  tech: ['React', 'TypeScript', 'Tailwind'],
};

describe('ProjectCard', () => {
  it('renders the title and description', () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByText('My Project')).toBeInTheDocument();
    expect(screen.getByText('A cool project description.')).toBeInTheDocument();
  });

  it('renders all highlight items', () => {
    render(<ProjectCard {...props} />);
    props.highlights.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders the correct number of highlight bullets', () => {
    render(<ProjectCard {...props} />);
    expect(screen.getAllByText('▸')).toHaveLength(props.highlights.length);
  });

  it('renders all tech stack badges', () => {
    render(<ProjectCard {...props} />);
    props.tech.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument();
    });
  });

  it('renders the correct number of tech badges', () => {
    render(<ProjectCard {...props} />);
    const badges = props.tech.map((t) => screen.getByText(t));
    expect(badges).toHaveLength(props.tech.length);
  });
});
