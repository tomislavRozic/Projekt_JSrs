import Hiperveza from "./Hiperveza";

export default function App() {
  return (
    <div className="footer">
      <Hiperveza />
      <p className="f_p">
        <b>Kontakt</b>
        <br />
        Broj mobitela: 091 597 7816
        <br />
        Email: rozictomislav003@gmail.com
      </p>
      <p className="f_pp">
        <b>Mediji</b>
        <br />
        <a href="https://www.instagram.com/" className="linki">
          Instagram
        </a>
        <br />
        <a href="facebook.com" className="linki">
          Facebook
        </a>
        <br />
      </p>
      <h1 className="h_p_f">
        Izradio:Tomislav Rožić kao prikaz knjige na internetu
      </h1>
    </div>
  );
}
