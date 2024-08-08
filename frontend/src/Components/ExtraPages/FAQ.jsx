import React from "react";

const FAQ = () => {
  return (
    <div className="container mt-5 d-flex flex-column">
      <h1 className="mb-4">Frequently Asked Questions (FAQs)</h1>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is MedGen?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              MedGen is your trusted partner in finding affordable healthcare
              options. We help you search for generic alternatives to brand-name
              medicines and provide information on local stores where these
              medicines are available.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I search for generic alternatives to my prescribed
              medicines?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Simply enter the name of the brand-name medicine in our search
              bar, and our system will provide a list of available generic
              alternatives, along with their prices.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Are the generic medicines as effective as brand-name medicines?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, generic medicines contain the same active ingredients,
              strength, dosage form, and route of administration as brand-name
              medicines. They are equally effective and approved by regulatory
              authorities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How do I find stores in my area that sell the medicines I need?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              After searching for a medicine, our platform will display a list
              of local pharmacies and stores where you can purchase the
              medicine. You can compare prices and choose the most convenient
              option for you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Is MedGen free to use?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, our service is completely free. We aim to make healthcare
              more accessible and affordable for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              How accurate is the information on store availability and pricing?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We strive to provide the most accurate and up-to-date information.
              However, availability and pricing may vary, so we recommend
              contacting the store directly to confirm the details.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Can I trust the information provided on your website?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We source our data from reliable and verified sources. Our goal is
              to ensure that you receive accurate and trustworthy information to
              make informed healthcare decisions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              How do I contact MedGen for support or inquiries?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can contact us via email at medgen@gmail.com or call us at +1
              (555) 123-4567. We are here to assist you with any questions or
              concerns.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              What if I cannot find a specific medicine on your website?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              If you cannot find a specific medicine, please raise a request to
              the admin in the medilo section which will be verified within 48
              hours. We are continuously updating our database to include more
              medicines and stores.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              How often is the information on your website updated?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We regularly update our database to ensure that the information on
              medicine availability, pricing, and store details is current.
              However, for the most accurate and real-time information, we
              recommend checking directly with the store.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
