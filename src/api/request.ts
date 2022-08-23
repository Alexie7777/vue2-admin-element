import service from "./index";

const getMenu = (params) => {
  return service.request({
    url: "/permission",
    method: "post",
    data: params,
  });
};

export { getMenu };
