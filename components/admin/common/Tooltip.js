import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function CustomTooltip({ children, name }) {
  const renderTooltip = () => <Tooltip id="button-tooltip">{name}</Tooltip>;

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
}

export default CustomTooltip;
