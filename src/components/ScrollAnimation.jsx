import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const ScrollAnimation = ({
  children,
  animation = 'fade',
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  className = '',
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });

  const getVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration, 
              delay,
              type: 'spring',
              stiffness: 100,
              damping: 20
            } 
          }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration, 
              delay,
              type: 'spring',
              stiffness: 100,
              damping: 20
            } 
          }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration, 
              delay,
              type: 'spring',
              stiffness: 100,
              damping: 20
            } 
          }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
              duration, 
              delay,
              type: 'spring',
              stiffness: 100,
              damping: 20
            } 
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;