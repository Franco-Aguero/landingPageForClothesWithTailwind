import { useState } from "react";
import MainLayout from "components/layouts";

const App = () => {
  const [count, setCount] = useState(0);

  return <MainLayout />;
};

export default App;
