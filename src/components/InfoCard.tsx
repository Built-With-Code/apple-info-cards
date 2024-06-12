"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { HTMLAttributes, useState } from "react";

const InfoCard = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div
      className="relative h-[800px] bg-white rounded-3xl p-8 overflow-hidden"
      initial={false}
      animate={showDetail ? "detail" : "main"}
    >
      <motion.h2
        className="relative text-xl font-medium z-50"
        variants={{
          main: { color: "rgb(20,184,166)", transition: { delay: 0.5 } },
          detail: { color: "rgb(255,255,255)" },
        }}
      >
        All your credentials in one place
      </motion.h2>
      <p className="text-lg mt-2 font-medium">
        From passwords to verifications and security alerts, find them all
        securely stored in the Passwords app.
      </p>
      <PlusButton onClick={() => setShowDetail(!showDetail)} />
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="absolute inset-0 bg-teal-500 flex flex-col justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
          >
            <motion.p
              className="text-white font-medium text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              Backed by secure end-to-end encryption and seamless syncing, the
              Passwords app safely stores all your credentials. It lets you
              filter and sort accounts by recently created, credential type, or
              whether an account is in a shared group, to quickly find accounts
              you're looking for.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PlusButton = ({ ...props }: HTMLMotionProps<"button">) => {
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
          stroke: "rgb(20,184,166)",
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
