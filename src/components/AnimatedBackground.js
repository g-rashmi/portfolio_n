// src/components/AnimatedBackground.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBackground = () => {
  const props = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: { duration: 10000 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(270deg, #ff7e5f, #feb47b)',
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
