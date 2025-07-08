import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MeetingUpload from './components/MeetingUpload';
import MeetingSummary from './components/MeetingSummary';
import ActionItems from './components/ActionItems';
import Analytics from './components/Analytics';
import Integrations from './components/Integrations';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'meetings':
        return (
          <div>
            <MeetingUpload />
            <div className="mt-8">
              <MeetingSummary />
            </div>
          </div>
        );
      case 'actions':
        return <ActionItems />;
      case 'analytics':
        return <Analytics />;
      case 'integrations':
        return <Integrations />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onTabChange={setActiveTab} activeTab={activeTab} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;