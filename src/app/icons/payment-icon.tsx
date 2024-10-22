import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const PaymentIcon = ({ styles = "text-dark", size = 24 }: Props) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_190_2123)">
        <g clipPath="url(#clip1_190_2123)">
          <path
            d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_190_2123">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_190_2123">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PaymentIcon;
