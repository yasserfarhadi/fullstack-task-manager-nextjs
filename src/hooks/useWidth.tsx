import React from 'react';

function isPassedThreshold(threshold: number) {
  return window.innerWidth >= threshold;
}

const useWidth = (threshold: number) => {
  const [isPassed, setIsPassed] = React.useState(isPassedThreshold(threshold));
  React.useEffect(() => {
    function eventHandler() {
      if (isPassedThreshold(threshold)) {
        return setIsPassed(true);
      }
      setIsPassed(false);
    }
    window.addEventListener('resize', eventHandler);

    return () => window.removeEventListener('resize', eventHandler);
  }, [threshold]);
  return isPassed;
};

export default useWidth;
