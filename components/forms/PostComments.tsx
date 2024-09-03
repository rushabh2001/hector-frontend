"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useAddComment } from "../blog-details/service";
import { commentSchema } from "../utils/schema";
import { decryptedData, encryptData } from "../utils/utils";

const PostComments = ({ blog_id }: { blog_id: number }) => {
  const { mutate } = useAddComment();

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { user_name: "", user_email: "", comment: "" },
    resolver: zodResolver(commentSchema),
  });

  const handlePostComment = async (data: any) => {
    const result = await trigger();

    if (result) {
      const encryptedData = encryptData(
        JSON.stringify({
          user_name: data.user_name,
          user_email: data.user_email,
          comment: data.comment,
        })
      );
      await mutate(
        {
          details: encryptedData,
          blog_id: blog_id,
        },
        {
          onError: async (error: any) => {
            const decryptedError = decryptedData(error.data.response);
            toast.dismiss();
            toast.error(decryptedError.error);
          },
          onSuccess: (data: any) => {
            const decryptedResponse = decryptedData(data.response);
            toast.dismiss();
            toast.success(decryptedResponse.message, {
              position: "top-right",
            });
            reset();
          },
        }
      );
    }
  };
  return (
    <>
      <form
        id="contacts-form"
        className="conatct-post-form"
        onSubmit={handleSubmit(handlePostComment)}
      >
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-icon contacts-message">
              <textarea
                {...register("comment")}
                name="comment"
                id="comment"
                cols={30}
                rows={10}
                placeholder="Your Reply...."
                className={`${errors.comment && "form-error mb-0"}`}
              ></textarea>
              {errors.comment && (
                <p className="intro-x text-danger">{errors.comment.message}</p>
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-icon contacts-name">
              <input
                {...register("user_name")}
                type="text"
                placeholder="Your Name.... "
                className={`${errors.user_name && "form-error mb-0"}`}
              />
              {errors.user_name && (
                <p className="intro-x text-danger">
                  {errors.user_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-icon contacts-email">
              <input
                {...register("user_email")}
                type="email"
                placeholder="Your Email...."
                className={`${errors.user_email && "form-error mb-0"}`}
              />
              {errors.user_email && (
                <p className="intro-x text-danger">
                  {errors.user_email.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-xl-12">
            <button type="submit" className="btn btn-2">
              Post Reply
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PostComments;
