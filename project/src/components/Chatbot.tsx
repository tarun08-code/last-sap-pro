import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Use environment variable or fallback to demo mode
const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN || 'demo-mode';

// Demo response function for when API token is not available
const getDemoResponse = (userInput: string): string => {
  const input = userInput.toLowerCase();

  if (input.includes('speaker') || input.includes('who')) {
    return "Our keynote speakers include Dr. Sarah Chen (Chief AI Officer at EduTech Innovations), Prof. Michael Rodriguez (Director of Learning Sciences at Stanford), and Emma Thompson (VR/AR Education Specialist at Meta Reality Labs).";
  } else if (input.includes('when') || input.includes('date') || input.includes('time')) {
    return "TechEdu Summit 2025 will be held from March 15-17, 2025 at the Silicon Valley Convention Center. The event runs from 9:00 AM to 6:00 PM each day.";
  } else if (input.includes('price') || input.includes('cost') || input.includes('ticket')) {
    return "Early bird pricing: $299 for in-person attendance and $99 for virtual access. Regular pricing will be $399 in-person and $149 virtual after February 1st.";
  } else if (input.includes('workshop') || input.includes('session')) {
    return "Featured workshops include 'AI-Powered Learning Analytics', 'VR in Classrooms', 'Blockchain in Education', and 'Personalized Learning Systems'. All workshops are hands-on and include take-home resources.";
  } else if (input.includes('location') || input.includes('where') || input.includes('venue')) {
    return "The event is located at Silicon Valley Convention Center, 2000 Convention Center Way, San Jose, CA. Free parking is available, and the venue is accessible via public transportation.";
  } else {
    return "I'm here to help with information about TechEdu Summit 2025! You can ask me about speakers, schedules, workshops, pricing, location, or registration details.";
  }
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI-powered assistant for the TechEdu Summit 2025. I can help you with event information, schedules, speaker details, registration, and answer any questions you might have. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hugging Face API call function
  const callHuggingFaceAPI = async (userInput: string): Promise<string> => {
    try {
      // If no API token is available, return demo responses
      if (HF_ACCESS_TOKEN === 'demo-mode') {
        return getDemoResponse(userInput);
      }

      const systemPrompt = `You are an AI assistant for the TechEdu Summit 2025. Provide helpful information about:
      - Event: March 15-17, 2025 at Silicon Valley Convention Center
      - Topics: AI in Education, Interactive Technologies, Global Perspectives
      - Speakers: Dr. Sarah Chen, Prof. Michael Rodriguez, Emma Thompson
      - Pricing: Early bird $299 in-person, $99 virtual
      - Workshops: AI-Powered Learning Analytics, VR in Classrooms
      Keep responses friendly and concise.`;

      const response = await fetch(
        'https://api-inference.huggingface.co/models/microsoft/DialoGPT-large',
        {
          headers: {
            'Authorization': `Bearer ${HF_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            inputs: `${systemPrompt}\n\nHuman: ${userInput}\nAssistant:`,
            parameters: {
              max_length: 200,
              temperature: 0.7,
              do_sample: true,
              pad_token_id: 50256
            }
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data && data[0] && data[0].generated_text) {
        const fullText = data[0].generated_text;
        // Extract only the assistant's response
        const assistantStart = fullText.lastIndexOf('Assistant:');
        if (assistantStart !== -1) {
          const assistantResponse = fullText.substring(assistantStart + 10).trim();
          return assistantResponse || getSmartResponse(userInput);
        }
        return fullText.trim() || getSmartResponse(userInput);
      } else {
        return getSmartResponse(userInput);
      }
    } catch (error) {
      console.error('Hugging Face API error:', error);
      return getSmartResponse(userInput);
    }
  };

  const predefinedResponses: { [key: string]: string } = {
    'hello': 'Hello! Welcome to the TechEdu Summit 2025. I\'m here to help you with any questions about our event.',
    'schedule': 'The TechEdu Summit runs from March 15-17, 2025. Day 1 focuses on AI in Education, Day 2 on Interactive Technologies, and Day 3 on Global Perspectives. Would you like specific session details?',
    'speakers': 'We have amazing speakers including Dr. Sarah Chen (AI Officer), Prof. Michael Rodriguez (Stanford), Emma Thompson (VR Solutions), and many more industry leaders. Would you like to know more about any specific speaker?',
    'registration': 'Registration is currently open with early bird pricing! You can register for in-person or virtual attendance. The early bird discount offers 30% off regular pricing. Would you like help with registration?',
    'location': 'The summit is held at Silicon Valley Convention Center with virtual attendance options available. We offer hybrid participation for maximum accessibility.',
    'cost': 'Early bird pricing is currently active with 30% off regular rates. In-person tickets start at $299 (early bird) and virtual tickets at $99. Student discounts are also available.',
    'workshops': 'We offer hands-on workshops including AI-Powered Learning Analytics, VR in Classrooms, and Interactive EdTech Demos. These are included with your summit registration.',
    'networking': 'Networking opportunities include dedicated networking breaks, a welcome reception, lunch sessions, and our closing ceremony. Virtual attendees have access to online networking rooms.',
    'ai': 'AI is a major focus of our summit! We have sessions on AI in Education, Learning Analytics, Personalized Learning Platforms, and Ethics in Educational Technology.',
    'virtual': 'Virtual attendees get full access to all sessions, interactive workshops, networking rooms, and recorded content for 30 days post-event. Technical support is available throughout.',
    'help': 'I can help you with: Event schedule and sessions, Speaker information and LinkedIn profiles, Registration and pricing, Location and virtual access, Workshops and networking, AI and technology topics. What would you like to know?'
  };

  const getSmartResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Find matching keywords
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        return response;
      }
    }

    // Check for specific patterns
    if (lowerInput.includes('when') || lowerInput.includes('date') || lowerInput.includes('time')) {
      return predefinedResponses.schedule;
    }
    if (lowerInput.includes('who') || lowerInput.includes('presenter')) {
      return predefinedResponses.speakers;
    }
    if (lowerInput.includes('price') || lowerInput.includes('ticket') || lowerInput.includes('register')) {
      return predefinedResponses.registration;
    }
    if (lowerInput.includes('where') || lowerInput.includes('venue')) {
      return predefinedResponses.location;
    }

    // Default response
    return 'Thank you for your question! I can provide information about our event schedule, speakers, registration, workshops, and more. You can also visit our website sections above for detailed information. Is there something specific you\'d like to know about the TechEdu Summit 2025?';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    try {
      // Try to get response from Hugging Face API
      const botResponseText = await callHuggingFaceAPI(currentInput);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);

      // Fallback to predefined response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSmartResponse(currentInput),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'Event schedule',
    'Speaker information',
    'Registration details',
    'Location & virtual access'
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(async () => {
      await handleSendMessage();
    }, 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50 animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-blue-100 text-sm">Online • TechEdu Summit</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm'
                    : 'bg-gray-700 text-gray-100 rounded-bl-sm'
                    }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-700 p-3 rounded-xl rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about the summit..."
                className="flex-1 bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-xl border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;