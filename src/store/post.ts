import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: () => ({ url: `/posts` }),
    }),
    postPosts: build.mutation<PostPostsApiResponse, PostPostsApiArg>({
      query: (queryArg) => ({
        url: `/posts`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getPostsByPostId: build.query<
      GetPostsByPostIdApiResponse,
      GetPostsByPostIdApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.postId}` }),
    }),
    patchPostsByPostId: build.mutation<
      PatchPostsByPostIdApiResponse,
      PatchPostsByPostIdApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/${queryArg.postId}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetPostsApiResponse = /** status 200 OK */ {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}[];
export type GetPostsApiArg = void;
export type PostPostsApiResponse = /** status 201 Created */ {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};
export type PostPostsApiArg = {
  body: {
    id?: number;
    title?: string;
    body?: string;
  };
};
export type GetPostsByPostIdApiResponse = /** status 200 OK */ {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};
export type GetPostsByPostIdApiArg = {
  postId: number;
};
export type PatchPostsByPostIdApiResponse = /** status 200 OK */ {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};
export type PatchPostsByPostIdApiArg = {
  postId: number;
  body: {
    title?: string;
    body?: string;
  };
};
export const {
  useGetPostsQuery,
  usePostPostsMutation,
  useGetPostsByPostIdQuery,
  usePatchPostsByPostIdMutation,
} = injectedRtkApi;
