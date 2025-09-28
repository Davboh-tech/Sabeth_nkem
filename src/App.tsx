import React, { useState } from 'react';
import { Download, Phone, Mail, MapPin, Calendar, Award, Users, Building, Wrench, Shield, Zap, Cog, ArrowRight, CircleCheck as CheckCircle, Star, Target, Eye, Heart, Globe, Briefcase } from 'lucide-react'st [activeSection, setActiveSection] = useState('overview');

  const downloadProfile = () => {
    const element = document.createElement('a');
    const content = generateProfileContent();
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Sabeth_Nkem_Company_Profile_2024.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateProfileContent = () => {
    return `
SABETH NKEM NIGERIA LIMITED
COMPANY PROFILE 2024
===============================================

COMPANY INFORMATION
-------------------
Company Name: Sabeth Nkem Nigeria Limited
Registration: RC206391
Incorporation Date: October 1992
Years of Operation: 32+ Years (1992-2024)

CONTACT INFORMATION
-------------------
Mobile: +234-803-319-3772
Email: info@sabethnkem.com
Website: www.sabethnkem.com

ADDRESSES
---------
Head Office:
27, Adedokun Street,
Agosi Estate Ifo,
P.O. Box 129, Ifo, Ogun State.

Workshop:
Km 48, Lagos-Abeokuta Express way,
Pakoto, Ifo, Ogun State.

COMPANY OVERVIEW
----------------
Sabeth Nkem Nigeria Limited is a technical oriented service company incorporated in October 1992. We are mechanical, electrical and civil Engineers specializing in Engineering, Procurement, Construction and Maintenance (EPCM) services.

The company was established to address the need for competent technical service companies with small overhead costs capable of delivering superior quality services. Our ability to deliver precise and alternative technology solutions to our clients has given us an edge over our contemporaries.

CORE SERVICES - EPCM
---------------------

ENGINEERING:
- Mechanical Engineering Design
- Electrical Engineering Design  
- Civil Engineering Design
- Process Engineering & Optimization
- Technical Consulting
- Equipment Specification
- System Integration

PROCUREMENT:
- Equipment Sourcing & Supply
- Supply Chain Management
- Vendor Management & Relations
- Quality Assurance & Control
- Logistics Coordination
- Cost Optimization

CONSTRUCTION:
- Project Execution & Management
- Installation & Commissioning
- Site Supervision
- Quality Control & Assurance
- Safety Management
- Timeline Management

MAINTENANCE:
- Preventive Maintenance Programs
- Planned Maintenance (Shutdowns)
- Emergency Repairs
- Equipment Upgrades
- Condition Monitoring
- Spare Parts Management

SPECIALIZED SERVICES
--------------------
1. Cement Plant Operations & Maintenance
2. Alternative Fuel Systems
3. Fire Suppression Systems (Water & Gas)
4. Conveyor Systems Installation
5. Mill & Kiln Maintenance
6. Electrical Systems Installation
7. Mechanical Equipment Installation
8. Civil Construction Works

PRIMARY CLIENTS
---------------
- Lafarge Africa Plc (Ewekoro Plant)
- Lafarge Africa Plc (Sagamu Plant)  
- Lafarge Africa Plc (Mfamosing Plant, Calabar)
- Lafarge Africa Plc (Ashaka Cement)
- Dangote Cement
- Tower Group Companies
- NIYAMCO (Bacita, Jebba)

MAJOR PROJECTS COMPLETED
------------------------

LAFARGE CEMENT WAPCO PROJECTS:
1. Conversion of Mark Davis preheater water seal to dry seal (1993)
2. Changing of crack cement mill inlet trinnon (2001)
3. Installation of Moller parker screen (2001)
4. Fabrication and installation of new raw material feeding conveyor line (2008)
5. Conversion Kanji silo (2010)
6. Construction of 10,000MT cement silo (2015)
7. Alternative fuel system using PKS, consisting storage silo, conveyors and elevators (2016)
8. Installation of VCM inlet chute Mfamosing plant
9. Changing of VCM central separator cartridge
10. Replacement of master rollers and installing roller shaft and new bearings
11. Replacement Genk gearbox of VRM Mfamosing Plant
12. Installation of new DGO2 clinker pan conveyor Ewekoro line 2
13. Installation of firefighting system in both Ewekoro and Mfamosing plant
14. Conversion of ESP (Electrostatic precipitator) at Ewekoro Line1 to Bag filter house
15. Installation of Kiln dryer at Ewekoro
16. Alternative fuel plant at Ewekoro Line 1 and 2
17. Packing plant upgrade on ventomatic parker

NIYAMCO PROJECT:
- Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks (1994)

TOWER GROUP PROJECTS:
Kolokote Nig. Ltd:
- Fabrication and Installation of coating line units (2008)
- Installation of bridle roller (2006)
- Installation of embossing unit (2004, 2010)

Aluminum Rolling Mills:
- Installation of new billet oven (2010)
- Fabrication of centrifugal fan (2010)

Greenfuels Nig. Ltd:
- Fabrication of cylindrical racks (2009)

CURRENT OPERATIONS
------------------
- Daily preventive maintenance of plants at Ewekoro and Mfamosing
- Country Support Team for Lafarge operations (Quarry to Packing plant)
- Fire suppression systems maintenance at Ewekoro and Mfamosing Alternative fuel plants
- FM200 gas suppression system maintenance at Ewekoro substation
- Annual planned maintenance (Shutdown) across Lafarge Business units

ACHIEVEMENTS & MILESTONES
-------------------------
- 32+ years of continuous operation (1992-2024)
- 40+ capitalized projects completed in Lafarge Business units
- Trusted partner for major cement manufacturers
- Specialized expertise in cement plant operations
- Proven track record in EPCM services
- Emergency response capabilities
- 24/7 maintenance support services

QUALITY & SAFETY
----------------
- Commitment to superior quality services
- Safety-first approach in all operations
- Quality assurance and control systems
- Trained and certified personnel
- Compliance with industry standards
- Environmental responsibility

COMPETITIVE ADVANTAGES
----------------------
- Over 30 years of cement industry experience
- Small overhead costs with superior quality delivery
- Precise and alternative technology solutions
- Comprehensive EPCM capabilities
- Strong client relationships and trust
- Emergency response capabilities
- Skilled and experienced workforce

CONTACT PERSONS
---------------
Project Manager: Felix Buzugbe
Mobile: +234-803-319-3772
Email: info@sabethnkem.com

BUSINESS HOURS
--------------
Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 4:00 PM
Sunday: Emergency Services Only

Emergency Contact: Available 24/7 for critical operations

===============================================
Generated on: ${new Date().toLocaleDateString()}
Sabeth Nkem Nigeria Limited - RC206391
www.sabethnkem.com | info@sabethnkem.com
===============================================
    `;
  };

  const projectImages = [
    { src: 'Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (1).jpg', title: 'Alternative Fuel Plant Installation' },
    { src: 'Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (2).jpg', title: 'Commissioning Process' },
    { src: 'Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (3).jpg', title: 'Equipment Installation' },
    { src: 'Installation_of_Pan_Conveyor (1).jpg', title: 'Pan Conveyor Installation' },
    { src: 'Installation_of_Pan_Conveyor (2).jpg', title: 'Conveyor System Setup' },
    { src: 'Kiln_ID_Fan_Installation (1).jpg', title: 'Kiln ID Fan Installation' },
    { src: 'Kiln_ID_Fan_Installation (2).jpg', title: 'Fan System Assembly' },
    { src: 'Cement_Mill_Slide_Show_Bearing.jpg', title: 'Cement Mill Bearing Work' },
    { src: 'Maintenance_of_Hydraulic_Pump.jpg', title: 'Hydraulic Pump Maintenance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="logo.png" alt="Sabeth Nkem Logo" className="h-16 w-16 object-contain bg-white rounded-lg p-2" />
              <div>
                <h1 className="text-3xl font-bold">SABETH NKEM NIGERIA LIMITED</h1>
                <p className="text-blue-200">Contractors and Engineering Consultants • RC206391</p>
                <p className="text-blue-200">Established 1992 • 32+ Years of Excellence</p>
              </div>
            </div>
            <button
              onClick={downloadProfile}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Company Profile</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Company Overview', icon: Building },
              { id: 'services', label: 'EPCM Services', icon: Cog },
              { id: 'projects', label: 'Major Projects', icon: Award },
              { id: 'contact', label: 'Contact Info', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`py-4 px-2 border-b-2 flex items-center space-x-2 transition-colors ${
                  activeSection === id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">32+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">40+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">5+</div>
                <div className="text-gray-600">Major Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600">Support Services</div>
              </div>
            </div>

            {/* Company Story */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Company Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Sabeth Nkem Nigeria Limited is a technical oriented service company incorporated in October 1992. 
                  We are mechanical, electrical and civil Engineers specializing in Engineering, Procurement, 
                  Construction and Maintenance (EPCM) services.
                </p>
                <p className="text-gray-600 mb-4">
                  The need to incorporate the company arose from inadequate competent technical service companies 
                  with small overhead costs capable of delivering superior quality services. Our ability to deliver 
                  precise and alternative technology solutions to our clients has given us an edge over our contemporaries.
                </p>
                <p className="text-gray-600">
                  With over 30 years of cement industrial operation and maintenance experience, we serve as the 
                  primary technical partner for major cement manufacturers across Nigeria, providing comprehensive 
                  EPCM services from quarry to packing plant operations.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide superior quality engineering, procurement, construction, and maintenance services 
                  with innovative solutions and cost-effective approaches that exceed client expectations.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the leading technical service provider in Nigeria's industrial sector, recognized for 
                  excellence, reliability, and innovative engineering solutions.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">EPCM Services</h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive Engineering, Procurement, Construction and Maintenance (EPCM) services 
                cover the complete project lifecycle from concept to commissioning and ongoing maintenance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Engineering</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Mechanical Design</li>
                    <li>Electrical Design</li>
                    <li>Civil Engineering</li>
                    <li>Process Optimization</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Procurement</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Equipment Sourcing</li>
                    <li>Supply Chain Management</li>
                    <li>Vendor Relations</li>
                    <li>Quality Assurance</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Construction</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Project Execution</li>
                    <li>Installation</li>
                    <li>Commissioning</li>
                    <li>Quality Control</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Maintenance</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Preventive Maintenance</li>
                    <li>Planned Shutdowns</li>
                    <li>Emergency Repairs</li>
                    <li>Equipment Upgrades</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Services */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Specialized Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Cement Plant Operations & Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Alternative Fuel Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Fire Suppression Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Conveyor Systems Installation</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Mill & Kiln Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Electrical Systems Installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Mechanical Equipment Installation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Civil Construction Works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-8">
            {/* Project Gallery */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Projects List */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Major Projects Completed</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Lafarge Cement WAPCO Projects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <ul className="space-y-2">
                      <li>• Conversion of Mark Davis preheater water seal to dry seal (1993)</li>
                      <li>• Changing of crack cement mill inlet trinnon (2001)</li>
                      <li>• Installation of Moller parker screen (2001)</li>
                      <li>• Fabrication and installation of new raw material feeding conveyor line (2008)</li>
                      <li>• Conversion Kanji silo (2010)</li>
                      <li>• Construction of 10,000MT cement silo (2015)</li>
                      <li>• Alternative fuel system using PKS (2016)</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Installation of VCM inlet chute Mfamosing plant</li>
                      <li>• Changing of VCM central separator cartridge</li>
                      <li>• Replacement of master rollers and installing roller shaft</li>
                      <li>• Replacement Genk gearbox of VRM Mfamosing Plant</li>
                      <li>• Installation of new DGO2 clinker pan conveyor Ewekoro line 2</li>
                      <li>• Installation of firefighting system in both plants</li>
                      <li>• Conversion of ESP to Bag filter house</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Other Major Clients</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <strong>NIYAMCO (Bacita, Jebba):</strong>
                      <ul className="ml-4 mt-1">
                        <li>• Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks (1994)</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Tower Group Companies:</strong>
                      <ul className="ml-4 mt-1">
                        <li>• Coating line installation (Kolokote)</li>
                        <li>• Billet oven installation (Aluminum Rolling Mills)</li>
                        <li>• Cylindrical racks fabrication (Greenfuels)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Mobile</div>
                      <div className="text-gray-600">+234-803-319-3772</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@sabethnkem.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Head Office</div>
                      <div className="text-gray-600">
                        27, Adedokun Street,<br />
                        Agosi Estate Ifo,<br />
                        P.O. Box 129, Ifo, Ogun State.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Workshop</div>
                      <div className="text-gray-600">
                        Km 48, Lagos-Abeokuta Express way,<br />
                        Pakoto, Ifo, Ogun State.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours & Emergency */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Business Hours</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-600">Emergency Services Only</span>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Services</h4>
                  <p className="text-red-700 text-sm">
                    24/7 emergency support available for critical operations and maintenance issues.
                  </p>
                  <div className="mt-2">
                    <strong>Emergency Contact:</strong> +234-803-319-3772
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Personnel</h4>
                  <div className="text-gray-600">
                    <strong>Project Manager:</strong> Felix Buzugbe<br />
                    <strong>Registration:</strong> RC206391
                  </div>
                </div>
              </div>
            </div>

            {/* Current Operations */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Current Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Daily Operations</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• Preventive maintenance at Ewekoro plant</li>
                    <li>• Preventive maintenance at Mfamosing plant</li>
                    <li>• Country Support Team operations</li>
                    <li>• Quarry to packing plant support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Specialized Maintenance</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>• Fire suppression systems maintenance</li>
                    <li>• FM200 gas suppression system maintenance</li>
                    <li>• Annual planned maintenance (Shutdowns)</li>
                    <li>• Emergency response services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">SABETH NKEM NIGERIA LIMITED</h3>
            <p className="text-gray-300">Engineering, Procurement, Construction and Maintenance</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-300">
            <span>RC206391</span>
            <span>Est. 1992</span>
            <span>32+ Years Experience</span>
            <span>www.sabethnkem.com</span>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            © 2024 Sabeth Nkem Nigeria Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyProfile;