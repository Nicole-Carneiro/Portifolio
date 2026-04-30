import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./scroll-to-top.css";

export function ScrollToTopButton({ variant = "light" }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className={`button-div ${variant}`}>
      <button
        className={`scroll-top ${variant}`}
        onClick={scrollTop}
      >
        Voltar ao topo <FiArrowUp />
      </button>
    </div>
  );
}