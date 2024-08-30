"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} suffix="+" />
    </div>
  );
};

export default AnimatedCounter;
