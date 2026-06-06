import { useState, useRef, useEffect } from 'react';
import { X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Holidays Navigator assistant. How can I help you with the Canton Fair package?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const userMessage = { id: Date.now(), text: query, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const text = query.toLowerCase();

      // Helper to check if a string contains any of the keywords
      const containsAny = (keywords) => keywords.some(keyword => text.includes(keyword));

      let botResponse;

      // 1. Unrelated topics first (Rule 7: coding, politics, medical, sports, unrelated)
      const unrelatedKeywords = [
        'code', 'javascript', 'react', 'html', 'css', 'programming', 'function', 'class', 'python', 'java', 'sql',
        'politics', 'election', 'modi', 'trump', 'bjp', 'congress', 'government',
        'medical', 'doctor', 'medicine', 'hospital', 'disease', 'covid', 'health', 'sick', 'vaccine', 'virus',
        'ipl', 'cricket', 'football', 'sports', 'won', 'match', 'game', 'player', 'score'
      ];

      if (containsAny(unrelatedKeywords)) {
        botResponse = "I can assist only with Holidays Navigator travel and Canton Fair related queries.";
      }
      // 2. Greetings
      else if (containsAny(['hi', 'hello', 'hey', 'greetings', 'morning', 'afternoon'])) {
        botResponse = "Hello! I'm your Holidays Navigator travel assistant. How can I help you with your Canton Fair packages or travel planning today?";
      }
      // 3. Visa assistance
      else if (text.includes("visa") || text.includes("passport") || text.includes("document")) {
        botResponse = "Visa processing takes minimum 15+ working days. Please apply early! You can contact us for the required document list.";
      }
      // 4. Canton Fair registration
      else if (containsAny(['registration', 'register', 'badge', 'entry', 'pass', 'invitation'])) {
        botResponse = "We assist with Canton Fair buyer registration and invitation letter processing. Please apply early to ensure smooth entry!";
      }
      // 5. Contact & Support
      else if (containsAny(['contact', 'call', 'phone', 'number', 'support', 'whatsapp', 'reach', 'help', 'email', 'expert'])) {
        botResponse = "You can reach Holidays Navigator directly at +91 9533444455 or message us on WhatsApp for immediate support.";
      }
      // 6. Hotels
      else if (containsAny(['hotel', 'stay', 'accommodation', 'room', 'sharing'])) {
        botResponse = "We provide premium hotel stays with breakfast near the Canton Fair. Please contact our travel expert on WhatsApp or call +91 9533444455 for exact details.";
      }
      // 7. Flights
      else if (containsAny(['flight', 'airfare', 'ticket', 'plane'])) {
        botResponse = "Our packages can include flight bookings from major hubs. Please contact our travel expert on WhatsApp or call +91 9533444455 for exact details.";
      }
      // 8. General Travel Packages & Planning
      else if (containsAny(['package', 'price', 'cost', 'rate', 'deal', 'offer', 'charge', 'fee', 'how much', 'inr', 'plan', 'schedule', 'date', 'phase', 'when', 'canton', 'fair', 'guangzhou', 'china'])) {
        botResponse = "Please contact our travel expert on WhatsApp or call +91 9533444455 for exact details.";
      }
      // 9. Fallback / Unclear (politely ask for clarification)
      else {
        botResponse = "I can assist only with Holidays Navigator travel and Canton Fair related queries. Could you please clarify your question regarding our travel packages, visa, hotels, flights, or registration?";
      }

      const botMessage = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <div className="chat-header">
              <div className="chat-title">
                <img src="/chat.png" alt="Customer Support Chat Assistant" title="Chat with Holidays Navigator" loading="lazy" width="24" height="24" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%' }} />
                <span>Travel Assistant</span>
              </div>
              <button className="close-btn" aria-label="Close Chat" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                  <div className="message-icon">
                    {msg.sender === 'bot' ? (
                      <img src="/chat.png" alt="Customer Support Chat Bot" title="Holidays Navigator Support" loading="lazy" width="24" height="24" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                    ) : (
                      <User size={12} />
                    )}
                  </div>
                  <div className="message-text">
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className="chat-input-area" onSubmit={handleSendMessage}>
              <input 
                type="text" 
                aria-label="Type your message"
                placeholder="Type your message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="send-btn" aria-label="Send message" disabled={!inputValue.trim()}>
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className={`chatbot-fab ${isOpen ? 'active' : ''}`}
        aria-label="Toggle chat assistant"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {!isOpen && <span className="chatbot-tooltip">Ask our travel guru!</span>}
        {isOpen ? <X size={22} /> : <img src="/chat.png" alt="Customer Support Chat Icon" title="Open Chat with Holidays Navigator" loading="lazy" width="60" height="60" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
