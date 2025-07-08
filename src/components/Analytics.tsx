import React from 'react';
import { TrendingUp, Users, Clock, MessageSquare, Target, Calendar } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    { label: 'Total Meetings', value: '124', change: '+12%', trend: 'up' },
    { label: 'Hours Saved', value: '45.2', change: '+8%', trend: 'up' },
    { label: 'Avg. Meeting Duration', value: '42 min', change: '-5%', trend: 'down' },
    { label: 'Action Items Created', value: '67', change: '+23%', trend: 'up' },
    { label: 'Completion Rate', value: '78%', change: '+15%', trend: 'up' },
    { label: 'Team Engagement', value: '4.2/5', change: '+0.3', trend: 'up' }
  ];

  const weeklyData = [
    { day: 'Mon', meetings: 8, duration: 320 },
    { day: 'Tue', meetings: 12, duration: 480 },
    { day: 'Wed', meetings: 15, duration: 600 },
    { day: 'Thu', meetings: 10, duration: 420 },
    { day: 'Fri', meetings: 6, duration: 240 },
    { day: 'Sat', meetings: 2, duration: 80 },
    { day: 'Sun', meetings: 1, duration: 40 }
  ];

  const topParticipants = [
    { name: 'John Doe', meetings: 28, hours: 42, engagement: 4.5 },
    { name: 'Jane Smith', meetings: 24, hours: 38, engagement: 4.2 },
    { name: 'Mike Johnson', meetings: 22, hours: 35, engagement: 4.0 },
    { name: 'Sarah Wilson', meetings: 20, hours: 32, engagement: 4.3 },
    { name: 'Tom Brown', meetings: 18, hours: 28, engagement: 3.8 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">Insights and metrics from your meetings and team performance.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                <p className={`text-sm flex items-center mt-1 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {metric.change}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Activity</h2>
          <div className="space-y-4">
            {weeklyData.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700 w-12">{day.day}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-40">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(day.meetings / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{day.meetings} meetings</p>
                  <p className="text-xs text-gray-500">{Math.floor(day.duration / 60)}h {day.duration % 60}m</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Types Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Meeting Types</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Team Standups</span>
              </div>
              <span className="text-sm text-gray-500">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Client Meetings</span>
              </div>
              <span className="text-sm text-gray-500">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Strategy Sessions</span>
              </div>
              <span className="text-sm text-gray-500">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Other</span>
              </div>
              <span className="text-sm text-gray-500">10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Team Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 text-sm font-medium text-gray-700">Team Member</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Meetings</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Hours</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Engagement</th>
                <th className="text-left p-4 text-sm font-medium text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topParticipants.map((participant, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {participant.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{participant.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{participant.meetings}</td>
                  <td className="p-4 text-sm text-gray-600">{participant.hours}h</td>
                  <td className="p-4 text-sm text-gray-600">{participant.engagement}/5</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(participant.engagement / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {Math.round((participant.engagement / 5) * 100)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}