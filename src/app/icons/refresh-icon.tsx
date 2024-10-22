import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const RefreshIcon = ({ styles = "text-dark", size = 24 }: Props) => {
  return (
    <div className={styles}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_408_9156)">
          <g clipPath="url(#clip1_408_9156)">
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58001 4 4.01001 7.58 4.01001 12C4.01001 16.42 7.58001 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69001 18 6.00001 15.31 6.00001 12C6.00001 8.69 8.69001 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_408_9156">
            <rect width="24" height="24" fill="white" />
          </clipPath>
          <clipPath id="clip1_408_9156">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RefreshIcon;
