import { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Modal,
  Typography,
  Box,
  Button,
  Divider,
  Switch,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
} from "@mui/material";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

interface FormValues {
  imageLink: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  is_verified: boolean;
}

const ModalComponent = ({ isOpen, handleClose }: Props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const labelStyling = {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0.4000000059604645px",
    textAlign: "left",
    marginBottom: "4px",
    display: "contents",
  };

  const handleExit = () => {
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Remove Profile</Typography>
          <Button
            sx={{
              color: "#9E9E9E",
              display: "flex",
              padding: 0,
              justifyContent: "flex-end",
            }}
            onClick={handleExit}
          >
            <Close />
          </Button>
        </Box>
        <Divider />
        <Box
          sx={{
            py: 2,
            px: 3,
            boxSizing: "border-box",
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button onClick={handleExit} variant="contained" color="primary">
            <Typography>Cancel</Typography>
          </Button>
          <Button variant="contained" color="error">
            <Typography>Delete</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
