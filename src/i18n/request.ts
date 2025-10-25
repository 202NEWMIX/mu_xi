import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const l = locale || "zh";
  try {
    const messages = (await import(`../../messages/${l}.json`)).default;
    return {messages, locale: l};
  } catch (e) {
    const fallback = (await import(`../../messages/zh.json`)).default;
    return {messages: fallback, locale: "zh"};
  }
});