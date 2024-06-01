let chat_Chat_a = "https://niansuhai-llms8.hf.space/"; // /chat/a/
let chat_ChatGpt = "https://gpt-chatbotru-chat1.ru/#/chat"; // /chat/gpt
let chat_Gpt35Turbo = "https://chatgptbots-2.hf.space/"; // /chat/gpt35turbo/
let chat_Bing = "https://chatgptbots-ai.hf.space/"; // /chat/bing/
let chat_HfJb = "https://hf.co/chat/assistant/6620df7598f70fdf437ad579"; // /chat/huggingface-jailbreak/

let image_Gen_a = "https://chatgptbots-image-gen-pro.hf.space/"; // /image-gen/a/

function setIframeSrc(srcValue) {
  let iframe = document
    .getElementById("iframe-fullscreen")
    .getElementsByTagName("iframe")[0];
  iframe.src = srcValue;
}
