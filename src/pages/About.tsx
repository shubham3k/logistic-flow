import { Award, Users, Globe, TrendingUp, Shield, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">LogiFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of logistics with innovative solutions that connect businesses across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010, LogiFlow began with a simple mission: to revolutionize the transportation and logistics industry through innovative technology and unwavering commitment to customer success.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over 13 years of excellence, we've grown from a local shipping company to a global logistics powerhouse, serving over 10,000 businesses worldwide. Our journey has been marked by continuous innovation, strategic partnerships, and an relentless focus on delivering exceptional value to our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we operate across 150+ countries, manage millions of shipments annually, and continue to set new standards for speed, reliability, and customer satisfaction in the logistics industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">10K+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">150+</h3>
                <p className="text-muted-foreground">Countries</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">5M+</h3>
                <p className="text-muted-foreground">Shipments</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">13+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize global supply chains by providing innovative, technology-driven logistics solutions that ensure fast, secure, and reliable transportation of goods worldwide. We empower businesses to focus on their growth while we handle the complexities of logistics.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted logistics partner, setting industry standards for innovation, sustainability, and customer excellence. We envision a future where seamless global commerce is accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Consistent, dependable service that our clients can count on, every single time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously evolving our technology and processes to stay ahead of industry trends.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Efficiency</h3>
              <p className="text-muted-foreground">
                Optimizing every aspect of our operations to deliver faster, smarter logistics solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving LogiFlow's mission to transform global logistics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sarah Chen</h3>
              <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
              <p className="text-muted-foreground text-sm">
                15+ years in logistics, former VP at Global Freight Solutions
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Marcus Rodriguez</h3>
              <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
              <p className="text-muted-foreground text-sm">
                AI & logistics automation expert, former lead at TechLogistics
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Jennifer Walsh</h3>
              <p className="text-primary font-medium mb-2">Chief Operations Officer</p>
              <p className="text-muted-foreground text-sm">
                Supply chain optimization specialist with 20+ years experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;