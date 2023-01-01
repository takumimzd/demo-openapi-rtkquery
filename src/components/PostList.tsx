import { useGetPostsQuery } from "../store/post";
import { PostItem } from "./PostItem";

interface Props {
  page: number;
}
export const PostList = ({ page }: Props) => {
  const { data } = useGetPostsQuery({ _start: page, _limit: 3 });

  if (!data) return null;
  return (
    <ul>
      {data.map((post) => (
        <PostItem key={post?.id} post={post} />
      ))}
    </ul>
  );
};
