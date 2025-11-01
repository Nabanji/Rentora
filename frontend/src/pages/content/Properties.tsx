import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Plus, MapPin, Home, Users } from "lucide-react";
import AddPropertyModal from "../../components/AddPropertyModal";

const Properties: React.FC = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Sunset Apartments",
      location: "Downtown, Nairobi",
      units: 24,
      occupied: 20,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProperty = (newProperty: any) => {
    setProperties([...properties, newProperty]);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      <div className="flex-1 flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/60">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Properties
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300"
          >
            <Plus size={18} />
            Add Property
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-slate-900/60 rounded-2xl overflow-hidden shadow-lg border border-slate-800/70 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {property.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <MapPin size={14} className="mr-2 text-indigo-400" />
                    {property.location}
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-1 text-cyan-400">
                      <Home size={14} /> {property.units} Units
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Users size={14} /> {property.occupied} Occupied
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddPropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProperty}
      />
    </div>
  );
};

export default Properties;
