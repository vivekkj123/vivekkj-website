import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = ({ resetToTop }) => {
  return (
    <button
      onClick={resetToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon 
        icon={faArrowUp} 
        className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
      />
    </button>
  );
};

export default ScrollToTop;
