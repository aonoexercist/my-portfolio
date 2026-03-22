import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText(/Xercis/)).toBeInTheDocument();
  });

  it('renders all desktop navigation links', () => {
    render(<Navbar />);
    ['About', 'Experience', 'Projects', 'Skills', 'Contact'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('renders the "Hire Me" CTA link', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Hire Me' })).toBeInTheDocument();
  });

  it('hides the mobile menu by default', () => {
    render(<Navbar />);
    // "About" appears only once (desktop) before the menu is opened
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1);
  });

  it('shows the mobile menu after clicking the toggle button', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.click(screen.getByRole('button', { name: /toggle navigation/i }));
    // "About" now appears in both desktop and mobile menus
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2);
  });

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: /toggle navigation/i }));
    const [, mobileAbout] = screen.getAllByRole('link', { name: 'About' });
    await user.click(mobileAbout);

    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(1);
  });

  it('renders the toggle button with correct aria-label', () => {
    render(<Navbar />);
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toBeInTheDocument();
  });
});
