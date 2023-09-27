"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { MotionConfig, motion, useSpring, useTransform } from "framer-motion";

const IconReaction = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#F55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
      />
    </svg>
  );
};

const IconMemory = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#FFB21E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
      />
      <path
        stroke="#FFB21E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
      />
      <path
        stroke="#FFB21E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
      />
    </svg>
  );
};

const IconVerbal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#00BB8F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
      />
    </svg>
  );
};

const IconVisual = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#1125D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
      <path
        stroke="#1125D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
      />
    </svg>
  );
};

const IconRefresh = ({ ...props }: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
};

let summaryList = [
  {
    id: 1,
    category: "Reaction",
    score: 80,
    icon: <IconReaction />,
    backgroundColor: "bg-reaction",
    color: "text-reaction",
  },
  {
    id: 2,
    category: "Memory",
    score: 91,
    icon: <IconMemory />,
    backgroundColor: "bg-memory",
    color: "text-memory",
  },
  {
    id: 3,
    category: "Verbal",
    score: 61,
    icon: <IconVerbal />,
    backgroundColor: "bg-verbal",
    color: "text-verbal",
  },
  {
    id: 4,
    category: "Visual",
    score: 73,
    icon: <IconVisual />,
    backgroundColor: "bg-visual",
    color: "text-visual",
  },
];

function randomizeScores(summaryList: any[]) {
  const minScore = 50;
  const maxScore = 99;

  const randomizedList = summaryList.map((item) => {
    const randomScore =
      Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;
    return {
      ...item,
      score: randomScore,
    };
  });

  return randomizedList;
}

function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default function Home() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(summaryList);

  useEffect(() => {});

  useEffect(() => {
    let sum: number = 0;
    let total: number = 0;

    data.forEach((item) => (sum += item.score));
    total = sum / data.length;

    setValue(total);
  }, [data]);

  const handleRandom = () => {
    setData(randomizeScores(data));
  };

  return (
    <main className="bg-very-light-blue text- flex min-h-screen items-center justify-center">
      <MotionConfig transition={{ ease: [0.32, 0.72, 0, 1] }}>
        <section className="md:rounded-4xl md:max-h-128 relative flex w-full flex-col overflow-hidden md:max-w-3xl md:flex-row">
          <motion.div
            initial={{ x: "var(--x-result)" }}
            animate={{ x: 0 }}
            transition={{ duration: 0, delay: 0 }}
            className="rounded-b-4xl md:rounded-4xl relative z-20 w-full overflow-hidden md:w-1/2"
          >
            <div className="pb-13 bg-score-container   px-12 pt-9 text-center ">
              <h1 className="text-light-blue mb-8 text-lg font-bold">
                Your Result
              </h1>
              <div className="bg-score mx-auto mb-7 flex h-48 w-48 items-center justify-center rounded-full text-center">
                <p className="flex flex-col text-7xl font-extrabold text-white">
                  <AnimatedNumber value={value} />
                  <span className="text-light-blue text-lg font-bold">
                    of 100
                  </span>
                </p>
              </div>
              <p className="text-3xl font-bold text-white">Great</p>
              <p className="text-light-blue text-lg font-medium">
                Your performance exceed 65% of the people conducting the test
                here!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "var(--x-score)", opacity: "var(--opacity-score)" }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                opacity: { duration: 0 },
                x: { duration: 0 },
                y: { duration: 0 },

                delay: 0,
              },
            }}
            className="md:rounded-4xl relative z-10 w-full overflow-hidden bg-white md:w-1/2"
          >
            <motion.div
              initial={{ opacity: "var(--opacity-score)" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0, delay: 0 }}
              className="relative w-full px-10 pb-11 pt-9"
            >
              <p className="text-dark-navy mb-7 text-2xl font-bold">Summary</p>
              <ul className="mb-10 flex flex-col gap-y-4">
                {data.map((item) => (
                  <motion.li
                    key={item.id}
                    custom={3}
                    initial="initial"
                    animate="animate"
                    variants={{
                      initial: {
                        opacity: "var(--opacity-score)",
                      },
                      animate: (i) => ({
                        opacity: 1,
                        transition: {
                          delay: 0,
                        },
                      }),
                    }}
                    className={clsx(
                      "flex h-14 w-full items-center justify-center gap-x-2 rounded-xl border border-white",
                      item.backgroundColor,
                    )}
                  >
                    <div className="flex items-center gap-x-3">
                      {item.icon}
                      <p className={clsx("text-base font-medium", item.color)}>
                        {item.category}
                      </p>
                    </div>
                    <span className="text-dark-navy text-base font-bold">
                      <AnimatedNumber value={item.score} />{" "}
                      <span className="opacity-50">/ 100</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                aria-label="Continue"
                className="bg-dark-navy rounded-12xl  relative h-14 w-full text-lg font-bold text-white"
              >
                <motion.span initial="initial" whileHover="hover">
                  <span className="group relative z-10">Continue</span>
                  <motion.span
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0 }}
                    className="rounded-12xl bg-button absolute top-0 block h-full w-full group-hover:cursor-pointer"
                  />
                </motion.span>
              </motion.button>
              <motion.button
                aria-label="Refresh Data"
                initial={{ opacity: "var(--opacity-score)" }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0, duration: 0 },
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0 } }}
                className="absolute right-10 top-10 z-20 md:right-5 md:top-5"
                onClick={handleRandom}
              >
                <IconRefresh className="text-dark-navy" />
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: "var(--opacity-score)" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0 }}
            className="absolute top-1/2 z-0  h-36 w-full -translate-y-1/2 transform bg-white md:left-1/2 md:block md:h-full md:w-16 md:-translate-x-1/2"
          />
        </section>
      </MotionConfig>
    </main>
  );
}
