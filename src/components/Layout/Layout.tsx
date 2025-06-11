import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import SmartCamera from '../SmartCamera/SmartCamera'
import MessengerIntegration from '../MessengerIntegration/MessengerIntegration';
import StoryTime from '../StoryTime/StoryTime';
import PrivacyFeatures from '../PrivacyFeatures/PrivacyFeatures';
import AlexaIntegration from '../AlexaIntegration/AlexaIntegration';
import ProductComparison from '../ProductComparison/ProductComparison';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import AuthModal from '../AuthModal/AuthModal';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <Preloader />
      <Header onLoginClick={() => setIsAuthModalOpen(true)} />
        <Slider  />
      
      <main className={styles.main}>
        <Outlet /> {/* Здесь будут рендериться дочерние маршруты */}
      </main>
      
      <SmartCamera />
      <MessengerIntegration />
      <StoryTime />
      <AlexaIntegration />
      <PrivacyFeatures />
      <ProductComparison />
      <Footer onSignUpClick={() => setIsAuthModalOpen(true)} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default Layout;