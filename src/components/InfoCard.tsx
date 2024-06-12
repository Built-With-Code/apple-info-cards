"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useState } from "react";

const ANIMATION_DELAY = 0.5;

const InfoCard = ({
  tintColor = "#000000",
  title,
  description = "",
  detailContent = "",
  hasDetail = true,
  children,
  ...props
}: {
  tintColor?: string;
  title: string;
  description?: string;
  detailContent?: string;
  hasDetail?: boolean;
} & HTMLMotionProps<"div">) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      className="relative h-[800px] bg-white rounded-3xl px-8 pt-8 overflow-hidden flex flex-col"
      initial={false}
      animate={showDetail ? "detail" : "main"}
      {...props}
    >
      <motion.h2
        className="relative text-xl font-medium z-50"
        variants={{
          main: { color: tintColor, transition: { delay: ANIMATION_DELAY } },
          detail: { color: "rgb(255,255,255)" },
        }}
      >
        {title}
      </motion.h2>
      <p className="text-lg mt-2 font-medium">{description}</p>
      <>{children}</>
      {hasDetail && (
        <PlusButton
          tintColor={tintColor}
          onClick={() => setShowDetail(!showDetail)}
        />
      )}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-center p-8"
            style={{ backgroundColor: tintColor }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: ANIMATION_DELAY } }}
          >
            <motion.p
              className="text-white font-medium text-lg max-w-[80ch] mx-auto"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: ANIMATION_DELAY, bounce: 0 },
              }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ bounce: 0 }}
            >
              {detailContent}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PlusButton = ({
  tintColor,
  ...props
}: { tintColor: string } & HTMLMotionProps<"button">) => {
  return (
    <motion.button
      className="absolute right-8 bottom-8 size-10 rounded-full cursor-pointer flex justify-center items-center z-50"
      variants={{
        main: {
          rotate: 0,
          backgroundColor: "rgb(0, 0, 0)",
          stroke: "rgb(255,255,255)",
        },
        detail: {
          rotate: 45,
          backgroundColor: "rgb(255, 255, 255)",
          stroke: tintColor,
        },
      }}
      transition={{
        bounce: 0,
      }}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="size-6 stroke-[3]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </motion.button>
  );
};

export default InfoCard;
