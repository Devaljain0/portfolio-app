import { Routes, Route, Navigate } from "react-router-dom";
import TemplateSelection from "./pages/TemplateSelection";
import FormWizard from "./pages/FormWizard";
import ProfilesList from "./pages/ProfilesList";
import PortfolioPage from "./pages/PortfolioPage";
import AppHeader from "./components/AppHeader";
import TemplatePreview from "./pages/TemplatePreview";
export default function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/select-template" />} />
        <Route path="/select-template" element={<TemplateSelection />} />
        <Route path="/preview/:tid" element={<TemplatePreview />} />
        <Route path="/create" element={<FormWizard />} />
        <Route path="/profiles" element={<ProfilesList />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}