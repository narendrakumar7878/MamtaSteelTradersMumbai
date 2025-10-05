import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CobaltRoundBars() {
  const specifications = [
    "ASTM F75 - Standard Specification for Cobalt-28 Chromium-6 Molybdenum Alloy Castings and Casting Alloy",
    "ASTM F562 - Standard Specification for Wrought 35Cobalt-35Nickel-20Chromium-10Molybdenum Alloy",
    "Size Range: 6mm to 200mm diameter",
    "Length: Up to 3000mm",
    "Condition: Solution Treated, Aged"
  ];

  const applications = [
    "Medical Implants",
    "Dental Applications",
    "High Temperature Tools",
    "Wear Resistant Parts",
    "Valve Seats",
    "Cutting Tools",
    "Aerospace Components"
  ];

  return (
    <>
      <ProductSEO
        title="Cobalt Round Bars - Medical & Aerospace Grade | High Temperature Alloys | Mamta Steel Traders"
        description="Premium cobalt round bars for medical implants and high-temperature applications. Excellent wear resistance and biocompatibility. ASTM F75, F562 compliant for medical and aerospace use."
        keywords="cobalt round bars, medical grade cobalt, cobalt alloys, biocompatible materials, ASTM F75, high temperature alloys"
        canonicalUrl="/product/round-bars/cobalt"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6">Cobalt Round Bars</h1>
              <p className="text-xl mb-8 text-gray-200">Medical & Aerospace Grade High-Temperature Alloys</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Products</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary font-medium">Cobalt</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Cobalt Round Bars Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Cobalt alloys offer exceptional wear resistance, high-temperature strength, and biocompatibility, making them ideal for medical implants and aerospace applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Biocompatibility</h3>
                      <p className="text-gray-600 dark:text-gray-300">Safe for medical implant applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Wear Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Exceptional resistance to wear and abrasion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">High Temperature</h3>
                      <p className="text-gray-600 dark:text-gray-300">Maintains properties at elevated temperatures</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&crop=center"
                  alt="Medical grade cobalt round bars"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Technical Specifications</h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Key Applications</h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Need Cobalt Alloy Solutions?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Contact our medical grade alloy specialists</p>
              <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}