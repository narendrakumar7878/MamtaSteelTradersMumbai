import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Petrochem Industries Ltd.",
    designation: "Procurement Manager",
    rating: 5,
    text: "Mamta Steel Traders has been our trusted supplier for over 5 years. Their expertise in material selection and consistent quality of SS 316L pipes for our chemical processing units is exceptional. The technical support team always guides us to choose the right grade for our applications.",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 2,
    name: "Anil Sharma",
    company: "Ocean Marine Engineering",
    designation: "Chief Engineer",
    rating: 5,
    text: "We've been sourcing duplex steel flanges and marine-grade materials from Mamta Steel for our offshore projects. Their understanding of corrosion resistance requirements and timely delivery has made them our go-to supplier. Highly recommended for marine applications.",
    location: "Navi Mumbai"
  },
  {
    id: 3,
    name: "Suresh Patel",
    company: "Phoenix Power Solutions",
    designation: "Project Director",
    rating: 5,
    text: "For our high-temperature applications in power plants, Mamta Steel Traders provided excellent Inconel and Hastelloy pipes with complete mill test certificates. Their knowledge of ASTM standards and pressure ratings is impressive. Quality materials at competitive prices.",
    location: "Pune, Maharashtra"
  },
  {
    id: 4,
    name: "Mohammed Ismail",
    company: "Royal Construction Co.",
    designation: "Senior Procurement Officer",
    rating: 5,
    text: "Outstanding service! We ordered large quantities of carbon steel pipes and galvanized angles for our construction project. The material arrived on time with proper certifications. Their team helped us understand the right specifications for our structural needs.",
    location: "Delhi NCR"
  },
  {
    id: 5,
    name: "Vikram Singh",
    company: "Precision Engineering Works",
    designation: "Technical Head",
    rating: 5,
    text: "Mamta Steel's range of alloy steel round bars and tool steels is comprehensive. The metallurgical properties match our exact requirements. Their technical team's guidance on heat treatment and material selection has been invaluable for our precision components.",
    location: "Bangalore, Karnataka"
  },
  {
    id: 6,
    name: "Priya Desai",
    company: "Aqua Tech Solutions",
    designation: "Operations Manager",
    rating: 5,
    text: "We've been purchasing stainless steel fasteners, flanges, and fittings from Mamta Steel for our water treatment plants. The quality is consistent, prices are fair, and delivery is always on schedule. Their ISO certification gives us confidence in their products.",
    location: "Ahmedabad, Gujarat"
  }
];

export default function WhatsClientSays() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    containScroll: "trimSnaps"
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onReInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-primary mb-4" data-testid="text-testimonial-title">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading industries across India for quality steel products and exceptional service
          </p>
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            className="absolute left-0 sm:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-navy-primary hover:text-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 hidden md:flex items-center justify-center"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            className="absolute right-0 sm:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-navy-primary hover:text-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 hidden md:flex items-center justify-center"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-3 sm:px-4"
                >
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200">
                    <CardContent className="p-6 sm:p-8 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 opacity-20" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 min-h-[120px] sm:min-h-[140px]" data-testid={`text-testimonial-${testimonial.id}`}>
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-bold text-navy-primary text-base sm:text-lg" data-testid={`text-client-name-${testimonial.id}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-orange-500 text-sm font-medium mt-1">
                          {testimonial.designation}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          {testimonial.company}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-orange-500 w-8 sm:w-10"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                data-testid={`button-dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-navy-primary hover:text-white shadow-lg rounded-full w-10 h-10"
              data-testid="button-testimonial-prev-mobile"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-navy-primary hover:text-white shadow-lg rounded-full w-10 h-10"
              data-testid="button-testimonial-next-mobile"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
