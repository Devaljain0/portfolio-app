import { useNavigate } from "react-router-dom";
import { useState } from "react";

const templates = [
  {
    id: 1,
    name: "Modern Yellow",
    description: "Modern and clean design with yellow hero section.",
    features: ["Yellow Hero Section", "Grid Portfolio", "Testimonials Carousel", "Contact Form"],
    image: "https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?s=612x612&w=0&k=20&c=wT5ATN3AAd7FO3vTHkZE32e7TRdzRexkHABVp7N5C0Y="
  },
  {
    id: 2,
    name: "Split Timeline",
    description: "Split-screen layout with timeline skills and masonry portfolio.",
    features: ["Split Hero Layout", "Timeline Skills", "Masonry Portfolio", "Blog Section"],
    image: "https://media.gettyimages.com/id/1297604574/photo/compiling-a-thorough-plan-towards-her-patients-healing.jpg?s=170667a&w=gi&k=20&c=kN72RhODlgIDMiB5g-ZByW4U6kzqkWwD64ksRDJ2dEk="
  },
];

export default function TemplateSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (!selected) return;
    navigate("/create", { state: { templateId: selected } });
  };

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Choose your <span className="text-orange-500">template</span>
      </h1>
      <p className="text-sm text-gray-700 mb-6">Select a professional template that best represents your style and customize it to your need.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((t) => (
          <article
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all bg-white shadow-md hover:shadow-xl ${
              selected === t.id ? "border-yellow-500 scale-105" : "border-gray-300"
            }`}
          >
            <img src={t.image} alt={t.name} className="rounded mb-3 w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mb-1">Template {t.id}</h2>
            <p className="mb-3 text-sm text-gray-700">{t.description}</p>
            <h4 className="text-orange-500 font-semibold mb-1">• Key Features</h4>
            <ul className="text-sm text-gray-800 list-disc list-inside space-y-1 mb-3">
              {t.features.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
            <button onClick={() => navigate(`/preview/${t.id}`)} className="bg-orange-500 text-white px-4 py-1 rounded">
              Preview
            </button>
          </article>
        ))}
      </div>

      <div className="text-right mt-6">
        <button
          disabled={!selected}
          onClick={handleNext}
          className="bg-black text-yellow-300 px-6 py-2 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </section>
  );
}
