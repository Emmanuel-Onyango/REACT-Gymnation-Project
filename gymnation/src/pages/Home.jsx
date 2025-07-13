import React from 'react'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import PackageCard from '../components/PackageCard'

export default function Home() {
  const services = [
    { 
      title: "Gym Access", 
      description: "Unlimited use of our state-of-the-art equipment." 
    },
    { 
      title: "Personal Training", 
      description: "Work one-on-one with certified trainers." 
    },
    { 
      title: "Home Visits", 
      description: "Trainers available for in-home sessions." 
    }
  ]

  const packages = [
    { 
      type: "Regular", 
      description: "Basic gym access and standard equipment", 
      className: "package-regular" 
    },
    { 
      type: "Premium", 
      description: "Instructor booking and full gym access", 
      className: "package-premium" 
    },
    { 
      type: "Platinum", 
      description: "Personal trainer, gym merch, house calls", 
      className: "package-platinum" 
    }
  ]

  return (
    <>
      <Header />
      <section className="hero">
        <div className="overlay">
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/signup'}
          >
            JOIN US
          </button>
        </div>
      </section>
      
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </section>

      <section className="packages-section">
        <h2>Our Packages</h2>
        <div className="packages-container">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={index} 
              type={pkg.type} 
              description={pkg.description} 
              className={pkg.className} 
            />
          ))}
        </div>
      </section>
      
      <footer>
        <p>&copy; 2023 GYM<span className="green">N</span><span className="red">ATION</span>. All rights reserved.</p>
      </footer> 
    </>
  )
}