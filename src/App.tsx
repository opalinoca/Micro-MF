import { lazy } from "react";
import "./App.css";

const HeaderComponent = lazy(() => import("HeaderComponent/HeaderComponent"));
const FooterComponent = lazy(() => import("FooterComponent/FooterComponent"));

function App() {
  // Adicione este código para remover a rolagem da página
  document.body.style.overflow = "hidden";

  return (
    <>
      <HeaderComponent />
      <FooterComponent />
      <div className="app">
        <h1 className="text-4xl font-bold text-center absolute inset-0 flex justify-center items-center">
          Sou um projeto Micro Front End!
        </h1>

        <div className="relative">
          <img
            className="h-screen w-screen object-cover"
            src="https://static.wixstatic.com/media/c837a6_f3dbcb551a5c4e9a831a89a0d362afcc~mv2.png/v1/fill/w_980,h_742,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f3dbcb551a5c4e9a831a89a0d362afcc~mv2.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}

export default App;
