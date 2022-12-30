import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query<GetBlogsApiResponse, GetBlogsApiArg>({
      query: () => ({ url: `/blogs` }),
    }),
    getBlogsByBlogId: build.query<
      GetBlogsByBlogIdApiResponse,
      GetBlogsByBlogIdApiArg
    >({
      query: (queryArg) => ({ url: `/blogs/${queryArg.blogId}` }),
    }),
    postBlogsByBlogId: build.mutation<
      PostBlogsByBlogIdApiResponse,
      PostBlogsByBlogIdApiArg
    >({
      query: (queryArg) => ({
        url: `/blogs/${queryArg.blogId}`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    patchBlogsByBlogId: build.mutation<
      PatchBlogsByBlogIdApiResponse,
      PatchBlogsByBlogIdApiArg
    >({
      query: (queryArg) => ({
        url: `/blogs/${queryArg.blogId}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetBlogsApiResponse = /** status 200 OK */ {
  id?: number;
  title?: string;
  body?: string;
}[];
export type GetBlogsApiArg = void;
export type GetBlogsByBlogIdApiResponse = /** status 200 OK */ {
  id?: number;
  title?: string;
  body?: string;
};
export type GetBlogsByBlogIdApiArg = {
  blogId: number;
};
export type PostBlogsByBlogIdApiResponse = /** status 201 Created */ {
  id?: number;
  title?: string;
  body?: string;
};
export type PostBlogsByBlogIdApiArg = {
  blogId: number;
  body: {
    title?: string;
    body?: string;
  };
};
export type PatchBlogsByBlogIdApiResponse = /** status 200 OK */ {
  id?: number;
  title?: string;
  body?: string;
};
export type PatchBlogsByBlogIdApiArg = {
  blogId: number;
  body: {
    title?: string;
    body?: string;
  };
};
export const {
  useGetBlogsQuery,
  useGetBlogsByBlogIdQuery,
  usePostBlogsByBlogIdMutation,
  usePatchBlogsByBlogIdMutation,
} = injectedRtkApi;
