import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Freight & Cargo Shipping', href: '/#freight' },
    { name: 'Real-Time Tracking', href: '/#tracking' },
    { name: 'Warehousing & Distribution', href: '/#warehousing' },
    { name: 'Last-Mile Delivery', href: '/#lastmile' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              LogiFlow
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === '/' 
                    ? "text-white" 
                    : "text-white/80 hover:text-white"
                )}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === '/about' 
                    ? "text-white" 
                    : "text-white/80 hover:text-white"
                )}
              >
                About Us
              </Link>
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link 
                to="/contact"
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === '/contact' 
                    ? "text-white" 
                    : "text-white/80 hover:text-white"
                )}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
              <Link
                to="/"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="px-3 py-2">
                <span className="text-white text-base font-medium">Services</span>
                <div className="ml-4 mt-2 space-y-1">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="text-white/80 hover:text-white block py-1 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;