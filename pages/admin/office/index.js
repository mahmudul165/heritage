import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { OurOfficeTableTH } from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import FetchData from "@/components/admin/common/FetchData";
import ImageUpload, {
  uploadImgToUrl,
} from "@/components/admin/common/ImagUpload";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import SingleView from "@/components/admin/common/SingleView";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { OFFICES_ENDPOINT, useOfficesCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
import Image from 'next/image';
const submitHandler = async (data) => {
  console.log({ data });
  try {
    await axios.post(OFFICES_ENDPOINT, {
      ...data,
    });
    toast.success(" added successfully !");
  } catch (err) {
    toast.error(getError(err));
  }
  // Helper function to extract error message
  function getError(error) {
    return error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
};

const AddBrandFrom = () => {
  // file upload code
  const [imgbbUrl, setImgbbUrl] = useState(null);
  const [myFiles, setMyFiles] = useState([]);

  const handleFileUpload = (fileList) => {
    setMyFiles(fileList);
  };
  const confirmImg = async () => {
    const url = await uploadImgToUrl(myFiles[0]);
    setImgbbUrl(url);
  };

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <>
      {!imgbbUrl && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={false}
            note="Maximum width = 450px, height = 230px"
          />

          {myFiles.length > 0 && (
            <button
              type="button"
              onClick={() => {
                confirmImg();
              }}
              className="mt-2 btn border-primary"
            >
              Upload File
            </button>
          )}
        </div>
      )}

      <div className="text-center  ele-center   mb-3  card border-0">
        {imgbbUrl && <img src={imgbbUrl} alt="Preview" width="280px" />}
      </div>

      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        {imgbbUrl && (
          <CustomFloatingLabel labelName="Past Image URL">
            <Form.Control
              type="text"
              name="image"
              placeholder="Past image URL ?"
              value={imgbbUrl}
              {...register("image", {
                required: "Past Image URL",

                pattern: {
                  // value: acceptPattern,
                  message: "Invalid input ",
                },
              })}
            />
            {errors.image && (
              <p className="text-danger">{errors.image.message}</p>
            )}
          </CustomFloatingLabel>
        )}
        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Name ">
              <Form.Control
                type="text"
                autoFocus
                placeholder="Enter job name ?"
                {...register("name", {
                  required: "Please name is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="EmailAddress">
              <Form.Control
                type="text"
                placeholder="Enter email ?"
                {...register("email", {
                  required: "Please add email  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Phone ">
              <Form.Control
                type="tel"
                placeholder="Enter slide title ?"
                {...register("phone", {
                  required: "Please phone number  required",
                  maxLength: {
                    value: 20,
                    message: "Input too large !, maximum length 20",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
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
          </div>
        </div>
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Add Office
          </MyButton>
        </div>
      </Form>
    </>
  );
};

const UpdateBusinessFrom = ({ updateId }) => {
  const [formData, setFormData] = useState({});
  // file upload code
  const [myFiles, setMyFiles] = useState([]);
  const handleFileUpload = (fileList) => {
    setMyFiles(fileList);
  };
  const confirmImg = async () => {
    const url = await uploadImgToUrl(myFiles[0]);
    setFormData({
      ...formData,
      image: url,
    });
  };

  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, OFFICES_ENDPOINT, setFormData);
    }
  }, [updateId]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const removeImgHandler = () => {
    setFormData({
      ...formData,
      image: "",
    });
  };
  const updateHandler = async () => {
    try {
      await axios.patch(`${OFFICES_ENDPOINT}/${updateId}`, {
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
    <>
      <div className="  d-flex  justify-content-center p-2 ">
        {formData?.image && (
          <div className="position-relative">
            <img
              src={formData?.image}
              className=" p-2"
              alt="Preview"
              width="250px"
            />

            <button
              onClick={() => {
                removeImgHandler();
              }}
              className=" close-img "
            >
              <span>&#10006;</span>
            </button>
          </div>
        )}
      </div>

      {!formData?.image && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={false}
            note="Maximum width = 450px, height = 230px"
          />

          {myFiles.length > 0 && (
            <button
              type="button"
              onClick={() => {
                confirmImg();
              }}
              className="my-3 btn border-primary text-secondary"
            >
              Upload File
            </button>
          )}
        </div>
      )}

      <Form onSubmit={handleSubmit(updateHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            name="image"
            value={formData.image}
            placeholder="Past image URL ?"
            {...register("image", {
              pattern: {
                // value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
            autoFocus
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </CustomFloatingLabel>

        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Name ">
              <Form.Control
                type="text"
                placeholder="Enter  name ?"
                value={formData?.name}
                {...(formData?.name === ""
                  ? {
                      ...register("name", {
                        required: "Please name is  required",
                        maxLength: {
                          value: 30,
                          message: "Input too large !, maximum length 30",
                        },
                      }),
                    }
                  : {
                      ...register("name", {
                        maxLength: {
                          value: 30,
                          message: "Input too large !, maximum length 30",
                        },
                      }),
                    })}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="EmailAddress">
              <Form.Control
                type="text"
                placeholder="Enter email ?"
                value={formData?.email}
                {...(formData?.email === ""
                  ? {
                      ...register("email", {
                        required: "Please add email  required",
                        maxLength: {
                          value: 50,
                          message: "Input too large !, maximum length 50",
                        },
                      }),
                    }
                  : {
                      ...register("email", {
                        maxLength: {
                          value: 50,
                          message: "Input too large !, maximum length 50",
                        },
                      }),
                    })}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Phone ">
              <Form.Control
                type="tel"
                placeholder="Enter slide title ?"
                value={formData?.phone}
                {...(formData?.phone === ""
                  ? {
                      ...register("phone", {
                        required: "Please phone number  required",
                        maxLength: {
                          value: 20,
                          message: "Input too large !, maximum length 20",
                        },
                      }),
                    }
                  : {
                      ...register("phone", {
                        maxLength: {
                          value: 20,
                          message: "Input too large !, maximum length 20",
                        },
                      }),
                    })}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
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
          </div>
        </div>

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Update Office
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function OurBrandHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [singleViewModal, setSingleViewModal] = useState(false);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const { data: brands, isLoading, isError } = useOfficesCollectionQuery();
  const { deleteData, apiUrl } = useAuth();

  console.log({ brands });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddBrandFrom />
      </CustomModal>

      <SingleView
        show={singleViewModal}
        onHide={() => setSingleViewModal(false)}
        getId={getId}
        apiURL={OFFICES_ENDPOINT}
      />
      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateBusinessFrom updateId={getId} />
      </CustomModal>
      <PageHeader
        name="Our Offices"
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
              {OurOfficeTableTH &&
                OurOfficeTableTH.map((header, index) => (
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

            {brands &&
              brands.map((el, index) => (  console.log('offices info:',el),
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el?.name}</td>
                  <td>{el?.phone}</td>
                  <td>{el?.email}</td>
                  <td>
                    {el.location?.length > 20
                      ? el.location?.substring(0, 30) + "..."
                      : el?.location}
                  </td>

                  <td>
                    <img src={el.image} width="50px" alt={el.altText} />  
                  </td>

                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span
                        onClick={() => {
                          setId(el._id), setSingleViewModal(true);
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
                          deleteData(`${OFFICES_ENDPOINT}/${el?._id}`)
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
export default OurBrandHomePage;
OurBrandHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
