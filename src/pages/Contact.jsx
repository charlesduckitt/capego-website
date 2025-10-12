import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mldpoedj");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          {...fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-[#B0CEE3] leading-relaxed">
            For all inquiries, please direct your enquiries using the form below or contact us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="neomorph p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="neomorph-button w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#EB5E1F]/10">
                    <Mail size={24} className="text-[#EB5E1F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:info@mylucidlife.app" 
                      className="text-[#B0CEE3] hover:text-white transition-colors"
                    >
                      info@mylucidlife.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="neomorph-button w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#EB5E1F]/10">
                    <Phone size={24} className="text-[#EB5E1F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <a 
                      href="tel:+27603158538" 
                      className="text-[#B0CEE3] hover:text-white transition-colors"
                    >
                      +27 60 315 8538
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="neomorph-button w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#EB5E1F]/10">
                    <MapPin size={24} className="text-[#EB5E1F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Location</h3>
                    <p className="text-[#B0CEE3]">
                      Cape Town, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="neomorph p-8 rounded-2xl bg-gradient-to-br from-[#1A2632] to-[#42414A]/30">
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Cape Go?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB5E1F] mt-2 flex-shrink-0"></div>
                  <p className="text-[#B0CEE3]">Uncompromising safety with in-car security modules</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB5E1F] mt-2 flex-shrink-0"></div>
                  <p className="text-[#B0CEE3]">Rigorous driver and vehicle vetting process</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB5E1F] mt-2 flex-shrink-0"></div>
                  <p className="text-[#B0CEE3]">Fair earnings for drivers</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EB5E1F] mt-2 flex-shrink-0"></div>
                  <p className="text-[#B0CEE3]">100% South African-owned and operated</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="neomorph p-8 rounded-2xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
            
            {state.succeeded ? (
              <div className="neomorph-inset p-8 rounded-xl text-center">
                <div className="neomorph-button w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#EB5E1F]/10">
                  <Send size={32} className="text-[#EB5E1F]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                <p className="text-[#B0CEE3]">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full neomorph-inset px-4 py-3 rounded-lg bg-[#1A2632] text-white placeholder-[#46596D] focus:outline-none focus:ring-2 focus:ring-[#EB5E1F] transition-all"
                    placeholder="Enter your full name"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-[#EB5E1F] text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full neomorph-inset px-4 py-3 rounded-lg bg-[#1A2632] text-white placeholder-[#46596D] focus:outline-none focus:ring-2 focus:ring-[#EB5E1F] transition-all"
                    placeholder="Enter your email address"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-[#EB5E1F] text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full neomorph-inset px-4 py-3 rounded-lg bg-[#1A2632] text-white placeholder-[#46596D] focus:outline-none focus:ring-2 focus:ring-[#EB5E1F] transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full neomorph-inset px-4 py-3 rounded-lg bg-[#1A2632] text-white placeholder-[#46596D] focus:outline-none focus:ring-2 focus:ring-[#EB5E1F] transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-[#EB5E1F] text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full neomorph-button px-6 py-4 bg-[#EB5E1F] text-white font-semibold rounded-lg inline-flex items-center justify-center gap-2 hover:bg-[#d54f15] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

