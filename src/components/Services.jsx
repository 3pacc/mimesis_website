import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

// Services data - Original text restored
const services = [
  {
    id: 1,
    title: 'Brand Identity',
    description: "We design brands that don't just exist — they resonate. Through strategic storytelling and bold visual systems, we craft identities that people remember, trust, and choose.",
    icon: '◆',
    features: ['Logo Design', 'Brand Strategy', 'Visual Systems', 'Brand Guidelines'],
    price: 'Starting at $8,000',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    frameColors: [
      'bg-violet-500/20',
      'bg-purple-500/15', 
      'bg-fuchsia-500/15',
      'bg-indigo-500/20'
    ]
  },
  {
    id: 2,
    title: 'Digital Experience',
    description: 'We build immersive digital worlds where user intuition meets cutting-edge technology. Every pixel is purposeful, every interaction unforgettable.',
    icon: '◇',
    features: ['Web Design', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    price: 'Starting at $15,000',
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    frameColors: [
      'bg-cyan-500/20',
      'bg-sky-500/15',
      'bg-blue-500/15',
      'bg-teal-500/20'
    ]
  },
  {
    id: 3,
    title: 'Motion Design',
    description: 'Static is boring. We bring brands to life through fluid animations and cinematic motion graphics that capture attention and communicate emotion.',
    icon: '○',
    features: ['2D/3D Animation', 'Motion Branding', 'Video Production', 'Interactive Motion'],
    price: 'Starting at $12,000',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    frameColors: [
      'bg-rose-500/20',
      'bg-pink-500/15',
      'bg-red-500/15',
      'bg-crimson-500/20'
    ]
  },
  {
    id: 4,
    title: 'Art Direction',
    description: 'We provide visionary creative leadership that transforms concepts into compelling visual narratives. Your story, told with impact and artistry.',
    icon: '●',
    features: ['Campaign Vision', 'Creative Strategy', 'Photoshoot Direction', 'Visual Storytelling'],
    price: 'Starting at $20,000',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    frameColors: [
      'bg-orange-500/20',
      'bg-amber-500/15',
      'bg-yellow-500/15',
      'bg-golden-500/20'
    ]
  },
]

// Pricing plans - Original text
const pricingPlans = [
  {
    name: 'Starter',
    price: '$5,000',
    period: '/project',
    description: 'Perfect for small businesses needing a fresh visual identity.',
    features: [
      'Logo Design (3 concepts)',
      'Color Palette & Typography',
      'Brand Guidelines PDF',
      '2 Revision Rounds',
      '4 Week Timeline',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$15,000',
    period: '/project',
    description: 'Comprehensive branding for growing companies.',
    features: [
      'Full Brand Identity System',
      'Logo Design (5 concepts)',
      'Marketing Materials',
      'Social Media Assets',
      'Unlimited Revisions',
      '6 Week Timeline',
      'Priority Support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$45,000',
    period: '/project',
    description: 'Complete digital transformation for established brands.',
    features: [
      'Everything in Professional',
      'Full Digital Ecosystem',
      'Web Design & Development',
      'Motion Graphics Package',
      'Brand Strategy Workshop',
      'Launch Campaign',
      '3 Month Post-Launch Support',
      '12 Week Timeline',
    ],
    highlight: false,
  },
]

// Special offers
const offers = [
  {
    id: 1,
    title: 'Early Bird',
    discount: '20% OFF',
    description: 'Book your project within 30 days and receive a 20% discount on all services.',
    validUntil: 'Valid for new projects only',
  },
  {
    id: 2,
    title: 'Bundle & Save',
    discount: '15% OFF',
    description: 'Combine two or more services and save 15% on your total project.',
    validUntil: 'Applies to multi-service projects',
  },
  {
    id: 3,
    title: 'Referral Bonus',
    discount: '$2,000',
    description: 'Refer a new client and receive $2,000 credit towards your next project.',
    validUntil: 'Credits valid for 12 months',
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// Feature Frame Component with enhanced styling
function FeatureFrame({ feature, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -8 }}
      className={`${color} backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center justify-center text-center transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:shadow-white/5 cursor-pointer group`}
    >
      <div className="flex items-center gap-2">
        <motion.span 
          className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [-5, 0, -5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="text-white font-medium text-sm tracking-wide group-hover:text-white transition-colors">
          {feature}
        </span>
      </div>
    </motion.div>
  )
}

// Service Card Component with enhanced typography
function ServiceCard({ service, index }) {
  return (
    <motion.div
      key={service.id}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-none transition-all duration-500 hover:border-white/25 hover:shadow-2xl hover:shadow-white/5"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />

      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />

      <div className="relative z-10 p-8">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <motion.div
              className="text-5xl mb-4 text-white/90"
              animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {service.icon}
            </motion.div>
            <h3 className="font-display text-3xl font-bold text-white mb-3 tracking-tight">
              {service.title}
            </h3>
          </div>
          <div className="text-right">
            <span className="block text-white font-light text-sm tracking-widest uppercase opacity-70 mb-1">
              Starting at
            </span>
            <span className="text-white font-bold text-xl">{service.price}</span>
          </div>
        </div>

        {/* Enhanced description with better typography */}
        <div className="relative mb-8">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
          <p className="text-white/80 font-light leading-relaxed text-base pl-4">
            {service.description}
          </p>
        </div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="text-xs text-white/50 font-light tracking-[0.3em] uppercase">
            What We Do
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
        </motion.div>

        {/* 4 Feature Frames in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, idx) => (
            <FeatureFrame
              key={idx}
              feature={feature}
              color={service.frameColors[idx]}
              index={idx}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="w-full py-4 bg-white text-black font-semibold tracking-wide rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Learn More</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>
      </div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl border border-white/20" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  const containerRef = useRef(null)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <div ref={containerRef} className="min-h-screen pt-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-16 lg:px-24 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
            Our Expertise
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white mb-8">
            Services that
            <br />
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              Shape Tomorrow
            </span>
          </h1>
          <p className="text-lg md:text-xl text-mimesis-gray font-light max-w-2xl leading-relaxed">
            We offer a comprehensive suite of creative services designed to elevate your brand 
            and create lasting impressions in the digital age.
          </p>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
            Our Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-mimesis-gray font-light max-w-2xl mx-auto text-lg">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Discover', description: 'We dive deep into your brand, goals, and audience to understand what drives success.' },
            { step: '02', title: 'Define', description: 'We craft a strategic roadmap and creative direction tailored to your vision.' },
            { step: '03', title: 'Create', description: 'Our team brings concepts to life through iterative design and meticulous refinement.' },
            { step: '04', title: 'Deliver', description: 'We launch with impact, ensuring every detail exceeds expectations.' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              <div className="mb-6">
                <span className="font-display text-6xl md:text-7xl font-bold text-white/10 group-hover:text-white/30 transition-colors">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-mimesis-gray font-light text-sm leading-relaxed">
                {item.description}
              </p>
              {index < 3 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-white/20 via-white/40 to-white/20" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
            Investment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing Plans
          </h2>
          <p className="text-mimesis-gray font-light max-w-2xl mx-auto text-lg">
            Transparent pricing with no hidden fees. Choose the package that best fits your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-10 rounded-3xl border ${
                plan.highlight
                  ? 'bg-white/10 border-white/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-medium tracking-widest uppercase rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-mimesis-gray font-light text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl md:text-6xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-mimesis-gray font-light">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/70 font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`interactive w-full py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Special Offers */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
            Limited Time
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Special Offers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl font-bold text-white">{offer.discount}</span>
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {offer.title}
                </h3>

                <p className="text-mimesis-gray font-light text-sm mb-4">
                  {offer.description}
                </p>

                <p className="text-xs text-white/40 uppercase tracking-wider">
                  {offer.validUntil}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 bg-white/5 border border-white/10 rounded-4xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-pink-500/10" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-mimesis-gray font-light text-lg mb-8">
              Let's create something extraordinary together. Schedule a free consultation 
              and discover how we can elevate your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setIsCalendarOpen(true)}
                className="interactive px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              <motion.button
                className="interactive px-8 py-4 bg-transparent border border-white/30 text-white font-medium tracking-wide rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>

          {/* Decorative circles */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/10 rounded-full"
          />
        </motion.div>
      </section>

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
