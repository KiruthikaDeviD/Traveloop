// src/pages/MyTrips.jsx

import { motion } from "framer-motion";
import {
  MapPinned,
  CalendarDays,
  Pencil,
  Trash2,
  Eye,
  Plus,
} from "lucide-react";

function MyTrips() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative border border-white/20 rounded-3xl bg-white/5 backdrop-blur-xl overflow-hidden">

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

          <h1 className="text-2xl font-bold tracking-wide">
            Traveloop
          </h1>

          <div className="w-11 h-11 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Heading */}
        <div className="px-6 pt-8 flex items-center justify-between flex-wrap gap-4">

          <div>
            <h1 className="text-4xl font-bold mb-2">
              My Trips
            </h1>

            <p className="text-gray-400">
              Manage your adventures and upcoming journeys
            </p>
          </div>

          {/* Create Trip Button */}
          <button
            className="
              flex
              items-center
              gap-2
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            <Plus size={20} />
            Create Trip
          </button>

        </div>

        {/* Trip Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {trips.map((trip, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                shadow-xl
                backdrop-blur-xl
              "
            >

              {/* Trip Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={trip.image}
                  alt={trip.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-110
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-4 left-4">

                  <h2 className="text-2xl font-bold">
                    {trip.name}
                  </h2>

                </div>

              </div>

              {/* Card Content */}
              <div className="p-5">

                {/* Dates */}
                <div className="flex items-center gap-3 text-gray-300 mb-4">

                  <CalendarDays size={18} />

                  <p className="text-sm">
                    {trip.date}
                  </p>

                </div>

                {/* Destination Count */}
                <div className="flex items-center gap-3 text-gray-300 mb-6">

                  <MapPinned size={18} />

                  <p className="text-sm">
                    {trip.destinations} Destinations
                  </p>

                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">

                  {/* View */}
                  <button
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-cyan-500/20
                      hover:bg-cyan-500/30
                      py-2.5
                      rounded-xl
                      transition
                    "
                  >
                    <Eye size={18} />
                    View
                  </button>

                  {/* Edit */}
                  <button
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-yellow-500/20
                      hover:bg-yellow-500/30
                      py-2.5
                      rounded-xl
                      transition
                    "
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-red-500/20
                      hover:bg-red-500/30
                      py-2.5
                      rounded-xl
                      transition
                    "
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </div>
  );
}

export default MyTrips;


/* TRIP DATA */

const trips = [
  {
    name: "Maldives Escape",
    date: "12 Jun - 18 Jun",
    destinations: 4,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  {
    name: "Japan Adventure",
    date: "02 Aug - 15 Aug",
    destinations: 7,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  },

  {
    name: "Swiss Mountains",
    date: "22 Dec - 30 Dec",
    destinations: 5,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },

  {
    name: "Dubai Luxury",
    date: "10 Sep - 16 Sep",
    destinations: 3,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },

  {
    name: "Bali Retreat",
    date: "05 Mar - 12 Mar",
    destinations: 6,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },

  {
    name: "Paris Romance",
    date: "01 Feb - 07 Feb",
    destinations: 4,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];