import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowUpDown,
  Plus,
} from "lucide-react";

import { trips } from "../data/tripData";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative border border-white/20 rounded-3xl bg-white/5 backdrop-blur-xl overflow-hidden">

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-2xl font-bold">
            Traveloop
          </h1>

          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
            </div>
        </div>

        {/* Banner */}
        <div className="p-6">
          <div className="relative rounded-3xl overflow-hidden h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="banner"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to Traveloop
              </h1>

              <p className="text-gray-300 text-lg">
                Plan your next unforgettable journey </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="px-6 flex flex-col lg:flex-row gap-4 items-center">

          <div className="flex items-center flex-1 bg-black/40 border border-white/20 rounded-xl px-4 py-3">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search destinations..."
              className="bg-transparent outline-none px-3 w-full"
            />
          </div>

          <div className="flex gap-3"><button className="border border-white/20 px-4 py-3 rounded-xl hover:bg-white/10 transition flex items-center gap-2">
              <Filter size={18} />
              Filter
            </button>

            <button className="border border-white/20 px-4 py-3 rounded-xl hover:bg-white/10 transition flex items-center gap-2">
              <ArrowUpDown size={18} />
              Sort
            </button>
          </div>
        </div>
        {/* Top Regional Selections */}

<div className="px-6 mt-10">

  {/* Heading */}
  <div className="flex items-center gap-3 mb-6">

    <h2 className="text-2xl font-semibold">
      Top Regional Selections
    </h2>

    <div className="h-[1px] bg-white/20 flex-1"></div>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

    {regions.map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="
          relative
          h-44
          rounded-2xl
          overflow-hidden
          border
          border-white/10
          cursor-pointer
          group
        "
      >

        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition
            duration-700
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute bottom-4 left-4">

          <h3 className="font-semibold text-lg">
            {item.name}
          </h3>

        </div>

      </motion.div>

    ))}

  </div>

</div>
        {/* Previous Trips */}
        <div className="px-6 py-10">

          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-semibold">
              Previous Trips
            </h2>

            <div className="h-[1px] bg-white/20 flex-1"></div>
          </div>{/* Empty State */}
          {trips.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                border
                border-dashed
                border-white/20
                rounded-3xl
                p-16
                text-center
                bg-white/5
              "
            >
              <Plus size={50} className="mx-auto text-cyan-400 mb-5" />

              <h3 className="text-2xl font-semibold mb-3">
                No Trips Yet
              </h3>

              <p className="text-gray-400 mb-6">
                Start planning your first adventure.
              </p>
<button
  onClick={() => navigate("/createtrip")}
  className="
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    px-6
    py-3
    rounded-xl
    hover:scale-105
    transition-all
    shadow-lg
    shadow-cyan-500/20
  "
>
  Plan a Trip
</button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trips.map((trip, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                >
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {trip.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {trip.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const regions = [
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    name: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];
export default Dashboard;
