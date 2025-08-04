import React from 'react';
import { 
  Mail, 
  Shield, 
  Clock, 
  Zap, 
  Eye, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Download
} from 'lucide-react';
import { Translation } from '../utils/translations';
import { LanguageSelector } from './LanguageSelector';
// import { BannerAd, SquareAd } from './AdSenseAd';

interface LandingPageProps {
  onGetStarted: () => void;
  translation: Translation;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ 
  onGetStarted, 
  translation,
  currentLanguage,
  onLanguageChange
}) => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: translation.anonymous,
      description: translation.anonymousDesc
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: translation.instantSetup,
      description: translation.instantSetupDesc
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: translation.autoExpiry,
      description: translation.autoExpiryDesc
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: translation.realTimeInbox,
      description: translation.realTimeInboxDesc
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: translation.universalAccess,
      description: translation.universalAccessDesc
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: translation.cleanInterface,
      description: translation.cleanInterfaceDesc
    }
  ];

  const useCases = [
    translation.signupNewsletters,
    translation.testRegistrations,
    translation.downloadResources,
    translation.accessContent,
    translation.verifyEmail,
    translation.protectMainEmail
  ];

  const stats = [
    { number: "1M+", label: translation.emailsGenerated },
    { number: "50K+", label: translation.dailyUsers },
    { number: "99.9%", label: translation.uptime },
    { number: "0", label: translation.cost }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-24">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yoo! mail
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </nav>

          {/* Top Banner Ad */}
          {/* <div className="mb-8"> */}
            {/* <BannerAd className="w-full flex justify-center" /> */}
          {/* </div> */}

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              {translation.trustedBy}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {translation.heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {translation.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {translation.getStarted}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-gray-500">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{translation.noRegistration}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {translation.featuresTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translation.featuresSubtitle}
            </p>
          </div>
          
          {/* Ad between title and features */}
          {/* <div className="mb-12">
            <BannerAd className="w-full flex justify-center" />
          </div> */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {translation.howItWorksTitle}
            </h2>
            <p className="text-xl text-gray-600">
              Get started in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: translation.clickGenerate,
                description: translation.clickGenerateDesc
              },
              {
                step: "02", 
                title: translation.copyUse,
                description: translation.copyUseDesc
              },
              {
                step: "03",
                title: translation.receiveRead,
                description: translation.receiveReadDesc
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {translation.perfectFor}
                <span className="block text-blue-600">{translation.onlineNeed}</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you're protecting your privacy or testing services, Yoo! mail has you covered.
              </p>
              
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{useCase}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={onGetStarted}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {translation.getFreeEmail}
              </button>
            </div>
            
            <div className="relative">
              {/* Square Ad */}
              {/* <div className="mb-6">
                <SquareAd className="w-full flex justify-center" />
              </div> */}
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Yoo! mail {translation.inbox}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { from: "newsletter@example.com", subject: "Welcome to our service!", time: "2m ago" },
                      { from: "noreply@download.com", subject: "Your download is ready", time: "5m ago" },
                      { from: "verify@signup.com", subject: "Please verify your email", time: "8m ago" }
                    ].map((email, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-900 text-sm">{email.from}</span>
                          <span className="text-xs text-gray-500">{email.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{email.subject}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translation.readyToProtect}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {translation.joinThousands}
          </p>
          
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            {translation.getFreeEmail}
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-blue-100">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>50K+ {translation.dailyUsers}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>{translation.anonymous100}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>{translation.instantSetup}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Yoo! mail</span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>{translation.footerText}</p>
              <p className="text-sm mt-1">{translation.freeService}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};