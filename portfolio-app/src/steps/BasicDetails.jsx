import { useState } from "react";

export default function BasicDetails({ onNext, defaultValues }) {
  const [data, setData] = useState({
    name: defaultValues.name || "",
    role: defaultValues.role || "",
    location: defaultValues.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label>
        <span className="font-medium">Name *</span>
        <input required className="w-full border px-3 py-2 rounded" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Role / Title *</span>
        <input required className="w-full border px-3 py-2 rounded" value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Location</span>
        <input className="w-full border px-3 py-2 rounded" value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} />
      </label>
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}
