import { Box } from "@mui/material";
import { WebHeader } from "./WebHeader";
import { Outlet } from "react-router-dom";
import { WebFooter } from "./WebFooter";
import { ScrollToTop } from "../ScrollToTop";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { WebChatBot } from "../WebChatBot";

export const WebLayout = () => {
  return (
    <Box className="page-wrapper">
      <ScrollToTop />
      <WebHeader />
      <Outlet />
      <WebFooter />
      <WhatsAppFloat />
      <WebChatBot />
    </Box>
  );
};
