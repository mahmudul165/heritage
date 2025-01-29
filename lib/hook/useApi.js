import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// export const SLIDE_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/slide";
// const ORDER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/order";
// export const PRODUCT_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/product";
// export const CARRIER_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/carrier";
// export const GALLERY_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/gallery";
// export const BUSINESS_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/business";
//   export const OFFICES_ENDPOINT ='https://crabby-pocketbook-eel.cyclic.app/api/v1/offices';
// const USER_ENDPOINT = "https://crabby-pocketbook-eel.cyclic.app/api/v1/login";
// export const CONTACT_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/contact";
// export const BRANDS_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/brand";
// export const PRESS_ENDPOINT =
//   "https://crabby-pocketbook-eel.cyclic.app/api/v1/press";
// Base URL for the API
// const BASE_URL = "https://crabby-pocketbook-eel.cyclic.app";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// Endpoints for different collections
export const SLIDE_ENDPOINT = `${BASE_URL}/api/v1/slide`;
export const ORDER_ENDPOINT = `${BASE_URL}/api/v1/order`;
export const PRODUCT_ENDPOINT = `${BASE_URL}/api/v1/product`;
export const CARRIER_ENDPOINT = `${BASE_URL}/api/v1/carrier`;
export const GALLERY_ENDPOINT = `${BASE_URL}/api/v1/gallery`;
export const BUSINESS_ENDPOINT = `${BASE_URL}/api/v1/business`;
export const OFFICES_ENDPOINT = `${BASE_URL}/api/v1/offices`;
export const USER_ENDPOINT = `${BASE_URL}/api/v1/login`;
export const CONTACT_ENDPOINT = `${BASE_URL}/api/v1/contact`;
export const BRANDS_ENDPOINT = `${BASE_URL}/api/v1/brand`;
export const PRESS_ENDPOINT = `${BASE_URL}/api/v1/press`;

const useCollectionQuery = (
  collection,
  url,
  refetchInterval,
  staleTime,
  cacheTime
) =>
  useQuery(
    [collection],
    async () => {
      try {
        const response = await axios.get(url);
        return response.data;
        // const response = await axios.get(url);
        // const parsedData = JSON.parse(response.data);
        // console.log('response data',response)
        // console.log('JSON.parse data',parsedData)
        // return parsedData;
      } catch (error) {
        console.error(
          `Error fetching ${collection} collection: ${error.message}`
        );
        throw error;
      }
    },
    {
      refetchInterval,
      staleTime,
      cacheTime,
      cacheKey: collection,
    }
  );

export const useSlideCollectionQuery = () =>
  useCollectionQuery("SlideCollection", SLIDE_ENDPOINT, 5000, 5000, 60000);

export const useOrderCollectionQuery = () =>
  useCollectionQuery("OrderCollection", ORDER_ENDPOINT, 10000, 10000, 120000);

export const useProductCollectionQuery = () =>
  useCollectionQuery("ProductCollection", PRODUCT_ENDPOINT, 7000, 7000, 90000);

export const useCarrierCollectionQuery = () =>
  useCollectionQuery(
    "CarrierCollection",
    CARRIER_ENDPOINT,
    15000,
    15000,
    180000
  );

export const useGalleryCollectionQuery = () =>
  useCollectionQuery(
    "GalleryCollection",
    GALLERY_ENDPOINT,
    20000,
    20000,
    240000
  );

export const useBuninessCollectionQuery = () =>
  useCollectionQuery(
    "BusinessCollection",
    BUSINESS_ENDPOINT,
    19000,
    19000,
    360000
  );
  export const useOfficesCollectionQuery = () =>
  useCollectionQuery(
    "OfficesCollection",
   OFFICES_ENDPOINT,
    19000,
    19000,
    360000
  );
export const useUserCollectionQuery = () =>
  useCollectionQuery("UserCollection", USER_ENDPOINT, 60000, 60000, 720000);

export const useContactCollectionQuery = () =>
  useCollectionQuery("Contact", CONTACT_ENDPOINT, 20000, 20000, 240000);

export const useBrandsCollectionQuery = () =>
  useCollectionQuery("Brands", BRANDS_ENDPOINT, 20000, 20000, 240000);
export const usePressCollectionQuery = () =>
  useCollectionQuery("Press", PRESS_ENDPOINT, 15000, 15000, 240000);

export const imgbbApiKey = "23005736e2064c276c606e9e57095ebf";
