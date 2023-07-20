import HYRequest from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
  return HYRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
