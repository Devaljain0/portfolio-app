import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchPortfolios } from "../api";

export default function ProfilesList() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();

  useEffect(() => {
    fetchPortfolios().then((res) => {
      setProfiles(res.data);
      setLoading(false);
    });
  }, []);

  const search = params.get("search")?.toLowerCase() || "";
  const filtered = profiles.filter((p) => p.name.toLowerCase().includes(search));

  return (
    <section className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <p>Loading…</p>
      ) : (
        filtered.map((p) => (
          <article key={p.id} className="border-2 border-yellow-400 bg-yellow-100 p-4 rounded-lg">
            <img src={p.heroImage} alt={p.name} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-800">{p.role}</p>
            <p className="mt-2 line-clamp-3 text-gray-700">{p.bio}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.skills?.slice(0, 5).map((s) => (
                <span key={s} className="text-xs bg-black text-yellow-300 px-2 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
            <Link
              to={`/portfolio/${p.id}`}
              className="block mt-4 text-center bg-black text-yellow-300 py-2 rounded"
            >
              View Portfolio
            </Link>
          </article>
        ))
      )}
    </section>
  );
}
