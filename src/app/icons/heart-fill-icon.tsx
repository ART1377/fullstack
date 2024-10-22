import React from "react";

type Props = {
  styles?: string;
  size?: number;
};

const HeartFillIcon = ({ styles, size = 24 }: Props) => {
  return (
    <svg
      className={styles}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21L10.55 19.7052C5.4 15.1243 2 12.103 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.79455 12 5.05014C13.09 3.79455 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 12.103 18.6 15.1243 13.45 19.715L12 21Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeartFillIcon;
