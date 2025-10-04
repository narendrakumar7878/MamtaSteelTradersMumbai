import ProductSEO from "@/components/ProductSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Factory, Award, Truck, Shield, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const alloySteelGrades = [
  {
    id: "15CDV6",
    name: "15CDV6 Sheets",
    shortName: "15CDV6 (1.7734)",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "High-strength chromium, molybdenum & vanadium heat treatable steel with excellent yield strength and toughness. Ideal for aerospace and defense applications.",
    chemicalComposition: "C: 0.12-0.18%, Cr: 1.25-1.50%, Mo: 0.80-1.00%, V: 0.20-0.30%, Mn: 0.80-1.10%, Si: ≤0.20%",
    applications: ["Aerospace components", "Defense applications", "Missile systems", "Pressure vessels", "Rocket motor casings", "Suspension components"],
    specifications: "DIN 1.7734, Aerospace Standards"
  },
  {
    id: "17-4PH",
    name: "17-4 PH Plates",
    shortName: "SS 17-4 PH",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "Martensitic precipitation-hardening stainless steel with high strength and excellent corrosion resistance. Capable of attaining wide range of strength properties.",
    chemicalComposition: "C: ≤0.07%, Cr: 15.00-17.50%, Ni: 3.00-5.00%, Cu: 3.00-5.00%, Nb/Ta: 0.15-0.45%",
    applications: ["Aerospace parts", "Chemical processing equipment", "Oil & petroleum refining", "Nuclear components", "Food processing equipment", "General metalworking"],
    specifications: "ASTM A564, A693, A705, UNS S17400, AMS 5604"
  },
  {
    id: "50CrV4",
    name: "50CrV4 Sheet",
    shortName: "50CrV4 (EN47)",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "Chromium vanadium spring steel with high fatigue and impact resistance. Tough, shock-resisting steel suitable for oil hardening and tempering.",
    chemicalComposition: "C: 0.50-0.55%, Cr: 1.00-1.20%, V: 0.15-0.25%, Mn: 0.70-0.80%, Si: 0.20-0.35%",
    applications: ["Springs", "Gears and pinions", "Shafts and axles", "Pins and bolts", "Automotive fasteners", "Transmission parts"],
    specifications: "DIN 1.8159, BS 735A51, SAE 6150, EN47"
  },
  {
    id: "A387",
    name: "A387/SA387 Chrome Moly Plates",
    shortName: "Chrome Moly",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "Chromium-molybdenum alloy steel plates for elevated temperature service in boilers and pressure vessels. Available in grades 5, 9, 11, 12, 22, and 91.",
    chemicalComposition: "Varies by grade - Typical: C: 0.05-0.20%, Cr: 0.50-9.00%, Mo: 0.45-1.10% (Grade dependent)",
    applications: ["Boilers", "Pressure vessels", "Oil & gas industry", "Petrochemical plants", "Power generation", "High temperature service"],
    specifications: "ASTM A387, ASME SA387, Multiple grades (5, 9, 11, 12, 22, 91)"
  },
  {
    id: "EN19",
    name: "EN19 Plates",
    shortName: "EN19 (AISI 4140)",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "High quality alloy steel known as high tensile steel with good ductility, shock resistance, and wear resistance. Widely used in oil & gas industries.",
    chemicalComposition: "C: 0.38-0.43%, Cr: 0.80-1.10%, Mo: 0.15-0.25%, Mn: 0.75-1.00%, Si: 0.15-0.30%",
    applications: ["Gears and pinions", "Shafts and spindles", "Oil & gas equipment", "Machine tool components", "Automotive parts", "General engineering"],
    specifications: "BS 970, AISI 4140, DIN 1.7225, EN 42CrMo4"
  },
  {
    id: "SAE4140",
    name: "SAE 4140 Plate",
    shortName: "SAE 4140",
    image: "https://images.unsplash.com/photo-1581094651181-71df63ca8fcc?w=300&h=300&fit=crop&crop=center",
    description: "Chromium molybdenum alloy steel with high tensile strength and toughness. Perfect for applications requiring strength and impact resistance.",
    chemicalComposition: "C: 0.38-0.43%, Cr: 0.80-1.10%, Mo: 0.15-0.25%, Mn: 0.75-1.00%, Si: 0.15-0.35%",
    applications: ["Machinery components", "Gears and gear racks", "Mold bases", "Back-up tooling", "Fixtures", "Heavy-duty applications"],
    specifications: "SAE 4140, AISI 4140, UNS G41400, JIS SCM440"
  }
];

