const { AddButton } = require("./Buttons");

export const PageHeader = ({ name, data, btn }) => {
  return (
    <div className="card my-4 py-2 px-4 border border-white rounded-3 bg-light">
      <div className=" d-flex justify-content-between my-1">
        <h2>{name}</h2>

        <div>{btn}</div>
      </div>
    </div>
  );
};
