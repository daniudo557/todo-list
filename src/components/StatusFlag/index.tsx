import { Chip } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface StatusFlagProps {
  isPending: boolean;
}

const StatusFlag = ({ isPending }: StatusFlagProps) => {
  if (isPending) {
    return (
      <Chip
        icon={<AccessTimeIcon />}
        label="Pending"
        color="warning"
        variant="outlined"
      />
    );
  }

  return (
    <Chip
      icon={<DoneIcon />}
      label="Completed"
      color="success"
      variant="outlined"
    />
  );
};

export default StatusFlag;
