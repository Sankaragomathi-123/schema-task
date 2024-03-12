// SegmentSchemaSelection.js
import React from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import M from "../segmentLayout.style";

const SegmentSchemaSelection = ({
  segmentSchema,
  schemaOptions,
  handleChangeSchema,
  handleDeleteSchema,
  validation,
}) => {
  return (
    <M.SegmentBlueBoxContainer
      sx={{
        border: segmentSchema.length === 0 ? "none" : "3px solid #6FA8DC",
      }}>
      {segmentSchema.map((schema, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem ",
          }}>
          <FormControl fullWidth>
            <Select
              value={Object.values(schema)[0]}
              onChange={(e) => handleChangeSchema(index, e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Change schema" }}>
              <MenuItem value="" disabled>
                Change schema
              </MenuItem>
              {schemaOptions.map((option, idx) => (
                <MenuItem key={idx} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <M.SegmentDeleteContainer onClick={() => handleDeleteSchema(index)}>
            <M.SegmentDeleteButton variant="contained"></M.SegmentDeleteButton>
          </M.SegmentDeleteContainer>
        </Box>
      ))}
    </M.SegmentBlueBoxContainer>
  );
};

export default SegmentSchemaSelection;
