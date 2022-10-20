import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h3 className="footer__credits credits__cutzu">
          Made with<span className="footer__credits--emoji"> ❤️ </span>by
          <a
            href="https://alexfarkas.me/"
            target="_blank"
            className="footer__credits--cutzu"
          >
            CutzuSD#4226
          </a>
        </h3>
        <div className="footer__copyright">
          <h3 className="footer__credits f_displayFlex">
            Copryright 2022 &copy; Storm Services
          </h3>
          <ul className="footer__credits--list">
            <li className="footer__credits--item">
              Cuijk aan De Nieuwe Erven 3
            </li>
            <li className="footer__credits--item">5431 NV</li>
          </ul>
          <ul className="footer__credits--list">
            <li className="footer__credits--item">Netherlands</li>
            <li className="footer__credits--item">43274894327</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
