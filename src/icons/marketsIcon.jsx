const MarketsIcon = ({ selected, theme }) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9928 6.15576H9.01408V8.13444H7.0354V20.0065H9.01408V21.9852H10.9928V20.0065H12.9714V8.13444H10.9928V6.15576ZM20.8861 10.1131H18.9075V6.15576H16.9288V10.1131H14.9501V17.0385H16.9288V21.9852H18.9075V17.0385H20.8861V10.1131Z"
        fill={`${selected ? "#0060FF" : theme ? "black" : "white"}`}
      />
    </svg>
  );
};

export default MarketsIcon;
