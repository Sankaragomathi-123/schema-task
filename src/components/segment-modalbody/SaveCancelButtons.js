import React from "react";
import M from "../segmentLayout.style";

const SaveCancelButtons = ({ handleSaveSegment, onClose, segmentSchema }) => {
  return (
    <M.SegmentFooterContainer>
      <M.SegmentSaveButton
        onClick={handleSaveSegment}
        variant="contained"
        disabled={segmentSchema.length === 0}>
        Save the Segment
      </M.SegmentSaveButton>
      <M.SegmentCancelButton onClick={onClose}>Cancel</M.SegmentCancelButton>
    </M.SegmentFooterContainer>
  );
};

export default SaveCancelButtons;
