import { render, screen } from '@testing-library/react';
import TechCategory from '../components/TechCategory';

const props = {
  icon: '🛠️',
  title: 'Frontend',
  skills: ['React', 'TypeScript', 'CSS'],
};

describe('TechCategory', () => {
  it('renders the icon and title', () => {
    render(<TechCategory {...props} />);
    expect(screen.getByText('🛠️')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('renders all skill badges', () => {
    render(<TechCategory {...props} />);
    props.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders the correct number of skill badges', () => {
    render(<TechCategory {...props} />);
    const badges = props.skills.map((skill) => screen.getByText(skill));
    expect(badges).toHaveLength(props.skills.length);
  });

  it('renders an empty badge list when skills array is empty', () => {
    render(<TechCategory icon="📦" title="Empty" skills={[]} />);
    expect(screen.getByText('Empty')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
