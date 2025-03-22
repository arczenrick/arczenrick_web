import CustomContainer from "@/components/ui/custom_container/custom_container";
import PageHead from "@/components/ui/page_head/page_head";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CONTACT_DETAILS from "@/constants/contact";
import React from "react";

const TermsScreen = () => {
  return (
    <div>
      <PageHead head="Terms & Conditions" />
      <CustomContainer>
        <SectionHeading
          mainHead="Terms &"
          subHead="Conditions"
          smallHead="T&C"
          caption="Last Updated : 17/01/2025"
        />
        <br />
        <br />
        <div>
          <p>
            Welcome to Arczenrick! By accessing or using our services, you agree
            to comply with the following terms and conditions. Please read them
            carefully before proceeding.
          </p>
          <br />
          <ol>
            <li>
              <strong>Acceptance of Terms</strong>
              <br />
              <p>
                By using our website, services, or products, you agree to be
                bound by these Terms and Conditions and any policies referenced
                herein. If you do not agree, you may not access our services.
              </p>
              <br />
            </li>
            <li>
              <strong>Services Provided</strong>
              <p>
                Arczenrick provides IT-related services, including but not limited
                to:
              </p>
              <ul>
                <li>Website Development & Design</li>
                <li>Digital Marketing</li>
                <li>Strategy Development</li>
                <li>Digital Transformation</li>
                <li>Technology Management</li>
                <li>Operations Optimization</li>
                <li>Supply Chain Solutions</li>
              </ul>
              <br/>
              <p>
                The scope of services will be outlined in a formal agreement or
                contract specific to each client.
              </p>
              <br />
            </li>
            <li>
              <strong> Intellectual Property</strong>
              <br />
              <p>
                All content, designs, code, and intellectual property created by
                Arczenrick during the course of our projects remain the property
                of Arczenrick until full payment is received. Upon completion and
                payment, ownership rights will be transferred as per the
                agreement.
              </p>
              <br />
            </li>
            <li>
              <strong>Client Responsibilities</strong>
              <br />
              <p>To ensure smooth project execution, the client agrees to:</p>
              <ul>
                <li>
                  Provide all necessary materials, content, and access required
                  to complete the project.
                </li>
                <li>
                  Communicate clearly and respond promptly to queries or
                  feedback.
                </li>
                <li>
                  Adhere to agreed timelines for approvals and deliverables.
                </li>
              </ul>
              <br />
            </li>
            <li>
              <strong>Payment Terms</strong>
              <br />
              <ul>
                <li>
                  Payment terms will be outlined in the specific project
                  agreement.
                </li>
                <li>A deposit may be required before work begins.</li>
                <li>
                  Late payments may incur additional fees or result in project
                  delays
                </li>
              </ul>
              <br />
            </li>
            <li>
              <strong>Confidentiality</strong>
              <br />
              <p>
                Arczenrick and its clients agree to protect the confidentiality of
                any proprietary information shared during the project. This
                includes, but is not limited to, business strategies, technical
                information, and user data.
              </p>
              <br />
            </li>
            <li>
              <strong>Revisions and Modifications</strong>
              <br />
              <p>
                Arczenrick offers a limited number of revisions as agreed in the
                project contract.
                <br />
                Additional revisions or changes beyond the agreed scope may
                incur extra charges.
              </p>
              <br />
            </li>
            <li>
              <strong>Liability and Disclaimer</strong>
              <br />
              <p>
                Arczenrick is not responsible for any damages or losses arising
                from the use of our services, including but not limited to,
                technical errors, downtime, or unauthorized access to systems.
                While we strive for excellence, we cannot guarantee specific
                outcomes, such as rankings in digital marketing or financial
                gains.
              </p>
              <br />
            </li>
            <li>
              <strong>Termination</strong>
              <br />
              <p>
                Either party may terminate the agreement with written notice if
                terms are violated or obligations are not met. In the event of
                termination, the client is responsible for payment for all work
                completed up to the termination date.
              </p>
              <br />
            </li>
            <li>
              <strong>Third-Party Tools and Services</strong>
              <br />
              <p>
                Our projects may involve the integration of third-party tools or
                services. Arczenrick is not responsible for the performance or
                terms of these third-party providers.
              </p>
              <br />
            </li>
            <li>
              <strong>Governing Law</strong>
              <br />
              <p>
                These terms are governed by the laws of Government. Any disputes
                will be resolved in the courts of [Insert Jurisdiction].
              </p>
              <br />
            </li>
            <li>
              <strong>Changes to Terms</strong>
              <br />
              <p>
                Arczenrick reserves the right to update or modify these Terms and
                Conditions at any time without prior notice. Updates will be
                posted on our website, and continued use of our services
                constitutes acceptance of the revised terms.
              </p>
              <br />
            </li>
            <li>
              <strong>Contact Us</strong>
              <br />
              <p>
                For questions or concerns about these Terms and Conditions,
                please contact us at:
              </p>
              <br />
              <p>Arczenrick IT Solutions</p>
              <ul>
                <li>Email: {CONTACT_DETAILS.email}</li>
                <li>Phone: {CONTACT_DETAILS.phone}</li>
                <li>Website: www.arczenrick.com</li>
              </ul>
              <br />
            </li>
          </ol>
        </div>
        <br />
        <br />
      </CustomContainer>
    </div>
  );
};

export default TermsScreen;
