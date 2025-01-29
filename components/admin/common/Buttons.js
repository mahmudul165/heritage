const { MdAddCircleOutline } = require("react-icons/md");

export const AddButton = ({ name, callFun }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-lg fs-5 border  d-flex justify-content-between gap-4 align-items-center px-3 fw-bold bg-primary text-white"
        onClick={() => {
          callFun();
        }}
      >
        <MdAddCircleOutline size={24} />
        <span>{name || "Add"}</span>
      </button>
    </>
  );
};
