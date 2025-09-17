import React from 'react';
import { Calendar, Clock, MapPin, Upload, Image, Video, X } from 'lucide-react';

const Events: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
  const [dragActive, setDragActive] = React.useState(false);

  const events = [
    {
      date: "Jan 15",
      title: "New Year Revival Service",
      time: "7:00 PM",
      location: "Main Sanctuary",
      description: "Join us for a powerful night of worship and testimony as we start the year with faith."
    },
    {
      date: "Jan 22",
      title: "Community Food Drive",
      time: "10:00 AM - 2:00 PM",
      location: "Church Parking Lot",
      description: "Help us serve our community by donating non-perishable food items."
    },
    {
      date: "Feb 5",
      title: "Marriage Enrichment Seminar",
      time: "9:00 AM - 3:00 PM",
      location: "Fellowship Hall",
      description: "A day focused on strengthening marriages through biblical principles and practical wisdom."
    },
    {
      date: "Feb 12",
      title: "Youth Winter Retreat",
      time: "Friday - Sunday",
      location: "Camp Pinewood",
      description: "Three days of fun, fellowship, and spiritual growth for teens and young adults."
    }
  ];

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).filter(file => 
        file.type.startsWith('image/') || file.type.startsWith('video/')
      );
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our community through these special events and gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-500 text-blue-900 rounded-lg p-3 mr-4 text-center min-w-[70px]">
                  <div className="font-bold text-lg">{event.date}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{event.title}</h3>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Media Upload Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">Share Your Event Memories</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help us capture the joy and fellowship of our community by uploading photos and videos from church events.
            </p>
          </div>

          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Upload Event Media</h4>
            <p className="text-gray-500 mb-4">
              Drag and drop your photos and videos here, or click to browse
            </p>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Choose Files
            </label>
            <p className="text-sm text-gray-400 mt-2">
              Supported formats: JPG, PNG, GIF, MP4, MOV, AVI (Max 50MB per file)
            </p>
          </div>

          {/* Uploaded Files Preview */}
          {uploadedFiles.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                Uploaded Files ({uploadedFiles.length})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 relative group">
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="flex items-center space-x-3">
                      {file.type.startsWith('image/') ? (
                        <Image className="h-8 w-8 text-blue-600" />
                      ) : (
                        <Video className="h-8 w-8 text-purple-600" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    // Here you would typically upload the files to your server
                    console.log('Uploading files:', uploadedFiles);
                    alert('Thank you for sharing! Your media has been submitted for review.');
                    setUploadedFiles([]);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Submit Media
                </button>
                <button
                  onClick={() => setUploadedFiles([])}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Guidelines */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">Upload Guidelines</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                Please ensure all content is appropriate and family-friendly
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                All submissions will be reviewed before being published
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                By uploading, you give permission for the church to use these media for promotional purposes
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                Maximum file size: 50MB per file
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;