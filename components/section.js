import { motion } from 'framer-motion'
import cn from 'classnames'

const Section = ({ children, delay = 0, textColor, textSize, gap, justify, align }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn(
        `text-${textColor} flex flex-col justify-${justify} items-${align} gap-${gap}`,
        // `text-${textColor} flex flex-col justify-${justify} items-${align} mt-8 px-4 md:px-8 gap-${gap}`,
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