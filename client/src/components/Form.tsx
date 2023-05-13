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

// GRAPHQL API
import { ADD_USER } from "../graphQL/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { GET_USERS } from "../graphQL/queries";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

interface FormValues {
  image: string;
  first_name: string;
  last_name: string;
  email: string;
  description: string;
  is_verified: boolean;
}

const Form = ({ isOpen, handleClose }: Props) => {
  const [formValues, setFormValues] = useState<FormValues>({
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    is_verified: false,
  });

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

  const [addUser] = useMutation(ADD_USER, {
    variables: { ...formValues },
    update(cache, { data: { addUser } }) {
      // @ts-ignore
      const { users } = cache.readQuery({ query: GET_USERS });
      cache.writeQuery({
        query: GET_USERS,
        data: { users: [...users, addUser] },
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await addUser({
        variables: {
          ...formValues,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "User created successfully!",
      });
      handleExit();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error",
      });
    }
  };

  const handleExit = () => {
    setFormValues({
      image: "",
      first_name: "",
      last_name: "",
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
              <InputLabel sx={labelStyling} htmlFor="image">
                Image Link
              </InputLabel>
              <OutlinedInput
                style={{ width: "100%" }}
                id="image"
                name="image"
                value={formValues.image}
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
                <InputLabel sx={labelStyling} htmlFor="first_name">
                  First Name
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="first_name"
                  name="first_name"
                  value={formValues.first_name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div style={{ width: "100%" }}>
                <InputLabel sx={labelStyling} htmlFor="last_name">
                  Last Name
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%" }}
                  id="last_name"
                  value={formValues.last_name}
                  name="last_name"
                  onChange={handleFormChange}
                  required
                />
              </div>
            </Box>
            <div style={{ width: "100%" }}>
              <InputLabel sx={labelStyling} htmlFor="email">
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
