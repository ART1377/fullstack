import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const UploadIcon = ({ styles, size = 24 }: Props) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_625_10111)">
        <g clipPath="url(#clip1_625_10111)">
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM17 13L12 18L7 13H10V9H14V13H17Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_625_10111">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_625_10111">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadIcon;
