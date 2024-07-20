import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/Productprovider";

export default function All() {
  const { displayCard, nodeDisplay, reactDisplay } = useContext(CardContext);
  const allProduct = [...displayCard, ...nodeDisplay, ...reactDisplay];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [animateOnScroll, setAnimateOnScroll] = useState(false);

  // Function to handle mouse move
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Motion style for spotlight effect
  const style = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  // Effect to trigger animation on scroll
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = 100; // Adjust this value based on when you want the animation to start

      if (scrollPosition > triggerPosition) {
        setAnimateOnScroll(true);
      } else {
        setAnimateOnScroll(false);
      }
    }

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="items-center justify-center gap-5 flex p-5 flex-wrap">
      {allProduct.map((value, index) => (
        <Link to={`/description/${value.id}`} key={index}>
          <CardWithAnimation
            value={value}
            onMouseMove={handleMouseMove}
            style={style}
            animateOnScroll={animateOnScroll}
          />
        </Link>
      ))}
    </div>
  );
}

// Card component with animation and hover effect
function CardWithAnimation({ value, onMouseMove, style, animateOnScroll }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <motion.div
      className="group relative max-w-[420px] h-[330px] rounded-xl border border-white/10 bg-gray-900 px-8 py-14 shadow-2xl"
      ref={ref}
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: inView && animateOnScroll ? 1 : 0,
        y: inView && animateOnScroll ? 0 : 50,
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: style }}
      />
      <div>
        <h3 className="text-base font-semibold leading-7 text-sky-500">
          {value.techStack[2]}
        </h3>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-4xl font-bold tracking-tight text-white">
            {value.title}
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          {value.description.slice(0, 100) + "..."}
        </p>
      </div>
    </motion.div>
  );
}
