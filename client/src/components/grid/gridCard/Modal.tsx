import Swal from "sweetalert2";
import { Close } from "@mui/icons-material";
import { Modal, Typography, Box, Button, Divider } from "@mui/material";

// GraphQL API Call
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_USER } from "../../../graphQL/mutations";
import { GET_USERS } from "../../../graphQL/queries";

type Props = {
  isOpen: boolean;
  id: string;
  handleClose: () => void;
};

const ModalComponent = ({ isOpen, handleClose, id }: Props) => {
  const [deleteUser] = useMutation(DELETE_USER);
  // const { loading, error, data } = useQuery(GET_USERS);

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

  const handleDeleteUser = async (id: string) => {
    try {
      handleClose();
      await deleteUser({
        variables: {
          id: id,
        },
      });
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
            onClick={handleClose}
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
