import { motion } from "framer-motion";
import { styles } from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { ComponentType } from "react";

const Wrapper = (
  Component: ComponentType<any>, // Explicitly specify ComponentType
  idName: string | undefined
) =>
// Higher Order Component function - This is a local JSX element function provided by React
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* This Element dynamically holds and renders the component passed to it based on provided id*/}
        <Component />
      </motion.section>
    );
  };

export default Wrapper;
