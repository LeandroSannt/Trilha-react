import React from "react";

interface CartProps {
  color?: string;
}

const Cart: React.FC<CartProps> = ({ color }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2414 5.62031L18.193 11.3695C18.1065 11.8445 17.8561 12.274 17.4855 12.5834C17.1149 12.8927 16.6476 13.0623 16.1648 13.0625H6.19609L6.57422 15.125H15.8125C16.2204 15.125 16.6192 15.246 16.9584 15.4726C17.2975 15.6992 17.5619 16.0213 17.718 16.3982C17.8741 16.7751 17.915 17.1898 17.8354 17.5899C17.7558 17.99 17.5594 18.3575 17.2709 18.6459C16.9825 18.9344 16.615 19.1308 16.2149 19.2104C15.8148 19.2899 15.4001 19.2491 15.0232 19.093C14.6463 18.9369 14.3242 18.6725 14.0976 18.3334C13.871 17.9942 13.75 17.5954 13.75 17.1875C13.7501 16.9531 13.7908 16.7205 13.8703 16.5H8.81719C8.89672 16.7205 8.93743 16.9531 8.9375 17.1875C8.93812 17.5203 8.85821 17.8482 8.7046 18.1434C8.55099 18.4386 8.32823 18.6923 8.05534 18.8827C7.78245 19.0732 7.46753 19.1947 7.13746 19.2371C6.8074 19.2794 6.47199 19.2413 6.15986 19.1259C5.84774 19.0105 5.56816 18.8213 5.34501 18.5745C5.12185 18.3276 4.96174 18.0304 4.87833 17.7083C4.79493 17.3861 4.79071 17.0486 4.86605 16.7244C4.94138 16.4003 5.09402 16.0992 5.31094 15.8469L2.93047 2.75H1.375C1.19266 2.75 1.0178 2.67757 0.888864 2.54864C0.759933 2.4197 0.6875 2.24484 0.6875 2.0625C0.6875 1.88016 0.759933 1.7053 0.888864 1.57636C1.0178 1.44743 1.19266 1.375 1.375 1.375H2.93047C3.25139 1.3757 3.56196 1.48864 3.80838 1.69424C4.05479 1.89985 4.22152 2.18517 4.27969 2.50078L4.70078 4.8125H18.5625C18.6629 4.81271 18.7619 4.83517 18.8526 4.87826C18.9432 4.92136 19.0232 4.98401 19.0867 5.06172C19.1532 5.13699 19.2017 5.2264 19.2285 5.32318C19.2553 5.41996 19.2597 5.52157 19.2414 5.62031Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
export default Cart;
