import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const ArrowLeftIcon = ({ styles, size = 24 }: Props) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_72_531)">
        <path
          d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_72_531">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeftIcon;