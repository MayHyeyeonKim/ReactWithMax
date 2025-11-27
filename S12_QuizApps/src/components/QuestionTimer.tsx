import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

interface QuestionTimerProps {
  timeout: number;
  onTimeout: () => void;
  mode: string | null;
}

const QuestionTimer = ({ timeout, onTimeout, mode }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime: number) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const progress = (remainingTime / timeout) * 100;

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      className={mode || ""}
    />
  );
};

export default QuestionTimer;
