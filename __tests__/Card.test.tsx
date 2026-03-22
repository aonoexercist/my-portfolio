import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card><span>Hello</span></Card>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies base classes by default', () => {
    const { container } = render(<Card>content</Card>);
    expect(container.firstChild).toHaveClass('bg-card', 'rounded-2xl', 'p-6');
  });

  it('merges a custom className', () => {
    const { container } = render(<Card className="custom-class">content</Card>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('includes default classes when a custom className is provided', () => {
    const { container } = render(<Card className="extra">content</Card>);
    expect(container.firstChild).toHaveClass('bg-card', 'extra');
  });
});
