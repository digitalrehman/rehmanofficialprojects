import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../context/Productprovider";

export default function FullStack() {
  let { nodeDisplay } = useContext(CardContext);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const style = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  return (
    <div className="items-center justify-center gap-5 flex p-5 flex-wrap">
      {nodeDisplay.map((value, index) => (
        <Link to={`/description/${value.id}`} key={index}>
          <div
            className="group relative max-w-[440px] h-[350px] rounded-xl border border-white/10 bg-gray-900 px-8 py-14 shadow-2xl"
            onMouseMove={handleMouseMove}
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
          </div>
        </Link>
      ))}
    </div>
  );
}
