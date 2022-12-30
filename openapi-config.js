module.exports = {
  schemaFile:
    "https://stoplight.io/api/v1/projects/mzd813/new-frontend-demo/nodes/reference/Blog.yaml",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  exportName: "api",
  outputFiles: {
    "./src/store/blog.ts": {
      filterEndpoints: [/blog/i],
    },
  },
  hooks: true,
};
