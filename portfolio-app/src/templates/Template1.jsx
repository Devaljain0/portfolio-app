export default function Template1(props) {
  const {
    name,
    role,
    tagline,
    heroImage,
    bio,
    skills = [],
    services = [],
    projects = [],
    testimonials = [],
    blogTitle,
    blogSummary,
    contactMessage,
    email,
    phone,
    location,
    socials = {},
  } = props;

  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-yellow-400 text-black p-16 text-center">
        <img
          src={heroImage}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-black"
        />
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-2xl mt-2">{role}</h2>
        <p className="mt-4 max-w-2xl mx-auto">{tagline}</p>
      </section>

      {/* About */}
      <section className="p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-3">About Me</h3>
          <p>{bio}</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Location: {location}</li>
          </ul>
          {/* socials */}
        </div>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="bg-gray-100 py-10">
          <h3 className="text-center text-2xl font-semibold mb-6">Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((s) => (
              <span key={s} className="bg-black text-yellow-300 px-3 py-1 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Services */}
      {services.length > 0 && (
        <section className="py-10 max-w-5xl mx-auto">
          <h3 className="text-center text-2xl font-semibold mb-6">Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((srv) => (
              <article key={srv.title} className="border p-4 rounded-md shadow">
                <h4 className="font-semibold mb-2">{srv.title}</h4>
                <p className="text-sm text-gray-700">{srv.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Portfolio */}
      {projects.length > 0 && (
        <section className="bg-gray-100 py-10">
          <h3 className="text-center text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {projects.map((prj) => (
              <figure key={prj.title} className="border rounded overflow-hidden">
                <img src={prj.image} alt={prj.title} className="w-full h-48 object-cover" />
                <figcaption className="p-3">
                  <h4 className="font-semibold">{prj.title}</h4>
                  <p className="text-sm mt-2 text-gray-700">{prj.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-10 max-w-4xl mx-auto">
          <h3 className="text-center text-2xl font-semibold mb-6">Testimonials</h3>
          <div className="space-y-6">
            {testimonials.map((t) => (
              <blockquote key={t.quote} className="border-l-4 border-yellow-400 pl-4 italic">
                {t.quote}
                <footer className="mt-2 text-sm font-medium">— {t.client}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Blog */}
      {blogTitle && (
        <section className="bg-gray-100 py-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">{blogTitle}</h3>
          <p className="max-w-2xl mx-auto text-sm">{blogSummary}</p>
        </section>
      )}

      {/* Contact */}
      <section className="py-10 max-w-md mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="mb-4">{contactMessage}</p>
        <a href={`mailto:${email}`} className="bg-black text-yellow-300 px-6 py-2 rounded">
          Email Me
        </a>
      </section>

      <footer className="bg-black text-yellow-300 text-center py-4">
        © {new Date().getFullYear()} {name}
      </footer>
    </div>
  );
}