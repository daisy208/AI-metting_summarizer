import React, { useState } from 'react';
import { Video, MessageSquare, Calendar, Trello, Slack, Zap, Settings, Check, Plus } from 'lucide-react';

export default function Integrations() {
  const [connectedIntegrations, setConnectedIntegrations] = useState(['zoom', 'slack']);

  const integrations = [
    {
      id: 'zoom',
      name: 'Zoom',
      description: 'Connect your Zoom meetings for automatic recording and transcription',
      icon: Video,
      category: 'Video Conferencing',
      connected: true,
      color: 'text-blue-600'
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      description: 'Integrate with Teams for seamless meeting management',
      icon: Video,
      category: 'Video Conferencing',
      connected: false,
      color: 'text-purple-600'
    },
    {
      id: 'meet',
      name: 'Google Meet',
      description: 'Automatically capture and analyze Google Meet sessions',
      icon: Video,
      category: 'Video Conferencing',
      connected: false,
      color: 'text-green-600'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Send meeting summaries and action items to Slack channels',
      icon: MessageSquare,
      category: 'Communication',
      connected: true,
      color: 'text-purple-600'
    },
    {
      id: 'asana',
      name: 'Asana',
      description: 'Create tasks and projects from meeting action items',
      icon: Trello,
      category: 'Project Management',
      connected: false,
      color: 'text-red-600'
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Sync meeting notes and summaries to your Notion workspace',
      icon: Settings,
      category: 'Productivity',
      connected: false,
      color: 'text-gray-600'
    },
    {
      id: 'calendar',
      name: 'Google Calendar',
      description: 'Sync meeting schedules and get automatic reminders',
      icon: Calendar,
      category: 'Calendar',
      connected: false,
      color: 'text-blue-600'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect with 3000+ apps through Zapier automation',
      icon: Zap,
      category: 'Automation',
      connected: false,
      color: 'text-orange-600'
    }
  ];

  const toggleIntegration = (integrationId: string) => {
    setConnectedIntegrations(prev => {
      if (prev.includes(integrationId)) {
        return prev.filter(id => id !== integrationId);
      } else {
        return [...prev, integrationId];
      }
    });
  };

  const categories = [...new Set(integrations.map(integration => integration.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Integrations</h1>
        <p className="mt-2 text-gray-600">Connect your favorite tools to enhance your meeting workflow.</p>
      </div>

      {/* Connected Integrations Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Connected Integrations</h2>
            <p className="text-sm text-gray-600 mt-1">
              {connectedIntegrations.length} of {integrations.length} integrations connected
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {connectedIntegrations.slice(0, 3).map((id) => {
              const integration = integrations.find(i => i.id === id);
              return integration ? (
                <div key={id} className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <integration.icon className={`h-4 w-4 ${integration.color}`} />
                  <span className="text-sm font-medium text-green-800">{integration.name}</span>
                </div>
              ) : null;
            })}
            {connectedIntegrations.length > 3 && (
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-sm text-gray-600">+{connectedIntegrations.length - 3}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Integration Categories */}
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations
              .filter(integration => integration.category === category)
              .map((integration) => {
                const isConnected = connectedIntegrations.includes(integration.id);
                return (
                  <div key={integration.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${isConnected ? 'bg-green-100' : 'bg-gray-100'}`}>
                          <integration.icon className={`h-6 w-6 ${isConnected ? 'text-green-600' : integration.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                            isConnected 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {isConnected ? (
                              <>
                                <Check className="h-3 w-3 mr-1" />
                                Connected
                              </>
                            ) : (
                              'Not Connected'
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => toggleIntegration(integration.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isConnected
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {isConnected ? 'Disconnect' : 'Connect'}
                      </button>
                      
                      {isConnected && (
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Settings className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}

      {/* Custom Integration */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Need a Custom Integration?</h3>
            <p className="text-gray-600 mt-1">
              We can build custom integrations for your specific tools and workflows.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Request Integration
          </button>
        </div>
      </div>
    </div>
  );
}