import { useState } from "react";

const emptyTestimonial = { client: "", quote: "" };

export default function Clients({ onNext, defaultValues }) {
  const [testimonials, setTestimonials] = useState(defaultValues.testimonials || [emptyTestimonial, emptyTestimonial, emptyTestimonial]);
  const [blogTitle, setBlogTitle] = useState(defaultValues.blogTitle || "");
  const [blogSummary, setBlogSummary] = useState(defaultValues.blogSummary || "");

  const updateTest = (idx, field, value) => {
    const copy = [...testimonials];
    copy[idx] = { ...copy[idx], [field]: value };
    setTestimonials(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ testimonials, blogTitle, blogSummary });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <h3 className="text-xl font-semibold">Testimonials (1–3)</h3>
      {testimonials.map((t, idx) => (
        <div key={idx} className="grid gap-2 border p-4 rounded">
          <h4 className="font-semibold">Quote {idx + 1}</h4>
          <input placeholder="Client Name" className="border px-3 py-2 rounded" value={t.client} onChange={(e) => updateTest(idx, "client", e.target.value)} />
          <textarea placeholder="Quote" className="border px-3 py-2 rounded" rows={2} value={t.quote} onChange={(e) => updateTest(idx, "quote", e.target.value)} />
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-6">Blog Section (Optional)</h3>
      <input placeholder="Blog Title" className="border px-3 py-2 rounded" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
      <textarea placeholder="Blog Summary" className="border px-3 py-2 rounded" rows={3} value={blogSummary} onChange={(e) => setBlogSummary(e.target.value)} />

      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}