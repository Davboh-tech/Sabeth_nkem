import React from 'react';
import { Wrench, Cog, Building, Shield, Flame, Recycle } from 'lucide-react';

const Services = () => {
  const epcmServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Engineering',
      description: 'General Engineering design (Primarily mechanical based)',
      details: [
        'Process engineering and optimization',
        'Structural and civil engineering',
        'Electrical and instrumentation design',
        'Equipment design and specification',
        'Technical feasibility studies'
      ]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Procurement',
      description: 'Comprehensive procurement and supply chain management',
      details: [
        'Equipment sourcing and procurement',
        'Material supply chain management',
        'Vendor management and quality assurance',
        'Cost optimization strategies',
        'Logistics and delivery coordination'
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Construction',
      description: 'Professional construction and installation services',
      details: [
        'Project execution and management',
        'Installation and commissioning',
        'Quality control and safety management',
        'Timeline and budget management',
        'Site supervision and coordination'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Maintenance',
      description: 'Comprehensive maintenance and support services',
      details: [
        'Preventive maintenance programs',
        'Annual planned maintenance (Shutdown)',
        'Emergency repair services',
        'Equipment upgrades and modifications',
        'Performance optimization'
      ]
    }
  ];

  const specializedServices = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: 'Fire Suppression Systems',
      description: 'Design, installation, and maintenance of automatic fire suppression systems',
      features: [
        'Water-based suppression systems',
        'Gas suppression systems (FM200)',
        'Thermal camera imaging and recording',
        'Auto fire protection for alternative fuel systems',
        'System commissioning and testing'
      ],
      image: 'https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Recycle className="w-12 h-12" />,
      title: 'Alternative Fuel Systems',
      description: 'Complete alternative fuel plant solutions using sustainable materials',
      features: [
        'PKS (Palm Kernel Shell) fuel systems',
        'Storage silos and conveyors',
        'Elevators and feeding systems',
        'Process optimization',
        'Environmental compliance'
      ],
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const majorProjects = [
    {
      client: 'Lafarge Africa PLC',
      projects: [
        'Conversion of Mark Davis preheater water seal to dry seal (1993)',
        'Installation of Moller parker screen (2001)',
        'Construction of 10,000MT cement silo (2015)',
        'Alternative fuel system using PKS (2016)',
        'Installation of firefighting system in both Ewekoro and Mfamosing plant',
        'Installation of new DGO2 clinker pan conveyor Ewekoro line 2'
      ]
    },
    {
      client: 'NIYAMCO (Bacita, Jebba)',
      projects: [
        'Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks (1994)'
      ]
    },
    {
      client: 'Tower Group Companies',
      projects: [
        'Fabrication and Installation of coating line units',
        'Installation of new billet oven',
        'Fabrication of centrifugal fan',
        'Installation of embossing units'
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive EPCM (Engineering, Procurement, Construction and Maintenance) 
            services for cement plants and industrial facilities
          </p>
        </div>
      </section>

      {/* EPCM Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EPCM Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core EPCM capabilities cover the complete project lifecycle from initial 
              design through ongoing maintenance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {epcmServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">
              Advanced technical solutions for specific industrial requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Projects & Clients</h2>
            <p className="text-xl text-gray-600">
              Highlighting our successful partnerships and completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {majorProjects.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{client.client}</h3>
                <ul className="space-y-3">
                  {client.projects.map((project, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {project}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Operations */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Operations</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are presently responsible for the daily preventive maintenance of plants 
              at Ewekoro and Mfamosing - From quarry to packing plant as COUNTRY SUPPORT TEAM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Ongoing Maintenance Contracts</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Lafarge Ewekoro Plant - Daily preventive maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Lafarge Mfamosing Plant - Complete facility maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Annual planned maintenance across Lafarge business units
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Dangote Cement maintenance services
                </li>
              </ul>
            </div>

            <div className="bg-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Recent Achievements</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  40+ capitalized projects completed in Lafarge Business unit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  ESP to Bag filter house conversion (SINOMA awarded)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Kiln dryer installation at Ewekoro
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Packing plant upgrade on ventomatic parker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;