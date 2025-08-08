import { Phone, Mail, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const directors = [
  {
    name: "Prakash Pramar",
    title: "Managing Director",
    phone: "+91 98193 22576"
  },
  {
    name: "Naresh Parmar", 
    title: "Operations Director",
    phones: ["+91 98679 58210", "+91 91529 58210"]
  }
];

const contactInfo = {
  email: "mamtasteeltraders@gmail.com",
  address: {
    line1: "OFFICE NO 20, 1st FLOOR 45/49 GULAB MOHAMAD BULDING",
    line2: "RAMA GALI, 2ND KUMBHARWADA", 
    line3: "MUMBAI 400004, MAHARASHTRA, INDIA"
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactSection() {
  return (
    <section 
      className="py-16 lg:py-24 bg-white px-6 lg:px-12" 
      data-testid="contact-section"
      aria-label="Contact Mamta Steel Traders"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#1a3e72' }}
            data-testid="contact-heading"
          >
            Contact Mamta Steel Traders
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6" data-testid="contact-subtitle">
            Premium steel solutions since 2010
          </p>
          
          {/* Gradient Underline */}
          <div className="flex justify-center">
            <div 
              className="w-32 h-1 rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #f39c12 0%, #e74c3c 50%, #f1c40f 100%)'
              }}
              data-testid="gradient-underline"
            />
          </div>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Left Column - Directors */}
          <div className="space-y-6">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] max-w-lg mx-auto lg:mx-0"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-testid={`director-card-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div 
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1a3e72' }}
                  >
                    <User className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-xl lg:text-2xl font-bold mb-2"
                      style={{ color: '#1a3e72' }}
                      data-testid={`director-name-${index}`}
                    >
                      {director.name}
                    </h3>
                    <p className="text-gray-600 text-base lg:text-lg mb-4" data-testid={`director-title-${index}`}>
                      {director.title}
                    </p>
                    
                    <div className="space-y-2">
                      {director.phone && (
                        <a
                          href={`tel:${director.phone}`}
                          className="flex items-center space-x-3 text-base lg:text-lg hover:text-orange-500 transition-colors duration-200 group"
                          data-testid={`director-phone-${index}`}
                        >
                          <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                          <span className="truncate">{director.phone}</span>
                        </a>
                      )}
                      
                      {director.phones && director.phones.map((phone, phoneIndex) => (
                        <a
                          key={phoneIndex}
                          href={`tel:${phone}`}
                          className="flex items-center space-x-3 text-base lg:text-lg hover:text-orange-500 transition-colors duration-200 group"
                          data-testid={`director-phone-${index}-${phoneIndex}`}
                        >
                          <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-orange-500 group-hover:scale-110 transition-transform duration-200" />
                          <span className="truncate">{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Email & Address */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] max-w-lg mx-auto lg:mx-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-testid="email-card"
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f39c12' }}
                >
                  <Mail className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-xl lg:text-2xl font-bold mb-4"
                    style={{ color: '#1a3e72' }}
                    data-testid="email-heading"
                  >
                    Email Enquiries
                  </h3>
                  
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base lg:text-lg text-blue-600 hover:text-blue-800 font-medium mb-3 block transition-colors duration-200 break-all"
                    data-testid="email-link"
                  >
                    {contactInfo.email}
                  </a>
                  
                  <p className="text-gray-600 text-sm lg:text-base" data-testid="email-note">
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] max-w-lg mx-auto lg:mx-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              data-testid="address-card"
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f39c12' }}
                >
                  <MapPin className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-xl lg:text-2xl font-bold mb-4"
                    style={{ color: '#1a3e72' }}
                    data-testid="address-heading"
                  >
                    Registered Office
                  </h3>
                  
                  <address className="text-base lg:text-lg text-gray-700 not-italic mb-6 leading-relaxed" data-testid="office-address">
                    <div>{contactInfo.address.line1}</div>
                    <div>{contactInfo.address.line2}</div>
                    <div>{contactInfo.address.line3}</div>
                  </address>
                  
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                    data-testid="maps-button"
                  >
                    <a
                      href="https://maps.google.com/maps?q=OFFICE+NO+20,+1st+FLOOR+45/49+GULAB+MOHAMAD+BULDING+RAMA+GALI,+2ND+KUMBHARWADA+MUMBAI+400004,+MAHARASHTRA,+INDIA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span>View on Google Maps</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}