import { AddButton } from "@/components/admin/common/Buttons";
import CustomModal from "@/components/admin/common/CustomModal";
import { ProductTableTH } from "@/components/admin/common/CustomTable";
import { getError } from "@/components/admin/common/error";
import FetchData from "@/components/admin/common/FetchData";
import { dateFormat, dateFormatDSC } from "@/components/admin/common/Fomater";
import ImageUpload, {
  uploadImgToUrl,
} from "@/components/admin/common/ImagUpload";
import {
  acceptPattern,
  CustomFloatingLabel,
} from "@/components/admin/common/Inputes";
import { PageHeader } from "@/components/admin/common/PageHeader";
import SingleProductView from "@/components/admin/common/SingleProductView";
import { MyButton } from "@/components/common/Buttons";
import PrivateRoute from "@/components/PrivateRoute";
import { PRODUCT_ENDPOINT, useProductCollectionQuery } from "@/lib/hook/useApi";
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
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product`,
  //         {
  //       ...data,
  //     }
  //   );
  //   toast.success("Product Post successfully added!");
  // } catch (err) {
  //   toast.error(getError(err));
  // }
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product`, 
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
export const AddProductFrom = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlTwo, setImageUrTwo] = useState("");
  const [imageUrlThree, setImageUrThree] = useState("");
  // file upload code
  const [myFiles, setMyFiles] = useState([]);
  const handleFileUpload = (fileList) => {
    setMyFiles(fileList);
  };

  const confirmImg = async () => {
    if (myFiles.length < 3) {
      toast.error("Minimum choose 3 image  required");
      return false;
    }
    const url = await uploadImgToUrl(myFiles[0]);
    const urlTwo = await uploadImgToUrl(myFiles[1]);
    const urlThree = await uploadImgToUrl(myFiles[2]);
    setImageUrl(url);
    setImageUrTwo(urlTwo);
    setImageUrThree(urlThree);
  };
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <>
      {!imageUrl && !imageUrlTwo && !imageUrlThree && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={true}
            note="Maximum width = 150px, height = 190px"
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
      <div className="  d-flex  justify-content-around gap-3 p-3 ">
        {imageUrl && <img src={imageUrl} alt="Preview" width="120px" />}
        {imageUrlTwo && <img src={imageUrlTwo} alt="Preview" width="120px" />}
        {imageUrlThree && (
          <img src={imageUrlThree} alt="Preview" width="120px" />
        )}
      </div>
      <Form method="POST" onSubmit={handleSubmit(submitHandler)}>
        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Product Name ">
              <Form.Control
                type="text"
                placeholder="Enter product name ?"
                {...register("name", {
                  required: "Please name is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
                autoFocus
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Amount ">
              <Form.Control
                type="text"
                placeholder="Enter slide discountAmount ?"
                {...register("discount[amount]", {
                  required: "Please Discount amount is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.discountAmount && (
                <p className="text-danger">{errors.discountAmount.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Type ">
              <Form.Control
                as="select"
                {...register("discount[type]", {
                  required: "Please select a Discount Type",
                })}
              >
                <option value="">Select Discount Type</option>
                {["percentage", "fixed"].map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
              {errors.discount?.type && (
                <p className="text-danger">{errors.discount.type.message}</p>
              )}
              {/* <Form.Control
                type="text"
                placeholder="Enter slide discountType ?"
                {...register("discount[type]", {
                  required: "Please discount type is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.discountType && (
                <p className="text-danger">{errors.discountType.message}</p>
              )} */}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Stock Status ">
              <Form.Control
                as="select"
                {...register("stockStatus", {
                  required: "Please select a Stock Status",
                })}
              >
                <option value="">Select Stock Status</option>
                {["in_stock", "out_of_stock", "limited"].map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
              {errors.stockStatus && (
                <p className="text-danger">{errors.stockStatus.message}</p>
              )}
            </CustomFloatingLabel>

            <div>
              {imageUrl && imageUrlTwo && imageUrlThree && (
                <div>
                  <CustomFloatingLabel labelName="Past Image URL One">
                    <Form.Control
                      type="text"
                      name="imageURLOne"
                      placeholder="Image url "
                      value={imageUrl}
                      {...register("images[0][url]", {
                        pattern: {
                          value: acceptPattern,
                          message: "Invalid input ",
                        },

                        required: "Past Image URL",
                      })}
                      onChange={(e) => {
                        setImageUrl(e.target.value);
                      }}
                    />
                    {errors.imageURLOne && (
                      <p className="text-danger">
                        {errors.imageURLOne.message}
                      </p>
                    )}
                  </CustomFloatingLabel>
                  <CustomFloatingLabel labelName="Past Image URL Two">
                    <Form.Control
                      type="text"
                      name="imageURLTwo"
                      placeholder="Image url "
                      value={imageUrlTwo}
                      {...register("images[1][url]", {
                        pattern: {
                          value: acceptPattern,
                          message: "Invalid input ",
                        },
                      })}
                      onChange={(e) => {
                        setImageUrTwo(e.target.value);
                      }}
                    />
                  </CustomFloatingLabel>
                  <CustomFloatingLabel labelName="Past Image URL Three">
                    <Form.Control
                      type="text"
                      name="imageURLThree"
                      placeholder="Image url "
                      value={imageUrlThree}
                      {...register("images[2][url]", {
                        pattern: {
                          value: acceptPattern,
                          message: "Invalid input ",
                        },
                      })}
                      onChange={(e) => {
                        setImageUrThree(e.target.value);
                      }}
                    />
                  </CustomFloatingLabel>
                </div>
              )}
              {!imageUrl && !imageUrlTwo && !imageUrlThree && (
                <p className="text-warning fs-5 mt-5 text-center">
                  Please upload Images
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Category ">
              <Form.Control
                type="text"
                placeholder="Enter  category ?"
                {...register("category", {
                  required: "Please category is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.category && (
                <p className="text-danger">{errors.category.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Price ">
              <Form.Control
                type="text"
                placeholder="Enter  price ?"
                {...register("price", {
                  required: "Please price is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.price && (
                <p className="text-danger">{errors.price.message}</p>
              )}
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Promo Code ">
              <Form.Control
                type="text"
                placeholder="Enter slide promo code ?"
                {...register("promo[code]", {
                  required: "Please promo code is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.promoCode && (
                <p className="text-danger">{errors.promoCode.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Promo Expire Date ">
              <Form.Control
                type="date"
                placeholder="Enter slide promo expire date ?"
                {...register("promo[expiresAt]", {
                  required: "Please promoExpireAt is  required",
                  maxLength: {
                    value: 30,
                    message: "Input too large !, maximum length 30",
                  },
                })}
              />
              {errors.promoExpireAt && (
                <p className="text-danger">{errors.promoExpireAt.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text One ">
              <Form.Control
                type="text"
                placeholder="Enter alt text  ?"
                {...register("images[0][altText]", {
                  required: "Please alt text is  required",
                  maxLength: {
                    value: 50,
                    message: "Input too large !, maximum length 50",
                  },
                })}
              />
              {errors.imageAltTextOne && (
                <p className="text-danger">{errors.imageAltTextOne.message}</p>
              )}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text Two ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                {...register("images[1][altText]", {})}
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Image Alt Text Three ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                {...register("images[2][altText]", {})}
              />
            </CustomFloatingLabel>
          </div>
        </div>

        <CustomFloatingLabel labelName="Description">
          <Form.Control
            as="textarea"
            className="py-5 h-25"
            placeholder="Enter description ?"
            rows={10}
            {...register("description", {
              required: "Please description is  required",

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

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Add Product
          </MyButton>
        </div>
      </Form>
    </>
  );
};

const UpdateProductFrom = ({ updateId }) => {
  const [amount, setAmount] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [stockStatus, setStockStatus] = useState("");

  const [imageUrlOne, setImageUrl] = useState("");
  const [imageUrlTwo, setImageUrlTwo] = useState("");
  const [imageUrlThree, setImageUrlThree] = useState("");
  const [imageUrlOneAltText, setImageUrlAltText] = useState("");
  const [imageUrlTwoAltText, setImageUrTwoAltText] = useState("");
  const [imageUrlThreeAltText, setImageUrThreeAltText] = useState("");

  //
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    discount: {
      amount: "",
      type: "",
    },
    images: [
      {
        url: "",
        altText: "",
      },
      {
        url: "",
        altText: "",
      },
      {
        url: "",
        altText: "",
      },
    ],
    price: "",
    promo: {
      code: "",
      expiresAt: "",
    },
    stockStatus: "",
    description: "",
  });

  //console.log({ formData });

  const updateData = {
    name: formData.name,
    category: formData?.category,
    discount: {
      amount: amount,
      type: discountType,
    },
    images: [
      {
        url: imageUrlOne,
        altText: imageUrlOneAltText,
      },
      {
        url: imageUrlTwo,
        altText: imageUrlTwoAltText,
      },
      {
        url: imageUrlThree,
        altText: imageUrlThreeAltText,
      },
    ],
    price: formData?.price,
    promo: {
      code: promoCode,
      expiresAt: expireDate,
    },
    stockStatus: formData?.stockStatus,
    description: formData?.description,
  };

  // file upload code
  const [myFiles, setMyFiles] = useState([]);
  const handleFileUpload = (fileList) => {
    setMyFiles(fileList);
  };

  function setImgReducer(source) {
    if (imageUrlOne === "") {
      setImageUrl(source);
    } else if (imageUrlTwo === "") {
      setImageUrlTwo(source);
    } else if (imageUrlThree === "") {
      setImageUrlThree(source);
    }
  }
  const confirmImg = async () => {
    if (!imageUrlOne && !imageUrlTwo && !imageUrlThree) {
      if (myFiles[0]) {
        const url = await uploadImgToUrl(myFiles[0]);
        setImageUrl(url);
      }
      if (myFiles[1]) {
        const urlTwo = await uploadImgToUrl(myFiles[1]);
        setImageUrlTwo(urlTwo);
      }
      if (myFiles[2]) {
        const urlThree = await uploadImgToUrl(myFiles[2]);
        setImageUrlThree(urlThree);
      }
    } else if (!imageUrlOne && !imageUrlTwo) {
      if (myFiles[0]) {
        const url = await uploadImgToUrl(myFiles[0]);
        setImageUrl(url);
      }
      if (myFiles[1]) {
        const urlTwo = await uploadImgToUrl(myFiles[1]);
        setImageUrlTwo(urlTwo);
      }
    } else if (!imageUrlOne && !imageUrlThree) {
      if (myFiles[0]) {
        const url = await uploadImgToUrl(myFiles[0]);
        setImageUrl(url);
      }
      if (myFiles[1]) {
        const urlTwo = await uploadImgToUrl(myFiles[1]);
        setImageUrlThree(urlTwo);
      }
    } else if (!imageUrlTwo && !imageUrlThree) {
      if (myFiles[0]) {
        const url = await uploadImgToUrl(myFiles[0]);
        setImageUrlTwo(url);
      }
      if (myFiles[1]) {
        const urlTwo = await uploadImgToUrl(myFiles[1]);
        setImageUrlThree(urlTwo);
      }
    } else if (
      imageUrlOne === "" ||
      imageUrlTwo === "" ||
      imageUrlThree === ""
    ) {
      if (myFiles[0]) {
        const url = await uploadImgToUrl(myFiles[0]);
        setImgReducer(url);
      }
      if (myFiles[1]) {
        const urlTwo = await uploadImgToUrl(myFiles[1]);
        console.log({ urlTwo });

        setImgReducer(urlTwo);
      }
      if (myFiles[2]) {
        const urlThree = await uploadImgToUrl(myFiles[2]);
        console.log({ urlThree });

        setImgReducer(urlThree);
      }
    }
  };

  useEffect(() => {
    if (updateId !== null) {
      FetchData(updateId, PRODUCT_ENDPOINT, setFormData);
      setAmount(formData?.discount?.amount);
      setDiscountType(formData?.discount?.type);
      setPromoCode(formData?.promo?.code);
      setExpireDate(formData?.promo?.expiresAt);
      setStockStatus(formData?.stockStatus);

      setImageUrl(formData?.images[0]?.url);
      setImageUrlTwo(formData?.images[1]?.url);
      setImageUrlThree(formData?.images[2]?.url);

      setImageUrlAltText(formData?.images[0]?.altText);
      setImageUrTwoAltText(formData?.images[1]?.altText);
      setImageUrThreeAltText(formData?.images[2]?.altText);
    }
  }, [
    updateId,

    formData?.discount?.amount,
    // formData.images,

    // formData?.discount?.code,
    // formData?.discount?.type,
    // formData?.promo?.code,
    // formData?.promo?.expiresAt,
    // formData?.stockStatus,
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const updateHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`${PRODUCT_ENDPOINT}/${updateId}`, {
        ...updateData,
      });
      toast.success("Update successfully!");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <>
      <div className="  d-flex  justify-content-around gap-3 p-3 ">
        {imageUrlOne && (
          <div className="position-relative">
            <img
              src={imageUrlOne}
              className=" p-2"
              alt="Preview"
              width="120px"
            />

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

        {imageUrlTwo && (
          <div className="position-relative">
            <img
              src={imageUrlTwo}
              className=" p-2"
              alt="Preview"
              width="120px"
            />

            <button
              onClick={() => {
                setImageUrlTwo("");
              }}
              className=" close-img "
            >
              <span>&#10006;</span>
            </button>
          </div>
        )}
        {imageUrlThree && (
          <div className="position-relative">
            <img
              src={imageUrlThree}
              className=" p-2"
              alt="Preview"
              width="120px"
            />

            <button
              onClick={() => {
                setImageUrlThree("");
              }}
              className=" close-img "
            >
              <span>&#10006;</span>
            </button>
          </div>
        )}
      </div>

      {(!imageUrlOne || !imageUrlTwo || !imageUrlThree) && (
        <div>
          <ImageUpload
            files={myFiles}
            onUpload={handleFileUpload}
            multiple={true}
            note="Maximum width = 150px, height = 190px"
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
        onSubmit={(event) => {
          updateHandler(event);
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Product Name ">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter product name ?"
                value={formData?.name}
                onChange={handleInputChange}
                autoFocus
                required
              />
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Amount ">
              <Form.Control
                type="text"
                name="amount"
                placeholder="Enter slide discountAmount ?"
                value={amount}
                required
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              {/* {errors.discountAmount && (
                <p className="text-danger">{errors.discountAmount.message}</p>
              )} */}
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Discount Type ">
              <Form.Control
                as="select"
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value)}
                required
              >
                <option value="">Select Discount Type</option>
                {["percentage", "fixed"].map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Stock Status ">
              <Form.Control
                as="select"
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
                required
              >
                <option value="">Select Stock Status</option>
                {["in_stock", "out_of_stock", "limited"].map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </Form.Control>
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Past Image URL One">
              <Form.Control
                type="text"
                name="imageURLOne"
                placeholder="Image url "
                value={imageUrlOne}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Past Image URL Two">
              <Form.Control
                type="text"
                name="imageURLTwo"
                placeholder="Image url "
                value={imageUrlTwo}
                onChange={(e) => setImageUrlTwo(e.target.value)}
                required
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Past Image URL Three">
              <Form.Control
                type="text"
                name="imageURLThree"
                placeholder="Image url "
                value={imageUrlThree}
                onChange={(e) => setImageUrlThree(e.target.value)}
                required
              />
            </CustomFloatingLabel>
          </div>
          <div className="col-md-6">
            <CustomFloatingLabel labelName="Category ">
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter  category ?"
                value={formData?.category}
                onChange={handleInputChange}
                required
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Price ">
              <Form.Control
                type="text"
                name="price"
                placeholder="Enter  price ?"
                value={formData?.price}
                onChange={handleInputChange}
                required
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Promo Code ">
              <Form.Control
                type="text"
                name="code"
                placeholder="Enter slide promo code ?"
                value={promoCode}
                onChange={(e) => {
                  setPromoCode(e.target.value);
                }}
                required
              />
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Promo Expire Date ">
              <Form.Control
                type="date"
                name="expiresAt"
                placeholder="Enter slide promo expire date ?"
                value={dateFormatDSC(expireDate)}
                // value="2023-04-02"

                onChange={(e) => {
                  setExpireDate(e.target.value);
                }}
              />
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text One ">
              <Form.Control
                type="text"
                placeholder="Enter alt text  ?"
                value={imageUrlOneAltText}
                onChange={(e) => setImageUrlAltText(e.target.value)}
                required
              />
            </CustomFloatingLabel>

            <CustomFloatingLabel labelName="Image Alt Text Two ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                value={imageUrlTwoAltText}
                onChange={(e) => setImageUrTwoAltText(e.target.value)}
                required
              />
            </CustomFloatingLabel>
            <CustomFloatingLabel labelName="Image Alt Text Three ">
              <Form.Control
                type="text"
                placeholder="Enter alt text   ?"
                value={imageUrlThreeAltText}
                onChange={(e) => setImageUrThreeAltText(e.target.value)}
                required
              />
            </CustomFloatingLabel>
          </div>
        </div>

        <CustomFloatingLabel labelName="Description">
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description ?"
            value={formData?.description}
            onChange={handleInputChange}
            required
          />
        </CustomFloatingLabel>

        <div className="ele-center ">
          <MyButton
            type="submit"
            size="lg"
            className=" text-white  cus-bg-secondary  mt-3 w-100 bg-primary"
          >
            Update Product
          </MyButton>
        </div>
      </Form>
    </>
  );
};

function ProductsHomePage() {
  const { deleteData, apiUrl } = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [modalShowTwo, setModalShowTwo] = useState(false);
  const { data: product, isLoading, isError } = useProductCollectionQuery();
  const [productId, setProductId] = useState(null);
  const [updateFormModal, setUpdateFormModal] = useState(false);
  const [getId, setId] = useState(null);
  const products = product?.products.sort(
    (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
  );
  console.log({ productId });

  return (
    <PrivateRoute>
      <CustomModal
        name="Add Product"
        show={modalShow}
        size="xl"
        onHide={() => setModalShow(false)}
      >
        <AddProductFrom />
      </CustomModal>

      <SingleProductView
        show={modalShowTwo}
        onHide={() => setModalShowTwo(false)}
        getProductId={productId}
      />
      <CustomModal
        name="Update"
        show={updateFormModal}
        size="xl"
        onHide={() => setUpdateFormModal(false)}
      >
        <UpdateProductFrom updateId={getId} />
      </CustomModal>

      <PageHeader
        name="Products"
        btn={
          <AddButton
            name="Add"
            callFun={() => {
              setModalShow(true);
            }}
          />
        }
      />

      {/* <CustomTable tableName="Products Table" headers={ProductTableTH} /> */}

      <div className="border rounded-3 p-4 cus-table shadow-sm bg-white">
        <table className="table text-center">
          <thead>
            <tr className="fs-6">
              {ProductTableTH &&
                ProductTableTH.map((header, index) => (
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

            {products &&
              products?.map((product, index) => (
                <tr key={index}>
                  <td> {index + 1}</td>
                  <td> {dateFormat(product.createdOn)}</td>
                  <td>{product?.category}</td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                  <td>
                    {/* <span className="bg-info p-2 fw-bold text-white rounded-lg">
                      Open
                    </span> */}
                    <img src={product.images[0].url} width="30px" />
                  </td>
                  <td>{product?.discount?.amount}</td>
                  <td>{product?.promo?.code}</td>
                  <td>{product?.quantity || "0"}</td>
                  <td>{product?.stockStatus}</td>
                  <td className="">
                    <div className="d-flex justify-content-center gap-2">
                      <span>
                        <AiOutlineEye
                          size={18}
                          className="text-success"
                          onClick={() => {
                            setProductId(product?._id), setModalShowTwo(true);
                          }}
                        />
                      </span>
                      <span
                        onClick={() => {
                          setId(product._id), setUpdateFormModal(true);
                        }}
                      >
                        <FiEdit size={15} className="text-warning" />
                      </span>
                      <span
                        onClick={() =>
                          deleteData(
                            `${apiUrl.apiRootUrl}/${apiUrl.apiEndpoint?.product}/${product?._id}`
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

export default ProductsHomePage;

ProductsHomePage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
