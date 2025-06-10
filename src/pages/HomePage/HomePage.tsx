import React from 'react';
import Layout from '../../components/Layout/Layout';
import Slider from '../../components/Slider/Slider';
import PortalProducts from '../../components/PortalProducts/PortalProducts';
import SmartCamera from '../../components/SmartCamera/SmartCamera';
import MessengerIntegration from '../../components/MessengerIntegration/MessengerIntegration';
import StoryTime from '../../components/StoryTime/StoryTime';
import AlexaIntegration from '../../components/AlexaIntegration/AlexaIntegration';
import PrivacyFeatures from '../../components/PrivacyFeatures/PrivacyFeatures';
import ProductComparison from '../../components/ProductComparison/ProductComparison';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Slider />
      <PortalProducts />
      <SmartCamera />
      <MessengerIntegration />
      <StoryTime />
      <AlexaIntegration />
      <PrivacyFeatures />
      <ProductComparison />
    </Layout>
  );
};

export default HomePage;