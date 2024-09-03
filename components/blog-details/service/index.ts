import { useMutation, useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/Axios";
import { decryptedData } from "../../utils/utils";
import { queryClient } from "../../../lib/ReactQuery";

// GET blog details by slug
const getBlogDetails = async (slug: string) => {
  try {
    const result: any = await axios.get(`/blog/view/${slug}`);
    const decryptedResponse = decryptedData(result.response);
    return decryptedResponse;
  } catch (error: any) {
    const decryptedError = decryptedData(error.response.data.response);
    console.log(decryptedError);
  }
};

export const useGetBlogDetails = (slug: string) => {
  return useQuery({
    queryKey: ["blog-details"],
    queryFn: () => getBlogDetails(slug),
  });
};

// ADD COMMENT
export const addComment = async ({
  details,
  blog_id,
}: {
  details: string;
  blog_id: number;
}) => {
  try {
    const response = await axios.post(`/comment/${blog_id}`, {
      details,
    });
    return response;
  } catch (error: any) {
    throw error.response;
  }
};

export const useAddComment = () => {
  return useMutation({
    onMutate: async () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-details"] });
      queryClient.refetchQueries({ queryKey: ["blog-details"] });
    },
    mutationFn: addComment,
  });
};

// REPLY TO COMMENT
export const replyToComment = async ({
  details,
  blog_comment_id,
}: {
  details: string;
  blog_comment_id: number;
}) => {
  try {
    const response = await axios.post(`/comment/reply/${blog_comment_id}`, {
      details,
    });
    return response;
  } catch (error: any) {
    throw error.response;
  }
};

export const useReplyToComment = () => {
  return useMutation({
    onMutate: async () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-details"] });
      queryClient.refetchQueries({ queryKey: ["blog-details"] });
    },
    mutationFn: replyToComment,
  });
};
