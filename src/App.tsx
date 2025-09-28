import React, { useState } from 'react';
import { Download, Phone, Mail, MapPin, Calendar, Award, Users, Building, Wrench, Shield, Zap, Cog, ArrowRight, CircleCheck as CheckCircle, Star, Target, Eye, Heart, Globe, Briefcase } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const downloadProfile = () => {
    const element = document.createElement('a');
    const content = generateProfileContent();
    const file = new Blob([content], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'Dovaheights_Company_Profile_2025.html';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateProfileContent = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dovaheights Energy Limited Company Profile</title>
  <style>
    body { font-family: Arial, sans-serif; color: #001F3F; margin: 0; padding: 0; background-color: #ffffff; }
    .page { page-break-after: always; position: relative; height: 100vh; overflow: hidden; padding: 20px; box-sizing: border-box; }
    .logo { font-size: 48px; font-weight: bold; color: #001F3F; }
    .slogan { font-size: 24px; color: #DC143C; }
    .header { text-align: center; margin-bottom: 20px; }
    .diagonal-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom right, transparent 50%, #DC143C 50%); z-index: -1; }
    .content { max-width: 800px; margin: 0 auto; }
    .list-item { list-style-type: disc; margin-left: 20px; }
    .core-values { text-align: center; }
    .core-circle { width: 200px; height: 200px; background-color: #DC143C; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto; font-size: 24px; font-weight: bold; }
    .value-label { position: absolute; font-size: 16px; }
    .map-container { text-align: center; }
    .cert-logos { display: flex; justify-content: center; gap: 20px; }
    .summary-box { background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .service-card { background-color: #f0f0f0; padding: 15px; border-radius: 10px; margin-bottom: 20px; }
    .footer { position: absolute; bottom: 0; width: 100%; text-align: center; font-size: 12px; color: gray; }
    .page-number { position: absolute; bottom: 10px; right: 20px; font-size: 18px; color: #DC143C; }
    @media print { .page { height: auto; } }
  </style>
</head>
<body>
  <div class="page">
    <div class="diagonal-bg"></div>
    <div class="content">
      <div class="header">
        <div class="logo">DOVAHEIGHTS ENERGY LIMITED</div>
        <h2>Company Profile</h2>
      </div>
      <!-- Placeholder for oil platform image -->
      <div style="text-align: center; margin: 20px 0;"><img src="placeholder-oil-platform.jpg" alt="Oil Platform at Sunset" style="max-width: 100%;"></div>
      <p class="slogan" style="text-align: right;">Optimizing Client Asset Uptime…</p>
    </div>
    <div class="page-number">1</div>
  </div>

  <div class="page">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 50%; background-color: #001F3F; border-bottom-left-radius: 50% 100%; border-bottom-right-radius: 50% 100%; z-index: -1;"></div>
    <div class="content">
      <h2 style="text-align: center; color: white;">TABLE OF CONTENT</h2>
      <ul style="list-style: none; padding: 0; color: #001F3F;">
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">3</span>About Dovaheights</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">4</span>Mission & Vision</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">5</span>Core Values</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">6</span>Our Locations</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">7</span>Executive Summary</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">8</span>Our Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">10</span>Underwater Inspection Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">13</span>Subsea Leak Detection Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">16</span>Manpower Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">17</span>NDT Inspection Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">19</span>Filtration Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">20</span>Procurement Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">21</span>Third Party Inspection Services</li>
        <li style="margin: 10px 0;"><span style="background-color: #DC143C; color: white; border-radius: 50%; padding: 5px 10px; margin-right: 10px;">22</span>Our Valued Clients</li>
      </ul>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">2</div>
  </div>

  <div class="page">
    <div style="position: absolute; top: 0; right: 0; width: 70%; height: 100%; background: linear-gradient(to left, transparent, white); z-index: -1;"></div>
    <!-- Placeholder for oil platform image -->
    <div style="text-align: center; margin: 20px 0;"><img src="placeholder-platform.jpg" alt="Oil Platform" style="max-width: 100%;"></div>
    <div class="content">
      <h2>ABOUT DOVAHEIGHTS</h2>
      <p>Trailblazer in Mini-ROV Services in Nigeria.</p>
      <hr>
      <p>100 % Locally Owned, Established in 2012.</p>
      <hr>
      <p>Delivering Advanced Support Solutions to the Oil & Gas Sector.</p>
      <hr>
      <p>Committed to World-Class Safety and Quality Services.</p>
      <hr>
      <p>A trusted partner in the oil and gas industry.</p>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">3</div>
  </div>

  <div class="page">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 60%; background-color: #001F3F; z-index: -1;"></div>
    <!-- Placeholder for FPSO image -->
    <div style="text-align: center; margin: 20px 0;"><img src="placeholder-fpso.jpg" alt="FPSO Vessel" style="max-width: 100%;"></div>
    <div class="content">
      <div style="background-color: #001F3F; color: white; padding: 20px; margin-bottom: 20px;">
        <h2>MISSION</h2>
        <p>To be acknowledged by our clients, our people, and our shareholders, as the leading strategic partner in underwater-to-surface inspection.</p>
      </div>
      <div style="background-color: #001F3F; color: white; padding: 20px;">
        <h2>VISION</h2>
        <p>It is our mission to offer our clients, industry, products and services that are fit for purpose and provide our partners a vehicle with which to support their clients.</p>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">4</div>
  </div>

  <div class="page">
    <!-- Placeholder for platform with worker image -->
    <div style="text-align: center; margin: 20px 0;"><img src="placeholder-core-values.jpg" alt="Core Values Background" style="max-width: 100%;"></div>
    <div class="content core-values">
      <div style="position: relative; width: 300px; height: 300px; margin: 0 auto;">
        <div class="core-circle">OUR CORE VALUES</div>
        <span class="value-label" style="top: 0; left: 50%; transform: translate(-50%, -100%);">Build Relationships</span>
        <span class="value-label" style="top: 20%; right: 0; transform: translate(100%, -50%);">Deliver Results</span>
        <span class="value-label" style="bottom: 20%; right: 0; transform: translate(100%, 50%);">Flexibility</span>
        <span class="value-label" style="bottom: 0; left: 50%; transform: translate(-50%, 100%);">Passion</span>
        <span class="value-label" style="bottom: 20%; left: 0; transform: translate(-100%, 50%);">Ownership</span>
        <span class="value-label" style="top: 20%; left: 0; transform: translate(-100%, -50%);">Integrity</span>
        <span class="value-label" style="top: 50%; left: 0; transform: translate(-100%, -50%);">Get the Job Done</span>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">5</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>OUR LOCATIONS</h2>
      <!-- Placeholder for world map image -->
      <div class="map-container"><img src="placeholder-map.jpg" alt="World Map with Locations" style="max-width: 100%;"></div>
      <div style="display: flex; justify-content: space-around; margin: 20px 0;">
        <div>
          <h3>LAGOS (HQ)</h3>
          <p>15 Jasper Ike Street,</p>
          <p>Oniru-Layout,</p>
          <p>Lekki,</p>
          <p>Lagos, Nigeria.</p>
        </div>
        <div>
          <h3>PORT HARCOURT</h3>
          <p>1c IPIC Estate,</p>
          <p>Akpajo,</p>
          <p>Port Harcourt,</p>
          <p>Rivers, Nigeria.</p>
        </div>
      </div>
      <h2>CERTIFICATIONS</h2>
      <div class="cert-logos">
        <!-- Placeholder for ISO and Bureau Veritas logos -->
        <img src="placeholder-iso.jpg" alt="ISO Certified" style="height: 100px;">
        <img src="placeholder-bv.jpg" alt="Bureau Veritas" style="height: 100px;">
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">6</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>EXECUTIVE SUMMARY</h2>
      <!-- Placeholder for worker image -->
      <div style="float: left; margin-right: 20px;"><img src="placeholder-worker.jpg" alt="Workers on Platform" style="max-width: 50%;"></div>
      <div style="margin-top: 20px;">
        <div class="summary-box" style="margin-bottom: 20px;">Dovaheights has a Proven track record in offshore asset inspection, including FPSOs, FSOs, and fixed platforms.</div>
        <div class="summary-box" style="margin-bottom: 20px;">Dovaheights operates modern fleets of Mission Specialist Series (MSS) ROVs.</div>
        <div class="summary-box" style="margin-bottom: 20px;">Dovaheights boasts an impeccable Safety Record with zero fatalities and injuries throughout our history.</div>
        <div class="summary-box">Dovaheights partners with International Oil Companies (IOCs), National Oil Companies (NOCs), and servicing companies.</div>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">7</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>OUR SERVICES</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div class="service-card">
          <h3>Underwater Inspection Services</h3>
          <img src="placeholder-underwater-inspection.jpg" alt="Underwater Inspection" style="max-width: 100%;">
          <ul>
            <li>Mini-ROV (Remotely Operated Vehicle) inspections.</li>
            <li>AUV (Autonomous Underwater Vehicles) Inspections.</li>
            <li>Underwater structural assessments.</li>
            <li>Pipeline and asset integrity monitoring.</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>Subsea Leak Detection Services</h3>
          <img src="placeholder-leak-detection.jpg" alt="Leak Detection" style="max-width: 100%;">
          <ul>
            <li>IRM (Inspection, Repair & Maintenance).</li>
            <li>Emergency detection in case of oil spill or hydrotest failure.</li>
            <li>Standby Acoustic Inspection During Pressure Testing And Pigging.</li>
            <li>Acoustic Leak Detection Support.</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>Advanced Filtration Services</h3>
          <img src="placeholder-filtration.jpg" alt="Filtration System" style="max-width: 100%;">
          <ul>
            <li>Seawater filtration for oilfield applications.</li>
            <li>Advanced water filtration systems for optimal performance.</li>
            <li>Reliable automatic screen filters for efficient operation.</li>
            <li>Self-cleaning filtration technology for reduced maintenance.</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>Procurement Services</h3>
          <img src="placeholder-procurement.jpg" alt="Procurement" style="max-width: 100%;">
          <ul>
            <li>Sourcing and supply of high-quality equipment.</li>
            <li>Logistics and inventory management.</li>
            <li>Vendor management and contract administration.</li>
          </ul>
        </div>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">8</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>OUR SERVICES (Continued)</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div class="service-card">
          <h3>Third Party Inspection Services</h3>
          <img src="placeholder-third-party.jpg" alt="Third Party Inspection" style="max-width: 100%;">
          <ul>
            <li>Independent Inspection Of Oil And Gas Assets.</li>
            <li>Compliance Verification And Certification Support.</li>
            <li>Risk Assessment And Failure Analysis.</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>NDT (Non-Destructive Testing) Services</h3>
          <img src="placeholder-ndt.jpg" alt="NDT Inspection" style="max-width: 100%;">
          <ul>
            <li>Ultrasonic Thickness Measurement (UTM).</li>
            <li>Eddy Current Testing.</li>
            <li>Magnetic Particle Inspection.</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>Manpower Services</h3>
          <img src="placeholder-manpower.jpg" alt="Manpower" style="max-width: 100%;">
          <ul>
            <li>Provision of skilled Technical Personnel for Offshore Projects.</li>
            <li>Contract Staffing and workforce Management.</li>
            <li>Manpower Supply for Maintenance and Inspection Activities.</li>
          </ul>
        </div>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">9</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Underwater Inspection Services</h2>
      <p>Dovaheights’ underwater inspection services utilize advanced ROVs (Remotely Operated Vehicles) and AUVs (Autonomous Underwater Vehicles) to conduct thorough and efficient inspections of offshore assets. With expertise in navigating complex underwater environments, our team provides high-quality data and insights to support informed decision-making and asset management.</p>
      <p>Using the latest internationally recognized ROV classes, we offer our clients maximum flexibility and versatility. Through the strategic allocation of our subsea resources, we provide cost-effective and timely responses to our clients' offshore operations.</p>
      <p>Services:</p>
      <ul>
        <li>UWILD (Underwater Inspection in Lieu of Dry Docking)</li>
        <li>Sea Chest Inspections</li>
        <li>Platform Inspections</li>
        <li>Hull and Mooring Surveys</li>
        <li>Riser Surveys</li>
        <li>Full Internal Ballast Tank Inspection</li>
        <li>Emergency Response</li>
      </ul>
      <!-- Placeholder for FPSO image -->
      <img src="placeholder-fpso2.jpg" alt="FPSO" style="max-width: 100%;">
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">10</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Our Mini-ROVs</h2>
      <div style="display: flex; justify-content: space-around;">
        <div>
          <h3>Mission Specialist DEFENDER</h3>
          <img src="placeholder-defender.jpg" alt="Defender ROV" style="max-width: 200px;">
        </div>
        <div>
          <h3>Mission Specialist PRO 5</h3>
          <img src="placeholder-pro5.jpg" alt="Pro 5 ROV" style="max-width: 200px;">
        </div>
      </div>
      <table style="margin: 20px auto; border-collapse: collapse;">
        <tr>
          <th>System Information</th>
          <th></th>
        </tr>
        <tr><td>Power Requirements</td><td>110/220VAC (1 to 2.6kW)</td></tr>
        <tr><td>Depth Rating</td><td>Up to 1,000m (3280ft)</td></tr>
        <tr><td>Weight in Air</td><td>17.2kg (38lbs)</td></tr>
        <tr><td>Total System Weight</td><td>32.5kg (71.6lbs)</td></tr>
        <tr><td>Communications Protocol</td><td>RS-485 and Ethernet</td></tr>
        <tr><td>Speed</td><td>3 Knots (forward)</td></tr>
        <tr><td>Bollard Pull</td><td>23.5kg (52lbs)</td></tr>
        <tr><td>Lift</td><td>11.3kg (25lbs)</td></tr>
        <tr><td>Cases</td><td>2 Watertight Rugged Hard Cases</td></tr>
        <tr><td>Owner’s Manual</td><td>Online Digital</td></tr>
        <tr><td>System Tool Kit</td><td>Included</td></tr>
      </table>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">11</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Subsea Robotics and AUV Capabilities</h2>
      <img src="placeholder-auv.jpg" alt="AUV Deployment" style="max-width: 100%;">
      <p>With the growing role of advanced subsea robotics in offshore inspection, maintenance, and survey operations. Our expertise extends to the successful deployment of ROVs (Remotely Operated Vehicles), and we maintain a forward-looking focus on AUVs (Autonomous Underwater Vehicles) as part of the evolving landscape of subsea inspection technologies.</p>
      <p>Subsea Robotics: Through our fleet of mini-ROVs and specialized tooling, we deliver precise, efficient, and cost-effective inspection and intervention services on fixed and floating offshore assets. Our robotics solutions are engineered to operate safely in challenging subsea environments, ensuring accuracy while minimizing downtime.</p>
      <p>AUV Technology: With the industry’s shift toward autonomous systems, Dovaheights is positioned to integrate AUV solutions for large-area seabed mapping, pipeline route surveys, and advanced digital data acquisition. These platforms complement ROV operations by providing extended endurance, greater coverage, and high-resolution geospatial data without the need for surface vessel tethering.</p>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">12</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Subsea Leak Detection Services</h2>
      <img src="placeholder-platform-leak.jpg" alt="Offshore Platform" style="max-width: 100%;">
      <p>Leaks in oil, natural gas, LPG, gasoline, and other product pipelines often lead to tragic consequences. Globally, the cost of remedying pipeline leaks continues to rise, placing a significant financial burden on pipeline owners.</p>
      <p>In partnership with CO.L.MAR, a renowned expert in inspection techniques, Dovaheights delivers cutting-edge solutions for subsea leak detection. Leveraging CO.L.MAR's advanced ALD technology and expertise, we provide prompt and reliable inspections, ensuring the integrity of subsea installations.</p>
      <p>Through extensive field experience, we can confidently confirm that acoustics is the most reliable technique for detecting leaks, making it the most efficient underwater leak detection system.</p>
      <p>The best leak detection technology helps operators save millions of dollars by preventing product loss and environmental damage, while also preserving the company's reputation.</p>
      <p>Our Mission: “To provide our clients with the world’s fastest, most efficient, and most accurate system for detecting and locating leaks in their pipeline network”</p>
      <p>The system has successfully detected leaks on:</p>
      <ul>
        <li>Pipelines</li>
        <li>Flanges</li>
        <li>Clamps</li>
        <li>Risers</li>
        <li>Pipe-in-pipe systems</li>
        <li>Wellheads, and more.</li>
      </ul>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">13</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Acoustic Leak Detection (ALD®)</h2>
      <p>The Acoustic Leak Detection (ALD®) system consists of:</p>
      <ul>
        <li>An underwater acoustic sensor</li>
        <li>A POD (underwater electronic unit)</li>
        <li>A transmission line</li>
        <li>A receiving unit</li>
        <li>A PC-based processor</li>
        <li>Display software</li>
      </ul>
      <p>Additionally, a specialized application of ALD® technology, known as "Stationary ALD®", has been developed to monitor subsea installations for leaks caused by any fluid (Gas, Hydraulic Oil, etc.).</p>
      <p>In other words, our subsea leak detection and underwater leak monitoring solutions effectively support all activities related to surveying, analysis, and investigation.</p>
      <!-- Placeholder for ALD system image -->
      <img src="placeholder-ald-system.jpg" alt="ALD System" style="max-width: 100%;">
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">14</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Subsea Leak Detection Deployment Techniques</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <div class="service-card">
          <h3>Towfish</h3>
          <img src="placeholder-towfish.jpg" alt="Towfish" style="max-width: 100%;">
          <p>The sensor is a towed body. The transmission line is the towing line.</p>
        </div>
        <div class="service-card">
          <h3>ROV Mounted</h3>
          <img src="placeholder-rov-mounted.jpg" alt="ROV Mounted" style="max-width: 100%;">
          <p>The Vehicle drives the sensor along the pipeline; data transmitted through the Mini-ROV umbilical.</p>
        </div>
        <div class="service-card">
          <h3>Diver Handheld</h3>
          <img src="placeholder-diver-handheld.jpg" alt="Diver Handheld" style="max-width: 100%;">
          <p>The sensor is hand held by the diver to check flanges or short pipe segment.</p>
        </div>
        <div class="service-card">
          <h3>Stand Alone Version</h3>
          <img src="placeholder-stand-alone.jpg" alt="Stand Alone" style="max-width: 100%;">
          <p>Suitable For Integration Into any AUV for Low-cost integrity inspection at all Sea Line Asset.</p>
        </div>
        <div class="service-card" style="grid-column: span 2;">
          <h3>Vertical Deployment</h3>
          <img src="placeholder-vertical.jpg" alt="Vertical Deployment" style="max-width: 100%;">
          <p>The sensor is lowered vertically from a vessel, using ballasts or weights to maintain position above or near the structure.</p>
        </div>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">15</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Manpower Services</h2>
      <p>Dovaheights provides reliable and competent manpower to support offshore and onshore oil & gas operations. Our workforce is certified to international standards, ensuring safe and efficient project delivery while meeting Nigerian Content requirements.</p>
      <p>We provide certified and experienced personnel across engineering and project support, as well as onshore and offshore technical operations. From subsea inspection, maintenance, and HSE management, our manpower ensures safe, efficient, and compliant project execution in the oil and gas sector.</p>
      <h3>Manpower Categories:</h3>
      <ul>
        <li>Offshore & Subsea: ROV Pilots, Subsea Engineers, Diving Support Crew</li>
        <li>Drilling & Well Services: Drilling Engineers, Toolpushers, Well Intervention Specialists</li>
        <li>Marine & Deck Crew: OIMs, DP Operators, Crane Operators, Riggers</li>
        <li>Engineering & Project Support: Project Engineers, QA/QC Inspectors, HSE Advisors</li>
        <li>Onshore Technical: Plant Operators, Maintenance Technicians, Welders, Logistics Staff</li>
      </ul>
      <h3>Onshore Technical & Support Personnel</h3>
      <ul>
        <li>Operators & Maintenance Personnel</li>
        <li>Fabrication & Welding Personnel</li>
        <li>Logistics & Supply Chain Personnel</li>
        <li>Administrative and Finance Support Staff</li>
      </ul>
      <h3>Our Strengths</h3>
      <ul>
        <li>Certified workforce</li>
        <li>Rapid mobilization and flexible deployment</li>
        <li>Strong focus on safety and operational excellence</li>
        <li>Committed to Local Content Development</li>
      </ul>
      <!-- Placeholder for workers image -->
      <img src="placeholder-workers.jpg" alt="Manpower Team" style="max-width: 100%;">
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">16</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>NDT Inspection Services</h2>
      <p>Dovaheights offer a range of specialized Non-Destructive Testing (NDT) solutions designed to optimize oilfield assets by detecting defects, ensuring process reliability, and maintaining compliance with international standards.</p>
      <p>Our extensive experience in inspection projects, combined with access to advanced NDT technologies, ensures that our clients receive the best solutions for any job, no matter how demanding the task may be.</p>
      <p>As a result, we provide accurate and valuable data, enabling you to make informed asset management decisions with confidence.</p>
      <div style="display: flex; gap: 20px;">
        <div>
          <h3>Conventional NDT Services</h3>
          <ul>
            <li>Ultrasonic Testing</li>
            <li>Eddy Current Testing</li>
            <li>Magnetic Particle Inspection (MPI)</li>
            <li>Visual Inspection</li>
            <li>Eddy Current Testing</li>
          </ul>
        </div>
        <div>
          <h3>Advanced NDT Services</h3>
          <ul>
            <li>Digital Radiography</li>
            <li>Alternating Current Field Measurement</li>
            <li>Magnetic Flux Leakage (MFL)</li>
            <li>Pulsed Eddy Current Test</li>
            <li>Phased Array Ultrasonic Testing</li>
            <li>Time of Flight Diffraction (TOFD)</li>
            <li>Remote Field Eddy Current Test (RFT)</li>
          </ul>
        </div>
      </div>
      <!-- Placeholder for NDT worker image -->
      <img src="placeholder-ndt-worker.jpg" alt="NDT Inspection" style="max-width: 100%;">
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">17</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Why Choose NDT from Dovaheights?</h2>
      <img src="placeholder-ndt-why.jpg" alt="NDT Worker" style="max-width: 100%;">
      <p>Our Non-Destructive Testing (NDT) services provide comprehensive or sample examinations of your assets using well-structured procedures and highly trained, certified NDT inspectors.</p>
      <p>We offer the most effective NDT methods to assess the integrity of your equipment and assets.</p>
      <p>Our comprehensive range of NDT techniques helps you:</p>
      <ul>
        <li>Monitor asset integrity using intrusive or non-intrusive methods.</li>
        <li>Detect defects and irregularities before they lead to severe damage or non-compliance.</li>
        <li>Save time and costs through fast, efficient testing at every stage of an asset’s lifespan—from manufacturing to on-site operation.</li>
        <li>Ensure the safe and reliable operation of your facility.</li>
      </ul>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">18</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Filtration System Solution</h2>
      <p>At Dovaheights, we understand the critical role of water in energy, and community development. In partnership with Aqua-Chem, Inc., a world leader in water purification technologies, we deliver reliable, efficient, and sustainable filtration systems to meet the diverse needs of clients.</p>
      <h3>Delivery</h3>
      <p>From project conception to long-term operation, we deliver end-to-end support. We begin with water quality analysis and system design, proceed with professional installation and commissioning, and continue with maintenance, spare parts, and operator training. This lifecycle approach ensures efficiency, reliability, and regulatory compliance.</p>
      <p>We provide complete water treatment systems that cover every stage of purification.</p>
      <h3>Our Solutions</h3>
      <div style="display: flex; gap: 20px;">
        <div>
          <h4>REVERSE OSMOSIS</h4>
          <img src="placeholder-ro-system.jpg" alt="Reverse Osmosis" style="max-width: 100%;">
          <p>Reverse Osmosis (i.e. RO) is a process whereby water is purified by passing a stream of incoming feedwater through a semipermeable membrane(s), counteracting natural osmosis that would occur without the force applied by the high pressure pump. Feedwater is passed through a particulate filter and then pumped through the RO vessels where the separation occurs into two streams – permeate, or the purified water, and the reject / concentrate discharge.</p>
          <p>Compact and efficient technology for producing clean water from seawater or brackish sources.</p>
          <ul>
            <li>SR Series</li>
            <li>SV Series</li>
            <li>Seawater Plate Distillers</li>
          </ul>
        </div>
        <div>
          <h4>VAPOR COMPRESSION</h4>
          <img src="placeholder-vc-system.jpg" alt="Vapor Compression" style="max-width: 100%;">
          <p>In terms of distillation, Vapor Compression, or VC, refers to Mechanical Vapor Compression (MVC) technology, which is utilized to impart energy (in the form of heat) to evaporated water (i.e. vapor) through centrifugal compression. Vapor Compression is much more efficient in distilling water compared to older technology, which requires massive amounts of thermal energy input (i.e. plant steam, electrical heaters) applied over a multi-pass evaporation/condensation process.</p>
          <p>An energy-efficient distillation technology that uses mechanical compression to recycle heat and produce high-purity water.</p>
          <ul>
            <li>ACS3 Series</li>
            <li>ACT3 Series</li>
            <li>ACX1 Series</li>
            <li>ACX2 Series</li>
            <li>ACX3 Series</li>
          </ul>
        </div>
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">19</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Procurement Services</h2>
      <p>Dovaheights Energy Limited is strategically positioned to provide technical procurement for a wide range of equipment. Our expertise is reinforced by a team of highly qualified technical personnel and a joint venture with reputable Original Equipment Manufacturers (OEMs) abroad.</p>
      <p>Our Specialties: We specialize in the procurement of:</p>
      <ul>
        <li>Casing and Tubing</li>
        <li>Line Pipes</li>
        <li>Drill Pipes</li>
        <li>All manufactured according to API Specification 5CT</li>
      </ul>
      <p>Additionally, we supply:</p>
      <ul>
        <li>Flanges</li>
        <li>Valves</li>
        <li>Tees</li>
        <li>Pumps</li>
        <li>Machinery and Spares</li>
      </ul>
      <p>Whether you need inventory or project-related items, we guarantee efficient service, premium products at competitive rates, and timely delivery to meet your requirements.</p>
      <p>Our world-class procurement services are backed by advanced IT systems, experienced supply chain and logistics personnel.</p>
      <!-- Placeholder for equipment images -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <img src="placeholder-valves.jpg" alt="Valves" style="max-width: 100%;">
        <img src="placeholder-flanges.jpg" alt="Flanges" style="max-width: 100%;">
        <img src="placeholder-pipes.jpg" alt="Pipes" style="max-width: 100%;">
        <img src="placeholder-pumps.jpg" alt="Pumps" style="max-width: 100%;">
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">20</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Third-party Inspection Services</h2>
      <p>Dovaheights offers industrial third-party inspection services on behalf of purchasing customers, ensuring quality, compliance, and reliability in every project.</p>
      <p>With years of expertise in engineering, design, and construction management, our deep understanding of technical standards and regulatory compliance allows us to deliver accurate and effective inspections.</p>
      <p>Our approach guarantees tangible results, minimizing risks and ensuring that all inspected components meet the highest industry standards.</p>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <div class="service-card">
          <h3>Compliance</h3>
          <p>We monitor Specification and Code Compliance, Cost/Schedule Compliance, Government & International regulatory compliance, Classification Society Rules and Regulations, Commercial Contract Compliance and more.</p>
        </div>
        <div class="service-card">
          <h3>Vendor Surveillance Inspections</h3>
          <p>Surveillance & inspection services provided at vendor locations include; material & equipment tests (witness), weld inspection, test procedure qualification, coating inspection, materials verification, pressure testing, functional testing, quality & quantity verification, load out and shipping verification.</p>
        </div>
        <div class="service-card">
          <h3>Factory Acceptance Testing (FAT)</h3>
          <p>Dovaheights inspectors attend & coordinate FAT activities to ensure the FAT is completed satisfactorily/on-schedule. equipment is manufactured to & operates in customer requirements. Inspectors verify accordance with detailed design specifications.</p>
        </div>
      </div>
      <!-- Placeholder for inspector image -->
      <img src="placeholder-inspector.jpg" alt="Inspector at Work" style="max-width: 100%;">
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">21</div>
  </div>

  <div class="page">
    <div class="content">
      <h2>Our Valued Clients</h2>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
        <img src="placeholder-totalenergies.jpg" alt="TotalEnergies">
        <img src="placeholder-chevron.jpg" alt="Chevron">
        <img src="placeholder-exxonmobil.jpg" alt="ExxonMobil">
        <img src="placeholder-shell.jpg" alt="Shell">
        <img src="placeholder-seplat.jpg" alt="Seplat">
        <img src="placeholder-les.jpg" alt="LES">
        <img src="placeholder-wav.jpg" alt="WAV">
        <img src="placeholder-vinson.jpg" alt="Vinson">
        <img src="placeholder-valaris.jpg" alt="Valaris">
        <img src="placeholder-spie.jpg" alt="SPIE">
        <img src="placeholder-pace.jpg" alt="PACE">
        <img src="placeholder-kaztec.jpg" alt="Kaztec">
        <img src="placeholder-technipfmc.jpg" alt="TechnipFMC">
        <img src="placeholder-russelsmith.jpg" alt="Russelsmith">
      </div>
      <h3>Our Technical Partner</h3>
      <img src="placeholder-roceanic.jpg" alt="ROCEANIC" style="max-width: 200px; display: block; margin: 0 auto;">
      <h3>Our OEMs</h3>
      <div style="display: flex; justify-content: center; gap: 20px;">
        <img src="placeholder-videoray.jpg" alt="VideoRay">
        <img src="placeholder-aqua-chem.jpg" alt="Aqua-Chem">
        <img src="placeholder-bardex.jpg" alt="Bardex">
        <img src="placeholder-colmar.jpg" alt="CO.L.MAR">
      </div>
      <div class="footer">www.dovaheights.com</div>
    </div>
    <div class="page-number">22</div>
  </div>

  <div class="page">
    <div style="position: absolute; top: 0; left: 0; width: 70%; height: 100%; background-color: #f0f0f0; z-index: -1;"></div>
    <!-- Placeholder for port image -->
    <div style="text-align: right;"><img src="placeholder-port.jpg" alt="Port Harcourt" style="max-width: 50%;"></div>
    <div class="content" style="text-align: left; margin-top: 200px;">
      <h1>Dovaheights Energy Limited</h1>
      <p><Phone className="inline" /> +234 (0) 8100688978, +234 (0) 8097890745</p>
      <p><Mail className="inline" /> sales@dovaheights.com</p>
      <p><MapPin className="inline" /> 15 Jasper Ike Street, Oniru-Layout, Lekki, Lagos, Nigeria.</p>
      <p><MapPin className="inline" /> 1c IPIC Estate, Akpajo, Port Harcourt, Rivers, Nigeria.</p>
    </div>
    <div class="footer">www.dovaheights.com</div>
    <div class="page-number">23</div>
  </div>
</body>
</html>
    `;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <img src="logo.png" alt="Dovaheights Logo" className="h-16 w-16 object-contain bg-white rounded-lg p-2" />
              <div>
                <h1 className="text-3xl font-bold">DOVAHEIGHTS ENERGY LIMITED</h1>
                <p className="text-blue-200">Optimizing Client Asset Uptime…</p>
                <p className="text-blue-200">Established 2012 • 13+ Years of Excellence</p>
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
              { id: 'overview', label: 'Overview', icon: Building },
              { id: 'services', label: 'Services', icon: Cog },
              { id: 'inspection', label: 'Inspection Services', icon: Award },
              { id: 'contact', label: 'Contact Info', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`py-4 px-2 border-b-2 flex items-center space-x-2 transition-colors \${ 
                  activeSection === id 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }\`}
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
                <div className="text-2xl font-bold text-gray-800">13+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Multiple</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Several</div>
                <div className="text-gray-600">Major Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">Zero</div>
                <div className="text-gray-600">Fatalities/Injuries</div>
              </div>
            </div>

            {/* Company Story */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About Dovaheights</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Delivering Advanced Support Solutions to the Oil & Gas Sector. Trailblazer in Mini-ROV Services in Nigeria. 100 % Locally Owned, Established in 2012.
                </p>
                <p className="text-gray-600 mb-4">
                  Committed to World-Class Safety and Quality Services. A trusted partner in the oil and gas industry.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To be acknowledged by our clients, our people, and our shareholders, as the leading strategic partner in underwater-to-surface inspection.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  It is our mission to offer our clients, industry, products and services that are fit for purpose and provide our partners a vehicle with which to support their clients.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Services</h2>
              <p className="text-gray-600 mb-8">
                Our comprehensive services cover the complete lifecycle of oil and gas operations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Underwater Inspection</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Mini-ROV Inspections</li>
                    <li>AUV Inspections</li>
                    <li>Structural Assessments</li>
                    <li>Pipeline Monitoring</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Subsea Leak Detection</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>IRM Services</li>
                    <li>Emergency Detection</li>
                    <li>Acoustic Support</li>
                    <li>Pressure Testing Aid</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Filtration Services</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Seawater Filtration</li>
                    <li>Reverse Osmosis</li>
                    <li>Vapor Compression</li>
                    <li>Self-Cleaning Tech</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Procurement</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Equipment Sourcing</li>
                    <li>Logistics Management</li>
                    <li>Vendor Administration</li>
                    <li>API Compliant Supplies</li>
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
                    <span>Manpower Supply</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>NDT Inspection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Third Party Inspection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Subsea Robotics</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>AUV Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Acoustic Leak Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>UWILD Inspections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span>Emergency Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'inspection' && (
          <div className="space-y-8">
            {/* Inspection Gallery */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Inspection Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Underwater Inspection' },
                  { title: 'Leak Detection' },
                  { title: 'NDT Testing' },
                  { title: 'Third Party Inspection' },
                  { title: 'ROV Deployment' },
                  { title: 'AUV Operations' },
                  { title: 'Filtration System' },
                  { title: 'Manpower Team' },
                  { title: 'Procurement Items' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspection Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Inspection Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Underwater Inspection</h4>
                  <p className="text-sm text-gray-600">UWILD, Sea Chest, Platform, Hull, Mooring, Riser, Ballast Tank Inspections, Emergency Response.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">NDT Services</h4>
                  <p className="text-sm text-gray-600">Ultrasonic, Eddy Current, Magnetic Particle, Visual, Digital Radiography, MFL, Pulsed Eddy, Phased Array, TOFD, RFT.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Third Party Inspection</h4>
                  <p className="text-sm text-gray-600">Vendor Surveillance, FAT Coordination, Compliance Monitoring.</p>
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
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+234 (0) 8100688978, +234 (0) 8097890745</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">sales@dovaheights.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Lagos (HQ)</div>
                      <div className="text-gray-600">
                        15 Jasper Ike Street,<br />
                        Oniru-Layout,<br />
                        Lekki, Lagos, Nigeria.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold">Port Harcourt</div>
                      <div className="text-gray-600">
                        1c IPIC Estate,<br />
                        Akpajo, Port Harcourt,<br />
                        Rivers, Nigeria.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Partners */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Certifications & Partners</h3>
                <div className="space-y-3 mb-6">
                  <p>ISO 9001:2015 Certified Company</p>
                  <p>Bureau Veritas Certified</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Our Commitment</h4>
                  <p className="text-blue-700 text-sm">
                    Committed to World-Class Safety and Quality Services. 100% Locally Owned.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Website</h4>
                  <div className="text-gray-600">
                    www.dovaheights.com
                  </div>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Key Operations</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Offshore asset inspection</li>
                    <li>Subsea robotics deployment</li>
                    <li>Leak detection and monitoring</li>
                    <li>NDT and third-party inspections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Support Services</h4>
                  <ul className="text-blue-600 space-y-1 text-sm">
                    <li>Manpower provision</li>
                    <li>Filtration solutions</li>
                    <li>Procurement and logistics</li>
                    <li>Emergency response</li>
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
            <h3 className="text-xl font-bold">DOVAHEIGHTS ENERGY LIMITED</h3>
            <p className="text-gray-300">Optimizing Client Asset Uptime…</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-300">
            <span>Established 2012</span>
            <span>13+ Years Experience</span>
            <span>www.dovaheights.com</span>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            © 2025 Dovaheights Energy Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;