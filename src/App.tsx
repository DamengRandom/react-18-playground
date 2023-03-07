import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
