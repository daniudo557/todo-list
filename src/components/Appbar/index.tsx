import {
  AppBar as AppbarMUI,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import { AccountCircle, Menu } from "@mui/icons-material";

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Appbar = () => {
  return (
    <>
      <HideOnScroll>
        <AppbarMUI>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo List
            </Typography>
            <IconButton size="large" color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppbarMUI>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Appbar;