const specifications = [
  "ASTM A387, ASME SA387 Standards",
  "DIN 1.7734, 1.8159, 1.7225 Specifications", 
  "BS 970, EN Standards Compliance",
  "AMS Aerospace Material Specifications",
  "JIS Japanese Industrial Standards",
  "UNS Unified Numbering System"
];

const features = [
  {
    icon: Shield,
    title: "High Strength Properties",
    description: "Superior tensile strength and toughness for demanding applications"
  },
  {
    icon: Factory,
    title: "Heat Treatable",
    description: "Excellent response to heat treatment for optimized properties"
  },
  {
    icon: Award,
    title: "Corrosion Resistant",
    description: "Enhanced corrosion and oxidation resistance in harsh environments"
  },
  {
    icon: Truck,
    title: "Versatile Applications",
    description: "Suitable for aerospace, oil & gas, automotive, and general engineering"
  }
];

export default function AlloySteelPlates() {
  return (
    <>
      <ProductSEO
        title="Premium Alloy Steel Plates & Sheets - 15CDV6, 17-4PH, EN19, SAE 4140 | Mamta Steel"
        description="Comprehensive range of high-grade alloy steel plates including 15CDV6 aerospace steel, 17-4PH precipitation hardening, EN19, SAE 4140, 50CrV4 spring steel, and A387 chrome moly plates. Premium quality with certifications."
        category="Plates & Sheets"
        productName="Alloy Steel Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/alloy-steel-plates"
      />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Alloy Steel Plates and Sheets",
            "description": "Premium range of specialized alloy steel plates for aerospace, industrial, and engineering applications",
            "numberOfItems": alloySteelGrades.length,
            "itemListElement": alloySteelGrades.map((grade, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": grade.name,
              "description": grade.description,
              "sku": grade.id,
              "material": "Alloy Steel",
              "category": "Plates & Sheets",
              "manufacturer": {
                "@type": "Organization",
                "name": "Mamta Steel"
              },
              "brand": {
                "@type": "Brand",
                "name": "Mamta Steel"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Chemical Composition",
                  "value": grade.chemicalComposition
                },
                {
                  "@type": "PropertyValue", 
                  "name": "Standards",
                  "value": grade.specifications
                },
                {
                  "@type": "PropertyValue",
                  "name": "Grade",
                  "value": grade.shortName
                }
              ],
              "applicationCategory": grade.applications,
              "url": `/product/plates-sheets/alloy-steel-plates#${grade.id}`,
              "image": grade.image,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR",
                "seller": {
                  "@type": "Organization",
                  "name": "Mamta Steel",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9819322576",
                    "contactType": "sales"
                  }
                }
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600" data-testid="link-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-blue-600" data-testid="link-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-blue-600" data-testid="link-plates-sheets">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium" data-testid="text-current-page">Alloy Steel Plates</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-hero">
                Premium Alloy Steel Plates & Sheets
              </h1>
              <p className="text-xl mb-8 text-blue-100" data-testid="text-hero-description">
                Comprehensive range of high-grade alloy steel plates including aerospace, spring steel, 
                precipitation hardening, and chrome moly grades for specialized industrial applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" data-testid="button-quote">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" data-testid="button-catalog">
                  <Mail className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-features">
                Why Choose Our Alloy Steel Plates?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-features-description">
                Our alloy steel plates combine superior mechanical properties with proven reliability for critical applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow" data-testid={`card-feature-${index}`}>
                  <CardContent className="pt-6">
                    <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                    <p className="text-gray-600" data-testid={`text-feature-description-${index}`}>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alloy Steel Grades Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-grades">
                Alloy Steel Plate Grades
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-grades-description">
                We supply premium alloy steel plates in various grades optimized for specific applications 
                including aerospace, automotive, oil & gas, and general engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alloySteelGrades.map((grade) => (
                <Card key={grade.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`card-grade-${grade.id}`}>
                  <div className="relative">
                    <img 
                      src={grade.image} 
                      alt={grade.name}
                      className="w-full h-48 object-cover"
                      data-testid={`img-grade-${grade.id}`}
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600" data-testid={`badge-grade-${grade.id}`}>
                      {grade.shortName}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900" data-testid={`text-grade-name-${grade.id}`}>
                      {grade.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed" data-testid={`text-grade-description-${grade.id}`}>
                      {grade.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2" data-testid={`text-composition-title-${grade.id}`}>Chemical Composition:</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded" data-testid={`text-composition-${grade.id}`}>
                        {grade.chemicalComposition}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2" data-testid={`text-applications-title-${grade.id}`}>Key Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {grade.applications.slice(0, 3).map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs" data-testid={`badge-application-${grade.id}-${idx}`}>
                            {app}
                          </Badge>
                        ))}
                        {grade.applications.length > 3 && (
                          <Badge variant="outline" className="text-xs" data-testid={`badge-more-${grade.id}`}>
                            +{grade.applications.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1" data-testid={`text-standards-title-${grade.id}`}>Standards:</h4>
                      <p className="text-sm text-gray-600" data-testid={`text-standards-${grade.id}`}>{grade.specifications}</p>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" data-testid={`button-enquiry-${grade.id}`}>
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chemical Composition Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-composition-table">
                Chemical Composition Reference
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-composition-table-description">
                Detailed chemical composition ranges for our alloy steel plate grades
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 bg-white" data-testid="table-composition">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold" data-testid="header-grade">Grade</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold" data-testid="header-carbon">Carbon (C)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold" data-testid="header-chromium">Chromium (Cr)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold" data-testid="header-molybdenum">Molybdenum (Mo)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold" data-testid="header-other">Other Elements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-testid="row-15cdv6">
                    <td className="border border-gray-300 px-4 py-3 font-medium" data-testid="cell-15cdv6-grade">15CDV6</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-15cdv6-carbon">0.12-0.18%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-15cdv6-chromium">1.25-1.50%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-15cdv6-molybdenum">0.80-1.00%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-15cdv6-other">V: 0.20-0.30%, Mn: 0.80-1.10%</td>
                  </tr>
                  <tr className="bg-gray-50" data-testid="row-17-4ph">
                    <td className="border border-gray-300 px-4 py-3 font-medium" data-testid="cell-17-4ph-grade">17-4 PH</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-17-4ph-carbon">≤0.07%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-17-4ph-chromium">15.00-17.50%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-17-4ph-molybdenum">-</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-17-4ph-other">Ni: 3.00-5.00%, Cu: 3.00-5.00%</td>
                  </tr>
                  <tr data-testid="row-50crv4">
                    <td className="border border-gray-300 px-4 py-3 font-medium" data-testid="cell-50crv4-grade">50CrV4</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-50crv4-carbon">0.50-0.55%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-50crv4-chromium">1.00-1.20%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-50crv4-molybdenum">-</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-50crv4-other">V: 0.15-0.25%, Mn: 0.70-0.80%</td>
                  </tr>
                  <tr className="bg-gray-50" data-testid="row-en19">
                    <td className="border border-gray-300 px-4 py-3 font-medium" data-testid="cell-en19-grade">EN19/SAE 4140</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-en19-carbon">0.38-0.43%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-en19-chromium">0.80-1.10%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-en19-molybdenum">0.15-0.25%</td>
                    <td className="border border-gray-300 px-4 py-3" data-testid="cell-en19-other">Mn: 0.75-1.00%, Si: 0.15-0.35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Applications & Industries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="heading-applications">
                Applications & Industries
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-applications-description">
                Our alloy steel plates serve critical applications across diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow" data-testid="card-aerospace">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600" data-testid="title-aerospace">Aerospace & Defense</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li data-testid="item-aerospace-1">• Aircraft structural components</li>
                    <li data-testid="item-aerospace-2">• Landing gear parts</li>
                    <li data-testid="item-aerospace-3">• Missile and rocket components</li>
                    <li data-testid="item-aerospace-4">• Defense equipment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow" data-testid="card-oil-gas">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600" data-testid="title-oil-gas">Oil & Gas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li data-testid="item-oil-gas-1">• Pressure vessels</li>
                    <li data-testid="item-oil-gas-2">• Boiler components</li>
                    <li data-testid="item-oil-gas-3">• Petrochemical equipment</li>
                    <li data-testid="item-oil-gas-4">• High-temperature service parts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow" data-testid="card-automotive">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600" data-testid="title-automotive">Automotive & Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li data-testid="item-automotive-1">• Gears and transmission parts</li>
                    <li data-testid="item-automotive-2">• Shafts and spindles</li>
                    <li data-testid="item-automotive-3">• Spring components</li>
                    <li data-testid="item-automotive-4">• Machine tool parts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
              Ready to Source Premium Alloy Steel Plates?
            </h2>
            <p className="text-xl text-blue-100 mb-8" data-testid="text-cta-description">
              Contact our steel experts for technical specifications, pricing, and delivery details
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" data-testid="button-cta-call">
                <Phone className="mr-2 h-5 w-5" />
                Call +91 9819322576
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" data-testid="button-cta-email">
                <Mail className="mr-2 h-5 w-5" />
                Email Inquiry
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}