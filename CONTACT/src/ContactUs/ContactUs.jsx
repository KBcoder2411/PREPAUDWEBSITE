import "./ContactUs.css";

export const ContactUs = ({ className, ...props }) => {
  return (
    <div className={"contact-us " + className}>
      <div className="rectangle-31"></div>
      <div
        className="component-6"
        style={{
          background: "url(component-60.png) center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="rectangle-10"></div>
        <div className="el-map-marker"></div>
      </div>
      <div className="frame-3851">
        <div className="frame-38512">
          <div className="frame-38513">
            <div className="get-in-touch">
              <span>
                <span className="get-in-touch-span">Get in</span>
                <span className="get-in-touch-span2">Touch</span>
              </span>{" "}
            </div>
          </div>
          <div className="frame-830">
            <div className="text-field">
              <div className="name">
                <span>
                  <span className="name-span">Name</span>
                  <span className="name-span2">*</span>
                </span>{" "}
              </div>
            </div>
            <div className="text-field">
              <div className="email">Email </div>
            </div>
            <div className="text-field">
              <div className="phone-number">
                <span>
                  <span className="phone-number-span">Phone number</span>
                  <span className="phone-number-span2">*</span>
                </span>{" "}
              </div>
            </div>
            <div className="dropdown">
              <div className="how-did-you-find-us">How did you find us? </div>
              <img className="vector-2" src="vector-20.svg" />
            </div>
            <div className="button">
              <div className="send">send </div>
            </div>
          </div>
        </div>
        <div className="frame-837">
          <div className="frame-832">
            <img className="frame-831" src="frame-8310.svg" />
            <div className="phone-99999999999">
              <span>
                <span className="phone-99999999999-span">
                  PHONE
                  <br />
                </span>
                <span className="phone-99999999999-span2">99999999999</span>
              </span>{" "}
            </div>
          </div>
          <div className="frame-836">
            <img className="frame-835" src="frame-8350.svg" />
            <div className="fax-0000000000">
              <span>
                <span className="fax-0000000000-span">
                  FAX
                  <br />
                </span>
                <span className="fax-0000000000-span2">0000000000</span>
              </span>{" "}
            </div>
          </div>
          <div className="frame-834">
            <img className="frame-833" src="frame-8330.svg" />
            <div className="email-prepaud-com">
              <span>
                <span className="email-prepaud-com-span">
                  EMAIL
                  <br />
                </span>
                <span className="email-prepaud-com-span2">prepaud.com</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <img
        className="screenshot-2025-04-15-at-12-12-30-am-removebg-preview-4"
        src="screenshot-2025-04-15-at-12-12-30-am-removebg-preview-40.png"
      />
      <div className="home">Home </div>
      <div className="about-us">About us </div>
      <div className="contact-us2">Contact us </div>
    </div>
  );
};
