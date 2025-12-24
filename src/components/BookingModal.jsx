import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// Animation variants
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    y: 20,
    transition: { duration: 0.2 }
  }
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

// SVG Icons
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const VideoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 8-6 4 6 4V8Z" />
    <rect x="2" y="6" width="14" height="12" rx="2" />
  </svg>
)

// Time slots
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '2:00 PM', '3:00 PM', 
  '4:00 PM', '5:00 PM'
]

// Generate next 14 days for calendar
const getAvailableDates = () => {
  const dates = []
  const today = new Date()
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push({
        date: date,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        fullDate: date.toISOString().split('T')[0]
      })
    }
  }
  
  return dates
}

export default function BookingModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    company: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const availableDates = getAvailableDates()

  const handleDateSelect = (dateObj) => {
    setSelectedDate(dateObj)
    setBookingStep(2)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    setBookingStep(3)
  }

  const handleBookingSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsConfirmed(true)
    setBookingStep(4)
    setIsSubmitting(false)
  }

  const resetModal = () => {
    setSelectedDate(null)
    setSelectedTime(null)
    setBookingStep(1)
    setBookingData({ name: '', email: '', company: '', notes: '' })
    setIsConfirmed(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl max-h-[85vh] bg-mimesis-black border border-white/20 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="relative p-8 bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-pink-500/10 flex-shrink-0">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <VideoIcon />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Schedule a Meeting
                  </h2>
                  <p className="text-mimesis-gray font-light text-sm">
                    Book a 30-minute video call with our team
                  </p>
                </div>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center gap-2 mt-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      bookingStep >= step 
                        ? 'bg-white text-black' 
                        : 'bg-white/10 text-white/40'
                    }`}>
                      {bookingStep > step ? (
                        <CheckIcon />
                      ) : (
                        step
                      )}
                    </div>
                    {step < 4 && (
                      <div className={`w-12 h-0.5 mx-2 ${
                        bookingStep > step ? 'bg-white' : 'bg-white/20'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[60vh]">
              {bookingStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CalendarIcon />
                    <h3 className="text-xl font-bold text-white">Select a Date</h3>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    {availableDates.map((dateObj, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleDateSelect(dateObj)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="text-white/60 text-sm font-light">
                          {dateObj.dayName}
                        </span>
                        <div className="text-2xl font-bold text-white my-2">
                          {dateObj.dayNumber}
                        </div>
                        <span className="text-white/60 text-sm font-light">
                          {dateObj.month}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {bookingStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <CalendarIcon />
                      <h3 className="text-xl font-bold text-white">Select a Time</h3>
                    </div>
                    <button
                      onClick={() => setBookingStep(1)}
                      className="text-white/60 hover:text-white text-sm"
                    >
                      ← Back
                    </button>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-4 mb-6">
                    <span className="text-mimesis-gray text-sm font-light">
                      Selected Date:
                    </span>
                    <span className="text-white font-medium ml-2">
                      {selectedDate?.dayName}, {selectedDate?.month} {selectedDate?.dayNumber}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleTimeSelect(time)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <span className="text-white font-light">{time}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {bookingStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <ClockIcon />
                      <h3 className="text-xl font-bold text-white">Your Information</h3>
                    </div>
                    <button
                      onClick={() => setBookingStep(2)}
                      className="text-white/60 hover:text-white text-sm"
                    >
                      ← Back
                    </button>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-4 mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-mimesis-gray font-light">Date:</span>
                      <span className="text-white">{selectedDate?.dayName}, {selectedDate?.month} {selectedDate?.dayNumber}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-mimesis-gray font-light">Time:</span>
                      <span className="text-white">{selectedTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Company
                      </label>
                      <input
                        type="text"
                        value={bookingData.company}
                        onChange={(e) => setBookingData({ ...bookingData, company: e.target.value })}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Notes (optional)
                      </label>
                      <textarea
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                        placeholder="Any topics you'd like to discuss..."
                        rows="3"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleBookingSubmit}
                    disabled={isSubmitting || !bookingData.name || !bookingData.email}
                    className="w-full mt-6 py-4 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                  </motion.button>
                </motion.div>
              )}

              {bookingStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckIcon />
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-mimesis-gray font-light mb-6">
                    Your meeting has been scheduled successfully.
                  </p>
                  
                  <div className="bg-white/5 rounded-2xl p-6 mb-6 text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CalendarIcon />
                        <span className="text-white">
                          {selectedDate?.dayName}, {selectedDate?.month} {selectedDate?.dayNumber}, 2025
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ClockIcon />
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-white">{bookingData.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-mimesis-gray font-light text-sm mb-6">
                    A confirmation email has been sent to your inbox with the video call link.
                  </p>
                  
                  <motion.button
                    onClick={handleClose}
                    className="px-8 py-3 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Done
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

