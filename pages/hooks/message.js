import { message } from "antd";

export const statusMessage = (type, mess) => {
  message.success({
    type: type,
    content: mess,
  });
};
