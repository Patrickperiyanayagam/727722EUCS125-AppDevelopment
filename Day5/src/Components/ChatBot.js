import { GoogleGenerativeAI } from '@google/generative-ai';
import React, { useEffect, useRef, useState } from 'react';
import '../StylingComponents/ChatBot.css';

const API_KEY = 'AIzaSyDy3rmPD2C3qWAc1aTOXVcU2vXQUrbSM9s';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const prompt = input;
    const prompttext = " For the above question, first introduce yourself as AI from Logzz Company with a random emoji, for every chat and give the response in about 5 points for every question. and give a bonus information on logistics management";
    
    setMessages(prevMessages => [...prevMessages, { text: prompt, from: 'user' }]);
    setInput('');

    try {
      const result = await model.generateContent(prompt + prompttext);
      const response = await result.response;
      const text = await response.text();
      setMessages(prevMessages => [...prevMessages, { text, from: 'bot' }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prevMessages => [...prevMessages, { text: "I'm sorry, I couldn't process your request. Please try again.", from: 'bot' }]);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Chat with Assitant</h3>
        <span className="toggle-btn">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.from}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
