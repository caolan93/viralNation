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

import "../styles/components/form.scss";

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

const Form = ({ isOpen, handleClose }: Props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    imageLink: "",
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    is_verified: false,
  });

  const style = {};

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

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    const newValue = name === "is_verified" ? checked : value;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(
      `Name: ${formValues.firstName}, Email: ${formValues.email}, Name: ${formValues.lastName}, ImageLink: ${formValues.imageLink}, Desc: ${formValues.description}, Is Verified: ${formValues.is_verified}`
    );
  };

  const handleExit = () => {
    setFormValues({
      imageLink: "",
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      is_verified: false,
    });
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal-container">
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Create Profile</Typography>
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
              p: 3,
              boxSizing: "border-box",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "100%" }}>
              <InputLabel sx={labelStyling} htmlFor="imageLink">
                Image Link
              </InputLabel>
              <OutlinedInput
                style={{ width: "100%" }}
                id="imageLink"
                name="imageLink"
                value={formValues.imageLink}
                onChange={handleFormChange}
                required
              />
            </div>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ width: "100%" }}>
                <InputLabel sx={labelStyling} htmlFor="firstName">
                  First Name
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div style={{ width: "100%" }}>
                <InputLabel sx={labelStyling} htmlFor="lastName">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="lastName"
                  value={formValues.lastName}
                  name="lastName"
                  onChange={handleFormChange}
                  required
                />
              </div>
            </Box>
            <div style={{ width: "100%" }}>
              <InputLabel sx={labelStyling} htmlFor="emai">
                Email
              </InputLabel>

              <OutlinedInput
                style={{ width: "100%" }}
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleFormChange}
                required
              />
            </div>
            <div style={{ width: "100%" }}>
              <InputLabel sx={labelStyling} htmlFor="description">
                Description
              </InputLabel>
              <OutlinedInput
                multiline
                rows={5}
                style={{ width: "100%" }}
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleFormChange}
                required
              />
            </div>
            <Box
              sx={{
                border: 1,
                borderColor: "#E0E0E0",
                borderRadius: "4px",
                background: "#EEEEEE",
                display: "flex",
                height: "40px",
                width: "100%",
                p: 2,
                boxSizing: "border-box",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2">Talent is verified</Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={formValues.is_verified}
                    onChange={handleFormChange}
                    name="is_verified"
                  />
                }
                label=""
              />
            </Box>
          </Box>
          <Divider sx={{ width: "100%" }} />
          <Box
            sx={{
              boxSizing: "border-box",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              p: "24px",
            }}
          >
            <Button
              type="submit"
              sx={{ px: "12px", py: "8", textTransform: "none" }}
              variant="contained"
            >
              Create Profile
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Form;
