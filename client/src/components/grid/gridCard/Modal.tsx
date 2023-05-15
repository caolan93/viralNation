import Swal from "sweetalert2";
import { Close } from "@mui/icons-material";
import { Modal, Typography, Box, Button, Divider } from "@mui/material";

// GraphQL API Call
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../../../graphQL/mutations";
import { GET_USERS } from "../../../graphQL/queries";
import { useDispatch, useSelector } from "react-redux";
import { clearForm } from "../../../redux/form";
import { RootState } from "../../../store";

// Styling
import "../../../styles/components/grid/gridCard/modal.scss";

type Props = {
  isOpen: boolean;
  id: string;
  handleClose: () => void;
};

const ModalComponent = ({ isOpen, handleClose, id }: Props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state?.mode.mode);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleDeleteUser = async (id: string) => {
    try {
      handleClose();
      await deleteUser({
        variables: {
          id: id,
        },
      });
      dispatch(clearForm());
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "User deleted successfully!",
      });
    } catch (error) {
      handleClose();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error deleting this user!",
      });
    }
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{ backgroundColor: mode === "light" ? "#FCFCFD" : "#2B2B2B" }}
        className="dropdown-modal"
      >
        <Box
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            color={mode === "light" ? "#212121" : "#E0E0E0"}
            variant="h5"
          >
            Remove Profile
          </Typography>
          <Button
            sx={{
              color: "#9E9E9E",
              display: "flex",
              padding: 0,
              justifyContent: "flex-end",
            }}
            onClick={handleClose}
          >
            <Close />
          </Button>
        </Box>
        <Divider />
        <Typography
          color={mode === "light" ? "#212121" : "#E0E0E0"}
          variant="body2"
          sx={{ p: 3 }}
        >
          Removed profile will be deleted permenantly and won’t be available
          anymore.
        </Typography>
        <Divider />
        <Box className="buttons-container">
          <Button onClick={handleClose} variant="contained" color="primary">
            <Typography>Cancel</Typography>
          </Button>
          <Button
            onClick={() => handleDeleteUser(id)}
            variant="contained"
            color="error"
          >
            <Typography>Delete</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
