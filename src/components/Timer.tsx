import { useStopwatch } from "react-timer-hook";

export default function Timer() {
  const birth = new Date(2007, 9, 29, 12, 4);
  const now = new Date();
  const stopwatchOffset = new Date();
  stopwatchOffset.setSeconds(
    stopwatchOffset.getSeconds() + birth.getTime() / 1000,
  );
  const age = now.getTime() - birth.getTime();

  const { isRunning } = useStopwatch({
    autoStart: true,
    offsetTimestamp: stopwatchOffset,
    interval: 20,
  });

  const years = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor(age / (1000 * 60 * 60 * 24));
  const hours = Math.floor(age / (1000 * 60 * 60));
  const minutes = Math.floor(age / (1000 * 60));
  const seconds = Math.floor(age / 1000);

  return (
    <span className="">
      {years}
      <span className="text-sm text-main">years</span>, {days % 365}
      <span className="text-sm text-main">days</span>, {hours % 24}
      <span className="text-sm text-main">h</span>, {minutes % 60}
      <span className="text-sm text-main">min</span>, {seconds % 60}
      <span className="text-sm text-main">s</span>, {age % 1000}
      <span className="text-sm text-main">ms</span>
    </span>
  );
}
