import React from 'react';
import { Calendar, Clock, Users, FileText, TrendingUp, Play, Upload } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Meetings', value: '124', change: '+12%', icon: Calendar, color: 'text-blue-600' },
    { label: 'Hours Saved', value: '45.2', change: '+8%', icon: Clock, color: 'text-green-600' },
    { label: 'Active Users', value: '28', change: '+15%', icon: Users, color: 'text-purple-600' },
    { label: 'Action Items', value: '67', change: '+23%', icon: FileText, color: 'text-orange-600' }
  ];

  const recentMeetings = [
    { id: 1, title: 'Weekly Team Standup', date: '2025-01-07', duration: '45 min', participants: 8, status: 'completed' },
    { id: 2, title: 'Product Strategy Review', date: '2025-01-07', duration: '1.5 hrs', participants: 12, status: 'processing' },
    { id: 3, title: 'Client Presentation', date: '2025-01-06', duration: '1 hr', participants: 5, status: 'completed' },
    { id: 4, title: 'Design Sprint Planning', date: '2025-01-06', duration: '2 hrs', participants: 6, status: 'completed' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your meetings.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stat.change}
                </p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Meetings */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Meetings</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentMeetings.map((meeting) => (
                <div key={meeting.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{meeting.title}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {meeting.date}
                        <Clock className="h-4 w-4 ml-4 mr-1" />
                        {meeting.duration}
                        <Users className="h-4 w-4 ml-4 mr-1" />
                        {meeting.participants} participants
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        meeting.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {meeting.status}
                      </span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Start Live Meeting
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload Recording
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Schedule</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-gray-900">Team Sync</p>
                  <p className="text-sm text-gray-500">10:00 AM - 11:00 AM</p>
                </div>
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-gray-900">Client Review</p>
                  <p className="text-sm text-gray-500">2:00 PM - 3:30 PM</p>
                </div>
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-gray-900">Sprint Planning</p>
                  <p className="text-sm text-gray-500">4:00 PM - 5:00 PM</p>
                </div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}