import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cssNavbar, cssNavbarContainer } from "./styles";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={cssNavbarContainer} data-active={active}>
      <nav css={cssNavbar}>
        <div className="navlist">
          <h1 onClick={() => navigate("/")}>Moveflix</h1>
          <ul>
            <li
              data-active={category === "movie"}
              onClick={() => navigate("/movie")}
            >
              Movies
            </li>
            <li data-active={category === "tv"} onClick={() => navigate("/tv")}>
              TV Shows
            </li>
          </ul>
        </div>

        <div className="watchlist">
          <div>Watch List</div>
        </div>
      </nav>
    </div>
  );
}
