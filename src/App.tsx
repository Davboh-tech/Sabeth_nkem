import React, { useState } from 'react';
import { Download, Phone, Mail, MapPin, Calendar, Award, Users, Building, Wrench, Shield, Zap, Cog, ArrowRight, CheckCircle, Star, Target, Eye, Heart, Globe, Briefcase } from 'lucide-react';
import './App.css';

const CompanyProfile: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const downloadProfile = () => {
    const htmlContent = generateStyledHTMLProfile();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sabeth_Nkem_Company_Profile_2024.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateStyledHTMLProfile = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sabeth Nkem Nigeria Limited - Company Profile 2024</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: #fff;
            font-size: 12px;
        }
        .container { max-width: 210mm; margin: 0 auto; padding: 20px; }
        .header { 
            background: linear-gradient(135deg, #1e3a8a, #3b82f6); 
            color: white; 
            padding: 30px; 
            text-align: center; 
            margin-bottom: 30px;
            border-radius: 10px;
        }
        .header h1 { font-size: 28px; margin-bottom: 10px; font-weight: bold; }
        .header p { font-size: 16px; opacity: 0.9; }
        .section { margin-bottom: 25px; }
        .section-title { 
            background: #1e3a8a; 
            color: white; 
            padding: 12px 20px; 
            font-size: 16px; 
            font-weight: bold; 
            margin-bottom: 15px;
            border-radius: 5px;
        }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .info-box { 
            background: #f8fafc; 
            padding: 15px; 
            border-left: 4px solid #3b82f6; 
            margin-bottom: 15px;
            border-radius: 5px;
        }
        .info-box h3 { color: #1e3a8a; font-size: 14px; margin-bottom: 8px; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0; }
        .stat-box { 
            background: #1e3a8a; 
            color: white; 
            padding: 20px; 
            text-align: center; 
            border-radius: 8px;
        }
        .stat-number { font-size: 24px; font-weight: bold; }
        .stat-label { font-size: 12px; opacity: 0.9; }
        .project-list { columns: 2; column-gap: 20px; }
        .project-item { 
            break-inside: avoid; 
            margin-bottom: 8px; 
            padding-left: 15px; 
            position: relative;
        }
        .project-item:before { 
            content: "•"; 
            color: #3b82f6; 
            font-weight: bold; 
            position: absolute; 
            left: 0;
        }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .footer { 
            background: #1e3a8a; 
            color: white; 
            padding: 20px; 
            text-align: center; 
            margin-top: 30px;
            border-radius: 10px;
        }
        .highlight { background: #fef3c7; padding: 2px 6px; border-radius: 3px; }
        table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; }
        th { background: #f3f4f6; font-weight: bold; }
        @media print {
            body { font-size: 11px; }
            .container { max-width: none; margin: 0; padding: 15px; }
            .header h1 { font-size: 24px; }
            .section-title { font-size: 14px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>SABETH NKEM NIGERIA LIMITED</h1>
            <p>Contractors and Engineering Consultants • RC206391</p>
            <p>Engineering, Procurement, Construction and Maintenance (EPCM)</p>
            <p style="margin-top: 10px; font-size: 14px;">Established 1992 • 32+ Years of Excellence</p>
        </div>

        <!-- Company Stats -->
        <div class="stats-grid">
            <div class="stat-box">
                <div class="stat-number">1992</div>
                <div class="stat-label">Established</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">32+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">40+</div>
                <div class="stat-label">Major Projects</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Support Services</div>
            </div>
        </div>

        <!-- Company Overview -->
        <div class="section">
            <div class="section-title">COMPANY OVERVIEW</div>
            <p style="margin-bottom: 15px;">
                <strong>Sabeth Nkem Nigeria Limited</strong> is a technical oriented service company incorporated in <span class="highlight">October 1992</span>. 
                We are mechanical, electrical and civil Engineers specializing in <strong>Engineering, Procurement, Construction and Maintenance (EPCM)</strong> services.
            </p>
            <p style="margin-bottom: 15px;">
                The company was established to address the need for competent technical service companies with small overhead costs capable of delivering superior quality services. 
                Our ability to deliver <strong>precise and alternative technology solutions</strong> to our clients has given us an edge over our contemporaries.
            </p>
            <p>
                With over <strong>30 years of cement industrial operation and maintenance experience</strong>, we serve as the primary technical partner for major cement manufacturers across Nigeria, 
                providing comprehensive EPCM services from quarry to packing plant operations.
            </p>
        </div>

        <!-- Contact Information -->
        <div class="section">
            <div class="section-title">CONTACT INFORMATION</div>
            <div class="contact-grid">
                <div class="info-box">
                    <h3>Head Office</h3>
                    <p>27, Adedokun Street<br>
                    Agosi Estate Ifo<br>
                    P.O. Box 129, Ifo, Ogun State</p>
                </div>
                <div class="info-box">
                    <h3>Workshop Facility</h3>
                    <p>Km 48, Lagos-Abeokuta Express way<br>
                    Pakoto, Ifo, Ogun State</p>
                </div>
                <div class="info-box">
                    <h3>Contact Details</h3>
                    <p><strong>Mobile:</strong> +234-803-319-3772<br>
                    <strong>Email:</strong> info@sabethnkem.com<br>
                    <strong>Website:</strong> www.sabethnkem.com</p>
                </div>
                <div class="info-box">
                    <h3>Key Personnel</h3>
                    <p><strong>Project Manager:</strong> Felix Buzugbe<br>
                    <strong>Registration:</strong> RC206391<br>
                    <strong>Incorporation:</strong> October 1992</p>
                </div>
            </div>
        </div>

        <!-- EPCM Services -->
        <div class="section">
            <div class="section-title">CORE SERVICES - EPCM</div>
            <div class="two-column">
                <div>
                    <div class="info-box">
                        <h3>ENGINEERING</h3>
                        <ul style="margin-left: 15px;">
                            <li>Mechanical Engineering Design</li>
                            <li>Electrical Engineering Design</li>
                            <li>Civil Engineering Design</li>
                            <li>Process Engineering & Optimization</li>
                            <li>Technical Consulting</li>
                            <li>Equipment Specification</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h3>PROCUREMENT</h3>
                        <ul style="margin-left: 15px;">
                            <li>Equipment Sourcing & Supply</li>
                            <li>Supply Chain Management</li>
                            <li>Vendor Management & Relations</li>
                            <li>Quality Assurance & Control</li>
                            <li>Logistics Coordination</li>
                            <li>Cost Optimization</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="info-box">
                        <h3>CONSTRUCTION</h3>
                        <ul style="margin-left: 15px;">
                            <li>Project Execution & Management</li>
                            <li>Installation & Commissioning</li>
                            <li>Site Supervision</li>
                            <li>Quality Control & Assurance</li>
                            <li>Safety Management</li>
                            <li>Timeline Management</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h3>MAINTENANCE</h3>
                        <ul style="margin-left: 15px;">
                            <li>Preventive Maintenance Programs</li>
                            <li>Planned Maintenance (Shutdowns)</li>
                            <li>Emergency Repairs</li>
                            <li>Equipment Upgrades</li>
                            <li>Condition Monitoring</li>
                            <li>Spare Parts Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Specialized Services -->
        <div class="section">
            <div class="section-title">SPECIALIZED SERVICES</div>
            <div class="project-list">
                <div class="project-item">Cement Plant Operations & Maintenance</div>
                <div class="project-item">Alternative Fuel Systems</div>
                <div class="project-item">Fire Suppression Systems (Water & Gas)</div>
                <div class="project-item">Conveyor Systems Installation</div>
                <div class="project-item">Mill & Kiln Maintenance</div>
                <div class="project-item">Electrical Systems Installation</div>
                <div class="project-item">Mechanical Equipment Installation</div>
                <div class="project-item">Civil Construction Works</div>
            </div>
        </div>

        <!-- Major Clients -->
        <div class="section">
            <div class="section-title">PRIMARY CLIENTS</div>
            <div class="two-column">
                <div class="info-box">
                    <h3>Lafarge Africa Plc</h3>
                    <ul style="margin-left: 15px;">
                        <li>Ewekoro Plant</li>
                        <li>Sagamu Plant</li>
                        <li>Mfamosing Plant, Calabar</li>
                        <li>Ashaka Cement</li>
                    </ul>
                </div>
                <div class="info-box">
                    <h3>Other Major Clients</h3>
                    <ul style="margin-left: 15px;">
                        <li>Dangote Cement</li>
                        <li>Tower Group Companies</li>
                        <li>NIYAMCO (Bacita, Jebba)</li>
                        <li>Kolokote Nigeria Ltd</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Major Projects -->
        <div class="section">
            <div class="section-title">MAJOR PROJECTS COMPLETED</div>
            
            <h3 style="color: #1e3a8a; margin-bottom: 10px;">LAFARGE CEMENT WAPCO PROJECTS:</h3>
            <div class="project-list" style="margin-bottom: 20px;">
                <div class="project-item">Conversion of Mark Davis preheater water seal to dry seal (1993)</div>
                <div class="project-item">Changing of crack cement mill inlet trinnon (2001)</div>
                <div class="project-item">Installation of Moller parker screen (2001)</div>
                <div class="project-item">Fabrication and installation of new raw material feeding conveyor line (2008)</div>
                <div class="project-item">Conversion Kanji silo (2010)</div>
                <div class="project-item">Construction of 10,000MT cement silo (2015)</div>
                <div class="project-item">Alternative fuel system using PKS, consisting storage silo, conveyors and elevators (2016)</div>
                <div class="project-item">Installation of VCM inlet chute Mfamosing plant</div>
                <div class="project-item">Changing of VCM central separator cartridge</div>
                <div class="project-item">Replacement of master rollers and installing roller shaft and new bearings</div>
                <div class="project-item">Replacement Genk gearbox of VRM Mfamosing Plant</div>
                <div class="project-item">Installation of new DGO2 clinker pan conveyor Ewekoro line 2</div>
                <div class="project-item">Installation of firefighting system in both Ewekoro and Mfamosing plant</div>
                <div class="project-item">Conversion of ESP (Electrostatic precipitator) at Ewekoro Line1 to Bag filter house</div>
                <div class="project-item">Installation of Kiln dryer at Ewekoro</div>
                <div class="project-item">Alternative fuel plant at Ewekoro Line 1 and 2</div>
                <div class="project-item">Packing plant upgrade on ventomatic parker</div>
            </div>

            <h3 style="color: #1e3a8a; margin-bottom: 10px;">OTHER MAJOR PROJECTS:</h3>
            <div class="two-column">
                <div class="info-box">
                    <h3>NIYAMCO (Bacita, Jebba)</h3>
                    <div class="project-item">Fabrication and installation of (3) 145,000 Liters stainless steel fermentation tanks (1994)</div>
                </div>
                <div class="info-box">
                    <h3>Tower Group Companies</h3>
                    <div class="project-item">Fabrication and Installation of coating line units (2008)</div>
                    <div class="project-item">Installation of bridle roller (2006)</div>
                    <div class="project-item">Installation of embossing unit (2004, 2010)</div>
                    <div class="project-item">Installation of new billet oven (2010)</div>
                    <div class="project-item">Fabrication of centrifugal fan (2010)</div>
                    <div class="project-item">Fabrication of cylindrical racks (2009)</div>
                </div>
            </div>
        </div>

        <!-- Current Operations -->
        <div class="section">
            <div class="section-title">CURRENT OPERATIONS</div>
            <div class="info-box" style="background: #fef3c7; border-left-color: #f59e0b;">
                <h3 style="color: #92400e;">Country Support Team Operations</h3>
                <p>We are presently responsible for the <strong>daily preventive maintenance</strong> of the plants at Ewekoro and Mfamosing - From quarry to packing plant as <strong>COUNTRY SUPPORT TEAM</strong>.</p>
            </div>
            <div class="two-column">
                <div class="info-box">
                    <h3>Daily Operations</h3>
                    <div class="project-item">Preventive maintenance at Ewekoro plant</div>
                    <div class="project-item">Preventive maintenance at Mfamosing plant</div>
                    <div class="project-item">Country Support Team operations</div>
                    <div class="project-item">Quarry to packing plant support</div>
                </div>
                <div class="info-box">
                    <h3>Specialized Maintenance</h3>
                    <div class="project-item">Fire suppression systems maintenance</div>
                    <div class="project-item">FM200 gas suppression system maintenance</div>
                    <div class="project-item">Annual planned maintenance (Shutdowns)</div>
                    <div class="project-item">Emergency response services</div>
                </div>
            </div>
        </div>

        <!-- Business Hours -->
        <div class="section">
            <div class="section-title">BUSINESS HOURS & EMERGENCY SERVICES</div>
            <div class="two-column">
                <div class="info-box">
                    <h3>Regular Business Hours</h3>
                    <table>
                        <tr><td><strong>Monday - Friday:</strong></td><td>8:00 AM - 6:00 PM</td></tr>
                        <tr><td><strong>Saturday:</strong></td><td>9:00 AM - 4:00 PM</td></tr>
                        <tr><td><strong>Sunday:</strong></td><td>Emergency Services Only</td></tr>
                    </table>
                </div>
                <div class="info-box" style="background: #fef2f2; border-left-color: #ef4444;">
                    <h3 style="color: #dc2626;">Emergency Services</h3>
                    <p><strong>24/7 Emergency Support</strong> available for critical operations and maintenance issues.</p>
                    <p style="margin-top: 10px;"><strong>Emergency Contact:</strong> +234-803-319-3772</p>
                </div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="section">
            <div class="section-title">ACHIEVEMENTS & COMPETITIVE ADVANTAGES</div>
            <div class="two-column">
                <div class="info-box">
                    <h3>Key Achievements</h3>
                    <div class="project-item">32+ years of continuous operation (1992-2024)</div>
                    <div class="project-item">40+ capitalized projects completed in Lafarge Business units</div>
                    <div class="project-item">Trusted partner for major cement manufacturers</div>
                    <div class="project-item">Specialized expertise in cement plant operations</div>
                    <div class="project-item">Proven track record in EPCM services</div>
                    <div class="project-item">24/7 maintenance support services</div>
                </div>
                <div class="info-box">
                    <h3>Competitive Advantages</h3>
                    <div class="project-item">Over 30 years of cement industry experience</div>
                    <div class="project-item">Small overhead costs with superior quality delivery</div>
                    <div class="project-item">Precise and alternative technology solutions</div>
                    <div class="project-item">Comprehensive EPCM capabilities</div>
                    <div class="project-item">Strong client relationships and trust</div>
                    <div class="project-item">Emergency response capabilities</div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <h2>SABETH NKEM NIGERIA LIMITED</h2>
            <p>Contractors and Engineering Consultants • RC206391</p>
            <p style="margin: 10px 0;">Engineering, Procurement, Construction and Maintenance (EPCM)</p>
            <div style="display: flex; justify-content: center; gap: 30px; margin-top: 15px; flex-wrap: wrap;">
                <span>📞 +234-803-319-3772</span>
                <span>✉️ info@sabethnkem.com</span>
                <span>🌐 www.sabethnkem.com</span>
            </div>
            <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">
                Generated on: ${new Date().toLocaleDateString()} | Established 1992 | 32+ Years of Excellence
            </p>
        </div>
    </div>
</body>
</html>
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
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Engineering Excellence Since 1992
                    </h2>
                    <p className="text-xl text-blue-100 mb-6">
                      Leading the cement industry with innovative EPCM solutions, 
                      serving major manufacturers across Nigeria with unmatched expertise.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center bg-blue-800 px-4 py-2 rounded-full">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>ISO Certified</span>
                      </div>
                      <div className="flex items-center bg-blue-800 px-4 py-2 rounded-full">
                        <Star className="w-5 h-5 mr-2" />
                        <span>Industry Leader</span>
                      </div>
                      <div className="flex items-center bg-blue-800 px-4 py-2 rounded-full">
                        <Globe className="w-5 h-5 mr-2" />
                        <span>National Coverage</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="Installation_and_commissioning_of_Alternative_fuel_plant_at_Ewekoro_line2 (1).jpg" 
                      alt="Alternative Fuel Plant Installation at Ewekoro Line 2"
                      className="rounded-lg shadow-2xl w-full h-64 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded">
                      <p className="text-sm font-semibold">Alternative Fuel Plant Installation</p>
                      <p className="text-xs opacity-90">Ewekoro Line 2 - Advanced sustainable fuel systems using Palm Kernel Shell (PKS) technology, complete with storage silos, conveyors, and automated feeding systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800 mb-1">32+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
                <div className="text-xs text-gray-500 mt-1">Since October 1992</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 border-t-4 border-green-600">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800 mb-1">40+</div>
                <div className="text-gray-600 font-medium">Major Projects</div>
                <div className="text-xs text-gray-500 mt-1">Capitalized Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800 mb-1">5+</div>
                <div className="text-gray-600 font-medium">Major Clients</div>
                <div className="text-xs text-gray-500 mt-1">Industry Leaders</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 border-t-4 border-red-600">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-800 mb-1">24/7</div>
                <div className="text-gray-600 font-medium">Support Services</div>
                <div className="text-xs text-gray-500 mt-1">Emergency Response</div>
              </div>
            </div>

            {/* Featured Projects Gallery */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Featured Engineering Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="Installation_of_Pan_Conveyor (1).jpg" 
                    alt="Pan Conveyor Installation"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">DGO2 Clinker Pan Conveyor</h3>
                      <p className="text-sm opacity-90">Installation of new DGO2 clinker pan conveyor at Ewekoro Line 2. Heavy-duty conveyor system designed for high-temperature clinker transport with advanced wear-resistant materials and precision engineering.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="Kiln_ID_Fan_Installation (1).jpg" 
                    alt="Kiln ID Fan Installation"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">Kiln ID Fan Installation</h3>
                      <p className="text-sm opacity-90">Critical kiln induced draft fan installation and commissioning. High-capacity industrial fan system for optimal kiln operation, featuring advanced blade design and precision balancing for maximum efficiency.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="Cement_Mill_Slide_Show_Bearing.jpg" 
                    alt="Cement Mill Bearing Maintenance"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">Cement Mill Bearing Work</h3>
                      <p className="text-sm opacity-90">Precision bearing replacement and maintenance on cement mill systems. Specialized work involving master roller replacement, shaft installation, and new bearing systems for optimal mill performance and longevity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Story */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Building className="w-6 h-6 mr-3 text-blue-600" />
                Company Overview
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  <strong>Sabeth Nkem Nigeria Limited</strong> is a technical oriented service company incorporated in <span className="bg-blue-100 px-2 py-1 rounded">October 1992</span>. 
                  We are mechanical, electrical and civil Engineers specializing in <strong>Engineering, Procurement, 
                  Construction and Maintenance (EPCM)</strong> services.
                </p>
                <p className="text-gray-600 mb-4">
                  The need to incorporate the company arose from inadequate competent technical service companies 
                  with small overhead costs capable of delivering <strong>superior quality services</strong>. Our ability to deliver 
                  <em>precise and alternative technology solutions</em> to our clients has given us an edge over our contemporaries.
                </p>
                <p className="text-gray-600">
                  With over <strong>30 years of cement industrial operation and maintenance experience</strong>, we serve as the 
                  <span className="bg-yellow-100 px-2 py-1 rounded">Country Support Team</span> for major cement manufacturers across Nigeria, providing comprehensive 
                  EPCM services from <em>quarry to packing plant operations</em>.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To provide superior quality engineering, procurement, construction, and maintenance services 
                  with <strong>innovative solutions</strong> and <strong>cost-effective approaches</strong> that exceed client expectations 
                  while maintaining the highest standards of safety and environmental responsibility.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be the leading technical service provider in Nigeria's industrial sector, recognized for 
                  <strong>excellence, reliability, and innovative engineering solutions</strong> that drive sustainable 
                  industrial growth and technological advancement across Africa.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                <Heart className="w-6 h-6 mr-3 text-red-500" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Precision</h4>
                  <p className="text-sm text-gray-600">Delivering exact solutions with meticulous attention to detail</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600">Maintaining superior quality in all our services and deliverables</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Partnership</h4>
                  <p className="text-sm text-gray-600">Building lasting relationships through trust and reliability</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">Pioneering alternative technology solutions for modern challenges</p>
                </div>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Engineering Project Gallery
              </h2>
              <p className="text-gray-600 mb-8">
                Showcasing our expertise in cement plant operations, alternative fuel systems, and industrial maintenance across Nigeria's leading manufacturing facilities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">{image.title}</h3>
                      <div className="text-xs text-gray-500 mb-2">
                        {index < 3 ? 'Alternative Fuel Systems' : 
                         index < 6 ? 'Conveyor & Material Handling' : 
                         'Maintenance & Upgrades'}
                      </div>
                      <p className="text-sm text-gray-600">
                        {index === 0 && "Advanced PKS fuel system installation with automated storage and feeding mechanisms for sustainable cement production."}
                        {index === 1 && "Commissioning phase of alternative fuel plant featuring state-of-the-art control systems and safety protocols."}
                        {index === 2 && "Complete equipment installation including conveyors, elevators, and storage silos for alternative fuel processing."}
                        {index === 3 && "Heavy-duty pan conveyor system designed for high-temperature clinker transport with precision engineering."}
                        {index === 4 && "Advanced conveyor system setup with automated controls and safety interlocks for optimal material flow."}
                        {index === 5 && "High-capacity industrial fan installation for kiln operations with precision balancing and efficiency optimization."}
                        {index === 6 && "Specialized fan system assembly featuring advanced blade design and vibration control technology."}
                        {index === 7 && "Precision bearing work on cement mill systems including master roller replacement and shaft installation."}
                        {index === 8 && "Hydraulic pump maintenance and overhaul ensuring optimal performance and extended equipment life."}
                      </p>
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