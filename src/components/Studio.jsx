import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import BookingModal from './BookingModal'

// Import images directly
import etherealCosmeticsImg from '../../img/face-care-gua-sha-stone-product.jpg'
import nexusTechImg from '../../img/hands-digital-universe-background.jpg'
import artisanCoffeeImg from '../../img/close-up-cup-filled-with-black-coffee.jpg'
import velvetNightclubImg from '../../img/dancing-people-club.jpg'
import zenWellnessImg from '../../img/stacked-zen-stones-sand-background-art-balance-concept.jpg'
import urbanEdgeImg from '../../img/musician-walking-downstairs.jpg'
import anasPhoto from '../../img/Anas.png'

// Animated Counter Component
function Counter({ value, duration = 2, delay = 0 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)
  
  // Extract numeric value and check for "+" sign
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const hasPlus = value.includes('+')
  const suffix = hasPlus ? '+' : ''

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue(0, numericValue, duration * 1000)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, numericValue, duration])

  const animateValue = (start, end, duration) => {
    const startTime = Date.now() + delay * 1000
    
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(start + (end - start) * easeOutQuart)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }

  return (
    <motion.span
      ref={counterRef}
      className="font-display text-5xl md:text-6xl font-bold text-white block mb-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  )
}

// Team members data with enhanced bios
const team = [
  {
    id: 1,
    name: 'Anas Tribak',
    role: 'Creative Director',
    bio: 'Award-winning designer with 15 years of experience shaping digital experiences for Fortune 500 companies.',
    image: anasPhoto,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Lead Designer',
    bio: 'Specialist in minimalist design and typography, creating timeless visual identities that stand the test of time.',
    image: null,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    role: 'Motion Designer',
    bio: 'Award-winning animator who brings brands to life through captivating motion and interactive experiences.',
    image: null,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 4,
    name: 'James Okon',
    role: 'Brand Strategist',
    bio: 'Strategic thinker who transforms complex ideas into compelling brand narratives that drive results.',
    image: null,
    gradient: 'from-amber-500 to-orange-600',
  },
]

// Portfolio works with enhanced descriptions
const works = [
  {
    id: 1,
    title: 'Ethereal Cosmetics',
    category: 'Brand Identity',
    image: etherealCosmeticsImg,
    color: 'from-pink-300 to-rose-400',
    description: 'A luxury beauty brand reimagined with ethereal aesthetics that captivate.',
  },
  {
    id: 2,
    title: 'Nexus Tech',
    category: 'Digital Experience',
    image: nexusTechImg,
    color: 'from-cyan-300 to-blue-400',
    description: 'Next-generation SaaS platform with intuitive design that users love.',
  },
  {
    id: 3,
    title: 'Artisan Coffee',
    category: 'Brand & Packaging',
    image: artisanCoffeeImg,
    color: 'from-amber-300 to-orange-400',
    description: 'Premium coffee brand celebrating artisanal craftsmanship and heritage.',
  },
  {
    id: 4,
    title: 'Velvet Nightclub',
    category: 'Art Direction',
    image: velvetNightclubImg,
    color: 'from-purple-300 to-violet-400',
    description: 'Immersive nightlife experience with bold visual identity that excites.',
  },
  {
    id: 5,
    title: 'Zen Wellness',
    category: 'Digital & Print',
    image: zenWellnessImg,
    color: 'from-emerald-300 to-teal-400',
    description: 'Holistic wellness platform promoting balance and harmony in digital form.',
  },
  {
    id: 6,
    title: 'Urban Edge',
    category: 'Streetwear Brand',
    image: urbanEdgeImg,
    color: 'from-gray-300 to-slate-400',
    description: 'Contemporary fashion brand celebrating urban culture with authentic style.',
  },
]

// Values with enhanced descriptions
const values = [
  {
    id: 1,
    title: 'Authenticity',
    description: 'We believe in creating genuine connections through honest, purposeful design that resonates.',
    icon: '✦',
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'We push boundaries and explore new frontiers in digital creativity to stay ahead.',
    icon: '◈',
  },
  {
    id: 3,
    title: 'Excellence',
    description: 'We never compromise on quality, delivering only our absolute best in every project.',
    icon: '◆',
  },
  {
    id: 4,
    title: 'Collaboration',
    description: 'We build true partnerships, working closely with clients as one unified team.',
    icon: '◇',
  },
]

