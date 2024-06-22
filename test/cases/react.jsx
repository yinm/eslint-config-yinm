import { useState, useCallback } from "react";

export function Hello() {
  const [count, setCount] = useState(0);
  useCallback(() => {
    setCount(count + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-curly-brace-presence
  return <div foo={"bar"} />;
}
