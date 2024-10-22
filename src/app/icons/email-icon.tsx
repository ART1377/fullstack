import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const EmailIcon = ({ styles, size = 24 }: Props) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_430_6554)">
        <g clipPath="url(#clip1_430_6554)">
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_430_6554">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_430_6554">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EmailIcon;
