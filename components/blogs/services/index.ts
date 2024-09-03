import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/Axios";
import { decryptedData } from "../../utils/utils";

// GET blog list
export const getBlogList = async (encryptedData: string) => {
  try {
    const result: any = await axios.get(`/blog/list?details=${encryptedData}`);
    const decryptedResponse = decryptedData(result.response);
    return decryptedResponse;
  } catch (error: any) {
    const decryptedResponse = decryptedData(error.response.data.response);
    return decryptedResponse;
  }
};

export const useGetBlogList = (encryptedData: string) => {
  return useQuery({
    queryKey: ["blog-list", encryptedData],
    queryFn: () => getBlogList(encryptedData),
    // keepPreviousData: true,
  });
};

// GET category
export const getCategory = async () => {
  try {
    const result: any = await axios.get(`/category`);
    const decryptedResponse = decryptedData(result.response);
    return decryptedResponse;
  } catch (error) {
    console.error(error);
  }
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
    // keepPreviousData: true,
  });
};

// GET tags
export const getTag = async () => {
  try {
    const result: any = await axios.get(`/tag`);
    const decryptedResponse = decryptedData(result.response);
    return decryptedResponse;
  } catch (error) {
    console.error(error);
  }
};

export const useGetTag = () => {
  return useQuery({
    queryKey: ["tag"],
    queryFn: () => getTag(),
    // keepPreviousData: true,
  });
};
