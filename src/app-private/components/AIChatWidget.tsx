import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '../styles/theme';

export const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Hello! I am your AMA AI assistant (Demo Mode). How can I help you manage your dashboard today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      let botResponse = "This is a simulated response for the UI demo. In a real environment, I would process your request using the Gemini API.";
      
      if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        botResponse = "Hello! How can I assist you with the AMA dashboard demo today?";
      } else if (userMessage.toLowerCase().includes('stat') || userMessage.toLowerCase().includes('chart')) {
        botResponse = "The statistics show your current progress. You have completed 32% of your targets so far!";
      } else if (userMessage.toLowerCase().includes('mentor')) {
        botResponse = "You have 3 active mentors assigned to your profile: Padhang, Zakir, and Leonardo.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all z-50"
      >
        <Bot size={32} />
      </button>
    );
  }

  return (
    <div className={cn(
      "fixed bottom-8 right-8 w-96 bg-white rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col transition-all z-50 overflow-hidden",
      isMinimized ? "h-16" : "h-[500px]"
    )}>
      <div className="p-4 bg-brand-red text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bot size={20} />
          <span className="font-bold">AMA AI Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-white/20 rounded">
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded">
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={cn(
                "flex gap-3",
                msg.role === 'user' ? "flex-row-reverse" : ""
              )}>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  msg.role === 'user' ? "bg-gray-100 text-gray-600" : "bg-brand-red/10 text-brand-red"
                )}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={cn(
                  "p-3 rounded-2xl text-sm max-w-[80%]",
                  msg.role === 'user' ? "bg-brand-red text-white" : "bg-gray-50 text-gray-800"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="bg-gray-50 p-3 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full h-12 pl-4 pr-12 bg-gray-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-brand-red/20 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-red text-white rounded-lg flex items-center justify-center hover:bg-brand-red/90 transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
