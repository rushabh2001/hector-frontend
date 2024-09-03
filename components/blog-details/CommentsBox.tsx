"use client";
import { useState } from "react";
import { Comment } from "../types";
import { getInitails, timeAgo } from "../utils/utils";
import ReplyCommentModal from "./ReplyCommentModal";

interface CommentsBoxProps {
  comments: Comment[];
  count: number;
}

const CommentsBox: React.FC<CommentsBoxProps> = ({ comments, count }) => {
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyToCommentID, setReplyToCommentID] = useState(0);

  const handleReplyButtonClick = (
    comment_id: number,
    parent_id: number | null
  ) => {
    setIsReplyModalOpen(true);
    setReplyToCommentID(parent_id !== null ? parent_id : comment_id);
  };

  return (
    <>
      <div className="post-comments" id="comments">
        <div className="blog-coment-title mb-30">
          <h2>
            Comment{" "}
            <span className="comment-count">
              ( {count} {count === 1 ? "Comment" : "Comments"})
            </span>
          </h2>
        </div>
        <div className="latest-comments">
          <ul>
            {comments.map((comment) => (
              <>
                <li key={comment.blog_comment_id}>
                  <div className="comments-box">
                    <div className="comments-avatar">
                      {getInitails(comment.user_name)}
                    </div>
                    <div className="comments-text">
                      <div className="avatar-name">
                        <h5>{comment.user_name}</h5>
                        <span>{timeAgo(comment.created_at)}</span>
                        <a
                          className="reply"
                          onClick={() =>
                            handleReplyButtonClick(
                              comment.blog_comment_id,
                              comment.parent_id
                            )
                          }
                        >
                          <i className="fas fa-reply"></i>Reply
                        </a>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                </li>
                {!!comment.Replies?.length &&
                  comment.Replies.map((reply) => (
                    <li key={reply.blog_comment_id} className="children">
                      <div className="comments-box">
                        <div className="comments-avatar">
                          {getInitails(comment.user_name)}
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h5>{reply.user_name}</h5>
                            <span>{timeAgo(reply.created_at)}</span>
                            <a
                              className="reply"
                              onClick={() =>
                                handleReplyButtonClick(
                                  reply.blog_comment_id,
                                  reply.parent_id
                                )
                              }
                            >
                              <i className="fas fa-reply"></i>Reply
                            </a>
                          </div>
                          <p>{reply.comment}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </>
            ))}
          </ul>
        </div>
      </div>
      <ReplyCommentModal
        isReplyModalOpen={isReplyModalOpen}
        setIsReplyModalOpen={setIsReplyModalOpen}
        replyToCommentID={replyToCommentID}
      />
    </>
  );
};

export default CommentsBox;
