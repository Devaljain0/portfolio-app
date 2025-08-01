import { useState } from "react";

export default function About({ onNext, defaultValues }) {
  const [data, setData] = useState({
    bio: defaultValues.bio || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    socials: defaultValues.socials || "", // comma‑separated "platform:url"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert socials string → object {platform:url}
    const socialsObj = data.socials.split(",").reduce((acc, pair) => {
      const [k, v] = pair.split(":");
      if (k && v) acc[k.trim()] = v.trim();
      return acc;
    }, {});
    onNext({ ...data, socials: socialsObj });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label>
        <span className="font-medium">Short Bio *</span>
        <textarea required className="w-full border px-3 py-2 rounded" rows={4} value={data.bio} onChange={(e) => setData({ ...data, bio: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Email *</span>
        <input required type="email" className="w-full border px-3 py-2 rounded" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Phone</span>
        <input className="w-full border px-3 py-2 rounded" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
      </label>
      <label>
        <span className="font-medium">Socials (comma separated platform:url)</span>
        <input className="w-full border px-3 py-2 rounded" value={data.socials} onChange={(e) => setData({ ...data, socials: e.target.value })} />
      </label>
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}