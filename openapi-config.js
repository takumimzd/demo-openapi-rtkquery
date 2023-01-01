module.exports = {
  schemaFile:
    "https://stoplight.io/api/v1/projects/mzd813/new-frontend-demo/nodes/reference/Demo.yaml",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  exportName: "api",
  outputFiles: {
    "./src/store/post.ts": {
      filterEndpoints: [/post/i],
    },
  },
  hooks: true,
};
