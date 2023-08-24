import { motion } from "framer-motion";
import "./TableLoading.scss";

const TableLoading = () => {
  return (
    <div className="loading-table">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
    </div>
  );
};

export default TableLoading;
