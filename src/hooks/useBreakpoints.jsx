import { useEffect, useState } from 'react';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const useBreakpoint = () => {
  const [breakpointValues, setBreakpointValues] = useState(() => {
    const initialState = {};
    Object.keys(breakpoints).forEach((key) => {
      initialState[key] = false;
    });
    return initialState;
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const updatedValues = {};
      Object.keys(breakpoints).forEach((key) => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[key]})`);
        updatedValues[key] = mediaQuery.matches;
      });
      setBreakpointValues(updatedValues);
    };

    updateBreakpoints();

    window.addEventListener('resize', updateBreakpoints);

    return () => {
      window.removeEventListener('resize', updateBreakpoints);
    };
  }, []);

  return breakpointValues;
};

export default useBreakpoint;
