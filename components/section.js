import { motion } from 'framer-motion'

const Section = ({ children, delay = 0, props }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </motion.div>
)

export default Section