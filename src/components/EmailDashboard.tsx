import React, { useState } from 'react';
import { 
  Mail, 
  Inbox, 
  Send, 
  Trash2, 
  Star, 
  Archive, 
  Search, 
  Plus, 
  Clock,
  RefreshCw,
  X,
  ArrowLeft,
  Check
} from 'lucide-react';
import { EmailMessage, TempEmailData } from '../types/email';
import { EmailViewer } from './EmailViewer';
import { Translation } from '../utils/translations';

interface EmailDashboardProps {
  emailData: TempEmailData | null;
  messages: EmailMessage[];
  timeLeft: number;
  onClose: () => void;
  onDeleteMessage: (messageId: string) => void;
  onDeleteAllMessages: () => void;
  onMarkAsRead: (messageId: string) => void;
  onExtendEmail: () => Promise<void>;
  onGenerateNewEmail: () => Promise<void>;
  extending: boolean;
  generating: boolean;
  translation: Translation;
}

export const EmailDashboard: React.FC<EmailDashboardProps> = ({
  emailData,
  messages,
  timeLeft,
  onClose,
  onDeleteMessage,
  onDeleteAllMessages,
  onMarkAsRead,
  onExtendEmail,
  onGenerateNewEmail,
  extending,
  generating,
  translation
}) => {
  const [selectedMessage, setSelectedMessage] = useState<EmailMessage | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState<'inbox' | 'sent' | 'starred' | 'trash'>('inbox');

  const isExpired = timeLeft <= 0;
  const isLowTime = timeLeft <= 120000;

  const formatTime = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const filteredMessages = messages.filter(message =>
    message.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMessageClick = (message: EmailMessage) => {
    setSelectedMessage(message);
    onMarkAsRead(message.id);
  };

  const handleSelectMessage = (messageId: string) => {
    setSelectedMessages(prev => 
      prev.includes(messageId) 
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  const handleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(msg => msg.id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedMessages.length === 0) return;
    
    if (confirm(`${translation.delete} ${selectedMessages.length} message(s)?`)) {
      selectedMessages.forEach(messageId => {
        onDeleteMessage(messageId);
      });
      setSelectedMessages([]);
    }
  };

  const sidebarItems = [
    { id: 'inbox', icon: <Inbox className="w-5 h-5" />, label: translation.inbox, count: messages.length },
    { id: 'sent', icon: <Send className="w-5 h-5" />, label: translation.sent, count: 0 },
    { id: 'starred', icon: <Star className="w-5 h-5" />, label: translation.starred, count: 0 },
    { id: 'trash', icon: <Trash2 className="w-5 h-5" />, label: translation.trash, count: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yoo! mail
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    currentView === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Email Info */}
        <div className="p-4 border-t border-gray-200">
          <div className={`p-4 rounded-lg border ${
            isExpired ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className={`w-4 h-4 ${isExpired ? 'text-red-600' : 'text-blue-600'}`} />
              <span className={`text-sm font-medium ${
                isExpired ? 'text-red-700' : 'text-blue-700'
              }`}>
                {isExpired ? 'Expired' : 'Active'}
              </span>
            </div>
            <p className={`text-xs mb-2 break-all ${
              isExpired ? 'text-red-600 line-through' : 'text-gray-600'
            }`}>
              {emailData?.email}
            </p>
            <p className={`text-lg font-mono font-bold ${
              isExpired ? 'text-red-700' : isLowTime ? 'text-yellow-700' : 'text-blue-700'
            }`}>
              {isExpired ? '0:00' : formatTime(timeLeft)}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={onExtendEmail}
                disabled={extending || isExpired}
                className={`flex-1 text-xs px-2 py-1 rounded transition-colors ${
                  extending || isExpired
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {extending ? translation.extending : translation.extend}
              </button>
              <button
                onClick={onGenerateNewEmail}
                disabled={generating}
                className={`flex-1 text-xs px-2 py-1 rounded transition-colors ${
                  generating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {generating ? translation.generating : 'New Email'}
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main View
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900 capitalize">{currentView}</h1>
              {filteredMessages.length > 0 && (
                <span className="text-sm text-gray-500">
                  {filteredMessages.length} message{filteredMessages.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={translation.searchEmails}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        {filteredMessages.length > 0 && (
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  {selectedMessages.length > 0 ? `${selectedMessages.length} ${translation.selected}` : translation.selectAll}
                </span>
              </label>
              
              {selectedMessages.length > 0 && (
                <>
                  <div className="w-px h-6 bg-gray-300"></div>
                  <button
                    onClick={handleDeleteSelected}
                    className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    {translation.delete} ({selectedMessages.length})
                  </button>
                </>
              )}
              
              <div className="ml-auto">
                <button
                  onClick={onDeleteAllMessages}
                  className="flex items-center gap-2 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  {translation.deleteAll}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Email List */}
        <div className="flex-1 overflow-y-auto">
          {filteredMessages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Inbox className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchQuery ? 'No matching emails' : translation.noMessages}
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery 
                    ? 'Try adjusting your search terms'
                    : isExpired 
                      ? 'This email has expired. Generate a new one to receive messages.'
                      : translation.noMessagesDesc
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                    !message.isRead ? 'bg-blue-50' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedMessages.includes(message.id)}
                    onChange={() => handleSelectMessage(message.id)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  
                  <button className="p-1 text-gray-400 hover:text-yellow-500 transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                  
                  <div 
                    className="flex-1 min-w-0 cursor-pointer"
                    onClick={() => handleMessageClick(message)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-medium truncate ${
                        !message.isRead ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {message.from}
                      </span>
                      <span className="text-sm text-gray-500 ml-4 flex-shrink-0">
                        {message.timestamp.toLocaleDateString() === new Date().toLocaleDateString()
                          ? message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          : message.timestamp.toLocaleDateString()
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      {!message.isRead && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      )}
                      <span className={`font-medium truncate ${
                        !message.isRead ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {message.subject}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {message.body}
                    </p>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteMessage(message.id);
                    }}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Email Viewer Modal */}
      {selectedMessage && (
        <EmailViewer
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onDelete={onDeleteMessage}
          translation={translation}
        />
      )}
    </div>
  );
};