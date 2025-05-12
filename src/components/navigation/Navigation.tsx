"use client";

import { logout } from "@/firebase/api";
import { useAuth } from "@/firebase/auth/AuthContext";
import { getFirebaseAuth } from "@/firebase/auth/firebase";
import { AccountCircle, ExitToApp } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Box,
  CircularProgress,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { signOut } from "firebase/auth";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLoadingCallback } from "react-loading-hook";

export function Navigation() {
  return <AppBarComponent />;
}

interface AppBarProps {
  locale?: string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export function AppBarComponent() {
  const { user } = useAuth();
  const [hasLoggedOut, setHasLoggedOut] = React.useState(false);
  const [handleLogout, isLogoutLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    await logout();

    router.refresh();

    setHasLoggedOut(true);
  });

  const t = useTranslations("Appbar");
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography
            color="white"
            display={{ xs: "none", sm: "block" }}
            variant="h6"
            component="p"
          >
            {"t(thesis_manager)"}
          </Typography>

          <Box flexGrow={1} />

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1">{user.displayName ?? "—"}</Typography>
          <Typography color="text.secondary" variant="body2">
            {user.email}
          </Typography>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton
            disabled={isLogoutLoading || hasLoggedOut}
            onClick={handleLogout}
            sx={{
              gap: 1,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
              }}
            >
              {isLogoutLoading ? <CircularProgress size={18} /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={t("logout")} />
          </ListItemButton>
        </ListItem>
      </Menu>
    </>
  );
}
