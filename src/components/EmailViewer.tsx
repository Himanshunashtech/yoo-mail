import React, { useState } from 'react';
import { X, Trash2, Archive, Star, ArrowLeft } from 'lucide-react';
import { EmailMessage } from '../types/email';
import { Translation } from '../utils/translations';

interface EmailViewerProps {
  message: EmailMessage;
  onClose: () => void;
  onDelete: (messageId: string) => void;
  translation: Translation;
}

export const EmailViewer: React.FC<EmailViewerProps> = ({
  message,
  onClose,
  onDelete,
  translation
}) => {
  const [isStarred, setIsStarred] = useState(false);

  const handleDelete = () => {
    if (confirm(`${translation.delete}?`)) {
      onDelete(message.id);
      onClose();
    }
  };

  const formatMessageBody = (body: string) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return body.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900">Email Details</h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsStarred(!isStarred)}
              className={`p-2 rounded-lg transition-colors ${
                isStarred ? 'text-yellow-500 hover:bg-yellow-50' : 'text-gray-400 hover:bg-gray-200'
              }`}
            >
              <Star className={`w-5 h-5 ${isStarred ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
              <Archive className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={handleDelete}
              className="p-2 hover:bg-red-100 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5 text-red-600" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Email Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Email Header */}
          <div className="px-6 py-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{message.subject}</h1>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {message.from.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{message.from}</p>
                  <p className="text-sm text-gray-500">
                    {message.timestamp.toLocaleDateString()} at {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Body */}
          <div className="px-6 py-6">
            <div 
              className="prose max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: formatMessageBody(message.body).replace(/\n/g, '<br>') 
              }}
            />
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              {translation.delete}
            </button>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </div>
          
          <p className="text-sm text-gray-500">
            Message {message.isRead ? 'read' : 'unread'}
          </p>
        </div>
      </div>
    </div>
  );
};