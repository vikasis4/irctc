import Routes from "@/routes/Routes"
import Pop from "./components/popup/Pop";
import React from "react";
import useAuth from "@/hooks/useAuth";


function App() {

  const auth = useAuth();

  React.useEffect(() => {

    var type = localStorage.getItem('authType');
    
    if (type)
      auth(type);

  }, [])


  return (
    <>
      <Routes />
      <Pop />
    </>
  )
}

export default App
