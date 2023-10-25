import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MessageResponse = () => {
  const markdownContent = `
   ## Report:  **How to Detect Mobile Devices Using Cloudflare Redirect Rules**
   &nbsp;
   &nbsp;
  
  :thinking_face: **Understanding Mobile Device Detection with Cloudflare**
  
  &nbsp;

  Cloudflare provides a feature called Mobile Redirect [1]. This feature allows website owners to automatically redirect mobile device visitors
  to a mobile-optimized website or subdomain home page [1] [2]. By detecting the user agent string of the visitor's device, 
  Cloudflare can determine whether the request is coming from a mobile device and apply the appropriate redirect rule.

  &nbsp;
  &nbsp;

  :rocket: **Implementing Mobile Device Detection with Cloudflare**

  &nbsp;
  &nbsp;
  
  To implement mobile device detection using Cloudflare redirect rules, you can follow these steps:

  &nbsp;
  
  1. Log in to your Cloudflare account and select the desired domain.
  2. Go to the Speed > Optimization > Other section of the Cloudflare dashboard [2].
  3. Under "Mobile Redirect," select the subdomain that you would like to redirect from the dropdown list [2].
  4. Choose whether to "Keep Path" or "Drop Path" in the redirect [^2]
     - "Keep Path" will redirect all mobile requests to the same resource hosted on your mobile-optimized website [2].
  5. Save the changes and test the redirect to ensure it is working as expected.
  `;
  return (
    <section className="mt-12">
      <div className="px-6 mx-auto max-w-6xl">
        <div>MessageResponse</div>
        <div class="w-fill h-hug p-16 rounded-2xl gap-10 bg-[#D9EFF6]">
          <div class="text-black">
            <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageResponse;