// Stats
const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '12', label: 'Design Awards' },
  { value: '8', label: 'Years Experience' },
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Studio() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 100 })
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 100])
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen pt-32">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="px-8 md:px-16 lg:px-24 pb-24 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute top-1/4 -right-20 w-96 h-96 border border-white/5 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 80, repeat: Infinity, ease: 'linear' },
              scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="absolute bottom-1/4 -left-20 w-80 h-80 border border-white/5 rounded-full"
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.3em] uppercase mb-6 block">
              Our Studio
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-white mb-8">
              Where Art
              <br />
              <span className="text-gradient bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                Meets Purpose
              </span>
            </h1>
            <p className="text-lg md:text-xl text-mimesis-gray font-light max-w-3xl mx-auto leading-relaxed">
              We are a collective of visionaries, creators, and dreamers dedicated to crafting 
              extraordinary digital experiences that transcend the ordinary.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs text-mimesis-gray tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ height: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter value={stat.value} duration={2} delay={index * 0.15} />
              <span className="text-sm text-mimesis-gray font-light tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.2em] uppercase mb-4 block">
            What We Stand For
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Our Values
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-3xl text-center hover:bg-white/10 transition-colors"
            >
              <motion.div
                className="text-4xl mb-6 text-white/60 group-hover:text-white/90 transition-colors"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {value.icon}
              </motion.div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-mimesis-gray font-light text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.2em] uppercase mb-4 block">
            The Minds Behind
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our Team
          </h2>
          <p className="text-mimesis-gray font-light max-w-2xl mx-auto">
            A diverse collective of creative minds united by passion and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Member card */}
              <div className="relative p-6 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Avatar placeholder */}
                <div className="relative mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-white/20 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}
                    >
                      <span className="text-4xl font-bold text-white/90">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-violet-400 font-light tracking-wide uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-mimesis-gray font-light text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/10"
                >
                  {['LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="interactive w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-mimesis-gray hover:bg-white/10 hover:text-white transition-all"
                    >
                      <span className="text-xs">{social[0]}</span>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 border border-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.2em] uppercase mb-4 block">
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Recent Projects
            </h2>
          </div>
          <motion.button
            className="interactive px-6 py-3 border border-white/20 text-white text-sm font-light tracking-wide rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-none"
            >
              {/* Work image - Top 40% of the card */}
              <div className="absolute inset-0 h-[45%] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
              </div>

              {/* Background gradient - Bottom 60% */}
              <div
                className={`absolute inset-0 top-[40%] bg-gradient-to-br ${work.color} opacity-80`}
              />

              {/* Full overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Content - Bottom 60% */}
              <div className="absolute inset-0 top-[40%] p-8 flex flex-col justify-end">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-xs text-white/60 uppercase tracking-widest mb-2"
                >
                  {work.category}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-2xl md:text-3xl font-bold text-white mb-2"
                >
                  {work.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 font-light text-sm"
                >
                  {work.description}
                </motion.p>

                {/* Hover reveal button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <motion.button
                    className="interactive px-6 py-3 bg-white text-black text-sm font-medium tracking-wide rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>

              {/* Decorative element on hover */}
              <div className="absolute top-6 right-6 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Studio Space */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs md:text-sm text-mimesis-gray font-light tracking-[0.2em] uppercase mb-4 block">
              Our Space
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              A Creative
              <br />
              <span className="text-gradient bg-gradient-to-r from-violet-400 to-pink-400">
                Sanctuary
              </span>
            </h2>
            <p className="text-mimesis-gray font-light leading-relaxed mb-6">
              Located in the heart of the creative district, our studio is a haven for innovation. 
              With floor-to-ceiling windows flooding the space with natural light, dedicated 
              collaboration zones, and state-of-the-art technology, we've created an environment 
              where creativity thrives.
            </p>
            <p className="text-mimesis-gray font-light leading-relaxed mb-8">
              Every corner of our studio has been thoughtfully designed to inspire and 
              facilitate the creative process, from the quiet focus rooms to the open 
              collaborative spaces.
            </p>

            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="interactive px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Meeting
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10"
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-white/5"
                  animate={{
                    backgroundColor: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.02)', 'rgba(255,255,255,0)'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Floating elements */}
            <motion.div
              animate={floatAnimation.animate}
              className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center"
            >
              <span className="text-2xl text-white/40">◆</span>
            </motion.div>
            <motion.div
              animate={{
                ...floatAnimation.animate,
                transition: { ...floatAnimation.animate.transition, delay: 1 },
              }}
              className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center"
            >
              <span className="text-xl text-white/40">◇</span>
            </motion.div>
            <motion.div
              animate={{
                ...floatAnimation.animate,
                transition: { ...floatAnimation.animate.transition, delay: 2 },
              }}
              className="absolute top-1/2 right-1/3 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center"
            >
              <span className="text-lg text-white/40">○</span>
            </motion.div>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center"
                  >
                    <span className="text-4xl text-white/60">M</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10 border border-white/10 rounded-4xl overflow-hidden"
        >
          {/* Animated background shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-mimesis-gray font-light text-lg mb-8">
              Whether you have a clear vision or just a spark of an idea, we'd love to hear from you. 
              Let's build something extraordinary.
            </p>

            <motion.button
              onClick={() => setIsBookingModalOpen(true)}
              className="interactive px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </div>
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

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  )
}
