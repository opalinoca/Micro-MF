const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 left-0 right-0 z-[10]">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:!text-lg md:mb-0 mb-6 font-semibold md:w-2/5">
          <span></span>
          <span className="text-teal-200">© 2023 All rights reserved. </span>
          Developed by Aline and Matheus.
        </h1>

        <div>
          <input
            type="text"
            placeholder="E-mail para Newsletter:"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />

          <button className="bg-teal-500 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Enviar
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
