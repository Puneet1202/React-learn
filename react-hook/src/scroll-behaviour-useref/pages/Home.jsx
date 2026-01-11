import React from 'react';
import { Plus, Clock, FileText, Search, User, Calendar, MoreHorizontal, ChevronRight} from 'lucide-react';

const Home = () => {
  // Dummy data for generating a long list to enable scrolling
  const patients = [
    { name: "Amit Verma", id: "#OPD-8821", dept: "General", time: "09:00 AM", status: "Completed", type: "green" },
    { name: "Sneha Gupta", id: "#OPD-8822", dept: "Dental", time: "09:15 AM", status: "Waiting", type: "yellow" },
    { name: "Rajesh Kumar", id: "#EMG-2993", dept: "Emergency", time: "09:30 AM", status: "Admitted", type: "red" },
    { name: "Priya Sharma", id: "#OPD-8823", dept: "Cardio", time: "09:45 AM", status: "Completed", type: "green" },
    { name: "Vikram Singh", id: "#OPD-8824", dept: "Ortho", time: "10:00 AM", status: "In Progress", type: "blue" },
    { name: "Anjali Mehta", id: "#OPD-8825", dept: "General", time: "10:15 AM", status: "Waiting", type: "yellow" },
    { name: "Mohit Bansal", id: "#OPD-8826", dept: "ENT", time: "10:30 AM", status: "Waiting", type: "yellow" },
    { name: "Kavita Gill", id: "#OPD-8827", dept: "Gyno", time: "10:45 AM", status: "Completed", type: "green" },
    { name: "Arjun Das", id: "#OPD-8828", dept: "General", time: "11:00 AM", status: "Cancelled", type: "gray" },
    { name: "Simran Kaur", id: "#OPD-8829", dept: "Dental", time: "11:15 AM", status: "Waiting", type: "yellow" },
    { name: "Rohan Joshi", id: "#OPD-8830", dept: "Derma", time: "11:30 AM", status: "Completed", type: "green" },
    { name: "Neha Tupe", id: "#OPD-8831", dept: "General", time: "11:45 AM", status: "In Progress", type: "blue" },
    { name: "Suresh Raina", id: "#OPD-8832", dept: "Ortho", time: "12:00 PM", status: "Waiting", type: "yellow" },
    { name: "Farhan Ali", id: "#OPD-8833", dept: "Cardio", time: "12:15 PM", status: "Scheduled", type: "blue" },
    { name: "Zoya Khan", id: "#OPD-8834", dept: "General", time: "12:30 PM", status: "Waiting", type: "yellow" },
  ];

  const doctors = [
    { name: "Dr. Punit", spec: "Senior Surgeon", patients: 14 },
    { name: "Dr. Sharma", spec: "Cardiologist", patients: 82 },
    { name: "Dr. Riya", spec: "Pediatrician", patients: 15 },
    { name: "Dr. Alex", spec: "Neurologist", patients: 5 },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Friday, 10 Jan 2026</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-md transition-all font-medium text-sm">
          <Plus size={18} /> New Entry
        </button>
      </div>

      {/* --- Search --- */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search patients, doctors or slips..." 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>
      </div>

      {/* --- Stats Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Visits</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">1,284</h3>
            </div>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><User size={20} /></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start">
             <div>
              <p className="text-gray-500 text-sm font-medium">Revenue</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">₹45.2k</h3>
            </div>
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><FileText size={20} /></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
           <div className="flex justify-between items-start">
             <div>
              <p className="text-gray-500 text-sm font-medium">Appointments</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">82</h3>
            </div>
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Calendar size={20} /></div>
          </div>
        </div>
      </div>

      {/* --- Available Doctors Section (Adds Height) --- */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Doctors On Duty</h2>
            <button className="text-blue-600 text-sm font-medium hover:underline">See All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {doctors.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                            {doc.name[4]}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{doc.name}</h4>
                            <p className="text-xs text-gray-500">{doc.spec}</p>
                        </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-400 bg-gray-50 p-2 rounded-lg text-center">
                        {doc.patients} Patients Remaining
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* --- Long Patient Table (Main Scrollable Content) --- */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Patient List</h2>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Slip ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Dept</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {patients.map((patient, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.dept}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${patient.type === 'green' ? 'bg-green-100 text-green-800' : 
                          patient.type === 'yellow' ? 'bg-yellow-100 text-yellow-800' : 
                          patient.type === 'red' ? 'bg-red-100 text-red-800' :
                          patient.type === 'blue' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100">
             <span className="text-sm font-medium text-blue-600 flex items-center gap-1">Load More Patients <ChevronRight size={16}/></span>
          </div>
        </div>
      </div>

      {/* --- Footer (Bottom Scroll Check) --- */}
      <footer className="mt-12 border-t border-gray-200 pt-8 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2026 MediSlip System. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-gray-600">Privacy</a>
                <a href="#" className="hover:text-gray-600">Terms</a>
                <a href="#" className="hover:text-gray-600">Support</a>
            </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;