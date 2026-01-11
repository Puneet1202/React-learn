import React from 'react';
import { Heart, Shield, Users, Award, ChevronDown, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* --- 1. Hero Section (Intro) --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Redefining Healthcare Management.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            MediSlip isn't just a digital slip system; it's a commitment to efficiency, 
            transparency, and better patient care. We bridge the gap between doctors and data.
          </p>
        </div>
      </div>

      {/* --- 2. Stats Section (Trust Markers) --- */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-blue-600">50k+</h3>
                <p className="text-gray-500 text-sm mt-2">Patients Served</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-blue-600">120+</h3>
                <p className="text-gray-500 text-sm mt-2">Doctors Onboard</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-blue-600">99.9%</h3>
                <p className="text-gray-500 text-sm mt-2">Uptime</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-500 text-sm mt-2">Support</p>
            </div>
        </div>
      </div>

      {/* --- 3. Our Mission & Vision (Long Text) --- */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <Heart size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Care First, Paperwork Later.</h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                    Hospitals are meant for healing, not for standing in long queues waiting for a piece of paper. 
                    At MediSlip, we noticed that 30% of a doctor's time was wasted on manual entry and managing physical files.
                </p>
                <p className="text-gray-500 leading-relaxed">
                    Our mission is simple: <strong>Automate the mundane.</strong> We provide a seamless, digital interface 
                    that allows hospitals to generate slips, manage queues, and store records securely in the cloud.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Shield className="text-green-500" size={20}/> Secure Data
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">End-to-end encryption for all patient records and medical history.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Award className="text-orange-500" size={20}/> Certified Quality
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Compliant with national digital health standards.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Users className="text-purple-500" size={20}/> User Friendly
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Designed for staff with minimal technical training.</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- 4. Timeline / Journey (Scroll Driver) --- */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            
            {/* Year 2023 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <CheckCircle size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-blue-600 font-bold text-xs tracking-wide">2023</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">The Idea Born</h3>
                    <p className="text-gray-500 text-sm mt-2">Started as a small college project to help a local clinic manage queues.</p>
                </div>
            </div>

            {/* Year 2024 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white border-gray-300 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="text-xs font-bold">24</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-blue-600 font-bold text-xs tracking-wide">2024</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">First Deployment</h3>
                    <p className="text-gray-500 text-sm mt-2">Deployed in 5 major city hospitals. Reached 10,000 patient entries.</p>
                </div>
            </div>

             {/* Year 2025 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white border-gray-300 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="text-xs font-bold">25</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <span className="text-blue-600 font-bold text-xs tracking-wide">2025</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">AI Integration</h3>
                    <p className="text-gray-500 text-sm mt-2">Integrated Predictive Analysis for OPD rush hours and Inventory management.</p>
                </div>
            </div>
        </div>
      </div>

      {/* --- 5. Team Section --- */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet the Minds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900">Dr. Punit</h3>
                        <p className="text-blue-600 text-sm font-medium">Founder & CEO</p>
                        <p className="text-gray-500 text-sm mt-3">Ex-Surgeon with a passion for coding and streamlining hospital workflows.</p>
                    </div>
                </div>
                {/* Team Member 2 */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900">Aditi Sharma</h3>
                        <p className="text-blue-600 text-sm font-medium">Lead Developer</p>
                        <p className="text-gray-500 text-sm mt-3">Full stack wizard ensuring the system never crashes during peak OPD hours.</p>
                    </div>
                </div>
                {/* Team Member 3 */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
                    <div className="p-6">
                        <h3 className="font-bold text-lg text-gray-900">Rahul Verma</h3>
                        <p className="text-blue-600 text-sm font-medium">Operations Head</p>
                        <p className="text-gray-500 text-sm mt-3">Manages hospital relations and on-ground implementation.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- 6. FAQ Section (Extra Length) --- */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium text-gray-900">Is data backed up daily?</h4>
                    <ChevronDown size={20} className="text-gray-400"/>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium text-gray-900">Can I export reports to PDF?</h4>
                    <ChevronDown size={20} className="text-gray-400"/>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium text-gray-900">Is it compatible with mobile?</h4>
                    <ChevronDown size={20} className="text-gray-400"/>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium text-gray-900">How do I add new doctors?</h4>
                    <ChevronDown size={20} className="text-gray-400"/>
                </div>
            </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">MediSlip</h2>
                <p className="text-gray-400 text-sm mt-2">Simplifying Healthcare.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Contact</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default About;