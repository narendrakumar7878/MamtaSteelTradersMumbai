import SEOHead from "@/components/SEOHead";
import { Phone, Mail, MapPin, Clock, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Mamta Steel Traders. Contact us for steel product inquiries, quotes, and technical support. Located in Mumbai, Maharashtra."
        keywords="contact Mamta Steel Traders, steel supplier Mumbai, steel quotes, technical support"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-contact-subtitle">
              Get in touch with our expert team for all your steel product requirements and technical support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8" data-testid="text-contact-info-title">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start" data-testid="contact-person">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Contact Person</h3>
                    <p className="text-gray-600">Prakash Pramar</p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Phone Numbers</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919819322576" className="hover:text-orange-500" data-testid="link-phone-1">
                        +91 98193 22576
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+919867995210" className="hover:text-orange-500" data-testid="link-phone-2">
                        +91 98679 95210
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-email">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                    <a 
                      href="mailto:mamtasteeltraders@gmail.com" 
                      className="text-gray-600 hover:text-orange-500"
                      data-testid="link-email"
                    >
                      mamtasteeltraders@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-address">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Address</h3>
                    <p className="text-gray-600">
                      Office No. 20, 1st Floor<br />
                      45/49 Gulab Mohammad Building<br />
                      Rana Gali, 2nd Kumbharwada<br />
                      Mumbai 400004<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:30am - 8:30pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-gst">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">GST Number</h3>
                    <p className="text-gray-600">27DMIPR2047R1Z8</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-8" data-testid="text-form-title">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      className="w-full"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="w-full"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel" 
                      className="w-full"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <Input 
                      type="text" 
                      className="w-full"
                      data-testid="input-company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    required 
                    rows={5} 
                    className="w-full"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg"
                  data-testid="button-submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
