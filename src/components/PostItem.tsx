import { GetPostsByPostIdApiResponse } from "../store/post";

type Post = GetPostsByPostIdApiResponse;

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  return <li>{post.title}</li>;
};
