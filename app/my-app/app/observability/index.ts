import * as traceloop from "@traceloop/node-server-sdk";
import * as LlamaIndex from "llamaindex";

export const initObservability = () => {
  traceloop.initialize({
    appName: "llama-app",
    apiKey: process.env.TRACELOOP_API_KEY,
    disableBatch: true,
    instrumentModules: {
      llamaIndex: LlamaIndex,
    },
  });
};
