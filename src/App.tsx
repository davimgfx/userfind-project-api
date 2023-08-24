import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
function App() {
  return <Outlet />;
}

export default App;
