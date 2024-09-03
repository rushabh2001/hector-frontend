import { useEffect, useRef } from 'react';

export default function useEffectOnce(cb: () => void, dependencies: any[]) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    cb();
  }, dependencies);
}
