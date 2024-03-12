import React from "react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import M from "../segmentLayout.style";

const AddSchemaSelect = ({
  selectedSchema,
  setSelectedSchema,
  validation,
  schemaOptions,
}) => {
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <M.AddShemaSelectContainer>
        <FormControl fullWidth>
          <Select
            value={selectedSchema}
            onChange={(e) => setSelectedSchema(e.target.value)}
            displayEmpty
            error={!!validation.selectSegmentError}
            sx={{
              "& .MuiSelect-select": {
                border: validation.selectSegmentError ? "1px solid red" : "",
              },
            }}
            inputProps={{ "aria-label": "Add schema to segment" }}>
            <MenuItem value="" disabled>
              Add schema to segment
            </MenuItem>
            {schemaOptions.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <M.SegmentDeleteContainer>
          <M.SegmentDeleteButton variant="contained"></M.SegmentDeleteButton>
        </M.SegmentDeleteContainer>
      </M.AddShemaSelectContainer>
      <M.ValidationSegmentError>
        {validation.selectSegmentError}
      </M.ValidationSegmentError>
    </Box>
  );
};

export default AddSchemaSelect;
