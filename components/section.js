import { motion } from 'framer-motion'
import cn from 'classnames'

const Section = ({ children, delay = 0, textColor, textSize }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        `text-${textColor} flex flex-col justify-center items-center mt-8`,
        {
          "text-xs": textSize === "sm",
          "text-xl": textSize === "lg",
        }
      )}
    >
      {children}
    </motion.div >
  )
};

export default Section