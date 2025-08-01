import { useState } from "react";

export default function Contact({ onNext, defaultValues }) {
  const [contactMessage, setContactMessage] = useState(defaultValues.contactMessage || "Let's work together!");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ contactMessage });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label>
        <span className="font-medium">Contact Page Message *</span>
        <textarea required className="w-full border px-3 py-2 rounded" rows={3} value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
      </label>
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}
