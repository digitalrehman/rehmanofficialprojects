import { useEffect, useState } from "react";
import { animate } from "framer-motion";

const useCountUp = (end) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, end, {
      duration: 2,
      onUpdate: (v) => setValue(Math.ceil(v)),
    });

    return () => controls.stop();
  }, [end]);

  return value;
};

export default useCountUp;
