import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Calendar, Download } from 'lucide-react';

const Home = () => {
  const handleDownloadProfile = () => {
    // Create company profile content
    const profileContent = `
SABETH NKEM NIGERIA LIMITED
Contractors and Engineering Consultants
RC206391

COMPANY PROFILE

COMPANY OVERVIEW
Sabeth Nkem Nigeria Limited is a technical oriented service company incorporated in October 1992. We are mechanical, electrical and civil Engineers situated at Km 48, Lagos Abeokuta Express way, Pakoto Ifo Ogun state.

The need to incorporate the company arose from inadequate competent Technical service company with a small overhead cost to deliver superior quality services. Our ability to deliver precise and alternative copy technology to our clients have given us an edge over our contemporaries.

CONTACT INFORMATION
Address: 27, Adedokun Street, Agosi Estate Ifo, P.O. Box 129, Ifo, Ogun State
Workshop: Km 48, Lagos-Abeokuta Express way, Pakoto, Ifo
Mobile: +234-803-319-3772
Email: info@sabethnkem.com
Website: www.sabethnkem.com

CORE SERVICES - EPCM (Engineering, Procurement, Construction and Maintenance)

ENGINEERING:
- General Engineering design (Primarily mechanical based)
- Process engineering and optimization
- Structural and civil engineering
- Electrical and instrumentation design

PROCUREMENT:
- Equipment sourcing and procurement
- Material supply chain management
- Vendor management and quality assurance
- Cost optimization strategies

CONSTRUCTION:
- Project execution and management
- Installation and commissioning
- Quality control and safety management
- Timeline and budget management

MAINTENANCE:
- Preventive maintenance programs
- Annual planned maintenance (Shutdown)
- Emergency repair services
- Equipment upgrades and modifications

SPECIALIZED SERVICES:
- Automatic Fire Suppression Systems (Water and Gas)
- Alternative Fuel Systems
- Cement Plant Operations and Maintenance
- Industrial Equipment Installation

MAJOR CLIENTS AND PROJECTS:

LAFARGE AFRICA PLC:
- Conversion of Mark Davis preheater water seal to dry seal (1993)
- Changing of crack cement mill inlet trinnon (2001)
- Installation of Moller parker screen (2001)
- Fabrication and installation of new raw material feeding conveyor line (2008)
- Conversion Kanji silo (2010)
- Construction of 10,000MT cement silo (2015)
- Alternative fuel system using PKS, consisting storage silo, conveyors and elevators (2016)
- Installation of VCM inlet chute Mfamosing plant
- Changing of VCM central separator cartridge
- Replacement of master rollers and installing roller shaft and new bearings
- Replacement Genk gearbox of VRM Mfamosing Plant
- Installation of new DGO2 clinker pan conveyor Ewekoro line 2
- Installation of firefighting system in both Ewekoro and Mfamosing plant

NIYAMCO (Bacita, Jebba Kwara State):
- Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks (1994)

TOWER GROUP:
Kolokote Nig. Ltd:
- Fabrication and Installation of coating line units (2008)
- Installation of bridle roller (2006)
- Installation of embossing unit (2004, 2010)

Aluminum Rolling Mills:
- Installation of new billet oven (2010)
- Fabrication of centrifugal fan (2010)

Greenfuels Nig. Ltd:
- Fabrication of cylindrical racks (2009)

CURRENT OPERATIONS:
We are presently responsible for the daily preventive maintenance of the plants at Ewekoro and Mfamosing - From quarry to packing plant as COUNTRY SUPPORT TEAM.

We have installed and commissioned more than 40 capitalized projects in Lafarge Business unit, including:
- Conversion of ESP (Electrostatic precipitator) at Ewekoro Line1 to Bag filter house
- Installation of Kiln dryer at Ewekoro
- Alternative fuel plant at Ewekoro Line 1 and 2
- Packing plant upgrade on ventomatic parker

FIRE SUPPRESSION SYSTEMS:
- Fire suppression systems at Ewekoro and Mfamosing Alternative fuel plants
- FM200 gas suppression system at Ewekoro substation

EXPERIENCE:
- Over 30 years of cement industrial operation and maintenance
- Annual planned maintenance (Shutdown) across Lafarge Business units: Ewekoro, Sagamu, Mfamosing in Calabar and Ashaka cement
- Extensive experience with Dangote Cement operations

QUALITY ASSURANCE:
Our commitment to quality and precision has established us as a trusted partner in the Nigerian industrial sector, particularly in cement manufacturing and related industries.

Established: October 1992
Registration: RC206391
`;

    const blob = new Blob([profileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sabeth_Nkem_Company_Profile.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Engineering Excellence Since 1992
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Leading contractors and engineering consultants specializing in EPCM services 
                for cement plants and industrial facilities across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={handleDownloadProfile}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Company Profile
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial Engineering"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">30+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">40+</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive EPCM (Engineering, Procurement, Construction and Maintenance) 
              services to meet all your industrial needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Engineering',
                description: 'General engineering design, primarily mechanical based, with expertise in process optimization.',
                image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Procurement',
                description: 'Equipment sourcing, material supply chain management, and vendor quality assurance.',
                image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Construction',
                description: 'Project execution, installation, commissioning with focus on quality and safety.',
                image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Maintenance',
                description: 'Preventive maintenance, annual shutdowns, and emergency repair services.',
                image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">
              Showcasing our expertise in cement plant operations and industrial installations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (1).jpg',
              'Installation_of_Pan_Conveyor (1).jpg',
              'Kiln_ID_Fan_Installation (1).jpg',
              'Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (5).jpg',
              'Installation_of_Pan_Conveyor (5).jpg',
              'Kiln_ID_Fan_Installation (3).jpg'
            ].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/${image}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">View Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            With over 30 years of experience in cement plant operations and industrial engineering, 
            we're ready to deliver exceptional results for your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;