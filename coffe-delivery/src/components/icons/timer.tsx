import React from "react";

interface TimerProps {
  color?: string;
}

const Timer: React.FC<TimerProps> = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1H9.5C9.63261 1 9.75979 0.947322 9.85355 0.853553C9.94732 0.759785 10 0.632608 10 0.5C10 0.367392 9.94732 0.240215 9.85355 0.146447C9.75979 0.0526784 9.63261 0 9.5 0L6.5 0C6.36739 0 6.24021 0.0526784 6.14645 0.146447C6.05268 0.240215 6 0.367392 6 0.5C6 0.632608 6.05268 0.759785 6.14645 0.853553C6.24021 0.947322 6.36739 1 6.5 1Z"
        fill={color || "currentColor"}
      />
      <path
        d="M8 2C6.81331 2 5.65328 2.35189 4.66658 3.01118C3.67989 3.67047 2.91085 4.60754 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66557 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C13.9967 6.40972 13.3635 4.88551 12.239 3.76101C11.1145 2.6365 9.59029 2.0033 8 2ZM10.8313 5.88125L8.35625 8.35625C8.26068 8.44866 8.13294 8.50032 8 8.50032C7.86706 8.50032 7.73932 8.44866 7.64375 8.35625C7.54986 8.26145 7.49719 8.13342 7.49719 8C7.49719 7.86658 7.54986 7.73855 7.64375 7.64375L10.1188 5.16875C10.1636 5.11413 10.2194 5.06949 10.2825 5.03772C10.3456 5.00595 10.4147 4.98775 10.4852 4.98428C10.5558 4.98082 10.6264 4.99216 10.6923 5.0176C10.7582 5.04303 10.8181 5.08198 10.8681 5.13195C10.918 5.18192 10.957 5.24179 10.9824 5.30772C11.0078 5.37365 11.0192 5.44418 11.0157 5.51476C11.0123 5.58534 10.9941 5.65441 10.9623 5.71753C10.9305 5.78065 10.8859 5.83642 10.8313 5.88125Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
export default Timer;
