import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmation = ({
  onConfirm,
  onCancel,
}: DeleteConfirmationProps) => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Are you sure you want to delete this item?
      </Typography>
      Do you really want to delete this item? This process cannot be undone.
      <Box>
        <Button onClick={onCancel}>No</Button>
        <Button onClick={onConfirm}>Yes</Button>
      </Box>
    </Box>
  );
};

export default DeleteConfirmation;
