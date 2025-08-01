import { useState } from "react";

const emptyProject = { title: "", image: "", description: "" };

export default function Portfolio({ onNext, defaultValues }) {
  const [projects, setProjects] = useState(defaultValues.projects || [emptyProject, emptyProject, emptyProject]);

  const updateProject = (idx, field, value) => {
    const copy = [...projects];
    copy[idx] = { ...copy[idx], [field]: value };
    setProjects(copy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ projects });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      {projects.map((prj, idx) => (
        <div key={idx} className="grid gap-2 border p-4 rounded">
          <h4 className="font-semibold">Project {idx + 1}</h4>
          <input required placeholder="Title" className="border px-3 py-2 rounded" value={prj.title} onChange={(e) => updateProject(idx, "title", e.target.value)} />
          <input required placeholder="Image URL" className="border px-3 py-2 rounded" value={prj.image} onChange={(e) => updateProject(idx, "image", e.target.value)} />
          <textarea required placeholder="Description" className="border px-3 py-2 rounded" rows={3} value={prj.description} onChange={(e) => updateProject(idx, "description", e.target.value)} />
        </div>
      ))}
      <button type="submit" className="bg-black text-yellow-300 px-6 py-2 rounded w-max">Save & Continue</button>
    </form>
  );
}