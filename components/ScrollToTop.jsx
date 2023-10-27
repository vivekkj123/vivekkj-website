import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ScrollToTop = ({ resetToTop }) => {
  const [Visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 600 ? setVisible(true) : setVisible(false)
    );
  }, []);
  return (
    <div
      onClick={resetToTop}
      className={`${
        Visible ? "flex" : "invisible"
      } flex items-center justify-center z-50 cursor-pointer h-16 w-16 bg-primary-fg rounded-full m-10 fixed bottom-0 right-0`}
    >
      {" "}
      <FontAwesomeIcon
        icon={faChevronUp}
        className=" text-primary-bg text-xl"
      />
    </div>
  );
};

export default ScrollToTop;
