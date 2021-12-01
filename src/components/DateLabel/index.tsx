import { Typography } from "@mui/material";
import { useMemo } from "react";
import { distanceSiceNow } from "src/helpers/date";

interface DateLabelProps {
  label: string;
  date: Date;
}

const DateLabel = (props: DateLabelProps) => {
  const { label, date } = props;

  const distanceDate = useMemo(() => distanceSiceNow(date), [date]);

  return (
    <Typography variant="caption" color="text.secondary">
      {label}&nbsp;
      {distanceDate}
    </Typography>
  );
};

export default DateLabel;
