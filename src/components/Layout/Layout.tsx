import React, { useState } from 'react'; // Добавлен импорт useState
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import AuthModal from '../AuthModal/AuthModal';

import styles from './Layout.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Preloader />
      <Header onLoginClick={() => setIsAuthModalOpen(true)} />
      
      <main className={styles.main}>
        
        {children}
      </main>
      
      <Footer onSignUpClick={() => setIsAuthModalOpen(true)} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;