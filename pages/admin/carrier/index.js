import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable, {
  CarrierTableTH,
} from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import FetchData from "@/components/admin/common/FetchData";
import { CustomFloatingLabel } from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import { MyButton } from "@/components/common/Buttons";
import SingleJobPost from "@/components/common/SingleJobPost";
import PrivateRoute from "@/components/PrivateRoute";
import { CARRIER_ENDPOINT, useCarrierCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
const submitHandler = async (data) => {
  console.log({ data });

  // try {
  //   await axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/carrier`, 
  //     {
  //       ...data,
  //     }
  //   );
  //   toast.success("Job Post successfully added!");
  // } catch (err) {
  //   toast.error(getError(err));
  // }
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/carrier`, 
      {
        ...data,  // Include business data
      }
    );
    toast.success("Business Post successfully added!");
  } catch (err) {
    toast.error(getError(err));  // Display error if request fails
  }
  
  // Helper function to extract error message
  function getError(error) {
    return error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
  
};
const AddJobPostFrom = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
      <div className="row">
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Job Title ">
            <Form.Control
              type="text"
              autoFocus
              placeholder="Enter job title ?"
              {...register("jobTitle", {
                required: "Please title is  required",
                maxLength: {
                  value: 30,
                  message: "Input too large !, maximum length 30",
                },
              })}
            />
            {errors.jobTitle && (
              <p className="text-danger">{errors.jobTitle.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Location ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              {...register("location", {
                required: "Please add location  required",
                maxLength: {
                  value: 100,
                  message: "Input too large !, maximum length 100",
                },
              })}
            />
            {errors.location && (
              <p className="text-danger">{errors.location.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Deadline ">
            <Form.Control
              type="text"
              placeholder="Enter deadline ?"
              {...register("deadline", {
                required: "Please add deadline  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.deadline && (
              <p className="text-danger">{errors.deadline.message}</p>
            )}
          </CustomFloatingLabel>
        </div>
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Vacancy ">
            <Form.Control
              type="number"
              placeholder="Enter slide title ?"
              {...register("vacancy", {
                required: "Please vacancy number  required",
                maxLength: {
                  value: 5,
                  message: "Input too large !, maximum length 5",
                },
              })}
            />
            {errors.vacancy && (
              <p className="text-danger">{errors.vacancy.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Salary ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              {...register("salary", {
                required: "Please add salary  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.salary && (
              <p className="text-danger">{errors.salary.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Job Type">
            <Form.Control
              type="text"
              placeholder="Enter Time ?"
              {...register("time", {
                required: "Please add Job type  required",
                maxLength: {
                  value: 50,
                  message: "Input too large !, maximum length 50",
                },
              })}
            />
            {errors.time && (
              <p className="text-danger">{errors.time.message}</p>
            )}
          </CustomFloatingLabel>
        </div>
      </div>
      <div className="ele-center ">
        <MyButton
          type="submit"
          size="lg"
          className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
        >
          Add Job Post
        </MyButton>
      </div>
    </Form>
  );
};
const UpdateJobPostFrom = ({ updateId }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, CARRIER_ENDPOINT, setFormData);
    }
  }, [updateId]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const updateHandler = async () => {
    try {
      await axios.patch(`${CARRIER_ENDPOINT}/${updateId}`, {
        ...formData,
      });
      toast.success("Update successfully!");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <Form method="POST" onSubmit={handleSubmit(updateHandler)}>
      <div className="row">
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Job Title ">
            <Form.Control
              type="text"
              autoFocus
              placeholder="Enter job title ?"
              {...register("jobTitle", {
                required: "Please title is  required",
                maxLength: {
                  value: 30,
                  message: "Input too large !, maximum length 30",
                },
              })}
              value={formData?.jobTitle}
              onChange={handleInputChange}
            />
            {errors.jobTitle && (
              <p className="text-danger">{errors.jobTitle.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Location ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              value={formData?.location}
              {...(formData?.location === ""
                ? {
                    ...register("location", {
                      required: "Please add location  required",
                      maxLength: {
                        value: 100,
                        message: "Input too large !, maximum length 100",
                      },
                    }),
                  }
                : {
                    ...register("location", {
                      maxLength: {
                        value: 100,
                        message: "Input too large !, maximum length 100",
                      },
                    }),
                  })}
              onChange={handleInputChange}
            />
            {errors.location && (
              <p className="text-danger">{errors.location.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Dateline ">
            <Form.Control
              type="text"
              placeholder="Enter deadline ?"
              value={formData?.deadline}
              {...(formData?.deadline === ""
                ? {
                    ...register("deadline", {
                      required: "Please add deadline  required",
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  }
                : {
                    ...register("deadline", {
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  })}
              onChange={handleInputChange}
            />
            {errors.deadline && (
              <p className="text-danger">{errors.deadline.message}</p>
            )}
          </CustomFloatingLabel>
        </div>
        <div className="col-md-6">
          <CustomFloatingLabel labelName="Vacancy ">
            <Form.Control
              type="number"
              placeholder="Enter slide title ?"
              value={formData?.vacancy}
              {...(formData?.vacancy === ""
                ? {
                    ...register("vacancy", {
                      required: "Please vacancy number  required",
                      maxLength: {
                        value: 5,
                        message: "Input too large !, maximum length 5",
                      },
                    }),
                  }
                : {
                    ...register("vacancy", {
                      maxLength: {
                        value: 5,
                        message: "Input too large !, maximum length 5",
                      },
                    }),
                  })}
              onChange={handleInputChange}
            />
            {errors.vacancy && (
              <p className="text-danger">{errors.vacancy.message}</p>
            )}
          </CustomFloatingLabel>

          <CustomFloatingLabel labelName="Salary ">
            <Form.Control
              type="text"
              placeholder="Enter location ?"
              value={formData?.salary}
              {...(formData?.salary === ""
                ? {
                    ...register("salary", {
                      required: "Please add salary  required",
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  }
                : {
                    ...register("salary", {
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  })}
              onChange={handleInputChange}
            />
            {errors.salary && (
              <p className="text-danger">{errors.salary.message}</p>
            )}
          </CustomFloatingLabel>
          <CustomFloatingLabel labelName="Job Type">
            <Form.Control
              type="text"
              placeholder="Enter Time ?"
              value={formData?.time}
              {...(formData?.time === ""
                ? {
                    ...register("time", {
                      required: "Please add Job type  required",
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  }
                : {
                    ...register("time", {
                      maxLength: {
                        value: 50,
                        message: "Input too large !, maximum length 50",
                      },
                    }),
                  })}
              onChange={handleInputChange}
            />
            {errors.time && (
              <p className="text-danger">{errors.time.message}</p>
            )}
          </CustomFloatingLabel>
        </div>
      </div>
      <div className="ele-center ">
        <MyButton
          type="submit"
          size="lg"
          className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
        >
          Update Job Post
        </MyButton>
      </div>
    </Form>
  );
};
function CarrierHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowSingleJobPost, setModalShowSingleJobPost] = useState(false);
  const { data: carrier, isLoading, isError } = useCarrierCollectionQuery();
  const { deleteData, apiUrl } = useAuth();
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);

  console.log({ carrier });

  return (
    <PrivateRoute>
      <CustomModal
        name="Carrier"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddJobPostFrom />
      </CustomModal>
      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateJobPostFrom updateId={getId} />
      </CustomModal>
      <SingleJobPost
        show={modalShowSingleJobPost}
        onHide={() => setModalShowSingleJobPost(false)}
        getId={getId}
      />

      <PageHeader
        name="Carrier"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {CarrierTableTH &&
                CarrierTableTH.map((header, index) => (
                  <th scope="col" key={index}>
                    {header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className="fs-6 fw-normal">
            {isLoading && (
              <div class="spinner-border text-center" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}

            {carrier &&
              carrier.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td>{el?.jobTitle}</td>
                  <td>{el?.vacancy}</td>
                  <td>{el?.location || "Empty"}</td>
                  <td>{el?.salary}</td>
                  <td>{el?.deadline || "Empty"}</td>
                  <td>{el?.time}</td>

                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span
                        onClick={() => {
                          setId(el._id), setModalShowSingleJobPost(true);
                        }}
                      >
                        <AiOutlineEye size={18} className="text-success" />
                      </span>
                      <span
                        onClick={() => {
                          setId(el._id), setUpdateFormModal(true);
                        }}
                      >
                        <FiEdit size={15} className="text-warning" />
                      </span>
                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.carrier}/${el?._id}`
                          )
                        }
                      >
                        <AiOutlineDelete size={16} className="text-danger" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </PrivateRoute>
  );
}

export default CarrierHomePage;

CarrierHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
