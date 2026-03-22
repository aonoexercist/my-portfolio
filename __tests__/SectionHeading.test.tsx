import { render, screen } from '@testing-library/react';
import SectionHeading from '../components/SectionHeading';

describe('SectionHeading', () => {
  it('renders the title', () => {
    render(<SectionHeading title="About Me" />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('appends a period accent after the title', () => {
    render(<SectionHeading title="About Me" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me.');
  });

  it('renders the subtitle when provided', () => {
    render(<SectionHeading title="Projects" subtitle="Things I have built" />);
    expect(screen.getByText('Things I have built')).toBeInTheDocument();
  });

  it('does not render a subtitle element when omitted', () => {
    render(<SectionHeading title="Projects" />);
    expect(screen.queryByText(/Things I have built/)).not.toBeInTheDocument();
  });
});
