/** @format */

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <>
      <button className={"btn btn-" + color + " m-2"} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
