export default function Template2(props) {
  const { name, role, heroImage, skills = [], projects = [] } = props;
  return (
    <div className="font-sans">
      <section className="grid md:grid-cols-2 min-h-screen">
        <div className="bg-yellow-400 flex flex-col justify-center items-center p-10">
          <img src={heroImage} alt={name} className="w-40 h-40 rounded-full border-4 border-black" />
          <h1 className="mt-6 text-4xl font-bold text-black">{name}</h1>
          <h2 className="text-2xl mt-2 text-black">{role}</h2>
        </div>
        <div className="p-10 overflow-y-auto">
          {/* Skills timeline */}
          <h3 className="text-xl font-semibold mb-4">Skills Timeline</h3>
          <ul className="space-y-2 border-l-2 border-yellow-400 pl-6">
            {skills.map((s, i) => (
              <li key={s} className="relative">
                <span className="absolute -left-4 top-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                {s}
              </li>
            ))}
          </ul>

          {/* Masonry portfolio */}
          <h3 className="text-xl font-semibold my-6">Projects</h3>
          <div className="columns-2 gap-4 [column-fill:_balance]">
            {projects.map((p) => (
              <figure key={p.title} className="break-inside-avoid mb-4">
                <img src={p.image} alt={p.title} className="w-full rounded" />
                <figcaption className="mt-1 text-sm text-gray-700">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}