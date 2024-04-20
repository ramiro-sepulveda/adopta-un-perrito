import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header title="Adopta un Perrito" />
      </header>
      <div className="cards">
        <MyCard
          image="https://cdn.pixabay.com/photo/2018/08/15/12/54/poodle-3607995_1280.jpg"
          name="Copito"
          text="1 Año de edad, raza pequeña, amable con niños."
          tag="Poodle Toy"
          bg="success"
        />

        <MyCard
          image="https://cdn.pixabay.com/photo/2018/05/15/21/33/german-shepherd-3404340_1280.jpg"
          name="Duke"
          text="2 Años de edad, raza grande, calmado y obediente."
          tag="Pastor Aleman"
          bg="primary"
        />

        <MyCard
          image="https://cdn.pixabay.com/photo/2017/09/02/08/49/golden-retriever-puppy-2706655_1280.jpg"
          name="Jake"
          text="2 Meses de edad, raza grande, inquieto y jugueton."
          tag="Golden Retriever"
          bg="warning"
        />

        <MyCard
          image="https://cdn.pixabay.com/photo/2017/06/28/10/53/dog-2450235_1280.jpg"
          name="Balto"
          text="5 Años de edad, raza grande, alegre y muy activo."
          tag="Husky Siberiano"
          bg="secondary"
        />
      </div>
      <footer>
        <Footer text="Encuentra a tu compañero perfecto en nuestra pagina de adopcion" />
      </footer>
    </>
  );
}

export default App;
