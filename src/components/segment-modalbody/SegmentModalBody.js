import React, { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import SegmentNameInput from "./SegmentNameInput";
import SegmentSchemaSelection from "./SegmentSchemaSelection";
import AddSchemaSelect from "./AddSchemaSelect";
import SaveCancelButtons from "./SaveCancelButtons";
import M from "../segmentLayout.style";

const SegmentModalBody = ({ onClose }) => {
  const [selectedSchema, setSelectedSchema] = useState("");
  const [segmentName, setSegmentName] = useState("");
  const [segmentSchema, setSegmentSchema] = useState([]);
  const [validation, setValidation] = useState({
    segmentNameError: "",
    selectSegmentError: "",
  });
  const schemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const handleAddSchema = () => {
    if (selectedSchema) {
      setSegmentSchema([
        ...segmentSchema,
        { [selectedSchema]: selectedSchema },
      ]);
      setSelectedSchema("");
    }
  };

  const handleDeleteSchema = (index) => {
    const updatedSchema = [...segmentSchema];
    updatedSchema.splice(index, 1);
    setSegmentSchema(updatedSchema);
  };

  const handleChangeSchema = (index, newValue) => {
    const updatedSchema = [...segmentSchema];
    updatedSchema[index] = { [newValue]: newValue };
    setSegmentSchema(updatedSchema);
  };

  const sendDataToServer = async (webhookUrl, segmentData) => {
    try {
      const response = await axios.post(webhookUrl, segmentData, {
        headers: {
          "Content-Type": "application/json",
          "api-key": "57df990e-cf1d-43a5-8772-7cd4d1f4a91c",
        },
      });
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const handleSaveSegment = () => {
    const webhookUrl =
      "https://webhook.site/57df990e-cf1d-43a5-8772-7cd4d1f4a91c";

    const segmentData = {
      segment_name: segmentName,
      schema: segmentSchema,
    };

    console.log(segmentData, "dataaa");
    setValidation({
      segmentNameError: !segmentName.trim() ? "Enter the segment name" : "",
      selectSegmentError:
        segmentSchema.length === 0 ? "Choose at least one schema" : "",
    });
    if (!segmentName.trim() || segmentSchema.length === 0) return;

    sendDataToServer(webhookUrl, segmentData);
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <M.SegmentModalContainer>
        <M.SegmentModalTitle>
          <span style={{ cursor: "pointer" }} onClick={onClose}>
            &lt;
          </span>
          Saving Segment
        </M.SegmentModalTitle>
      </M.SegmentModalContainer>
      <M.SegmentAddLayout>
        <SegmentNameInput
          segmentName={segmentName}
          setSegmentName={setSegmentName}
          validation={validation}
        />
        <M.SegmentName>
          To save your segment, you need to add the schemas to build the query
        </M.SegmentName>

        <SegmentSchemaSelection
          segmentSchema={segmentSchema}
          schemaOptions={schemaOptions}
          handleChangeSchema={handleChangeSchema}
          handleDeleteSchema={handleDeleteSchema}
          validation={validation}
        />
        <AddSchemaSelect
          selectedSchema={selectedSchema}
          setSelectedSchema={setSelectedSchema}
          validation={validation}
          schemaOptions={schemaOptions}
        />
        <M.SegmentAddShema
          onClick={handleAddSchema}
          variant="contained"
          disabled={!selectedSchema}>
          + Add New Schema
        </M.SegmentAddShema>
      </M.SegmentAddLayout>
      <SaveCancelButtons
        handleSaveSegment={handleSaveSegment}
        onClose={onClose}
        segmentSchema={segmentSchema}
      />
    </Box>
  );
};
export default SegmentModalBody;
