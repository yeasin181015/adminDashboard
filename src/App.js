import AdminDashboard from "./Components/AdminDashboard";
import "typeface-inter";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <ColorContextProvider>
      <AdminDashboard />
    </ColorContextProvider>
  );
}

export default App;
