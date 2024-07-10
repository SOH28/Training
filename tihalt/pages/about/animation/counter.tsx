import { animate, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Group, rem } from "@mantine/core";

interface CounterProps {
  from: number;
  to: number;
  plus?: boolean;
}

const Counter: React.FC<CounterProps> = ({ from, to, plus }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        const v = Math.round(value).toString()
        node.textContent = v;
        if (Number(v) >= to)
            setComplete(true);
      },
    });

    return () => controls.stop()
  }, [from, to, isInView]);

  return (
    <AnimatePresence>
        <Group wrap='nowrap' gap='lg'>
            <motion.p
                ref={nodeRef}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4 }}
                style={{
                    fontSize: rem('74px'),
                    margin: 0,
                    color: 'white'
                }}
            />
            {(complete && plus) && <motion.span style={{
                fontSize: rem('40px'),
                color: 'white',
                fontWeight: 500
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            >+</motion.span>}
        </Group>
    </AnimatePresence>
  );
};

export default Counter;