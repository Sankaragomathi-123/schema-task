import styled from "@emotion/styled";
import { Button, Box, Select, Typography, Link } from "@mui/material";
const M = {
  SegmentContainer: styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100vh",
  })),
  SegmentButtonContainer: styled(Box)(({ theme }) => ({
    width: "50%",
    margin: "auto",
    paddingTop: "10rem",
  })),
  SegmentButton: styled(Button)(({ theme }) => ({
    textTransform: "none",
    border: "2px solid white",
    color: "white",
    fontSize: "20px",
    padding: "5px 1.5rem",
  })),
  SegmentModalContainer: styled(Box)(({ theme }) => ({
    background: "#39AEBC",
    padding: "2rem 1.5rem",
  })),
  SegmentModalTitle: styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: "25px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  })),
  SegmentAddLayout: styled(Box)(({ theme }) => ({
    padding: "2rem 1.5rem",
  })),
  SegmentName: styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    margin: "1rem 0",
  })),
  segmentSelectBox: styled(Select)(({ theme }) => ({
    "&:hover": { backgroundColor: "transparent" },
  })),
  AddShemaSelectContainer: styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: 1,
    gap: "1rem",
    padding: " 1rem 1rem 0 1rem",
  })),
  ValidationSegmentError: styled("p")(({ theme }) => ({
    color: "red",
    margin: 0,
    fontSize: "0.75rem",
    fontWeight: 300,
    marginLeft: "1rem",
  })),
  SegmentBlueBoxContainer: styled(Box)(({ theme }) => ({
    padding: "1rem",
    display: "flex",
    gap: "1rem",
    flexDirection: "column",
  })),
  SegmentAddShema: styled(Link)(({ theme }) => ({
    color: "#41B494",
    fontWeight: 600,
    fontSize: "16px",
    cursor: "pointer",
    paddingLeft: "1rem",
  })),
  SegmentDeleteContainer: styled(Box)(({ theme }) => ({
    background: "#F2FBF9",
    padding: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  })),
  SegmentDeleteButton: styled(Button)(({ theme }) => ({
    background: "#657A93",
    padding: "3px 0",
    minWidth: "30px",
  })),

  SegmentFooterContainer: styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40px",
    background: "#F6F6F6",
    padding: "2rem 1.5rem",
    display: "flex",
    gap: "1.5rem",
  })),
  SegmentSaveButton: styled(Button)(({ theme }) => ({
    background: "#41B494",
    color: "white",
    fontWeight: 600,
    textTransform: "none",
    fontSize: "16px",
    padding: "1.5rem 1rem",
    " &: hover": {
      background: "#41B494",
    },
  })),
  SegmentCancelButton: styled(Button)(({ theme }) => ({
    background: "white",
    color: "red",
    padding: "1.5rem 1rem",
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "none",
    "&: hover": {
      background: "white",
    },
  })),
};
export default M;
