//mock服务启动入口

async function initMocks() {
  if (typeof window === "undefined") {
    //非浏览器端环境 eg:node java
    const { server } = await import("./server");
    server.listen();
  } else {
    //浏览器端环境
    const { worker } = await import("./browser");
    worker.start();
  }
}

//立即执行function
initMocks();

//不返回任何内容
export {};
