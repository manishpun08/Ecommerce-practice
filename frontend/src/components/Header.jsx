import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutConfirmationDialog from "./LogoutConfirmationDialog";
import CustomAvatar from "./CustomAvatar";
import { Container } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useQuery } from "react-query";
import $axios from "../lib/axios.instance";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Product",
    path: "/product",
  },
];

const Header = (props) => {
  const userRole = localStorage.getItem("userRole");

  // get cart Item count
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["get-cart-item-count"],
    queryFn: async () => {
      return await $axios.get("/cart/item/count");
    },
    enabled: userRole === "buyer",
  });

  const itemCount = data?.data?.itemCount;

  // navigate menu
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Nepal Mart
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Container>
        <CssBaseline />
        <AppBar component="nav" sx={{ background: "#F875AA" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Nepal Mart
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            {/* cart  */}
            {userRole === "buyer" && (
              <IconButton
                onClick={() => navigate("/cart")}
                sx={{ color: "#fff", marginRight: "1.5rem", cursor: "pointer" }}
              >
                <StyledBadge badgeContent={itemCount} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            )}
            {/* user avatar */}
            <CustomAvatar />
            {/* logout  */}
            <LogoutConfirmationDialog />
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;
