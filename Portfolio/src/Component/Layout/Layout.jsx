import Navigation from "./Navigation";
import PropTypes from "prop-types";
function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <footer>
        Her kan du legge til bunnteksten eller annet innhold som er konstant på
        alle sidene
      </footer>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
