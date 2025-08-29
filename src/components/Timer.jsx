import { useEffect } from 'react';

export default function Timer({ time, onTimeout, resetKey }) {
  useEffect(() => {
    if (time <= 0) {
      onTimeout();
      return;
    }
    const interval = setInterval(() => {
      onTimeout('tick');
    }, 1000);
    return () => clearInterval(interval);
  }, [time, resetKey]);

  return <div className="text-4xl font-bold text-red-600 mb-4">{time}s</div>;
}
