/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "quill",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("QuillVPC");
    const cluster = new sst.aws.Cluster("QuillCluster", {vpc});

    new sst.aws.Service("QuillService", {
      cluster,
      loadBalancer: {
        domain: `${$app.stage}.quill.newdawncoalition.com`,
        ports: [{listen: "80/http", redirect: "443/https"}, {listen: "443/https", forward: "3000/http"}]
      },
      dev: {
        command: "pnpm run dev"
      }
    });
  }
});
