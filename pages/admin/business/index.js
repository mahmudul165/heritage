import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import CustomTable, {
  BusinessTableTH,
} from "@/components/admin/common/CustomTable";
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
import {
  BUSINESS_ENDPOINT,
  useBuninessCollectionQuery,
} from "@/lib/hook/useApi";
import useAuth from "@/lib/hook/useAuth";
import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const submitHandler = async (data) => {
  console.log({ data });
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/business`, 
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

const AddBusinessFrom = () => {
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
            note="Maximum width = 450px, height = 350px"
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
                  // value: acceptPattern,
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
        <CustomFloatingLabel labelName="Body">
          <Form.Control
            as="textarea"
            className="py-5 h-25"
            rows={10}
            placeholder="Enter description..."
            {...register("body", {
              maxLength: {
                value: 2200,
                message: "Input too large!, maximum length 2200",
              },
            })}
          />

          {errors.body && <p className="text-danger">{errors.body.message}</p>}
        </CustomFloatingLabel>
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Add Business
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
  const removeImgHandler = () => {
    setFormData({
      ...formData,
      image: "",
    });
  };
  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, BUSINESS_ENDPOINT, setFormData);
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
      await axios.patch(`${BUSINESS_ENDPOINT}/${updateId}`, {
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
            note="Maximum width = 450px, height = 350px"
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
                      message: "Input too large !, maximum length 100",
                    },
                  }),
                })}
            onChange={handleInputChange}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </CustomFloatingLabel>
        <CustomFloatingLabel labelName="Body">
          <Form.Control
            as="textarea"
            className="py-5 h-25"
            value={formData?.body}
            rows={10}
            placeholder="Enter description..."
            {...register("body", {
              maxLength: {
                value: 2200,
                message: "Input too large!, maximum length 2200",
              },
            })}
            onChange={handleInputChange}
          />

          {errors.body && <p className="text-danger">{errors.body.message}</p>}
        </CustomFloatingLabel>
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Update Business
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function BusinessHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [singleViewModal, setSingleViewModal] = useState(false);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const { data: business, isLoading, isError } = useBuninessCollectionQuery();
  const { deleteData, apiUrl } = useAuth();

  // console.log({ business });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddBusinessFrom />
      </CustomModal>

      <SingleView
        show={singleViewModal}
        onHide={() => setSingleViewModal(false)}
        getId={getId}
        apiURL={BUSINESS_ENDPOINT}
      />

      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateBusinessFrom updateId={getId} />
      </CustomModal>
      <PageHeader
        name="Business"
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
              {BusinessTableTH &&
                BusinessTableTH.map((header, index) => (
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

            {business &&
              business.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el.title}</td>
                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={el.image} width="40px" alt={el.altText} />
                  </td>
                  <td>
                    {el.body.substring(0, 10)}
                    {el.body.length > 15 ? " More..." : ""}
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
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.business}/${el?._id}`
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
export default BusinessHomePage;
BusinessHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
