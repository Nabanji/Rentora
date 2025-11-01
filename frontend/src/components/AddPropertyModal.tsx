import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (property: any) => void;
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    units: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now(), occupied: 0 });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900/90 border border-slate-700/50 rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 text-gray-100"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Property</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1 text-gray-300">
                  Property Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 text-gray-300">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm mb-1 text-gray-300">
                    Total Units
                  </label>
                  <input
                    type="number"
                    name="units"
                    value={form.units}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm mb-1 text-gray-300">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-2 text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-md transition-all duration-300"
                >
                  Add Property
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddPropertyModal;
