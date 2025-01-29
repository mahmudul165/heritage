import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { PressTableTH } from "@/components/admin/common/CustomTable";
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
import { PRESS_ENDPOINT, usePressCollectionQuery } from "@/lib/hook/useApi";
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
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press`, {
  //     ...data,
  //   });
  //   toast.success("Press releases post successfully added!");
  // } catch (err) {
  //   toast.error(getError(err));
  // }
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/press`, 
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

const AddPressFrom = () => {
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
            note="Maximum width = 530px, height = 300px"
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
            Add Press Releases
          </MyButton>
        </div>
      </Form>
    </>
  );
};

// const UpdatePressFrom = ({ updateId }) => {
//   const [formData, setFormData] = useState({});

//   console.log("id", `${PRESS_ENDPOINT}/${updateId}`);

//   useEffect(() => {
//     if (updateId !== null) {
//       FetchData(updateId, PRESS_ENDPOINT, setFormData);
//     }
//   }, [updateId]);
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log({ name, value });

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   console.log({ formData });

//   const updateHandler = async () => {
//     try {
//       await axios.patch(`${PRESS_ENDPOINT}/${updateId}`, {
//         ...formData,
//       });
//       toast.success("Update successfully!");
//     } catch (err) {
//       toast.error(getError(err));
//     }
//   };

//   const {
//     handleSubmit,
//     register,
//     getValues,
//     formState: { errors },
//   } = useForm();
//   return (
//     <>
//       <div className="text-center  ele-center   mb-3  card border-0">
//         <img src={formData?.image} alt="Preview" width="280px" />
//       </div>
//       <Form onSubmit={handleSubmit(updateHandler)}>
//         <CustomFloatingLabel labelName="Past Image URL">
//           <Form.Control
//             type="text"
//             placeholder="Past image URL ?"
//             value={formData.image}
//             {...(formData?.image === ""
//               ? {
//                   ...register("image", {
//                     pattern: {
//                       value: acceptPattern,
//                       message: "Invalid input ",
//                     },

//                     required: "Past Image URL",
//                   }),
//                 }
//               : {
//                   ...register("image", {
//                     pattern: {
//                       value: acceptPattern,
//                       message: "Invalid input ",
//                     },
//                   }),
//                 })}
//             onChange={handleInputChange}
//           />
//           {errors.image && (
//             <p className="text-danger">{errors.image.message}</p>
//           )}
//         </CustomFloatingLabel>
//         <CustomFloatingLabel labelName="Title ">
//           <Form.Control
//             type="text"
//             placeholder="Enter slide title ?"
//             value={formData?.title}
//             {...(formData?.title === ""
//               ? {
//                   ...register("title", {
//                     required: "Please title is  required",
//                     maxLength: {
//                       value: 100,
//                       message: "Input too large !, maximum length 100",
//                     },
//                   }),
//                 }
//               : {
//                   ...register("title", {
//                     maxLength: {
//                       value: 100,
//                       message: "Input too large !, maximum length 100",
//                     },
//                   }),
//                 })}
//             onChange={handleInputChange}
//           />
//           {errors.title && (
//             <p className="text-danger">{errors.title.message}</p>
//           )}
//         </CustomFloatingLabel>
//         <CustomFloatingLabel labelName="Body">
//           <Form.Control
//             as="textarea"
//             className="py-5 h-25"
//             value={formData?.body}
//             rows={10}
//             placeholder="Enter description..."
//             {...register("body", {
//               maxLength: {
//                 value: 2200,
//                 message: "Input too large!, maximum length 2200",
//               },
//             })}
//             onChange={handleInputChange}
//           />
//           {errors.body && <p className="text-danger">{errors.body.message}</p>}
//         </CustomFloatingLabel>
//         <div className="ele-center ">
//           <MyButton
//             type="submit"
//             size="lg"
//             className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
//           >
//             Update Press Releases
//           </MyButton>
//         </div>
//       </Form>
//     </>
//   );
// };
const UpdatePressFrom = ({ updateId }) => {
  const [formData, setFormData] = useState({});
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");

  const updateData = {
    title: title,
    image: imageUrl,
    body: body,
  };

  // file upload code
  const [myFiles, setMyFiles] = useState([]);
  const handleFileUpload = (fileList) => {
    setMyFiles(fileList);
  };
  const confirmImg = async () => {
    const url = await uploadImgToUrl(myFiles[0]);
    setImageUrl(url);
  };

  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, PRESS_ENDPOINT, setFormData);
      setTitle(formData?.title);
      setImageUrl(formData?.image);
      setBody(formData?.body);
    }
  }, [updateId, formData?.title, formData?.image, formData?.body]);
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${PRESS_ENDPOINT}/${updateId}`, {
        ...updateData,
      });
      toast.success("Update successfully!");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <>
      <div className="  d-flex  justify-content-center p-2 ">
        {imageUrl && (
          <div className="position-relative">
            <img src={imageUrl} className=" p-2" alt="Preview" width="250px" />

            <button
              onClick={() => {
                setImageUrl("");
              }}
              className=" close-img "
            >
              <span>&#10006;</span>
            </button>
          </div>
        )}
      </div>
      {!imageUrl && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={false}
            note="Maximum width = 530px, height = 300px"
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
      <Form
        method="POST"
        onSubmit={(e) => {
          updateHandler(e);
        }}
      >
        <CustomFloatingLabel labelName="Past Image URL">
          <Form.Control
            type="text"
            placeholder="Past image URL ?"
            name="image"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            required
          />
        </CustomFloatingLabel>
        <CustomFloatingLabel labelName="Title ">
          <Form.Control
            type="text"
            placeholder="Enter slide title ?"
            value={title}
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </CustomFloatingLabel>
        <CustomFloatingLabel labelName="Body">
          <Form.Control
            as="textarea"
            className="py-5 h-25"
            value={body}
            rows={10}
            name="body"
            placeholder="Enter description..."
            onChange={(e) => {
              setBody(e.target.value);
            }}
            required
          />
        </CustomFloatingLabel>
        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Update Press Releases
          </MyButton>
        </div>
      </Form>
    </>
  );
};
function PressHomePage() {
  const [modalShow, setModalShow] = useState(false);
  const [singleViewModal, setSingleViewModal] = useState(false);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const { data: press, isLoading, isError } = usePressCollectionQuery();
  const { deleteData, apiUrl } = useAuth();

  console.log({ press });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <AddPressFrom />
      </CustomModal>

      <SingleView
        show={singleViewModal}
        onHide={() => setSingleViewModal(false)}
        getId={getId}
        apiURL={PRESS_ENDPOINT}
      />
      <CustomModal
        name="Update"
        show={updateFormModal}
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdatePressFrom updateId={getId} />
      </CustomModal>
      <PageHeader
        name="Press Releases"
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
              {PressTableTH &&
                PressTableTH.map((header, index) => (
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

            {press &&
              press.map((el, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>

                  <td>{el?.title}</td>

                  <td>
                    <img src={el?.image} width="50px" alt={el.altText} />
                  </td>
                  <td>
                    {el?.body?.substring(0, 10)}
                    {el?.body?.length > 15 ? " More..." : ""}
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
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.press}/${el?._id}`
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
export default PressHomePage;
PressHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
