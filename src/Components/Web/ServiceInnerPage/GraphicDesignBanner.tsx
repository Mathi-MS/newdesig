import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const GraphicDesignBanner = () => {
  return (
    <>
            <section className="breadcrumb-section" style={{position: "relative"}}>
        <div className="backgroundHero"> </div>

        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1
                className="breadcrumb-title bannerInnerPageTitle"
                style={{
                  fontSize: "100px",
                  fontWeight: 600,
                }}
              >
                Graphic Design
              </h1>
              <Link to="/contact">
                <Box
                  sx={{
                    padding: "15px 25px",
                    border: "solid 1px var(--coral-primary-color)",
                    ":hover": { color: "var(--coral-primary-color)" },
                  }}
                  className="button-primary"
                >
                  Get a Free Consultation
                </Box>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
