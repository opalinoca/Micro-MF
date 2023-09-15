import { useState } from "react";

const HeaderComponent = () => {
  // Definir o estado inicial e a função para atualizá-lo
  const [hovered, setHovered] = useState(false);

  // Função para manipular o evento de passar o mouse
  const handleMouseOver = () => {
    setHovered(true);
  };

  // Função para manipular o evento de retirar o mouse
  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-20">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <img
          className="h-20 w-auto"
          src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2f2019%2f05%2f28%2f10%2fLogo-256861_633028_101708439_21391970.jpg"
          alt="logo"
        />

        <div
          className="hidden sm:ml-9 sm:flex items-center"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <p className="text-center text-lg font-medium hover:text-blue-500 cursor-pointer">
            {hovered
              ? "Olá! Eu sou uma Header Micro Component"
              : "Passe o mouse aqui"}
          </p>

          <p> Hello World !</p>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
