import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPortfolio } from "../api";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

export default function PortfolioPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPortfolio(id).then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p className="p-6">Loading…</p>;

  const Template = data.templateId === 2 ? Template2 : Template1;
  return <Template {...data} />;
}
