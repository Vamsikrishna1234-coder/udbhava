import { useState } from "react";
import { DraftingCompass } from "lucide-react";

// 4 PROJECTS EACH CATEGORY
const projects = {
  building: [
    {
      id: 1,
      title: "MODERN SKYSCRAPER",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 2,
      title: "NEXUS TOWER",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 3,
      title: "URBAN LUXURY TOWER",
      category: "BUILDING",
      sub: "MODERN",
      img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=800&q=80",
    },
    {
      id: 4,
      title: "SUNSET TALLEST",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80",
    },
  ],

  commercial: [
    {
      id: 5,
      title: "3D RENDER HOUSE",
      category: "COMMERCIAL",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 6,
      title: "EUROPEAN COMPLEX",
      category: "COMMERCIAL",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 7,
      title: "BLUE HORIZON",
      category: "COMMERCIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
    },
    {
      id: 8,
      title: "GRAND BUSINESS CENTER",
      category: "COMMERCIAL",
      sub: "CORPORATE",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    },
  ],

  residential: [
    {
      id: 9,
      title: "APARTMENT BUILDING",
      category: "RESIDENTIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 10,
      title: "VILLA SERENA",
      category: "RESIDENTIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 11,
      title: "GARDEN RESIDENCE",
      category: "RESIDENTIAL",
      sub: "PLANNING",
      img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
    },
    {
      id: 12,
      title: "SUNSET HILLS VILLA",
      category: "RESIDENTIAL",
      sub: "LUXURY",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    },
  ],
};

const tabs = [
  { label: "BUILDING", value: "building" },
  { label: "COMMERCIAL", value: "commercial" },
  { label: "RESIDENTIAL", value: "residential" },
];

export default function LatestWorksSection() {
  const [activeTab, setActiveTab] = useState("building");

  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-end px-10 md:px-16 mb-12">
        <div>
          <DraftingCompass size={40} style={{ color: "#d85c26" }} />
          <p className="text-xl text-gray-500 mt-2 tracking-wide">Our Works</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-wide uppercase">
            Latest From Work
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-4 md:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`relative px-5 py-2 font-bold text-[11px] tracking-[0.2em] uppercase transition ${
                activeTab === tab.value
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              style={{
                color: activeTab === tab.value ? "#d85c26" : "",
              }}
            >
              {tab.label}

              {/* Underline */}
              <span
                className={`absolute left-4 right-4 bottom-0 h-[2px] transition-transform duration-300 ${
                  activeTab === tab.value ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ backgroundColor: "#d85c26" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Grid – 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 md:px-16">
        {projects[activeTab].map((item) => (
          <div
            key={item.id}
            className="relative group h-[650px] overflow-hidden rounded-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={item.title}
            />

            {/* Black Falling Overlay */}
            <div
              className="
                absolute inset-0 bg-black/75 
                translate-y-[-100%] 
                group-hover:translate-y-0 
                transition-all duration-700 ease-out
              "
            ></div>

            {/* CENTER ROUND BUTTON */}
            <div
              className="
                absolute inset-0 flex items-center justify-center z-30
                opacity-0 scale-75 
                group-hover:opacity-100 group-hover:scale-100
                transition-all duration-500
              "
            >
              <button
                className="
                  w-32 h-32 rounded-full 
                  text-white 
                  text-[12px] font-extrabold uppercase tracking-[0.3em]
                  flex items-center justify-center
                  transition
                "
                style={{
                  backgroundColor: "#d85c26",
                }}
              >
                View Project
              </button>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-[40px] right-0 p-5 z-20">
              <div
                className="w-[28px] h-[2px] mb-2"
                style={{ backgroundColor: "#d85c26" }}
              />

              <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                {item.title}
              </h3>

              <p className="text-white/70 text-[11px] tracking-widest uppercase">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}