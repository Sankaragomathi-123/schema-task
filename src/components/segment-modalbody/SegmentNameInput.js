// SegmentNameInput.js
import React from "react";
import { TextField } from "@mui/material";
import M from "../segmentLayout.style";

const SegmentNameInput = ({ segmentName, setSegmentName, validation }) => {
  return (
    <>
      <M.SegmentName>Enter the Name of the Segment</M.SegmentName>
      <TextField
        type="text"
        placeholder="Name of the Segment"
        sx={{ width: "100%" }}
        value={segmentName}
        onChange={(e) => setSegmentName(e.target.value)}
        error={!!validation?.segmentNameError}
        helperText={validation?.segmentNameError}
        FormHelperTextProps={{ sx: { margin: 0 } }}
      />
    </>
  );
};

export default SegmentNameInput;
