import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import TopContents from "./components/TopContents";
import Support from "./pages/Support";
import LegalData from "./pages/LegalData";
import MyPage from "./pages/MyPage";
import Chat from "./pages/Chat";
import Setting from "./pages/Setting";
import PlusButton from "./components/PlusButton";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <TopContents />
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} /> 
        {/* ! */}
        <Route path="/main" element={<Main />} />
        <Route path="/support" element={<Support />} />
        <Route path="/legalData" element={<LegalData />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <PlusButton />
    </HashRouter>
  );
};

export default Router;
