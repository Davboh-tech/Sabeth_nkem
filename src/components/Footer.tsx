import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SABETH NKEM NIGERIA LIMITED</h3>
            <p className="text-gray-300 mb-4">
              Leading engineering contractors and consultants specializing in EPCM services 
              for cement plants and industrial facilities across Nigeria since 1992.
            </p>
            <p className="text-sm text-gray-400">RC206391</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">27, Adedokun Street, Agosi Estate Ifo</p>
                  <p className="text-gray-300">P.O. Box 129, Ifo, Ogun State</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <p className="text-gray-300">Workshop: Km 48, Lagos-Abeokuta Express way, Pakoto, Ifo</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <p className="text-gray-300">+234-803-319-3772</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <p className="text-gray-300">info@sabethnkem.com</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Engineering Design & Consultation</li>
              <li>Procurement Services</li>
              <li>Construction & Installation</li>
              <li>Maintenance & Support</li>
              <li>Fire Suppression Systems</li>
              <li>Alternative Fuel Systems</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sabeth Nkem Nigeria Limited. All rights reserved. | 
            Established 1992 | Over 30 years of excellence in engineering services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;