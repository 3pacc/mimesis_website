import { motion } from 'framer-motion'
import { useState } from 'react'
import BookingModal from './BookingModal'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

// SVG Icons
const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const LocationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
)

// Contact information
const contactInfo = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    value: 'hello@mimesis.studio',
    description: 'We reply within 24 hours',
    link: 'mailto:hello@mimesis.studio'
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    value: '+33 1 23 45 67 89',
    description: 'Mon-Fri, 9am-6pm',
    link: 'tel:+33123456789'
  },
  {
    icon: <LocationIcon />,
    title: 'Address',
    value: '123 Creativity Street',
    description: '75001 Paris, France',
    link: '#'
  }
]

// Business hours
const businessHours = [
  { day: 'Monday', hours: '9am - 6pm', available: true },
  { day: 'Tuesday', hours: '9am - 6pm', available: true },
  { day: 'Wednesday', hours: '9am - 6pm', available: true },
  { day: 'Thursday', hours: '9am - 6pm', available: true },
  { day: 'Friday', hours: '9am - 6pm', available: true },
  { day: 'Saturday', hours: 'Closed', available: false },
  { day: 'Sunday', hours: 'Closed', available: false }
]

// FAQ for contact page
const faqItems = [
  {
    question: 'What is your response time?',
    answer: 'We commit to replying to all inquiries within 24 business hours. For urgent projects, please specify this in the subject line of your message.'
  },
  {
    question: 'Do you offer video calls?',
    answer: 'Absolutely! We offer video calls via Zoom, Google Meet, or Discord for remote projects. You can directly book a slot in our calendar.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients worldwide. All our exchanges can be conducted in English or French, and we use online collaboration tools to ensure smooth communication.'
  },
  {
    question: 'How does a collaboration start?',
    answer: 'Everything starts with a conversation! Book an appointment via our calendar or send us a message detailing your project. We will then organize a free 30-minute call to understand your needs.'
  },
  {
    question: 'Do you offer discounted rates for recurring projects?',
    answer: 'Yes, we offer tailored packages for companies seeking regular support. Feel free to discuss this during our first exchange.'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
      setSubmitStatus(null)
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="px-8 md:px-16 lg:px-24 pb-24"
      >
        <motion.div variants={fadeInUp} className="max-w-5xl">
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
            Get in Touch
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-8">
            Let's Talk About<br />
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              Your Project
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-mimesis-gray font-light max-w-3xl leading-relaxed">
            Every great story begins with a conversation. Tell us all about your vision, 
            and let's discover together how to make it happen.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact-form"
              className="interactive px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Send a Message
            </a>
            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="interactive px-8 py-4 bg-transparent border border-white/30 text-white font-medium tracking-wide rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Meeting
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="px-8 md:px-16 lg:px-24 py-12 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="p-4 bg-white/5 rounded-2xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {info.icon}
                    </motion.div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {info.title}
                  </h3>
                  <a 
                    href={info.link}
                    className="text-white/80 font-light text-lg hover:text-white transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                  <p className="text-mimesis-gray font-light text-sm">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contact-form"
        className="px-8 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
              Send Us a Message
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start the Journey
            </h2>
            <p className="text-mimesis-gray font-light max-w-2xl mx-auto text-lg">
              Fill out this form and we'll get back to you within 24 hours 
              with a first analysis of your project.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-4xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-pink-500/5 rounded-4xl" />
            
            <div className="relative z-10">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckIcon />
                  </motion.div>
                  <h3 className="font-display text-3xl font-bold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-mimesis-gray font-light text-lg">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Company & Service Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white/70 text-sm font-light">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-mimesis-black">Select a service...</option>
                        <option value="brand-identity" className="bg-mimesis-black">Brand Identity</option>
                        <option value="digital-experience" className="bg-mimesis-black">Digital Experience</option>
                        <option value="motion-design" className="bg-mimesis-black">Motion Design</option>
                        <option value="art-direction" className="bg-mimesis-black">Art Direction</option>
                        <option value="other" className="bg-mimesis-black">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-light">
                      Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your project, your goals, and what you expect from our collaboration..."
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-5 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <motion.span
                          className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRightIcon />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-white/40 text-sm">
                    By submitting this form, you accept our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Business Hours */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
              Business Hours
            </span>
            <h2 className="font-display text-4xl font-bold text-white mb-8">
              When to Reach Us
            </h2>
            
            <div className="space-y-4">
              {businessHours.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl"
                >
                  <span className="text-white font-light">{day.day}</span>
                  <span className={`font-medium ${
                    day.available ? 'text-white' : 'text-mimesis-gray'
                  }`}>
                    {day.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Know
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    className="text-white/60 flex-shrink-0"
                  >
                    <PlusIcon />
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-mimesis-gray font-light leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-white/50 text-sm font-light">
              © 2025 MIMESIS. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="interactive text-sm text-mimesis-gray hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
