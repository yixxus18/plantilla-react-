import { memo } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Layout = memo(({ children }) => {
  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&auto=format&q=60&fit=crop&fm=webp&cache=force")`
      }}
    >
      <div className="min-h-screen bg-[#F5E6D3]/80">
        <Navbar />
        <main className="w-full px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
});

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
