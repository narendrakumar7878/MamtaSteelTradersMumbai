import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    text: "Mamta Steel Traders has been our trusted supplier for over 5 years. Their expertise in material selection and consistent quality of SS 316L pipes for our chemical processing units is exceptional. The technical support team always guides us to choose the right grade for our applications.",
    location: "Mumbai, Maharashtra"
  },
  {
    id: 2,
    name: "Anil Sharma",
    text: "We've been sourcing duplex steel flanges and marine-grade materials from Mamta Steel for our offshore projects. Their understanding of corrosion resistance requirements and timely delivery has made them our go-to supplier. Highly recommended for marine applications.",
    location: "Navi Mumbai"
  },
  {
    id: 3,
    name: "Suresh Patel",
    text: "For our high-temperature applications in power plants, Mamta Steel Traders provided excellent Inconel and Hastelloy pipes with complete mill test certificates. Their knowledge of ASTM standards and pressure ratings is impressive. Quality materials at competitive prices.",
    location: "Pune, Maharashtra"
  },
  {
    id: 4,
    name: "Mohammed Ismail",
    text: "Outstanding service! We ordered large quantities of carbon steel pipes and galvanized angles for our construction project. The material arrived on time with proper certifications. Their team helped us understand the right specifications for our structural needs.",
    location: "Delhi NCR"
  },
  {
    id: 5,
    name: "Vikram Singh",
    text: "Mamta Steel's range of alloy steel round bars and tool steels is comprehensive. The metallurgical properties match our exact requirements. Their technical team's guidance on heat treatment and material selection has been invaluable for our precision components.",
    location: "Bangalore, Karnataka"
  },
  {
    id: 6,
    name: "Priya Desai",
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
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-3 sm:px-4"
                >
                  <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200">
                    <CardContent className="p-4 sm:p-5 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400 opacity-20" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4" data-testid={`text-testimonial-${testimonial.id}`}>
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="border-t border-gray-200 pt-3">
                        <h4 className="font-bold text-navy-primary text-base sm:text-lg" data-testid={`text-client-name-${testimonial.id}`}>
                          {testimonial.name}
                        </h4>
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
        </div>
      </div>
    </section>
  );
}
