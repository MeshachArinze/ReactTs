import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js || Vite || Sass</b>.
      </span>
    </footer>
  );
};

export default Footer;
