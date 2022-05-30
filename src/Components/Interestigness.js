import Slika from "../poz.jpg";

export default function App() {
  return (
    <div className="uvod">
      <section>
        <h1 class="heading" id="attractions">
          <img
            src={Slika}
            width="600"
            height="580"
            alt="Zadar"
            className="logo"
          />

          <span>A</span>
          <span>L</span>
          <span>K</span>
          <span>E</span>
          <span>M</span>
          <span>I</span>
          <span>Č</span>
          <span>A</span>
          <span>R</span>
        </h1>
      </section>
    </div>
  );
}
