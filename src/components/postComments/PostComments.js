import PropTypes from "prop-types";
import Comment from "../comment";

const PostComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </>
  );
};

// PostComments.propTypes = {
//   comments: PropTypes.array.isRequired,
// };

export default PostComments;
