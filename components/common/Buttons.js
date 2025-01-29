import { Button } from "react-bootstrap";

const MyButton = ({ color, type, size, children, ...props }) => {
  const buttonProps = {
    ...props,
    variant: color || "",
    type: type || "button",
    size: size || "md",
  };

  return <Button {...buttonProps}>{children}</Button>;
};

export { MyButton };
