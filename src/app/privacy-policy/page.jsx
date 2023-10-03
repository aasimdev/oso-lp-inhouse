import React from "react";

function CustomBulletPoint({ children }) {
  return (
    <li>
      <div className="flex items-start">
        <span className="text-3xl text-black px-3">•</span>
        <p>{children}</p>
      </div>
    </li>
  );
}

function Page() {
  return (
    <div className="flex flex-col space-y-6 text-[#212B36] py-24 max-w-6xl px-6 mx-auto ">
      <h1 className="text-black font-extrabold text-5xl leading-[64px]">
        Privacy Policy
      </h1>

      <p className="font-light text-2xl leading-8">
        This Privacy Policy sets forth the principles and rules of data
        processing related to the W4 Labs Service (“Service”) and
        <a href="#" className="text-[#8E33FF]">
          https://w4labs.io/
        </a>{" "}
        website (“Website”) and aims to provide the users with information about
        processing of their data while using the Service and the Website.
      </p>
      <h2 className="pl-1 font-semibold text-2xl leading-8">1. Summary</h2>
      <p className="font-light text-2xl leading-8">
        The Service is provided and the Website is operated by the company W4
        Labs{" "}
        <a href="#" className="text-[#8E33FF]">
          https://w4labs.io/
        </a>
        : (”W4 Labs”, “we”, “us”, or “our”) that is responsible for the
        compliance of related data processing. In the terms of various
        regulations we are referred to as the controller. We might collect and
        process your data including personally identifiable information on
        various occasions and typically while using the Website or while using
        the Service. The data is processed for the following purposes:
      </p>
      <ul className=" text-2xl font-light">
        <CustomBulletPoint>Website analytics,</CustomBulletPoint>
        <CustomBulletPoint>
          Maintaining customer relationships and subscriptions,
        </CustomBulletPoint>
        <CustomBulletPoint>
          Providing the Service to customers,
        </CustomBulletPoint>
        <CustomBulletPoint>
          Distributing user developed plug-ins,
        </CustomBulletPoint>
        <CustomBulletPoint>Personalized advertising,</CustomBulletPoint>
        <CustomBulletPoint>Providing customer support,</CustomBulletPoint>
        <CustomBulletPoint>
          Maintaining security and uninterrupted operation of the Service,
          Marketing communication
        </CustomBulletPoint>
        <CustomBulletPoint>Other communication,</CustomBulletPoint>
        <CustomBulletPoint> Legal compliance,</CustomBulletPoint>
        <CustomBulletPoint>
          Protecting of business interests, processing of claims and complaints.
        </CustomBulletPoint>
      </ul>
      <p className="font-light text-2xl leading-8">
        The data is processed either on the basis of contractual relationships
        between us and our customers, users consent, legal obligations and
        legitimate interests. The purposes of the processing and the legal basis
        are set out in detail in the text following this summary. The Service is
        a custom AI layer integrated into messaging apps and other interface
        apps and services. In order to provide the service properly, we need to
        share data between the messaging app or other supported interface, our
        service and the AI provider. We aim to share as little data as possible
        with third parties for the operation of the Service. We do not share any
        data relating to our customer relationships, but the content of the
        messages must be passed between the interface service, our servers and
        AI provider. Some features might require us to use other third-party
        service in addition to interface service and AI service. For your
        protection, we anonymize the data, but we do not alter or modify the
        messages in any other way, so any information users include in the
        messages will be forwarded to AI provider and possibly other third-party
        services that are required to provide the Service. We recommend that you
        do not disclose any sensitive information and ask that you do not
        disclose any personally identifiable information about others. Data
        subjects have the following rights in connection with processing of
        their personal data: (1) the right of access to personal data, (2) the
        right to rectification of inaccurate personal data, (3) the right to
        restriction of processing, (4) the right to erasure of personal data,
        (5) the right to object to processing of personal data based upon
        legitimate interest, (6) the right to revoke consent, (7) the right to
        data portability and (8) the right to lodge a complaint with a
        supervisory authority if they are from EEA.
      </p>
      <h2 className="pl-1 font-semibold text-2xl leading-8">
        2. Purposes of Processing in Detail
      </h2>
      <h3 className="font-normal text-2xl leading-8">2.1 Website Analytics</h3>
      <p className="font-light text-2xl leading-8">
        The Website uses website analytics service for gathering aggregated
        statistical data about usage of the Website. We use this data to improve
        the Website and your user experience, to improve the reach of the
        services and to measure effectiveness of our advertisement. We might
        collect information necessary to discern unique website visits or
        referral sources and data relating to interactions with the website. We
        collect and process the data based on our legitimate interest to improve
        quality of our service and user experience, identify issues with the
        Website and manage our marketing strategy. Usage of cookies and similar
        technologies is subject to consent from the user.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        2.2 Maintaining Customer Relationships and Subscriptions
      </h3>
      <p className="font-light text-2xl leading-8">
        We collect information about our customers in order to manage customer
        relationships and to enable customers to use the Service. Data such as
        name, address, telephone number, email address, details of the level of
        service, subscription chosen, payments made and due are collected and
        processed. The processing is necessary to enter into the contract
        between us and the customer and to maintain the customer relationship.
        We do not collect and process information about the payment methods used
        (e.g., credit card information); this information is collected and
        processed by our payment service provider and is not shared with us. The
        data collected may be archived for the duration of the contract and for
        3 years after the expiry of the contract.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        2.3 Providing the Service to Customers
      </h3>
      <p className="font-light text-2xl leading-8">
        The Service takes input from the user in form of a message and then uses
        the AI service to generate the proper response sending it back to the
        customer. To operate properly the Service needs to collect and process
        the message, context, customers telephone number and other technical
        data. The Service relies upon data exchange between the customers chosen
        interface and AI model and the message and answer may be disclosed to
        the providers of those services. Several messages and answers are kept
        for a short time on our servers for context of the interaction and to
        provide better interactive experience. The data is collected and
        processed on the basis of the underlying contract for provision of the
        Service, however the user has to opt-in for communication through the
        messaging app or similar interface. The Service cannot be provided
        unless the user provides opt-in for the communication.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.4 Distribution of user developed plug-ins
      </h3>
      <p className="font-light text-2xl leading-8">
        If you develop a plug-in and choose to make it available to other users
        through the Plug-in Store in accordance with the Terms of Service, you
        will be required to provide certain information and documentation to
        facilitate distribution of the plug-in through the Plug-in Store. We
        will post this information and documentation on the Plug-in Store and
        make it available to the public. We may also collect and process
        information relating to the revenue generated by the plug-in and our
        royalties. The processing is necessary to perform the contract in
        accordance with the Terms of Service.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.5 Advertising and personalization
      </h3>

      <p className="font-light text-2xl leading-8">
        If you opt-in to our personalized advertising program, we may provide
        you with advertisements tailored to your interests. In order to target
        ads effectively, we may collect and process information about how you
        interact with the Service, including your inputs and outputs and your
        customer information, and create your profile. This profile may be used
        to provide you with more relevant advertising. This processing is
        optional and is based on your freely given consent.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.6 Providing Customer Support
      </h3>
      <p className="font-light text-2xl leading-8">
        We provide customer support services accessible via channels provided on
        the product website. In order to process customer support requests, we
        need to collect information about the subject of the request, a detailed
        description of the problem, the priority, any documents relevant to the
        request (attachments such as screenshots, website links, etc.), contact
        information and any other information provided by the customer. Data
        required to process customer support requests is processed on the basis
        of a legitimate interest in resolving any issues that the customer may
        have while using the Service. The data is kept until the support request
        has been resolved and for 6 months thereafter, and if it relates to a
        contract, for the duration of that contract and for 1 year after the
        termination of that contract.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.7 Maintaining Security and Uninterrupted Operation of the Service
      </h3>
      <p className="font-light text-2xl leading-8">
        We care about the security of the Service and its users, and about
        providing the Service properly and without interruption. To achieve
        this, we need to collect technical data about the use of the Service and
        interactions with the infrastructure in the form of logs. This
        processing is carried out in accordance with the legitimate interest in
        the secure and proper provision of the Service. The data will be
        archived for several days.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.8 Marketing Communication
      </h3>
      <p className="font-light text-2xl leading-8">
        From time to time, we may send email or messages to customers about the
        latest news, new products and services, changes to the Service and other
        relevant information about us and our business. The customer's email
        address or other contact will be added to the mailing list unless the
        customer opts out of receiving marketing communications. If the user
        provides us with a specific consent to contact them with other marketing
        communication, we might use their contact information to advertise
        third-party products. On the basis of our legitimate interest in
        expanding our business and to inform the customers about our business,
        the email address will be kept on the mailing list until the customer
        unsubscribes or the associated customer account is closed. The option to
        unsubscribe will be offered in the account settings and in each message.
        If the user provided special consent with additional marketing
        communication, they can withdraw such consent anytime.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        2.9 Other Communication
      </h3>
      <p className="font-light text-2xl leading-8">
        If someone contacts us using the contact details we publish, we will
        contact them to respond to their request. In order to do this, we
        usually process contact details (email, address or telephone), first
        name, surname and the content of the communication. The communication is
        based on their consent implied by contacting us. The data will only be
        kept for a reasonable period of time to process and consider the
        communication and in any case no longer than 1 year after the
        communication has ended.
      </p>
      <h3 className="font-normal text-2xl leading-8">2.10 Legal Compliance</h3>
      <p className="font-light text-2xl leading-8">
        As a company, we have certain legal obligations to collect, process and
        archive certain data, such as data about our customer relationships,
        invoices, payments, claims, etc., for the purposes of keeping company
        accounts and other legal obligations. Data collected for these purposes
        may be retained for the relevant legal retention periods, which can be
        up to 10 years and under certain conditions even longer.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        2.11 Protection of Business Interests, Processing of Claims and
        Complaints
      </h3>
      <p className="font-light text-2xl leading-8">
        Any data collected and processed by us may be used to protect us from
        claims, to enforce our claims and to resolve disputes and complaints.
        Processing for this purpose is based on the legitimate interest in
        protecting our business interests, enforcing our claims and defending
        ourselves against claims by third parties and settling disputes and
        complaints. The data may be archived even after the above retention
        periods have expired if there is an ongoing dispute or a reasonable risk
        of a dispute. The data will be archived until the dispute is resolved
        or, in some cases, for the duration of the statute of limitations.
      </p>

      <h2 className="pl-1 font-semibold text-2xl leading-8">
        3. Transfers of Data
      </h2>

      <p className="font-light text-2xl leading-8">
        {" "}
        We keep all data collected secure and confidential. We will never sell
        your information to third parties without your explicit consent.
        However, data may be disclosed to third parties where we are required to
        do so by law and where we use third party services to outsource some of
        the processing. We select processors with due care and require them to
        protect the data under data processing contracts. Where we share data
        with service providers outside of EEA or USA we ensure that privacy and
        protection of the shared data is ensured in accordance with applicable
        legislation.
      </p>

      <p className="font-light text-2xl leading-8">
        In general, we employ the following categories of processors:
      </p>

      <ul className=" text-2xl font-light">
        <CustomBulletPoint>
          accounting, tax and legal advisers;
        </CustomBulletPoint>
        <CustomBulletPoint>
          IT infrastructure services (cloud computing, webhosting,
          e-maiCustomBulletPointng service etc.);
        </CustomBulletPoint>
        <CustomBulletPoint>payment service providers;</CustomBulletPoint>
        <CustomBulletPoint>interface services,</CustomBulletPoint>
        <CustomBulletPoint>AI service providers,</CustomBulletPoint>
        <CustomBulletPoint>
          feature enabCustomBulletPointng third-party services,
        </CustomBulletPoint>
        <CustomBulletPoint>
          third-party plugin service providers,
        </CustomBulletPoint>
        <CustomBulletPoint>web analytics services;</CustomBulletPoint>
        <CustomBulletPoint>customer service;</CustomBulletPoint>
        <CustomBulletPoint>
          contractors (e.g., customer support operators).
        </CustomBulletPoint>
      </ul>

      <h3 className="font-normal text-2xl leading-8">3.1 Interface Services</h3>
      <p className="font-light text-2xl leading-8">
        The Service uses instant messaging applications or other interface for
        accessing the Service. Therefore, in order to access the Service, data
        must be exchanged between the interface service provider and our
        servers. We do not have access to a user's contacts or other messages
        not addressed to our Service unless they provide us with specific
        permission. Use of the instant messaging service or other third-party
        interface service is subject to the third-party provider's terms and
        conditions and privacy policy. The User must maintain access to the
        Instant Messaging Service or other interface service in order to
        properly use the Service.
      </p>
      <h3 className="font-normal text-2xl leading-8">3.2 AI Services</h3>
      <p className="font-light text-2xl leading-8">
        The Service uses third-party AI models to process messages and generate
        appropriate responses. Therefore, we must disclose the content of the
        message to the AI service provider. We use end-to-end encryption and
        anonymize the messages to protect your privacy. However, anything you
        include in the message itself will be disclosed. You are in complete
        control of the content of the message and we advise you not to disclose
        sensitive information and we require you not to disclose personal
        information about third parties.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        3.3 Feature Enabling Third-party Services
      </h3>

      <p className="font-light text-2xl leading-8">
        Certain features require the use of additional third-party services and
        we may need to share some information with these providers to ensure the
        proper provision of services (e.g., voice transcription, translations,
        etc.). We will share as little information as possible with such
        providers and, where appropriate, we will anonymize such information or
        use pseudonyms.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        3.4 Third-party Plugins
      </h3>

      <p className="font-light text-2xl leading-8">
        The Service allows third parties to create plugins to enhance and extend
        the functionality of the Service. Use of such plugins may require us to
        share data with the operator of such plugin, or the plugin itself may
        collect additional data. Use of plugins is optional and may be subject
        to additional third-party terms and conditions, privacy policies and may
        require account registration with or payments to third parties. The user
        is in control of which plugins they use and if they choose to use a
        plugin, we will interpret that action as consent to share the necessary
        data with the provider. We recommend that the user checks the plugin
        provider's website for relevant information about the plugin and the
        data it collects and processes.
      </p>

      <h2 className="pl-1 font-semibold text-2xl leading-8">4. Cookies</h2>

      <h3 className="font-normal text-2xl leading-8">
        4.1 What are Cookies in General
      </h3>

      <p className="font-light text-2xl leading-8">
        Cookies are small text files stored on your browser. They are used by
        web developers to help users navigate their websites efficiently and
        perform certain functions. Because of their central role in improving or
        enabling usability or website processes, disabling cookies may prevent
        users from using certain features of the website. To learn more about
        cookies, visit{" "}
        <a
          href="https://allaboutcookies.org/"
          target="_blank"
          className="text-[#8E33FF]"
        >
          https://allaboutcookies.org/
        </a>
        , or the related Wikipedia page.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        4.2 Cookies used by the Website
      </h3>

      <p className="font-light text-2xl leading-8">
        The Website uses certain cookies that are necessary for the proper
        operation of the Website and to ensure its security and the safety of
        its users. For example, cookies are used to handle login to the user
        account and to store session information. The storage of such cookies is
        necessary to provide the service, and therefore does not require the
        user's consent to be stored on the user's device. In addition to
        technical cookies, we might use technologies to collect data relating to
        our advertisement and website usage using cookies or similar
        technologies. In that case we collect user consent with storing and
        using cookies or similar technologies.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        4.3 Choices of the User about Cookies
      </h3>

      <p className="font-light text-2xl leading-8">
        The user can set their browser to reject all cookies or only the ones
        they choose. Generally, information on how to set the cookie preferences
        of the browser can be found in the help section of the browser. If the
        user chooses to reject all cookies, the user should be aware that the
        Website may not function properly.
        <br />
        The user can also delete all cookies from their browser after visiting
        the website in order to maximize their privacy.
      </p>

      <h2 className="pl-1 font-semibold text-2xl leading-8">
        5. Third-party Integrations Using W4 Labs Service
      </h2>

      <p className="font-light text-2xl leading-8">
        Where a third party integrates its product with the Service, we collect
        and process data on behalf of that third party as a processor under a
        data processing contract subject to the relevant legislation. In this
        case, we will only process data for a limited range of purposes
        permitted under the contract, which will generally include:
      </p>

      <ul className=" text-2xl font-light">
        <CustomBulletPoint>Provision of the Service, </CustomBulletPoint>

        <CustomBulletPoint>Customer support, </CustomBulletPoint>

        <CustomBulletPoint>Cooperation with the provider, </CustomBulletPoint>

        <CustomBulletPoint>Legal compliance, </CustomBulletPoint>

        <CustomBulletPoint>
          Protection of Business Interests, Processing of Claims and Complaints.
        </CustomBulletPoint>
      </ul>

      <p className="font-light text-2xl leading-8">
        End-user can refer to section 2 for more detail with the specifics
        described below.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        5.1 Provision of Service for Third-party Integration
      </h3>

      <p className="font-light text-2xl leading-8">
        While providing the Service for third-party integration we are generally
        not in direct contact with the end user, but the third-party service
        generally acts as an interface to the Service, aggregating the end
        user's messages. Otherwise, the information about how the data is
        processed to provide the services to our end users applies, including
        the information about disclosing the data to third parties. These third
        parties act as our sub-processors.
      </p>

      <h3 className="font-normal text-2xl leading-8">5.2 Customer Support</h3>

      <p className="font-light text-2xl leading-8">
        While providing the Service for third-party integration we generally do
        not handle end user issues directly, but end user issues may be
        forwarded to us for resolution or our staff may otherwise assist in
        resolving end user issues.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        5.3 Cooperation with the Provider
      </h3>

      <p className="font-light text-2xl leading-8">
        While we work with the provider to deliver the service to the end user,
        we may process end user data on an ad hoc basis as necessary. In such
        cases, we will endeavor to keep the data processing to a minimum and
        archive the data only where necessary.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        5.4 Responsibilities of the Third-party Service Provider
      </h3>

      <p className="font-light text-2xl leading-8">
        When we act as a processor, we provide the service to the third-party
        service provider as our customer. This means that the third-party
        service provider acts as the controller of any processing of personal
        data and is solely responsible for informing end users about the
        processing and obtaining any necessary consents.
      </p>

      <h2 className="pl-1 font-semibold text-2xl leading-8">
        6. Automated Processing
      </h2>

      <p className="font-light text-2xl leading-8">
        The processing of data required for the establishment of the contract
        for the provision of the Service and the operation of the Service is
        carried out entirely by automated means. If you are denied registration
        or access to the Service by these automated means, please contact us at
        the provided contacts and we will ensure that our staff or associates
        review the case manually and notify you of the outcome.
      </p>
      <h2 className="pl-1 font-semibold text-2xl leading-8">7. Children</h2>

      <p className="font-light text-2xl leading-8">
        The Service is not available to children under the age of thirteen (16).
        Minors between the ages of thirteen (16) and eighteen (18) must have the
        permission and consent of a parent or legal guardian to use the Service.
      </p>

      <h2 className="pl-1 font-semibold text-2xl leading-8">
        8. Advice on Rights
      </h2>

      <p className="font-light text-2xl leading-8">
        We may need to verify the identity of the user when they make a request
        to exercise any of their rights and is entitled to request further
        information in order to comply with their request.
      </p>

      <h3 className="font-normal text-2xl leading-8">8.1 Right of Access</h3>
      <p className="font-light text-2xl leading-8">
        In relation to the processing of personal data, the data subject has the
        right to obtain, upon request, information about the processing and a
        copy of the data processed about them.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        8.2 Right to Rectification
      </h3>
      <p className="font-light text-2xl leading-8">
        If the data subject has reason to believe that their personal data is
        inaccurate, out of date or incorrect in any way, they have the right to
        contact us and we will ensure due rectification when accurate, up to
        date and correct information is provided.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        8.3 Right to Restriction of Processing
      </h3>
      <p className="font-light text-2xl leading-8">
        If the processed personal data are inaccurate or if the data subject has
        objected to the processing, the data subject has the right to request
        that the processing of the personal data be restricted.
        <br />
        For the duration of the restriction, the personal data shall only be
        stored and shall not be subject to any other operation without the
        consent of the data subject. The restriction of processing will last for
        the time necessary to resolve the situation. The data subject shall be
        informed of the termination of such restriction.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        8.4 Right to Erasure (Right to be Forgotten)
      </h3>
      <p className="font-light text-2xl leading-8">
        In cases where the data subject withdraws consent or the personal data
        is no longer necessary, the data subject has the right to have the data
        erased.
        <br />
        However, in some cases, the right to erasure is limited. For example,
        personal data processed to comply with legal obligations imposed on us
        may not be erased before the end of the legal retention period.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        8.5 Right to Object to Processing
      </h3>
      <p className="font-light text-2xl leading-8">
        In the case of processing based on legitimate interests and/or for the
        purposes of direct marketing, the data subject may lodge a reasoned
        objection to the processing. The grounds for the objection shall be
        assessed and the decision shall be notified to the data subject. On the
        basis of the assessment, the processing will either cease or the
        objection will be rejected.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        8.6 Right to Withdraw Consent to Processing
      </h3>
      <p className="font-light text-2xl leading-8">
        Where personal data is processed on the basis of consent, such consent
        may be withdrawn at any time.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        8.7 Right to Data Portability
      </h3>
      <p className="font-light text-2xl leading-8">
        Where the processing of personal data provided by the data subject is
        based on consent or on a contract and is carried out wholly by automated
        means and the personal data are stored in a structured machine-readable
        format, the data subject shall have the right to obtain their personal
        data in a structured machine-readable format.
      </p>
      <h3 className="font-normal text-2xl leading-8">
        8.8 Right to Lodge a Complaint with Supervisory Authority
      </h3>
      <p className="font-light text-2xl leading-8">
        If the data subject is from the EEA and has reason to believe that their
        personal data are not being processed in accordance with applicable
        regulations, they have the right to lodge a complaint with a supervisory
        authority in their country of habitual residence, place of work or the
        place where the alleged breach occurred.
      </p>
      <h2 className="pl-1 font-semibold text-2xl leading-8">
        9. California Users
      </h2>

      <p className="font-light text-2xl leading-8">
        If the user is from California and the California Consumer Protection
        Act applies than the following special terms apply to them.
      </p>

      <h3 className="font-normal text-2xl leading-8">
        9.1 Categories of Collected Personal Information and Purposes of
        Processing
      </h3>
      <p className="font-light text-2xl leading-8">
        Categories of collected personal information and purposes of processing
        are described in detail in Section 2 of this Privacy Policy.
      </p>

      <h3 className="font-normal text-2xl leading-8">9.2 Additional Rights</h3>

      <p className="font-light text-2xl leading-8">
        {" "}
        California users may exercise the following additional rights:
      </p>
      <ul className=" text-2xl font-light">
        <CustomBulletPoint>
          <u>right to know</u> - California users can request disclosure of: (1)
          the categories and/or specific pieces of personal information we have
          collected about them, (2) the categories of sources for that personal
          information, (3) the purposes for which we use that information, (4)
          the categories of third parties with whom we disclose the information,
          and (5) the categories of information that we sell or disclose to
          third parties. The request can be made up to twice a year, free of
          charge,
        </CustomBulletPoint>
        <CustomBulletPoint>
          <u>right to delete</u> - California users can request we delete
          personal information we collected from them and tell our service
          providers to do the same, subject to certain exceptions (such as if we
          are legally required to keep the information),
        </CustomBulletPoint>
        <CustomBulletPoint>
          <u>right to opt-out of sale or sharing</u> - California users may
          request that we stop selling or sharing their personal information,
          including via a user-enabled global privacy control. We cannot sell or
          share their personal information after we receive the opt-out request
          unless they later authorize us to do so again,
        </CustomBulletPoint>
        <CustomBulletPoint>
          <u>right to correct</u> - California users may ask us to correct
          inaccurate information that we have about them,
        </CustomBulletPoint>
        <CustomBulletPoint>
          <u>
            right to limit use and disclosure of sensitive personal information
          </u>
          - California users can direct us to only use their sensitive personal
          information (for example, social security number, financial account
          information, precise geolocation data, or genetic data) for limited
          purposes, such as providing them with the services they requested.
        </CustomBulletPoint>
      </ul>

      <h2 className="pl-1 font-semibold text-2xl leading-8">
        10. Final Provisions
      </h2>
      <h3 className="font-normal text-2xl leading-8">
        10.1 Changes to the Privacy Policy
      </h3>
      <p className="font-light text-2xl leading-8">
        We reserve the right to change this Privacy Policy as the Website and
        the Service or business needs evolve. We will publish any changes to
        this Privacy Policy on the Website and notify registered customers of
        changes to this Privacy Policy by email at least one month before the
        changes take effect.
      </p>

      <h3 className="font-normal text-2xl leading-8">10.2 Contact Details</h3>
      <p className="font-light text-2xl leading-8">
        If you have any questions about privacy and personal data processing or
        you wish to exercise your rights, please contact us at privacy@oso.ai
      </p>
      <h3 className="font-normal text-2xl leading-8">10.3 Effective Date</h3>
      <p className="font-light text-2xl leading-8">
        This Privacy Policy shall be effective from September 1, 2023
      </p>
    </div>
  );
}

export default Page;
