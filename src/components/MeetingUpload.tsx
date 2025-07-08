import React, { useState } from 'react';
import { Upload, Mic, Video, FileText, Play, Pause, RotateCcw } from 'lucide-react';

export default function MeetingUpload() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Simulate transcription
      setIsTranscribing(true);
      setTimeout(() => {
        setTranscription("Good morning everyone, welcome to our weekly team standup. Let's go around and share what we've accomplished this week and what we're planning for next week...");
        setIsTranscribing(false);
      }, 3000);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording timer
      const interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      // Store interval ID for cleanup
      (window as any).recordingInterval = interval;
    } else {
      // Stop recording
      clearInterval((window as any).recordingInterval);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Meeting Recorder</h1>
        <p className="mt-2 text-gray-600">Record live meetings or upload existing recordings for AI analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recording Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Mic className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Live Recording</h2>
          </div>

          <div className="text-center py-8">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
              isRecording ? 'bg-red-100 animate-pulse' : 'bg-gray-100'
            }`}>
              {isRecording ? (
                <Pause className="h-8 w-8 text-red-600" />
              ) : (
                <Play className="h-8 w-8 text-gray-600" />
              )}
            </div>
            
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900">{formatTime(recordingTime)}</p>
              <p className="text-sm text-gray-500">
                {isRecording ? 'Recording in progress...' : 'Ready to record'}
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={toggleRecording}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  isRecording
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
              
              {recordingTime > 0 && !isRecording && (
                <button
                  onClick={() => setRecordingTime(0)}
                  className="px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  <RotateCcw className="h-4 w-4 mr-2 inline" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Upload className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Upload Recording</h2>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <input
              type="file"
              accept="audio/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                {uploadedFile ? uploadedFile.name : 'Drop your files here'}
              </p>
              <p className="text-sm text-gray-500">
                Supports MP3, MP4, WAV, and other audio/video formats
              </p>
            </label>
          </div>

          {uploadedFile && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">
                  File uploaded successfully
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transcription Section */}
      {(uploadedFile || isRecording) && (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Live Transcription</h2>
          </div>
          <div className="p-6">
            {isTranscribing ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Transcribing audio...</span>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 min-h-40">
                <p className="text-gray-700 leading-relaxed">
                  {transcription || 'Transcription will appear here...'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}