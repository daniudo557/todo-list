import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Typography } from "@mui/material";

import "./EmptyData.scss";

const EmptyData = () => {
  return (
    <div className="empty-container">
      <ErrorOutlineIcon sx={{ fontSize: 30, marginRight: "8px" }} />
      <Typography variant="h5" component="h5">
        No data found
      </Typography>
    </div>
  );
};
export default EmptyData;
