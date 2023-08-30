const SettingIcon = ({ selected, theme }) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.924 6.5791C15.1567 6.5791 15.3648 6.72394 15.4432 6.94081L16.0019 8.48971C16.2022 8.53958 16.3739 8.58944 16.5196 8.64168C16.6787 8.69866 16.8836 8.78493 17.1369 8.90286L18.4381 8.21428C18.5443 8.15801 18.6659 8.1377 18.7846 8.1564C18.9034 8.17509 19.0128 8.23178 19.0966 8.31796L20.2411 9.50121C20.393 9.65872 20.4358 9.88903 20.3503 10.0901L19.7401 11.5203C19.8414 11.7062 19.9221 11.8653 19.9838 11.9983C20.0503 12.1431 20.1326 12.3426 20.2308 12.5998L21.653 13.2093C21.8667 13.3003 21.9989 13.514 21.9847 13.7427L21.8802 15.385C21.8731 15.4917 21.8348 15.5939 21.77 15.6791C21.7053 15.7642 21.617 15.8284 21.5161 15.8638L20.169 16.3427C20.1303 16.5287 20.0899 16.6878 20.0472 16.8223C19.9782 17.0301 19.8995 17.2345 19.8113 17.4349L20.488 18.9308C20.5358 19.0359 20.5486 19.1535 20.5247 19.2665C20.5008 19.3794 20.4413 19.4817 20.355 19.5584L19.0681 20.7076C18.9834 20.783 18.8776 20.8307 18.765 20.8443C18.6524 20.8578 18.5383 20.8367 18.4381 20.7836L17.1116 20.0808C16.9041 20.1907 16.69 20.2877 16.4705 20.3713L15.8911 20.5881L15.3767 22.0128C15.3386 22.1171 15.2698 22.2075 15.1794 22.272C15.089 22.3366 14.9812 22.3723 14.8701 22.3745L13.3663 22.4085C13.2523 22.4115 13.1402 22.3791 13.0454 22.3157C12.9506 22.2524 12.8777 22.1612 12.8369 22.0547L12.2306 20.4504C12.0237 20.3797 11.8189 20.3032 11.6164 20.2209C11.4508 20.1492 11.2876 20.0719 11.1273 19.989L9.62349 20.6317C9.5244 20.6739 9.41516 20.6865 9.30907 20.6678C9.20297 20.6491 9.1046 20.6 9.02592 20.5264L7.91312 19.4824C7.83027 19.4051 7.77384 19.3036 7.75183 19.1924C7.72981 19.0812 7.74332 18.9658 7.79044 18.8627L8.43707 17.4539C8.35107 17.287 8.27134 17.117 8.19805 16.9442C8.11249 16.7327 8.03331 16.5186 7.96061 16.3023L6.54387 15.871C6.42871 15.8362 6.32827 15.7643 6.25814 15.6666C6.18802 15.5688 6.15213 15.4506 6.15605 15.3304L6.21146 13.81C6.2154 13.7108 6.24639 13.6145 6.30107 13.5317C6.35576 13.4488 6.43205 13.3825 6.52171 13.3398L8.00809 12.6259C8.07695 12.3735 8.1371 12.1772 8.19013 12.0339C8.2648 11.8426 8.34772 11.6546 8.43865 11.4704L7.7944 10.1091C7.7455 10.0057 7.73066 9.88946 7.75199 9.77711C7.77332 9.66476 7.82974 9.56206 7.91312 9.4838L9.02434 8.43431C9.10224 8.36084 9.19971 8.31144 9.30502 8.29207C9.41033 8.27269 9.519 8.28416 9.61795 8.32509L11.1202 8.9456C11.2864 8.83479 11.4367 8.74536 11.5729 8.67333C11.7351 8.58706 11.952 8.49684 12.225 8.39949L12.7474 6.94239C12.786 6.83575 12.8566 6.74363 12.9496 6.67862C13.0425 6.6136 13.1532 6.57884 13.2666 6.5791H14.924ZM14.0898 12.1344C12.7704 12.1344 11.7011 13.191 11.7011 14.4954C11.7011 15.7997 12.7704 16.8571 14.0898 16.8571C15.4083 16.8571 16.4776 15.7997 16.4776 14.4954C16.4776 13.191 15.4091 12.1344 14.0898 12.1344Z"
        fill={`${selected ? "#0060FF" : theme ? "black" : "white"}`}
      />
    </svg>
  );
};

export default SettingIcon;