import React from 'react';
import { Calendar, Award, Users, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '1992',
      title: 'Company Incorporation',
      description: 'Sabeth Nkem Nigeria Limited was incorporated in October 1992 as a technical oriented service company.'
    },
    {
      year: '1993',
      title: 'First Major Project',
      description: 'Conversion of Mark Davis preheater water seal to dry seal for Lafarge WAPCO.'
    },
    {
      year: '1994',
      title: 'NIYAMCO Partnership',
      description: 'Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks at Bacita, Jebba.'
    },
    {
      year: '2001',
      title: 'Expansion of Services',
      description: 'Installation of Moller parker screen and cement mill inlet trinnon projects.'
    },
    {
      year: '2015',
      title: 'Major Infrastructure',
      description: 'Construction of 10,000MT cement silo, marking our capability in large-scale projects.'
    },
    {
      year: '2016',
      title: 'Alternative Fuel Systems',
      description: 'Installation of alternative fuel system using PKS, pioneering sustainable solutions.'
    },
    {
      year: '2024',
      title: 'Country Support Team',
      description: 'Currently responsible for daily preventive maintenance across multiple Lafarge plants.'
    }
  ];

  const teamValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Our ability to deliver precise and alternative copy technology gives us an edge over our contemporaries.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Superior quality services with small overhead costs, ensuring value for our clients.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expertise',
      description: 'Mechanical, electrical, and civil engineers with over 30 years of cement industry experience.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Commitment',
      description: 'Dedicated to delivering exceptional results and maintaining long-term client relationships.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-blue-100 mb-8">
                Sabeth Nkem Nigeria Limited is a technical oriented service company 
                incorporated in October 1992. We are mechanical, electrical and civil 
                Engineers with over three decades of excellence in industrial engineering.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">1992</div>
                  <div className="text-blue-200">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">RC206391</div>
                  <div className="text-blue-200">Registration</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Engineering Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The need to incorporate Sabeth Nkem Nigeria Limited arose from inadequate 
                  competent technical service companies with small overhead costs to deliver 
                  superior quality services in the Nigerian industrial sector.
                </p>
                <p>
                  Our ability to deliver precise and alternative copy technology to our clients 
                  has given us an edge over our contemporaries. We specialize in mechanical, 
                  electrical, and civil engineering solutions, with particular expertise in 
                  cement plant operations and maintenance.
                </p>
                <p>
                  Located at Km 48, Lagos Abeokuta Express way, Pakoto Ifo Ogun state, our 
                  strategic position allows us to serve clients across Nigeria efficiently. 
                  Our workshop facilities are equipped with modern tools and equipment to 
                  handle complex engineering projects.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mr-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide superior quality engineering services with competitive overhead costs, 
                delivering precise and innovative technology solutions that exceed our clients' 
                expectations while maintaining the highest standards of safety and professionalism.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mr-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading technical service company in Nigeria, recognized for our 
                expertise in EPCM services, innovative solutions, and commitment to excellence 
                in cement plant operations and industrial engineering projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our 30+ year history of engineering excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mr-4">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{milestone.year}</h3>
                          <h4 className="text-blue-600 font-semibold">{milestone.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Operations</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Today, we continue to lead in cement plant operations and maintenance across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-blue-200 mb-4">Capitalized Projects</div>
              <p className="text-sm text-blue-100">
                Completed in Lafarge Business units across Nigeria
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200 mb-4">Support Team</div>
              <p className="text-sm text-blue-100">
                Daily preventive maintenance at Ewekoro and Mfamosing plants
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200 mb-4">Client Satisfaction</div>
              <p className="text-sm text-blue-100">
                Maintaining long-term partnerships with major industrial clients
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;