import { useRef, useState, type PointerEventHandler } from "react";

const RELEASE_DELAY_MS = 280;

export function usePressFeedback() {
  const [pressed, setPressed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const clearReleaseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  };

  const scheduleRelease = () => {
    clearReleaseTimer();
    timeoutRef.current = setTimeout(() => setPressed(false), RELEASE_DELAY_MS);
  };

  const pressProps = {
    onPointerDown: ((event) => {
      if (event.button !== 0) return;
      clearReleaseTimer();
      setPressed(true);
    }) satisfies PointerEventHandler<HTMLElement>,
    onPointerUp: scheduleRelease,
    onPointerLeave: scheduleRelease,
    onPointerCancel: () => {
      clearReleaseTimer();
      setPressed(false);
    },
  };

  return { pressed, pressProps };
}
