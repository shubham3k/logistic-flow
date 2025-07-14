# LogiFlow - Transport & Logistics Company

<div align="center">
  <img src="public/placeholder.svg" alt="LogiFlow Logo" width="120" height="120">
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-646cff.svg)](https://vitejs.dev/)
</div>

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubham3k/logistic-flow.git
   
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server


## 📋 Project Overview

**LogiFlow** is a modern, full-featured website for a transport and logistics company that specializes in global shipping, freight management, and supply chain solutions. Built with cutting-edge web technologies, this project showcases a professional platform for logistics services.

### 🏢 About LogiFlow Company

LogiFlow is a leading transport and logistics company established in 2010, serving businesses across the globe with comprehensive shipping and supply chain solutions. We are committed to revolutionizing the logistics industry through innovative technology and exceptional customer service.

#### 🌟 What We Do

**Core Services:**
- **Freight & Cargo Shipping** - International and domestic freight forwarding
- **Supply Chain Management** - End-to-end supply chain optimization
- **Warehousing & Distribution** - Secure storage and efficient distribution networks
- **Last-Mile Delivery** - Fast and reliable final delivery solutions
- **Real-Time Tracking** - Advanced shipment tracking and monitoring systems
- **Customs Clearance** - Expert handling of international trade documentation
- **Express Delivery** - Time-critical shipping solutions
- **Cross-Border Trade** - Seamless international commerce facilitation

**Industry Specializations:**
- E-commerce & Retail
- Manufacturing & Industrial
- Healthcare & Pharmaceuticals
- Automotive & Heavy Machinery
- Technology & Electronics
- Food & Beverage
- Fashion & Textiles

#### 🎯 Our Mission

To provide innovative, reliable, and cost-effective logistics solutions that enable businesses to thrive in the global marketplace while maintaining the highest standards of service quality and operational excellence.

#### 🔧 How We Operate

**Technology-Driven Solutions:**
- Advanced route optimization algorithms
- Real-time GPS tracking and monitoring
- Automated warehouse management systems
- AI-powered demand forecasting
- Digital customs documentation
- Mobile apps for customers and drivers
- Integration with major e-commerce platforms

**Global Network:**
- Operations in 150+ countries worldwide
- 500+ distribution centers and warehouses
- Strategic partnerships with local carriers
- Multi-modal transportation options (air, sea, land, rail)
- 24/7 customer support in multiple languages

**Service Capabilities:**
- Same-day and next-day delivery options
- Temperature-controlled transportation
- Hazardous materials handling
- Oversized and heavy cargo solutions
- White-glove delivery services
- Reverse logistics and returns management

#### 📊 Company Statistics

- **25+ Years** of industry experience
- **10,000+** satisfied business clients
- **150+ Countries** served worldwide
- **500+ Successful** large-scale projects completed
- **50+ Locations** globally
- **24/7 Support** availability
- **99.5%** on-time delivery rate
- **50 Million+** packages delivered annually

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server

### UI Components & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Shadcn/UI** - Beautiful, customizable component library
- **Lucide React** - Modern icon library
- **Tailwind Merge** - Conflict-free Tailwind classes

### Routing & Navigation
- **React Router DOM 6.30.1** - Client-side routing

### Form Handling & Validation
- **React Hook Form 7.53.0** - Performant forms with easy validation
- **Zod 3.23.8** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### State Management & Data Fetching
- **TanStack Query 5.56.2** - Powerful data synchronization for React

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixing

### Additional Features
- **Date-fns** - Modern JavaScript date utility library
- **Recharts** - Composable charting library
- **Sonner** - An opinionated toast component
- **Embla Carousel** - Lightweight carousel library

## 📁 Project Structure

```
sample-mvp/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   │   ├── hero-1.jpg     # Hero section images
│   │   ├── hero-2.jpg
│   │   ├── hero-3.jpg
│   │   └── ...
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx # Main navigation component
│   │   └── ui/           # Shadcn/UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About company page
│   │   ├── Contact.tsx   # Contact information
│   │   ├── Locations.tsx # Global locations
│   │   └── ...
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── components.json        # Shadcn/UI configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json          # Project dependencies
```

## 🎨 Features

### 🏠 Homepage
- Dynamic hero carousel with company messaging
- Service highlights and capabilities
- Real-time statistics and achievements
- Call-to-action sections

### 📖 About Page
- Company history and mission
- Team information and expertise
- Global presence and statistics
- Core values and commitments

### 🌍 Locations Page
- Interactive world map of operations
- Regional office information
- Local contact details
- Service availability by region

### 📞 Contact Page
- Multiple contact methods
- Contact form with validation
- Office locations and hours
- Emergency contact information

### 🎯 Additional Features
- Responsive design for all devices
- Fast loading times with Vite
- SEO-optimized structure
- Accessible UI components
- Modern animations and transitions

## 🚢 Services Offered

### Freight & Cargo Services
- **Air Freight**: Fast international shipping via major airlines
- **Ocean Freight**: Cost-effective sea transportation for large volumes
- **Ground Transportation**: Reliable truck and rail services
- **Intermodal Solutions**: Combined transportation modes for efficiency

### Supply Chain Solutions
- **Inventory Management**: Real-time stock monitoring and optimization
- **Order Fulfillment**: Complete order processing and shipping
- **Returns Processing**: Efficient reverse logistics handling
- **Vendor Management**: Supplier coordination and optimization

### Specialized Services
- **Temperature-Controlled**: Cold chain solutions for sensitive goods
- **Hazardous Materials**: Certified dangerous goods transportation
- **Project Cargo**: Oversized and complex shipment handling
- **White Glove Delivery**: Premium handling and installation services

## 🌐 Global Reach

LogiFlow operates across six continents with a comprehensive network of:

- **North America**: 15 major hubs covering USA, Canada, and Mexico
- **Europe**: 25 locations across EU and UK with customs expertise
- **Asia-Pacific**: 35 strategic points covering major trade routes
- **Middle East & Africa**: 20 facilities for emerging market access
- **Latin America**: 12 hubs for regional and international trade
- **Oceania**: 5 key locations for Pacific region coverage

## 🔧 Development

### Code Quality
This project maintains high code quality standards through:
- TypeScript for type safety
- ESLint for code consistency
- Prettier for code formatting
- Component-based architecture
- Responsive design principles

### Performance Optimization
- Vite for fast development and builds
- Code splitting and lazy loading
- Optimized images and assets
- Efficient CSS with Tailwind
- Modern React patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support and questions:
- 📧 Email: support@logiflow.com
- 📞 Phone: +1-800-LOGIFLOW
- 💬 Live Chat: Available 24/7 on our website
- 📍 Visit: Any of our 50+ global locations

---

<div align="center">
  <p><strong>LogiFlow - Connecting the World Through Logistics</strong></p>
  <p>© 2025 LogiFlow Transport & Logistics. All rights reserved.</p>
</div>