import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © 2021 Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
