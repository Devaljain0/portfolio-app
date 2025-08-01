import { useState } from "react";

const emptyService = { title: "", description: "" };

export default function Services({ onNext, defaultValues }) {
  const [services, setServices] = useState(defaultValues.services || [emptyService, emptyService, emptyService]);

  const updateService = (idx, field, value) => {
    const copy = [...services];
    copy[idx] = { ...copy[idx], [field]: value };
    setServices(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ services });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      {services.map((srv, idx) => (
        <div key={idx} className="grid gap-2 border p-4 rounded">
          <h4 className="font-semibold">Service {idx + 1}</h4>
          <input required placeholder="Title" className="border px-3 py-2 rounded" value={srv.title} onChange={(e) => updateService(idx, "title", e.target.value)} />
          <textarea required placeholder="Description" className="border px-3 py-2 rounded" rows={3} value={srv.description} onChange={(e) => updateService(idx, "description", e.target.value)} />
        </div>
      ))}
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}
