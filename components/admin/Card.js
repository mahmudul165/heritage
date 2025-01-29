import { MdCallMade } from "react-icons/md";

function Card({ name, number, bgColor, path }) {
//   console.log("first bg", bgColor);
  return (
    <>
      
      {bgColor ? (
        <a
          href={`${path ? path : "/dashboard"}`}
          className="text-decoration-none"
        >
          <div
            className={`card border-0 shadow-sm rounded-lg ${bgColor}`}
            style={{ height: "100%" }}
          >
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-end">
              <MdCallMade className="fs-1 fw-bolder bg-white  p-2    rounded-circle " />{" "}
              </div>
              <h3 className="card-title text-white fs-4 fw-bold text-center">
                {number ? number : 0}
              </h3>
              <p className="card-text text-white fs-6 fw-bold text-center">
                {name}
              </p>
             

               
            </div>
            <div className="text-center"> <hr className="divider fs-1 fw-bolder p-0 mt-0" />
             <span className="badge text-center">{name}</span>
             </div>
          </div>
        </a>
      ) : (
        <>empty</>
      )}
       
    </>
  );
}

export default Card;
