import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Phone, Mail, MapPin, Truck, Package, Clock, Shield, Globe, Star, Users, Award, TrendingUp, CheckCircle, Zap, BarChart3, Boxes, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import img01 from '@/assets/img01.jpg';
import img02 from '@/assets/img02.jpg';
import img03 from '@/assets/img03.jpg';
import img04 from '@/assets/img04.jpg';
import worldMap from '@/assets/world-map.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  
  const operationsRef = useRef<HTMLElement>(null);
  const digitalRef = useRef<HTMLElement>(null);
  const engineeringRef = useRef<HTMLElement>(null);
  const technologyRef = useRef<HTMLElement>(null);
  const locationsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const slides = [
    {
      image: img01,
      title: "GLOBAL LOGISTICS REIMAGINED.",
      subtitle: "Your cargo, our commitment. Seamless transportation solutions that connect businesses worldwide.",
      delay: 0
    },
    {
      image: img02,
      title: "REAL-TIME TRACKING",
      subtitle: "Complete visibility from pickup to delivery. Track your shipments with AI-powered precision.",
      delay: 1000
    },
    {
      image: img03,
      title: "FAST & RELIABLE",
      subtitle: "Speed meets security. Advanced logistics solutions that deliver on time, every time.",
      delay: 2000
    },
    {
      image: img04,
      title: "WORLDWIDE COVERAGE",
      subtitle: "From local deliveries to global freight. We move the world forward, together.",
      delay: 3000
    }
  ];

  const locations = [
    { name: 'New York', lat: 40.7, lng: -74, description: 'Northeast Distribution Hub' },
    { name: 'Los Angeles', lat: 34, lng: -118.2, description: 'West Coast Gateway' },
    { name: 'Miami', lat: 25.8, lng: -80.2, description: 'International Air Cargo Hub' },
    { name: 'Chicago', lat: 41.9, lng: -87.6, description: 'Central Logistics Center' },
    { name: 'Seattle', lat: 47.6, lng: -122.3, description: 'Pacific Port Operations' },
    { name: 'Dallas', lat: 32.8, lng: -96.8, description: 'Southwest Regional Hub' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background overflow-auto">
      <Navigation />
      
      {/* Hero Section with Image Carousel */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ animationDelay: `${slide.delay}ms` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-900/70 to-black/70" />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                    onClick={() => scrollToSection(operationsRef)}
                  >
                    Get Your Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* CARGO SHIPPING Section */}
      <section id="freight" className="pt-20 py-16 lg:py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Truck className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                FREIGHT &
                <br />
                <span className="text-secondary">CARGO SHIPPING</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive freight solutions across air, sea, and road networks. From small packages to oversized cargo, 
                we handle your shipments with precision and care using state-of-the-art tracking technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-secondary/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-sm">Multi-Modal</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Air, sea, and road networks</p>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-secondary/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Boxes className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-sm">Specialized</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Expert cargo handling</p>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-secondary/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-semibold text-sm">Customs</span>
                  </div>
                  <p className="text-sm text-muted-foreground">International clearance</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg"
                onClick={() => scrollToSection(digitalRef)}
              >
                Ship With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Image - Right */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={hero1} 
                  alt="Freight and Cargo Shipping" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay with stats */}
                <div className="absolute inset-0  via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">Secure Transport</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Real time tracking section Section */}
      <section id="tracking" className="pt-20 py-16 lg:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={hero2} 
                  alt="Real-Time Shipment Tracking" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Floating tracking card */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-xs font-semibold text-gray-700">LIVE TRACKING</div>
                      <div className="text-xs text-gray-500">Package #12345</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-30"></div>
            </div>
            
            {/* Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                REAL-TIME
                <br />
                <span className="text-primary">TRACKING</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Complete visibility into your shipments with our advanced tracking platform. Monitor every step 
                of your cargo's journey with real-time updates, delivery confirmations, and predictive analytics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">GPS Tracking</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Real-time location updates</p>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">Auto Updates</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Instant notifications</p>
                </div>
                <div className="bg-card border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-sm">Predictions</span>
                  </div>
                  <p className="text-sm text-muted-foreground">AI-powered delivery times</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white shadow-lg"
                onClick={() => scrollToSection(engineeringRef)}
              >
                Track Your Shipment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section id="warehousing" className="pt-20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-accent border-2 border-secondary rounded-full"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                WAREHOUSING &
                <br />
                <span className="text-accent">DISTRIBUTION</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Strategic warehouse locations with advanced inventory management systems. From receiving to 
                order fulfillment, we optimize your supply chain for maximum efficiency and cost savings.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Climate-controlled facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Automated inventory systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Cross-docking capabilities</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group"
                onClick={() => scrollToSection(technologyRef)}
              >
                Explore Warehousing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Image - Right */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
                 <img 
                  src={hero3} 
                  alt="Warehousing and Distribution" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="lastmile" className="pt-20 py-16 lg:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                 <img 
                  src={hero4} 
                  alt="Last-Mile Delivery Solutions" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30"></div>
            </div>
            
            {/* Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-accent"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                LAST-MILE
                <br />
                <span className="text-secondary">DELIVERY</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The final step in your supply chain, delivered with excellence. Our last-mile solutions ensure 
                your customers receive their orders quickly, safely, and with a smile.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Same-day delivery options</span>
                </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
                   <span className="text-lg">Customer notification systems</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-secondary rounded-full"></div>
                   <span className="text-lg">Flexible delivery windows</span>
                 </div>
               </div>
               <Button 
                 size="lg" 
                 className="mt-8 group"
                 onClick={() => scrollToSection(locationsRef)}
               >
                 Schedule Delivery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="pt-20 py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-accent"></div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              Global Network,
              <br />
              <span className="text-accent">Local Expertise.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic distribution hubs across major markets ensure fast, reliable delivery to your customers.
            </p>
          </div>

          {/* Interactive Map Section */}
          <div className="relative mb-16">
            {/* Map Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800">
              <img 
                src={worldMap} 
                alt="Global Logistics Network Map" 
                className="w-full h-[600px] object-cover opacity-90"
              />
              
              {/* Location Markers */}
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={{
                    left: `${((location.lng + 180) / 360) * 100}%`,
                    top: `${((90 - location.lat) / 180) * 100}%`,
                  }}
                >
                  <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform duration-200">
                    <div className="w-full h-full bg-secondary rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <div className="bg-white text-primary px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
                      <div className="text-foreground">{location.name}</div>
                      <div className="text-xs text-muted-foreground">{location.description}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              ))}
              
               {/* Legend */}
               <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                 <h3 className="text-sm font-semibold text-foreground mb-2">Distribution Centers</h3>
                 <div className="flex items-center space-x-2">
                   <div className="w-3 h-3 bg-secondary rounded-full"></div>
                   <span className="text-xs text-muted-foreground">Active Hubs</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Locations Grid */}
           <div className="text-center mb-12">
             <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Distribution Network</h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Strategically positioned across key metropolitan areas for optimal coverage and efficiency
             </p>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={location.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-foreground">{location.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{location.description}</p>
                 <div className="text-sm text-secondary font-semibold">
                   Active Hub
                 </div>
              </div>
            ))}
          </div>

           {/* Coverage Stats Section */}
           <section className="py-20 bg-gradient-to-r from-secondary via-secondary/90 to-primary text-white relative overflow-hidden">
             {/* Background graphics */}
             <div className="absolute inset-0 opacity-10">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full translate-x-32 -translate-y-32"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 translate-y-48"></div>
             </div>
             
             <div className="container mx-auto px-4 relative z-10">
               <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network Reach</h2>
                 <p className="text-xl text-white/90">Comprehensive coverage across strategic locations</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                 <div className="group">
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                     <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                       <Target className="w-8 h-8 text-white" />
                     </div>
                     <div className="text-4xl font-bold mb-2">25+</div>
                     <div className="text-lg text-white/80">Distribution Centers</div>
                   </div>
                 </div>
                 <div className="group">
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                     <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                       <Globe className="w-8 h-8 text-white" />
                     </div>
                     <div className="text-4xl font-bold mb-2">48</div>
                     <div className="text-lg text-white/80">States Covered</div>
                   </div>
                 </div>
                 <div className="group">
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                     <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                       <Clock className="w-8 h-8 text-white" />
                     </div>
                     <div className="text-4xl font-bold mb-2">24/7</div>
                     <div className="text-lg text-white/80">Operations</div>
                   </div>
                 </div>
                 <div className="group">
                   <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                     <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                       <Star className="w-8 h-8 text-white" />
                     </div>
                     <div className="text-4xl font-bold mb-2">98%</div>
                     <div className="text-lg text-white/80">Same-Day Coverage</div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
        </div>
      </section>

       {/* Contact Section */}
       <section id="contact" className="pt-20 py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full"></div>
           <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full"></div>
         </div>
         
         <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-16">
             <div className="inline-block mb-6">
               <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                 <Mail className="w-10 h-10 text-white" />
               </div>
             </div>
             <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
               Ready to Ship?
             </h1>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Ready to streamline your logistics? Get a quote today and discover how we can optimize your supply chain.
             </p>
             
             {/* Quick benefits */}
             <div className="flex flex-wrap justify-center gap-6 mt-8">
               <div className="flex items-center space-x-2 bg-card border border-border/50 rounded-full px-4 py-2">
                 <CheckCircle className="w-4 h-4 text-accent" />
                 <span className="text-sm font-medium">Free Quote</span>
               </div>
               <div className="flex items-center space-x-2 bg-card border border-border/50 rounded-full px-4 py-2">
                 <CheckCircle className="w-4 h-4 text-accent" />
                 <span className="text-sm font-medium">24/7 Support</span>
               </div>
               <div className="flex items-center space-x-2 bg-card border border-border/50 rounded-full px-4 py-2">
                 <CheckCircle className="w-4 h-4 text-accent" />
                 <span className="text-sm font-medium">Global Network</span>
               </div>
             </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
             {/* Contact Form */}
             <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl">
               <div className="mb-6">
                 <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Quote</h3>
                 <p className="text-lg text-muted-foreground mb-8">
                 Connect with our logistics experts to find the perfect shipping solution for your business needs.
                  </p>
                </div>
               
               <form className="space-y-6" onSubmit={handleContactSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <Input placeholder="First Name" className="border-border/50 focus:border-primary" />
                   </div>
                   <div>
                     <Input placeholder="Last Name" className="border-border/50 focus:border-primary" />
                   </div>
                 </div>
                 <Input placeholder="Email Address" type="email" className="border-border/50 focus:border-primary" />
                 <Input placeholder="Company Name" className="border-border/50 focus:border-primary" />
                 <Textarea placeholder="Tell us about your shipping needs..." className="min-h-[120px] border-border/50 focus:border-primary" />
                 <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                   Request Quote
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
               </form>
             </div>

             {/* Contact Information */}
             <div className="space-y-8">
               {/* Main contact card */}
               <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-xl">
                 <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                 <div className="space-y-6">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                       <Phone className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <p className="font-semibold">Call Us</p>
                       <p className="text-white/80">+1 (555) 123-4567</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                       <Mail className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <p className="font-semibold">Email Us</p>
                       <p className="text-white/80">quotes@globallogistics.com</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                       <MapPin className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <p className="font-semibold">Visit Us</p>
                       <p className="text-white/80">
                         456 Logistics Avenue<br />
                         Chicago, IL 60601<br />
                         United States
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Additional services */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                   <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                     <Users className="w-6 h-6 text-accent" />
                   </div>
                   <h4 className="font-semibold mb-2">Dedicated Support</h4>
                   <p className="text-sm text-muted-foreground">Personal account manager for enterprise clients</p>
                 </div>
                 <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                   <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                     <Clock className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="font-semibold mb-2">24/7 Operations</h4>
                   <p className="text-sm text-muted-foreground">Round-the-clock monitoring and support</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
    </div>
  );
};

export default Index;
