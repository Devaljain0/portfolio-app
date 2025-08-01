import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // adjust back‑end host
});

export const createPortfolio = (data) => api.post("/portfolios", data);
export const fetchPortfolios = () => api.get("/portfolios");
export const fetchPortfolio = (id) => api.get(`/portfolios/${id}`);

export default api;