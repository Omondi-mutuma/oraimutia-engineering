import { STATS } from "@/constants/index.c";
import CountUp from "react-countup";
import AnimatedCounter from "./AnimatedCounter";

const Stat = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-between w-full border rounded-2xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 ring-1 ring-white/10 overflow-hidden">
        {STATS.map((stat, index) => (
          <div
            className="h-full m-auto flex flex-col items-center w-full p-8 hover:bg-yellow-500 transition-all rounded-2xl"
            key={index}
          >
            <h3 className="text-2xl font-bold text-slate-900">
              <AnimatedCounter amount={stat.title} />
            </h3>
            <p className="mt-2 text-slate-700-50 text-sm font-medium text-center">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stat;
