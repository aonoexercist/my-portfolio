import { render, screen } from '@testing-library/react';
import ExperienceItem from '../components/ExperienceItem';

const baseProps = {
  role: 'Frontend Developer',
  company: 'Acme Corp',
  location: 'Remote',
  period: '2022 – Present',
  highlights: ['Built React apps', 'Improved performance by 40%'],
};

describe('ExperienceItem', () => {
  it('renders role, company, location, and period', () => {
    render(<ExperienceItem {...baseProps} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText(/Remote/)).toBeInTheDocument();
    expect(screen.getByText('2022 – Present')).toBeInTheDocument();
  });

  it('renders all highlight bullet points', () => {
    render(<ExperienceItem {...baseProps} />);
    expect(screen.getByText('Built React apps')).toBeInTheDocument();
    expect(screen.getByText('Improved performance by 40%')).toBeInTheDocument();
  });

  it('renders the correct number of highlight items', () => {
    render(<ExperienceItem {...baseProps} />);
    const bullets = screen.getAllByText('▸');
    expect(bullets).toHaveLength(baseProps.highlights.length);
  });

  it('renders the timeline line when isLast is false', () => {
    const { container } = render(<ExperienceItem {...baseProps} isLast={false} />);
    expect(container.querySelector('.timeline-line')).toBeInTheDocument();
  });

  it('does not render the timeline line when isLast is true', () => {
    const { container } = render(<ExperienceItem {...baseProps} isLast={true} />);
    expect(container.querySelector('.timeline-line')).not.toBeInTheDocument();
  });

  it('renders as non-last by default', () => {
    const { container } = render(<ExperienceItem {...baseProps} />);
    expect(container.querySelector('.timeline-line')).toBeInTheDocument();
  });
});
