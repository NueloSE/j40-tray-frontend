import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

type Props = {
  children: React.ReactNode; // Children elements to be rendered within the layout
  showHero?: boolean; // Optional flag to conditionally display the Hero component
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Render the Header component at the top */}
      {showHero && <Hero />} {/* Conditionally render the Hero component if showHero is true */}
      <div className="container mx-auto flex-1 py-10">{children}</div> {/* Main content area */}
      <Footer /> {/* Render the Footer component at the bottom */}
    </div>
  );
};

export default Layout;
