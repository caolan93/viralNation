import { useState, useEffect } from "react";
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
import { ADD_USER, UPDATE_USER } from "../graphQL/mutations";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { GET_USERS } from "../graphQL/queries";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { clearForm } from "../redux/form";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const Form = ({ isOpen, handleClose }: Props) => {
  const dispatch = useDispatch();

  const initialValues = useSelector(
    (state: RootState) => state?.form?.formValues
  );
  const mode = useSelector((state: RootState) => state?.mode.mode);

  const [formValues, setFormValues] = useState<FormValues>({
    id: "",
    image: "",
    first_name: "",
    last_name: "",
    email: "",
    description: "",
    is_verified: false,
  });

  useEffect(() => {
    setFormValues({
      id: initialValues?.id,
      image: initialValues?.image,
      first_name: initialValues?.first_name,
      last_name: initialValues?.last_name,
      email: initialValues?.email,
      description: initialValues?.description,
      is_verified: initialValues?.is_verified,
    });
  }, [initialValues]);

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

  const [updateUser] = useMutation(UPDATE_USER, {
    variables: { ...formValues },
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if (initialValues.id !== "") {
        await updateUser({
          variables: {
            ...formValues,
          },
        });

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User updated successfully!",
        });
        handleExit();
      } else {
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
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
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
    dispatch(clearForm());
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          backgroundColor: mode === "light" ? "#FFF" : "#181A1C",
        }}
        className="modal-container"
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: mode === "light" ? "#181A1C" : "#FFF",
              }}
              color="cardTitle"
              variant="h5"
            >
              Create Profile
            </Typography>
            <Button
              sx={{
                display: "flex",
                padding: 0,
                justifyContent: "flex-end",
              }}
              onClick={handleExit}
            >
              <Close sx={{ color: "#9E9E9E" }} />
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
                borderColor: mode === "light" ? "#E0E0E0" : "#2b2B2B",
                borderRadius: "4px",
                background: mode === "light" ? "#EEEEEE" : "#212121",
                display: "flex",
                height: "40px",
                width: "100%",
                p: 2,
                boxSizing: "border-box",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: mode === "light" ? "#212121" : "#EEEEEE" }}
                variant="body2"
              >
                Talent is verified
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    color="secondary"
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
              disableElevation
              sx={{
                backgroundColor: "#3DACFF",
                px: "12px",
                py: "8",
                textTransform: "none",
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  color: "#F5f5f5",
                }}
                variant="body2"
              >
                {formValues?.id !== "" ? "Update Profile" : "Create Profile"}
              </Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default Form;
