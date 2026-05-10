// src/pages/CreateTrip.jsx

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Upload,
  Plus,
} from "lucide-react";

function CreateTrip() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative border border-white/20 rounded-3xl bg-white/5 backdrop-blur-xl overflow-hidden">

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

          <h1 className="text-2xl font-bold">
            Traveloop
          </h1>

          {/* Profile */}
          <div className="w-11 h-11 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Heading */}
        <div className="px-6 py-5 border-b border-white/10">

          <h2 className="text-3xl font-bold">
            Plan a New Trip
          </h2>

          <p className="text-gray-400 mt-2">
            Create your personalized travel experience
          </p>

        </div>

        {/* Form Section */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {/* Trip Name */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                Trip Name
              </label>

              <input
                type="text"
                placeholder="Summer Vacation"
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/20
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-cyan-400
                "
              />

            </div>

            {/* Destination */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                Select a Place
              </label>

              <div className="relative">

                <MapPin
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Bali, Indonesia"
                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/20
                    rounded-xl
                    pl-12
                    pr-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                  "
                />

              </div>

            </div>

            {/* Start Date */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                Start Date
              </label>

              <div className="relative">

                <CalendarDays
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="date"
                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/20
                    rounded-xl
                    pl-12
                    pr-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                  "
                />

              </div>

            </div>

            {/* End Date */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                End Date
              </label>

              <div className="relative">

                <CalendarDays
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="date"
                  className="
                    w-full
                    bg-black/40
                    border
                    border-white/20
                    rounded-xl
                    pl-12
                    pr-5
                    py-4
                    outline-none
                    focus:border-cyan-400
                  "
                />

              </div>

            </div>

            {/* Description */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                Trip Description
              </label>

              <textarea
                rows="5"
                placeholder="Describe your journey..."
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/20
                  rounded-xl
                  p-5
                  outline-none
                  resize-none
                  focus:border-cyan-400
                "
              />

            </div>

            {/* Upload */}
            <div>

              <label className="block mb-3 text-lg font-medium">
                Cover Photo
              </label>

              <label
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  border-2
                  border-dashed
                  border-white/20
                  rounded-2xl
                  h-48
                  cursor-pointer
                  hover:bg-white/5
                  transition
                "
              >

                <Upload size={40} className="text-cyan-400 mb-3" />

                <p className="text-gray-400">
                  Upload Cover Image
                </p>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            {/* Save Button */}
            <button
              className="
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                py-4
                rounded-2xl
                font-semibold
                text-lg
                hover:scale-[1.02]
                transition-all
                shadow-lg
                shadow-cyan-500/20
              "
            >
              Save Trip
            </button>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Suggestions Heading */}
            <div className="flex items-center gap-3 mb-8">

              <h2 className="text-2xl font-semibold">
                Suggested Activities
              </h2>

              <div className="h-[1px] bg-white/20 flex-1"></div>

            </div>

            {/* Suggestions Grid */}
            <div className="grid grid-cols-2 gap-5">

              {activities.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="
                    relative
                    rounded-3xl
                    overflow-hidden
                    border
                    border-white/10
                    group
                    cursor-pointer
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-60
                      w-full
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="absolute bottom-4 left-4">

                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default CreateTrip;


/* ACTIVITY DATA */

const activities = [
  {
    name: "Beach Relax",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    name: "Mountain Hiking",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },

  {
    name: "City Exploration",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },

  {
    name: "Food Tour",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];