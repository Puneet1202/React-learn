import React from 'react';
import { Activity, Stethoscope, FileText, FlaskConical, Ambulance, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';

const Service = () => {
  const services = [
    { icon: <Stethoscope size={28}/>, title: "OPD Consultation", desc: "Seamless appointment booking with senior specialists across all departments." },
    { icon: <Activity size={28}/>, title: "Emergency Care", desc: "24/7 critical care support with dedicated trauma teams and rapid response." },
    { icon: <FlaskConical size={28}/>, title: "Laboratory & Diagnostics", desc: "High-tech path labs ensuring accurate reports within 24 hours." },
    { icon: <FileText size={28}/>, title: "Digital Health Records", desc: "Access your prescription history and reports online anytime, anywhere." },
    { icon: <Ambulance size={28}/>, title: "Ambulance Services", desc: "GPS-enabled fleet for quick patient transport during emergencies." },
    { icon: <UserCheck size={28}/>, title: "Post-Op Care", desc: "Dedicated follow-up routines and nursing support for recovering patients." },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- Hero Header --- */}
      <div className="bg-white py-20 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">World-Class Healthcare Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          From routine checkups to critical surgeries, MediSlip ensures a hassle-free experience 
          so you can focus on getting better.
        </p>
      </div>

      {/* --- Main Services Grid --- */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    <a href="#" className="inline-flex items-center text-blue-600 text-sm font-semibold mt-4 hover:underline">
                        Learn more <ArrowRight size={16} className="ml-1"/>
                    </a>
                </div>
            ))}
        </div>
      </div>

      {/* --- How It Works (Step by Step - Scroll Driver) --- */}
      <div className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Patient Journey</h2>
            <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold z-10">1</div>
                        <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold">Registration & Slip Generation</h3>
                        <p className="text-gray-400 mt-2">Arrive at the reception or use our app to generate your unique OPD slip instantly.</p>
                    </div>
                </div>
                 {/* Step 2 */}
                 <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold z-10">2</div>
                        <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold">Vitals & Triage</h3>
                        <p className="text-gray-400 mt-2">Basic checkup (BP, Weight, Temperature) by nursing staff before meeting the doctor.</p>
                    </div>
                </div>
                 {/* Step 3 */}
                 <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold z-10">3</div>
                        <div className="h-full w-0.5 bg-gray-700 mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold">Doctor Consultation</h3>
                        <p className="text-gray-400 mt-2">Detailed diagnosis. Prescriptions are digitally updated to your patient ID.</p>
                    </div>
                </div>
                 {/* Step 4 */}
                 <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center font-bold z-10">4</div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Pharmacy & Exit</h3>
                        <p className="text-gray-400 mt-2">Collect medicines from the in-house pharmacy using your digital slip.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Specialized Departments (Extra Content) --- */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Specialized Departments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology', 'Gynecology', 'Oncology', 'Psychiatry'].map((dept, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 text-center font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
                    {dept}
                </div>
            ))}
        </div>
      </div>

      {/* --- CTA Footer --- */}
      <div className="bg-blue-600 py-16 text-center px-6">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to prioritize your health?</h2>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition">
            Book Appointment Now
        </button>
      </div>

    </div>
  );
};

export default Service;