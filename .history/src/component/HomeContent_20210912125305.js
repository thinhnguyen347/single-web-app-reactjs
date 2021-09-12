import home_header from "./img/home-header.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeContent() {
  return (
    <>
      <img src={home_header} className="w-100 img-fluid" alt="header" />
    </>
  );
}
