import Footer from "./Footer";
import Forma from "./Forma";
import Slika from "../pisac.jpg";

function Povijest() {
  return (
    <div className="prvi">
      <h1 className="pov_hed">
        <img
          src={Slika}
          width="600"
          height="580"
          alt="Zadar"
          className="logo_autora"
        />

        <span>B</span>
        <span>I</span>
        <span>O</span>
        <span>G</span>
        <span>R</span>
        <span>A</span>
        <span>F</span>
        <span>I</span>
        <span>J</span>
        <span>A</span>

        <br></br>
        <br></br>

        <span>A</span>
        <span>U</span>
        <span>T</span>
        <span>O</span>
        <span>R</span>
        <span>A</span>
      </h1>

      <br></br>

      <p className="pov_pe">Paulo Coelho</p>
      <p className="pov_pe1">
        Rođen je 24. augusta 1947. u Rio de Janeirou u Brazilu. Pohađao je u
        vjersku školu Isusovaca. Kao tinejdžer rekao je majci da želi postati
        pisac na što mu je ona odgovorila "Otac ti je inžinjer, logičan i
        razuman čovjek s definiranim pogledom na svijet.
      </p>
      <br></br>
      <p className="pov_pe1">
        Je li znaš šta uopće znači biti pisac?" Tražeći odgovor na ovo pitanje
        zaključio je da "pisac uvijek nosi naoćale i nikad ne češlja kosu", a da
        mu je "dužnost i obaveza biti neshvaćen od svoje generacije".
      </p>
      <br></br>
      <p className="pov_pe1">
        Kada mu je bilo 17, roditelji su ga zbog introvertnog ponašanja i
        suprostavljanja tradicionalnom načinu života poslali u umobolnicu.
        Pustili su ga kada mu je bilo 20 godina, a u međuvremenu je bježao tri
        puta. Poslije je rekao "Nije da su me željeli povrijediti, jednostavno
        nisu znali šta da rade... Nisu to učinili da bi me uništili, nego da bi
        me spasili".
      </p>
      <Forma />
      <Footer />
    </div>
  );
}

export default Povijest;
