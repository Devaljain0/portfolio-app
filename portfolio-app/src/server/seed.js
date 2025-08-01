import axios from "axios";

const dummyProfiles = [
  {
    templateId: 1,
    name: 'Alice Johnson',
    role: 'Frontend Developer',
    tagline: 'Designing delightful user experiences in React',
    heroImage: 'https://img.freepik.com/free-photo/teenager-boy-portrait_23-2148105678.jpg',
    location: 'Mumbai, India',
    bio: 'I craft modern, responsive interfaces with an eye for detail and performance.',
    email: 'alice@example.com',
    phone: '+91 90000 00001',
    skills: ['React', 'TailwindCSS', 'TypeScript', 'Figma'],
    services: [
      { title: 'UI Prototyping', description: 'Wireframes & interactive mock‑ups' },
      { title: 'React Development', description: 'Component‑driven SPAs' },
      { title: 'Design Systems', description: 'Reusable patterns & docs' },
    ],
    projects: [
      { title: 'Travel Planner', image: 'https://images.squarespace-cdn.com/content/v1/643d462156eda3673214a28c/1681737290266-1YMPE4UA00M4ZAON2U98/2022-06-01_08-10-54.png', description: 'Progressive web app for trip planning.' },
      { title: 'E‑commerce UI Kit', image: 'https://thegoodalliance.org/wp-content/uploads/2022/07/Canva-Photos.jpg', description: 'Figma kit + React components.' },
      { title: 'PortfolioGen', image: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXeaxnsj_UfHvXiNygYMzPI9eML-1liboozAkl9mJKxyJfF2Xd9muzVfCIp83CBKho1sZaP-n9lwsv4jv8wH0QNxTr2IhxC4X35acGc6BznJsGyWwHGiWe6akRgdzTOv6uK9pQm6J2E2ZL9xvyDtk87RjJA?key=1lnbn8-Az2qyojsnZFp1DQ', description: 'This very generator 😉' },
    ],
    testimonials: [
      { client: 'Sanjay P.', quote: 'Alice delivered pixel‑perfect code ahead of schedule!' },
    ],
    blogTitle: 'My Frontend Journey',
    blogSummary: 'Lessons learned building design systems at scale.',
    contactMessage: "Let's build something awesome together!",
  },
  {
    templateId: 1,
    name: 'Rahul Mehta',
    role: 'Full‑Stack Engineer',
    tagline: 'Bringing ideas to life from DB to DOM',
    heroImage: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
    location: 'Bengaluru, India',
    bio: 'Node, Postgres, and React are my daily bread. Passionate about performance and DX.',
    email: 'rahul@example.com',
    phone: '+91 90000 00002',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'React', 'AWS'],
    services: [
      { title: 'REST / GraphQL APIs', description: 'Robust, secure, scalable' },
      { title: 'Cloud Deployment', description: 'CI/CD, Docker, AWS' },
      { title: 'Technical Consulting', description: 'Architecture & best practices' },
    ],
    projects: [
      { title: 'Food Delivery Platform', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjFcSzki_KQRrK5NzF7_SRSX4d-A0LYXzSQ&s', description: 'Micro‑service backend + React Native app.' },
      { title: 'IoT Dashboard', image: 'https://www.zohowebstatic.com/sites/zweb/images/iot/dashboard/dashboard_banner.svg', description: 'Real‑time metrics & alerts.' },
      { title: 'Serverless CMS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w--YTgKQHRIewX0p8dkJtqDAgr9ktJDo_w&s', description: 'Lambda, DynamoDB & React.' },
    ],
    testimonials: [
      { client: 'Clara Design Studio', quote: 'Rahul nailed our API requirements perfectly.' },
    ],
    blogTitle: 'Scaling Node Apps',
    blogSummary: 'Patterns for 100k concurrent users without sweating.',
    contactMessage: 'Shoot me a message and let’s talk tech!',
  },
  {
    templateId: 2,
    name: 'Sarah Lee',
    role: 'UX Designer',
    tagline: 'Empathy‑driven design for complex products',
    heroImage: 'https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=',
    location: 'Pune, India',
        bio: 'Fusing data & intuition to create delightful journeys.',
    email: 'sarah@example.com',
    phone: '+91 90000 00003',
    skills: ['UX Research', 'Figma', 'Prototyping', 'Accessibility'],
    services: [
      { title: 'User Research', description: 'Interviews, surveys, usability tests' },
      { title: 'Wireframing', description: 'Low‑ to hi‑fi prototypes' },
      { title: 'UI Design', description: 'Visual systems & hand‑off' },
    ],
    projects: [
      { title: 'Healthcare Portal', image: 'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D', description: 'A11y‑first patient portal.' },
      { title: 'Crypto Wallet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxccm_PK8aNXCI0RTWddlUSW7TfaSsa1h9Fw&s', description: 'Mobile‑first wallet UX.' },
      { title: 'EdTech LMS', image: 'https://cdn.dribbble.com/userupload/16012815/file/original-a31a66d76ac6bbfd17ee202b386fbcbd.jpg?resize=400x0', description: 'Gamified learning flows.' },
    ],
    testimonials: [
      { client: 'Meditech Inc.', quote: 'Sarah turned our clunky prototype into a user‑loved product.' },
    ],
    blogTitle: 'Journey Mapping 101',
    blogSummary: 'How to align business goals with user needs.',
    contactMessage: 'Let’s chat about your users!',
  },
];

(async () => {
  for (const profile of dummyProfiles) {
    await axios.post('http://localhost:4000/api/portfolios', profile);
    console.log('Seeded:', profile.name);
  }
})();
