import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CardContext } from "../context/Productprovider";
import { useInView } from "react-intersection-observer";

export default function HTML() {
  const { displayCard } = useContext(CardContext);

  return (
    <div className="items-center justify-center gap-5 flex p-5 flex-wrap">
      <AnimatePresence>
        {displayCard.map((value, index) => (
          <Link to={`/description/${value.id}`} key={index}>
            <CardWithAnimation value={value} />
          </Link>
        ))}
      </AnimatePresence>
    </div>
  );
}

function CardWithAnimation({ value }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
    });

  const [isHovered, setIsHovered] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();

    setMouseX(clientX - left);
    setMouseY(clientY - top);
  }

  return (
    <motion.div
      className="group relative max-w-[420px] h-[330px] rounded-xl border border-white/10 bg-gray-900 px-8 py-14 shadow-2xl"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove} 
    >
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
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(14, 165, 233, 0.15),
            transparent 80%
          )`,
          opacity: isHovered ? 1 : 0, 
          pointerEvents: "none", 
          transition: "opacity 0.3s ease",
        }}
      />
    </motion.div>
  );
}
