import React from 'react';
import Navigation from './src/backend/navigation/navigation';
import { NotificationProvider } from './src/backend/notifications/notificationContext';

const App = () => {
  return (
    <NotificationProvider>
      <Navigation />
    </NotificationProvider>
  );
};

export default App;
