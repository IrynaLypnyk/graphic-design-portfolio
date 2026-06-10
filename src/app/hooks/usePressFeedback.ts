import { useRef, useState } from "react";

const TOUCH_FEEDBACK_MS = 180;

function isCoarsePointer() {
  return window.matchMedia("(pointer: coarse)").matches;
}

export function usePressFeedback() {
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  const runAction = (action: () => void) => {
    clearTimer();
    setPressed(true);

    const delay = isCoarsePointer() ? TOUCH_FEEDBACK_MS : 0;

    timerRef.current = setTimeout(() => {
      action();
      timerRef.current = setTimeout(() => setPressed(false), 80);
    }, delay);
  };

  const pressProps = {
    onPointerDown: () => setPressed(true),
    onPointerCancel: () => {
      clearTimer();
      setPressed(false);
    },
  };

  return { pressed, runAction, pressProps };
}
