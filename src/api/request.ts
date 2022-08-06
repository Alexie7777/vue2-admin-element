import service from "./index";

const getData = function () {
  return service({
    url: "getData",
    method: "get",
  });
};

export { getData };
