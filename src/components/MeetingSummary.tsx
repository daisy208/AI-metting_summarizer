import React, { useState } from 'react';
import { FileText, Users, Clock, Download, Share2, Edit, Copy } from 'lucide-react';

export default function MeetingSummary() {
  const [summaryLength, setSummaryLength] = useState('detailed');
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const meetings = [
    {
      id: 1,
      title: 'Product Strategy Review',
      date: '2025-01-07',
      duration: '1.5 hrs',
      participants: ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Wilson'],
      summary: {
        brief: 'Discussed Q1 product roadmap, prioritized features, and allocated resources.',
        detailed: 'The team reviewed the Q1 product roadmap, focusing on three key initiatives: user onboarding improvements, mobile app performance optimization, and new analytics dashboard. We prioritized features based on user feedback and business impact. Resources were allocated with 60% to core features and 40% to experimental features.',
        executive: 'Strategic product review resulting in Q1 roadmap approval with focus on user experience improvements and analytics capabilities. Key decisions: prioritize mobile performance (60% resources), launch new onboarding flow by March, and establish analytics dashboard as competitive differentiator.'
      },
      keyPoints: [
        'Approved Q1 product roadmap with three main initiatives',
        'Prioritized mobile app performance optimization',
        'Allocated 60% resources to core features, 40% to experimental',
        'Set March deadline for new user onboarding flow'
      ],
      decisions: [
        'Proceed with mobile performance optimization project',
        'Launch new analytics dashboard by end of Q1',
        'Hire additional frontend developer for mobile team'
      ],
      actionItems: [
        { task: 'Create technical specifications for mobile optimization', assignee: 'John Doe', deadline: '2025-01-15' },
        { task: 'Design mockups for new onboarding flow', assignee: 'Jane Smith', deadline: '2025-01-20' },
        { task: 'Interview candidates for frontend developer role', assignee: 'Mike Johnson', deadline: '2025-01-25' }
      ]
    }
  ];

  const handleMeetingSelect = (meeting: any) => {
    setSelectedMeeting(meeting);
  };

  const currentMeeting = selectedMeeting || meetings[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Meeting Summaries</h1>
        <p className="mt-2 text-gray-600">AI-generated summaries with key insights and action items.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Meeting List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Meetings</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {meetings.map((meeting) => (
                <button
                  key={meeting.id}
                  onClick={() => handleMeetingSelect(meeting)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{meeting.date}</p>
                  <p className="text-sm text-gray-500">{meeting.duration}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{currentMeeting.title}</h1>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {currentMeeting.date} • {currentMeeting.duration}
                    <Users className="h-4 w-4 ml-4 mr-1" />
                    {currentMeeting.participants.length} participants
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Controls */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Summary Length:</span>
                  <select
                    value={summaryLength}
                    onChange={(e) => setSummaryLength(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="brief">Brief</option>
                    <option value="detailed">Detailed</option>
                    <option value="executive">Executive</option>
                  </select>
                </div>
                <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  <Copy className="h-4 w-4 mr-1" />
                  Copy Summary
                </button>
              </div>
            </div>

            {/* Summary Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Summary */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">
                        {currentMeeting.summary[summaryLength as keyof typeof currentMeeting.summary]}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
                    <ul className="space-y-2">
                      {currentMeeting.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Decisions Made</h3>
                    <ul className="space-y-2">
                      {currentMeeting.decisions.map((decision, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Items */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Action Items</h3>
                  <div className="space-y-3">
                    {currentMeeting.actionItems.map((item, index) => (
                      <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.task}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Assigned to: <span className="font-medium">{item.assignee}</span>
                            </p>
                            <p className="text-sm text-gray-600">
                              Due: <span className="font-medium">{item.deadline}</span>
                            </p>
                          </div>
                          <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
                            Track
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Participants */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Participants</h3>
                <div className="flex flex-wrap gap-2">
                  {currentMeeting.participants.map((participant, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {participant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}