import { Stack } from "@mui/system";
import MainLayout from "./components/Common/MainLayout";
import SkillsCard from "./components/HomePage/SkillsCard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Home/Dashboard";

function App() {
  return (
    <div className="App">
      <Stack direction="row">
        <Sidebar />
        <Stack direction="column">
          <Navbar />
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
