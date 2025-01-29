import axios from "axios";
import { useState  } from "react"; 
import { toast } from "react-toastify";
import Swal from "sweetalert2";





const useGlobal = () => { 
  
  const [token, setToken] = useState("");  
  const [email, setEmail] = useState("");
  const [items, setItems] = useState(""); 
  const [status, setLoginstatus] = useState(false);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("token");     
  //   const name = localStorage.getItem("name");
  //   const info = localStorage.getItem("token");  
  //   const value = localStorage.getItem("isLogin")  
  //   if (jwt) {
  //     setToken(jwt);     
  //     setUsername(name);
  //     setItems(info);
  //     setLoginstatus(value);      
  //   }
  // }, [token]);


  // const deleteData = (url) => {
  //   console.log(`deleteUrl:${url}  token:${token}`);
  //   if (window.confirm("Are you sure?")) {
  //     axios
  //       .delete(
  //         url,
  //         {},
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((response) => {
  //         if (response.status === 200) {
  //           toast.success(`Your data has been deleted successfully.`, {
  //             position: "top-center",
  //             autoClose: 3000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //           });
  //         } else {
  //           toast.error(
  //             `${response?.message}. ${response.response?.data?.message}`,
  //             {
  //               position: "top-center",
  //               autoClose: 3000,
  //               hideProgressBar: false,
  //               closeOnClick: true,
  //               pauseOnHover: true,
  //               draggable: true,
  //               progress: undefined,
  //             }
  //           );
  //         }
  //       });
  //   }
  // };
  // const deleteData = (url) => {
  //   console.log(`deleteUrl:${url}  token:${token}`);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     confirmButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     confirmButtonColor: "#3085d6",
  //     showCancelButton: true,
  //     cancelButtonColor: "#d33",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios
  //         .delete(
  //           url,
  //           {},
  //           {
  //             headers: { Authorization: `Bearer ${token}` },
  //           },
  //           {
  //             withCredentials: true,
  //           }
  //         )
  //         .then((response) => {
  //           if (response.status === 200) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: `Your have been deleted successfully.`,
  //               icon: "success",
  //               timer: 3000,
  //               // "Deleted!",
  //               // "Your has been deleted successfully.",
  //               // "success"
  //             });
  //           } else {
  //             Swal.fire({
  //               title: "Error!! Failed to delete data",
  //               text: `${response?.message}. ${response.response?.data?.message}`,
  //               icon: "error",
  //               timer: 3000,
  //             });
  //           }
  //         });
  //     }
     
  //   });

  // };
  const deleteData = async (url) => {
    console.log(`deleteUrl:${url}  token:${token}`);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonColor: "#d33",
    });
  
    if (!result.isConfirmed) {
      return;
    }
  
    try {
      const { status } = await axios.delete(url, {
        // headers: { Authorization: `Bearer ${token}` },
        // withCredentials: true,
      });
      if (status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: `Your have been deleted successfully.`,
          icon: "success",
          timer: 3000,
        });
      } else {
        const { response } = await axios.delete(url, {
          // headers: { Authorization: `Bearer ${token}` },
          // withCredentials: true,
        });
        Swal.fire({
          title: "Error!! Failed to delete data",
          text: `${response?.message}. ${response?.data?.message}`,
          icon: "error",
          timer: 3000,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!! Failed to delete data",
        text: error.message,
        icon: "error",
        timer: 3000,
      });
    }
  };
  const orderStatus = async (url, data) => {
    const confirmed = await Swal.fire({
      title: `Do you want to set order status ${data.status}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Update it!',
      cancelButtonText: 'No, Cancel',
    }).then((result) => result.isConfirmed);
  
    if (confirmed) {
      try {
        const response = await axios.patch(url, data
          // {
          // headers: { Authorization: `Bearer ${token}` },
          // withCredentials: true,
          // }
        
        );
  
        Swal.fire({
          title: 'Successfully',
          text: `${response.data.status} Order Status Updated Successfully.`,
          icon: 'success',
          timer: 3000,
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!! Failed to update order status',
          text: `${error?.message}. ${error?.response?.data?.message}`,
          icon: 'error',
          timer: 3000,
        });
      }
    }
  };
  
  const apiUrl = {
    // apiRootUrl : "https://crabby-pocketbook-eel.cyclic.app",
    apiRootUrl: process.env.NEXT_PUBLIC_BASE_URL,
    apiEndpoint:{
      login:'api/v1/login',
      product:'api/v1/product',
      order:'api/v1/order',
      carrier:'api/v1/carrier',
      business:'api/v1/business',
      brand:'api/v1/brand',
      press:'api/v1/press',
      gallery:'api/v1/gallery',
      slide:'api/v1/slide',
      contact:'/api/v1/contact',
    },
//  new
    adminLogin: {
      list: "/api/v1/admin/login",
      login: "/api/v1/admin/login",
    },
    service: {
      list: "/api/v1/service",
      create: "/api/v1/service/store",
      delete: "/api/v1/service/delete",
      edit: "",
    },
  

  };
  return { 
    orderStatus,deleteData,
    token, setToken,email, setEmail,items, setItems,status, setLoginstatus,
    apiUrl     
  };
};

export default useGlobal;
