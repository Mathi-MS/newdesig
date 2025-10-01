import { Box, Tooltip, tooltipClasses, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { commonWord } from "../../assets/CommonWord";
import { MdContactSupport } from "react-icons/md";

// Custom Styled Tooltip
const CustomTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white", // green background
    color: "var(--coral-primary-color)",
    fontSize: "12px",
    fontWeight: 600,
    padding: "10px 15px",
    borderRadius: "5px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    animation: "fadeIn 1s ease-in-out",
    maxWidth: "200px",
    marginLeft: "20px",
    fontFamily:"Syne"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(5px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
}));

export const WhatsAppFloat = () => {
  const [openTooltip, setOpenTooltip] = useState(false);

  // Format phone number for WhatsApp (remove spaces, dashes, and parentheses)
  const formatPhoneForWhatsApp = (phone: string) => {
    return phone.replace(/[\s\-\(\)]/g, "");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = formatPhoneForWhatsApp(commonWord.contact);
    const message =
      "Hello! I would like to book a free consultation to discuss my project requirements.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenTooltip(true);
      setTimeout(() => setOpenTooltip(false), 3000); // show for 4 sec
    }, 5000); // every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <CustomTooltip
        title="Click here to get FREE consultation!"
        open={openTooltip}
        placement="top"
        arrow
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "var(--primary)",
            borderRadius: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            animation: "pulse 2s infinite",
          }}
          onClick={handleWhatsAppClick}
        >
          <MdContactSupport style={{ color: "#fff", fontSize: "20px" }} />
        </div>
      </CustomTooltip>
    </Box>
  );
};
