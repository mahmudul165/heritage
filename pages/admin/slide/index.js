import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable, {
  SlideTableTH,
} from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import FetchData from "@/components/admin/common/FetchData";
import { dateFormat } from "@/components/admin/common/Fomater";
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
import { SLIDE_ENDPOINT, useSlideCollectionQuery } from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdAddCircleOutline } from "react-icons/md";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });

  // try {
  //   await axios.post(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/slide`, {
  //     ...data,
  //   });
  //   toast.success("Slide successfully added!");
  // } catch (err) {
  //   toast.error(getError(err));
  // }
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/slide`, 
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

const AddSlideFrom = () => {
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
      <div className="text-center  ele-center   mb-3  card border-0">
        {imgbbUrl && <img src={imgbbUrl} alt="Preview" width="280px" />}
      </div>

      {!imgbbUrl && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={false}
            note="Maximum width = 2500px, height = 1200px"
          />

          {myFiles.length > 0 && (
            <button
              type="button"
              onClick={() => {
                confirmImg();
              }}
              className="mt-2 mb-3 btn border-primary"
            >
              Upload File
            </button>
          )}
        </div>
      )}
      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        {imgbbUrl && (
          <CustomFloatingLabel labelName="Past Image URL">
            <Form.Control
              type="text"
              value={imgbbUrl}
              placeholder="Past image URL ?"
              {...register("image", {
                pattern: {
                  value: acceptPattern,
                  message: "Invalid input ",
                },

                required: "Past Image URL",
              })}
            />
            {errors.image && (
              <p className="text-danger">{errors.image.message}</p>
            )}
          </CustomFloatingLabel>
        )}

        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Title ">
              <Form.Control
                type="text"
                placeholder="Enter slide title ?"
                {...register("title", {
                  required: "Please title is  required",
                  maxLength: {
                    value: 100,
                    message: "Input too large !, maximum length 100",
                  },
                })}
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Path Name ">
              <Form.Control
                type="text"
                placeholder="Enter path name?"
                {...register("pathName", {
                  required: "Please path name required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.pathName && (
                <p className="text-danger">{errors.pathName.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Alt Text ">
              <Form.Control
                type="text"
                placeholder="Enter alt text ? "
                {...register("altText", {
                  maxLength: {
                    value: 20,
                    message: "Input too large !, maximum length 20",
                  },
                })}
              />
              {errors.altText && (
                <p className="text-danger">{errors.altText.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Description">
              <Form.Control
                type="text"
                placeholder="Enter description ?"
                {...register("description", {
                  maxLength: {
                    value: 2200,
                    message: "Input too large !, maximum length 2200",
                  },
                })}
              />
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
        </div>

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  bg-primary  mt-3 w-100"
          >
            Add Slide
          </MyButton>
        </div>
      </Form>
    </>
  );
};
const UpdateSlideFrom = ({ updateId }) => {
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
  const removeImgHandler = () => {
    setFormData({
      ...formData,
      image: "",
    });
  };
  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, SLIDE_ENDPOINT, setFormData);
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
      await axios.patch(`${SLIDE_ENDPOINT}/${updateId}`, {
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
            note="Maximum width = 2500px, height = 1200px"
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
      <Form method="POST" onSubmit={handleSubmit(updateHandler)}>
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            name="image"
            value={formData?.image}
            autoFocus
            placeholder="Past image URL ?"
            {...register("image", {
              pattern: {
                value: acceptPattern,
                message: "Invalid input ",
              },

              required: "Past Image URL",
            })}
            onChange={handleInputChange}
          />
          {errors.image && (
            <p className="text-danger">{errors.image.message}</p>
          )}
        </CustomFloatingLabel>

        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Title ">
              <Form.Control
                type="text"
                placeholder="Enter slide title ?"
                value={formData?.title}
                {...(formData?.title === ""
                  ? {
                      ...register("title", {
                        required: "Please title is  required",
                        maxLength: {
                          value: 100,
                          message: "Input too large !, maximum length 100",
                        },
                      }),
                    }
                  : {
                      ...register("title", {
                        maxLength: {
                          value: 100,
                        },
                      }),
                    })}
                onChange={handleInputChange}
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Path Name ">
              <Form.Control
                type="text"
                placeholder="Enter path name?"
                value={formData?.pathName}
                {...(formData?.pathName === ""
                  ? {
                      ...register("pathName", {
                        required: "Please path name required",
                        maxLength: {
                          value: 30,
                          message: "Input too large !, maximum length 30",
                        },
                      }),
                    }
                  : {
                      ...register("pathName", {
                        maxLength: {
                          value: 30,
                          message: "Input too large !, maximum length 30",
                        },
                      }),
                    })}
                onChange={handleInputChange}
              />
              {errors.pathName && (
                <p className="text-danger">{errors.pathName.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Alt Text ">
              <Form.Control
                type="text"
                placeholder="Enter alt text ? "
                value={formData?.altText}
                {...register("altText", {
                  maxLength: {
                    value: 20,
                    message: "Input too large !, maximum length 20",
                  },
                })}
                onChange={handleInputChange}
              />
              {errors.altText && (
                <p className="text-danger">{errors.altText.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Description">
              <Form.Control
                type="text"
                placeholder="Enter description ?"
                value={formData?.description}
                {...register("description", {
                  maxLength: {
                    value: 2200,
                    message: "Input too large !, maximum length 2200",
                  },
                })}
                onChange={handleInputChange}
              />
              {errors.description && (
                <p className="text-danger">{errors.description.message}</p>
              )}
            </CustomFloatingLabel>
          </div>
        </div>

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  bg-primary  mt-3 w-100"
          >
            Update Slide
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function SlideHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [singleViewModal, setSingleViewModal] = useState(false);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const { data: slide, isLoading, isError } = useSlideCollectionQuery();
  const { deleteData, apiUrl } = useAuth();
  // console.log({ slide });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add Slide"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddSlideFrom />
      </CustomModal>
      <SingleView
        show={singleViewModal}
        onHide={() => setSingleViewModal(false)}
        getId={getId}
        apiURL={SLIDE_ENDPOINT}
      />
      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateSlideFrom updateId={getId} />
      </CustomModal>
      <PageHeader
        name="Slide"
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
              {SlideTableTH &&
                SlideTableTH.map((header, index) => (
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

            {slide &&
              slide.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el.title}</td>
                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={el.image} width="60px" alt={el.altText} />
                  </td>
                  <td>{el.pathName}</td>
                  <td>
                    {el.description?.length > 20
                      ? el.description?.substring(0, 20) + "..."
                      : el?.description}
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
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.slide}/${el?._id}`
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

export default SlideHomePage;

SlideHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
