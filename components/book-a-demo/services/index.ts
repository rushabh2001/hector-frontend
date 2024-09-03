import { useMutation } from "@tanstack/react-query";
import { axios } from "../../../lib/Axios";

// ADD BOOK DEMO REQUEST
export const addDemoBookRequest = async ({ details }: { details: string }) => {
  try {
    const response = await axios.post(`/demoBooking`, {
      details,
    });
    return response;
  } catch (error: any) {
    throw error.response;
  }
};

export const useAddDemoBookRequest = () => {
  return useMutation({
    onMutate: async () => {},
    mutationFn: addDemoBookRequest,
  });
};
