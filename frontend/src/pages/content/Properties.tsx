import Navbar from "../../components/Navbar";
import { Plus, MapPin, Home, Users } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "Sunset Apartments",
      location: "Downtown, Nairobi",
      units: 24,
      occupied: 20,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
    {
      id: 2,
      name: "Palm View Villas",
      location: "Karen, Nairobi",
      units: 10,
      occupied: 9,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    },
    {
      id: 3,
      name: "Oak Residency",
      location: "Westlands, Nairobi",
      units: 18,
      occupied: 14,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/60">
          <h1 className="text-3xl font-bold tracking-tight text-white">Properties</h1>
          <button className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300">
            <Plus size={18} />
            Add Property
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-slate-900/60 rounded-2xl overflow-hidden shadow-lg border border-slate-800/70 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                >
                  <img
                    src={property.image}
                    alt={property.name}
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
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-400 text-lg mb-4">
                You haven’t added any properties yet.
              </p>
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all duration-300">
                <Plus size={18} />
                Add Your First Property
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
