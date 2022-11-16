import PropTypes from "prop-types";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-screen relative flex flex-col justify-between items-center align-middle min-h-screen text-customDarkGrey cursor-default">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
