import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import "./style.css";
import { Cards } from "./components/Cards";
import { Video } from "./components/Video";
export default function Landing() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Video />
      <footer>
        <p>
          🧑‍💻Developed By{" "}
          <a
            href="https://api.whatsapp.com/message/FCNXNRU4IKFSI1?autoload=1&app_absent=0"
            target="_blank"
          >
            Fahad Almansour
          </a>
        </p>
      </footer>
    </>
  );
}
