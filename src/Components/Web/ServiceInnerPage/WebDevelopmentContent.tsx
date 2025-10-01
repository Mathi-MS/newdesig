import { Box } from "@mui/material";
import { WebContact } from "../HomeInnerPage/WebContact";

export const WebDevelopmentContent = () => {
  return (
    <>
      <section
        className="service-details-section"
        style={{ background: "var(--black-body-color)", padding: "60px 0px",position:"relative" }}
      >
        <div className="container service-container w-container">
          <div
            className="service-details-wrapper"
            style={{ flexDirection: "column", gap: "10px" }} data-aos="fade-up"
          >
            <div className="section-title-block">
              <div
                className="section-intro-text"
                style={{ textAlign: "start" }}
              >
                Our Services
              </div>
              <h2
                className="section-title small-title"
                style={{ textAlign: "start" }}
              >
                Our Web Development Services
              </h2>
            </div>
            <div
              className="service-details-content"
              style={{ maxWidth: "unset !important" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  fontFamily: "Syne",
                  textAlign: "start",
                  color: "var(--navy)",
                }}
              >
                We offer comprehensive web development services tailored to meet
                your business needs. Our expertise spans across various
                technologies and platforms, ensuring scalable, secure, and
                user-friendly solutions.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  marginTop: "40px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                    data-aos="fade-right"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Custom Website Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Bespoke websites built with modern frameworks and
                      responsive design.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                     data-aos="fade-left"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      E-commerce Solutions
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Full-featured online stores with secure payment gateways
                      and inventory management.
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                     data-aos="fade-right"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Web Application Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Complex web applications with advanced functionality and
                      seamless user experience.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                     data-aos="fade-right"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      CMS Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Content Management Systems for easy website updates and
                      maintenance.
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                     data-aos="fade-right"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      API Integration
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Seamless integration with third-party services and APIs.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      background: "var(--black-body-color)",
                    }}
                     data-aos="fade-left"
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Website Maintenance
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Ongoing support, updates, and performance optimization.
                    </p>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="line-design-wrapper">
          <div className="single-line"></div>
          <div className="single-line"></div>
          <div className="single-line"></div>
        </div>
      </section>

      <section
        className="fun-fact-section"
        style={{ backgroundColor: "var(--navy)", padding: "60px 0" }}
      >
        <div className="container service-container w-container">
          <div className="fun-fact-wrapper-block"  data-aos="fade-left">
            <div
              className="section-title-block "
              style={{ textAlign: "start", marginBottom: "0px" }}
            >
              <div className="section-intro-text">Why Choose Us</div>
              <h2
                className="section-title small-title"
                style={{ textAlign: "start", color: "white" }}
              >
                Why Choose Our Web Development Services
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "30px",
              }}
            >
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Expert Team
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Our skilled developers stay updated with the latest
                  technologies and best practices.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Timely Delivery
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  We adhere to strict timelines and deliver projects on schedule
                  without compromising quality.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Quality Assurance
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Rigorous testing ensures bug-free, secure, and
                  high-performance websites.
                </p>
              </div>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 auto 20px",
                    backgroundColor: "var(--coral-primary-color)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    fontFamily: "Syne",
                  }}
                >
                  Ongoing Support
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: "Syne",
                  }}
                >
                  Continuous maintenance and support to keep your website
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="service-details-section"
        style={{
          background: "var(--black-body-color)",
          position: "relative",
          padding: "60px 0px",
        }}
      >
        <div
          className="container service-container w-container"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Box
            className="service-details-wrapper"
            sx={{ display: "flex", flexDirection: "column" }}
            
          >
            <div className="section-title-block " data-aos="fade-left" >
              <div className="section-intro-text">Our Process</div>
              <h2 className="section-title small-title">
                Our Development Process
              </h2>
            </div>
            <div
              className="service-details-content"
              style={{ maxWidth: "unset !important" }}
              data-aos="fade-left"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      position: "relative",
                      backgroundColor: "var(--black-body-color)",
                    }}
                    
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--coral-primary-color)",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0 auto 20px",
                        fontFamily: "Syne",
                      }}
                    >
                      1
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Discovery & Planning
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      We start by understanding your requirements, target
                      audience, and business goals to create a comprehensive
                      project plan.
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      position: "relative",
                      backgroundColor: "var(--black-body-color)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--coral-primary-color)",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0 auto 20px",
                        fontFamily: "Syne",
                      }}
                    >
                      2
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Design & Prototyping
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Our designers create wireframes and prototypes to
                      visualize the user experience and interface before
                      development begins.
                    </p>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    "@media (max-width: 600px)": { flexDirection: "column" },
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      position: "relative",
                      backgroundColor: "var(--black-body-color)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--coral-primary-color)",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0 auto 20px",
                        fontFamily: "Syne",
                      }}
                    >
                      3
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Development
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Using modern technologies and best practices, our
                      developers build your website with clean, efficient code.
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "10px",
                      position: "relative",
                      backgroundColor: "var(--black-body-color)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--coral-primary-color)",
                        color: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "0 auto 20px",
                        fontFamily: "Syne",
                      }}
                    >
                      4
                    </div>
                    <h3
                      style={{
                        fontSize: "18px",
                        marginBottom: "10px",
                        fontFamily: "Syne",
                        color: "var(--coral-primary-color)",
                      }}
                    >
                      Testing & Quality Assurance
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily: "Syne",
                        color: "var(--navy)",
                      }}
                    >
                      Rigorous testing across multiple devices and browsers
                      ensures your website works perfectly for all users.
                    </p>
                  </div>
                </Box>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    position: "relative",
                    backgroundColor: "var(--black-body-color)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "var(--coral-primary-color)",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 auto 20px",
                      fontFamily: "Syne",
                    }}
                  >
                    5
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      marginBottom: "10px",
                      fontFamily: "Syne",
                      color: "var(--coral-primary-color)",
                    }}
                  >
                    Launch & Optimization
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      fontFamily: "Syne",
                      color: "var(--navy)",
                    }}
                  >
                    We launch your website and provide ongoing optimization to
                    improve performance and user engagement.
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="line-design-wrapper">
          <div className="single-line"></div>
          <div className="single-line"></div>
          <div className="single-line"></div>
        </div>
      </section>
      <WebContact />
    </>
  );
};
