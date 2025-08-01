import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as steps from "../steps";
import { createPortfolio } from "../api";

export default function FormWizard() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const templateId = state?.templateId || 1;

  const stepKeys = [
    "BasicDetails",
    "Hero",
    "About",
    "Services",
    "Portfolio",
    "Clients",
    "Contact",
    "Footer",
  ];

  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({ templateId });
  const StepComponent = steps[stepKeys[current]];

  const next = (data) => {
    setFormData({ ...formData, ...data });
    if (current + 1 < stepKeys.length) {
      setCurrent(current + 1);
    } else {
      createPortfolio({ ...formData, ...data })
        .then((res) => navigate(`/portfolio/${res.data.id}`))
        .catch(console.error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Top stepper navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {stepKeys.map((key, i) => (
          <div
            key={key}
            className={`px-4 py-1 rounded-full text-sm capitalize border ${
              i === current
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-600 border-gray-300"
            }`}
          >
            {key.replace(/([A-Z])/g, " $1").trim()}
          </div>
        ))}
      </div>

      <StepComponent onNext={next} defaultValues={formData} />
    </div>
  );
}
