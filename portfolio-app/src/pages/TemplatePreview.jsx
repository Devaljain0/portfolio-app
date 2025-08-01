import { useParams } from 'react-router-dom';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';

const samples = {
  1: {
    templateId: 1,
    name: 'Preview Name',
    role: 'Designer',
    tagline: 'A catchy tagline for template 1',
    heroImage: 'https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds',
    bio: 'Short preview bio explaining the layout.',
    email: 'preview@mail.com',
    phone: '+1 555 0000',
    location: 'Preview City',
    skills: ['Skill A', 'Skill B', 'Skill C'],
    services: [
      { title: 'Service 1', description: 'Description 1' },
      { title: 'Service 2', description: 'Description 2' },
      { title: 'Service 3', description: 'Description 3' },
    ],
    projects: [
      { title: 'Project One', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop', description: 'Project desc' },
      { title: 'Project Two', image: 'https://online.iotap.in/content/images/thumbs/0000879_microsoft-teams-essentials_550.png', description: 'Project desc' },
      { title: 'Project Three', image: 'https://i.pinimg.com/736x/93/6d/6a/936d6adc03927c1e2b386060e222c918.jpg', description: 'Project desc' },
    ],
    testimonials: [
      { client: 'Happy Client', quote: 'Amazing!' },
    ],
    blogTitle: 'Sample Blog',
    blogSummary: 'This template can include your latest articles.',
    contactMessage: 'Let’s collaborate!',
  },
  2: {
    templateId: 2,
    name: 'Preview Name',
    role: 'Developer',
    tagline: 'Tagline for split‑layout preview',
    heroImage: 'https://cdn.britannica.com/54/187354-050-BE0530AF/Facebook-Founder-CEO-Mark-Zuckerberg-email-messaging-system-St-Regis.jpg?w=385',
    skills: ['JS', 'CSS', 'Node'],
    projects: [
      { title: 'Sample 1', image: 'https://c.files.bbci.co.uk/C5CC/production/_89663605_instagram_logo_976.jpg' },
      { title: 'Sample 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s' },
            { title: 'Sample 3', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    ],
  },
};

export default function TemplatePreview() {
  const { tid } = useParams();
  const t = Number(tid);
  // pick the sample data for this template id; default to 1
  const data = samples[t] || samples[1];
  const Template = t === 2 ? Template2 : Template1;

  return (
    <div className="min-h-screen">
      <Template {...data} />
    </div>
  );
}
