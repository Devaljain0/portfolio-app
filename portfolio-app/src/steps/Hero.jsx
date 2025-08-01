import { useState } from "react";

export default function Hero({ onNext, defaultValues }) {
  const [data, setData] = useState({
    tagline: defaultValues.tagline || "",
    heroImage: defaultValues.heroImage || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label>
        <span className="font-medium">Tagline *</span>
        <textarea required className="w-full border px-3 py-2 rounded" value={data.tagline} onChange={(e) => setData({ ...data, tagline: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Profile Image URL *</span>
        <input required className="w-full border px-3 py-2 rounded" value={data.heroImage} onChange={(e) => setData({ ...data, heroImage: e.target.value })} />
      </label>
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}