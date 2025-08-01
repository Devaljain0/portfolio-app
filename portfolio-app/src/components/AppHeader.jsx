import { useNavigate } from "react-router-dom";
import { useState } from "react";

const styles = {
  btn: "bg-black hover:bg-gray-800 text-white px-4 py-2 rounded",
  input: "px-3 py-1 border rounded",
  select: "px-3 py-1 border rounded",
};

export default function AppHeader() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.append("search", q);
    if (location) params.append("location", location);
    if (skill) params.append("skill", skill);
    navigate(`/profiles?${params.toString()}`);
  };

  return (
    <header className="bg-yellow-400 text-black px-6 py-6 shadow-md">
      <div className="flex flex-wrap justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold">Meet Our Professionals</h1>
          <p className="text-sm max-w-md">Meet the talent that will shape the future of tech</p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-3">
          <input
            placeholder="Search profiles"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className={styles.input}
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.select}
          >
            <option value="">Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengaluru">Bengaluru</option>
          </select>
          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className={styles.select}
          >
            <option value="">Skills</option>
            <option value="Backend">Backend</option>
            <option value="Data Science">Data Science</option>
            <option value="UX Design">UX Design</option>
          </select>
          <button type="submit" className="bg-black text-white px-3 py-1 rounded">
            Search
          </button>
          <button onClick={() => navigate("/profiles")} className={styles.btn}>
            List Profiles
          </button>
        </form>
      </div>
    </header>
  );
}