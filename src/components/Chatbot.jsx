import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Chatbot Component - Dynamic and Interactive
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! 👋 I'm Alfredo. How can I help you today?", isBot: true, time: 'Just now' }
  ])
  const [inputValue, setInputValue] = useState('')

  // Show chatbot after 3 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  const quickQuestions = [
    "What services?",
    "Pricing?",
    "Timeline?",
    "Let's talk"
  ]

  const handleSend = (question = inputValue) => {
    if (!question.trim()) return

    setMessages(prev => [...prev, {
      id: Date.now(),
      text: question,
      isBot: false,
      time: 'Just now'
    }])

    setInputValue('')

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Awesome! 🎉 I'd love to learn more about your project. Our team typically responds within 24 hours. Click 'Start a Project' and we'll be in touch soon!",
        isBot: true,
        time: 'Just now'
      }])
    }, 800)
  }

  return (
    <>
      {/* Chatbot Toggle Button - EXTREME RIGHT with transparency when NOT hovered */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-8 right-8 z-50 group"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.4,
              scale: 1 
            }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3, opacity: { duration: 0.3 } }}
          >
            {/* Glow effect - always visible but stronger on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                opacity: isHovered ? 1 : 0.5,
              }}
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 70%)',
              }}
            />
            
            {/* Main button */}
            <div 
              className="relative w-14 h-14 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30"
              style={{
                boxShadow: isHovered 
                  ? '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)'
                  : '0 0 20px rgba(139, 92, 246, 0.2)',
              }}
            >
              {/* Chat icon when closed */}
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="chat"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Notification dot */}
              <div 
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center border-2 border-slate-900"
                style={{
                  opacity: isHovered ? 1 : 0.7,
                }}
              >
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-8 z-40 w-80 max-w-[calc(100vw-2rem)]"
          >
            {/* Chat container - Dark Purple Theme */}
            <div className="bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 rounded-2xl border border-purple-500/40 shadow-2xl shadow-purple-500/20 overflow-hidden">
              {/* Header - Dark Purple */}
              <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 p-4 relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-purple-400/20 to-fuchsia-400/20" />
                
                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl backdrop-blur-sm">
                      🤖
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg tracking-wide">Alfredo</h3>
                    <p className="text-purple-200/70 text-xs">Online • Quick response</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-56 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                      message.isBot 
                        ? 'bg-purple-800/50 text-purple-100 rounded-bl-lg backdrop-blur-sm border border-purple-500/20' 
                        : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-tr-lg shadow-lg shadow-purple-500/30'
                    }`}>
                      <p className="font-light leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick questions - Purple theme */}
              <div className="px-4 pb-3">
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSend(question)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 bg-purple-800/40 hover:bg-purple-700/60 text-purple-200 text-xs rounded-full border border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-purple-500/20 bg-purple-900/20">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-purple-900/40 text-purple-100 placeholder-purple-400/50 px-4 py-2.5 rounded-xl border border-purple-500/30 focus:outline-none focus:border-purple-400/60 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300 text-sm"
                  />
                  <motion.button
                    onClick={() => handleSend()}
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/40 border border-purple-400/30"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
