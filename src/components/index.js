import React from "react";
import { Box, Modal } from "@mui/material";
import SegmentModalBody from "./segment-modalbody/SegmentModalBody";
import M from "./segmentLayout.style";

const style = {
  position: "absolute",
  left: "50%",
  width: "50%",
  boxShadow: 24,
  bgcolor: "white",
  height: "100vh",
};

export default function SegmentLayout() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <M.SegmentContainer>
      <M.SegmentButtonContainer>
        <M.SegmentButton onClick={handleOpen}>Save Segment </M.SegmentButton>
      </M.SegmentButtonContainer>
      <Modal
        sx={{
          "& .MuiBackdrop-root": {
            width: "50%",
            background: "transparent",
            height: "100vh",
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <SegmentModalBody onClose={handleClose} />
        </Box>
      </Modal>
    </M.SegmentContainer>
  );
}
