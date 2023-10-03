import React from "react";

function Page() {
  return (
    <div className="flex flex-col space-y-6 text-[#212B36] py-24 lg:px-24 px-6">
      <h1 className="text-black font-extrabold text-5xl leading-[64px]">
        DMCA Policy
      </h1>
      <p className="font-light text-2xl leading-8">
        This DMCA Policy sets forth the principles and rules of handling DMCA
        requests related to the W4 Labs Service (“Service”) and{" "}
        <a href="#" className="text-[#8E33FF]">
          https://oso.ai
        </a>{" "}
        website (“Website”).
      </p>
      <h2 className="font-semibold text-2xl leading-8">
        1. Reporting Claims of Copyright Infringement
      </h2>

      <p className="font-light text-2xl leading-8">
        If you believe that any content that is made available through the
        Service, Website or the Plug-in Store infringes on your copyright, you
        may request removal of such content by submitting a written notice
        including the following:
      </p>

      <ul className="list-disc list-inside text-2xl font-light">
        <li>Identification of the copyrighted work that has been infringed,</li>

        <li>
          Identification of the content that you believe is infringing upon the
          copyright in question (the identification must be sufficiently precise
          to locate the content),
        </li>

        <li>
          Your contact details including your name, address, telephone number
          and email address,
        </li>

        <li>
          Your statement that you have good faith belief that use of the
          copyrighted work is not authorized by the copyright owner, its agent,
          or the law,
        </li>

        <li>
          Your statement, under penalty of perjury, that the information in your
          request is accurate and that you are authorized to act on behalf of
          the copyright owner.
        </li>

        <li>Your signature (electronic or physical),</li>
      </ul>

      <p className="font-light text-2xl leading-8">
        If you fail to comply with all the requirements of the DMCA, your
        request may be ineffective. Be aware that if you knowingly misrepresent
        information in your request, you may be held liable for damages under
        DMCA.
      </p>

      <h2 className="font-semibold text-2xl leading-8">
        2. Counter Notification
      </h2>
      <p className="font-light text-2xl leading-8">
        If you believe that your content was removed by mistake or
        misidentification, you may submit a written counter request including
        the following:
      </p>

      <ul className="list-disc list-inside text-2xl font-light">
        <li>
          Identification of the content that has been removed including the
          location where the content was located before the take down,
        </li>
        <li>
          Your contact details including your name, address, telephone number
          and email address,
        </li>
        <li>
          Your statement, under penalty of perjury, that you have a good faith
          believe that the removed content was removed as a result of mistake or
          misidentification,
        </li>
        <li>
          Your statement that you will consent to the jurisdiction of the
          Federal District Court for the judicial district in which your address
          is located (or if you reside outside the United States for any
          judicial district in which the Service may be found) and that you will
          accept service from the person (or an agent of that person) who
          provided the us with the complaint at issue.
        </li>
        <li>Your signature (electronic or physical),</li>
      </ul>
      <p className="font-light text-2xl leading-8">
        If you fail to comply with all the requirements of the DMCA, your
        request may be ineffective.
        <br />
        Be aware that if you knowingly misrepresent information in your request,
        you may be held liable for damages under DMCA.
      </p>

      <h2 className="font-semibold text-2xl leading-8">3. Final Provisions</h2>
      <h3 className="font-normal text-2xl leading-8">
        3.1 Changes to the Policy
      </h3>
      <p className="font-light text-2xl leading-8">
        We reserve the right to change this DMCA Policy. We will publish any
        changes to this DMCA Policy on the at least one month before the changes
        take effect.
      </p>
      <h3 className="font-normal text-2xl leading-8">3.2 Contact Details</h3>

      <p className="font-light text-2xl leading-8">
        Please, send your requests to{" "}
        <a href="mailto:privacy@oso.ai" className="text-[#8E33FF]">
          privacy@oso.ai.
        </a>
      </p>

      <h3 className="font-normal text-2xl leading-8">3.3 Effective Date</h3>
      <p className="font-light text-2xl leading-8">
        This DMCA Policy shall be effective from September 1, 2023
      </p>
    </div>
  );
}

export default Page;
