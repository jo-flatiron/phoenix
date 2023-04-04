import {
  AccountCircleOutlined,
  AssessmentOutlined,
  BarChartOutlined,
  FileUploadOutlined,
  HelpOutline,
  HomeOutlined,
  HomeRounded,
  MonetizationOnOutlined,
  PersonOutline,
  PersonSearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, Divider, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import NavLink from "../../../components/navigation/NavLink";

import NavLinkGroup from "../../../components/navigation/NavLinkGroup";

const BorrowerVerticalNavigationLinks = ({ isCollapsed }) => {
  const borrowerRoutesProfile = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <HomeOutlined />,
    },
    {
      label: "Loan Applications",
      path: "/loan-applications",
      icon: <MonetizationOnOutlined />,
    },
    {
      label: "Credit Authorizations",
      path: "/credit-authorizations",
      icon: <PersonSearchOutlined />,
    },
    {
      label: "File Manager",
      path: "/file-manager",
      icon: <FileUploadOutlined />,
    },
    {
      label: "Scenarios",
      path: "/scenarios",
      icon: <AssessmentOutlined />,
    },
  ];

  const borrowerRoutesSubmissions = [
    {
      label: "My Profile",
      path: "/profile",
      icon: <AccountCircleOutlined />,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: <SettingsOutlined />,
    },
    {
      label: "Help",
      path: "/help",
      icon: <HelpOutline />,
    },
  ];

  return (
    <Box
      component={"nav"}
      id="borrower-navbar"
      height="100%"
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
    >
      <Stack
        direction={"column"}
        justifyContent="space-between"
        sx={{ flexGrow: 1 }}
      >
        <LinkListGroup title={"Submissions"}>
          {borrowerRoutesProfile.map((link, index) => (
            <ListItem key={link.label} disablePadding>
              <NavLink
                hideText={isCollapsed}
                icon={link.icon}
                id="dashboard-home"
                to={link.path}
                label={link.label}
              />
            </ListItem>
          ))}
        </LinkListGroup>
        <LinkListGroup title={"Profile"}>
          <Divider />
          {borrowerRoutesSubmissions.map((link, index) => (
            <ListItem key={link.label} disablePadding>
              <NavLink
                hideText={isCollapsed}
                icon={link.icon}
                id="dashboard-home"
                to={link.path}
                label={link.label}
              />
            </ListItem>
          ))}
        </LinkListGroup>
      </Stack>
    </Box>
  );
};

const LinkListGroup = ({ title, children }) => {
  return (
    <Box
      sx={{
        ".MuiListItemIcon-root": {
          minWidth: "32px",
        },
        ".nav-link-item": {
          ".MuiButtonBase-root": {
            paddingLeft: "10px",
          },

          ".MuiTypography-root": {
            color: "#00000099",
            // color: "#000000de",
            // color: "rgba(0, 0, 0, 0.54)",
            fontSize: ".75rem !important",
            fontWeight: "600",
          },
          ".MuiSvgIcon-root": {
            height: ".9em",
          },
          "&:hover": {
            background: "#76a2cc24 !important",
          },
          "&.active": {
            color: "var(--blue) !important",
            background: "#76a2cc36",
            ".MuiTypography-root": {
              color: "var(--blue)",
              fontSize: ".75rem !important",
              fontWeight: "600",
            },
            ".MuiSvgIcon-root": {
              fill: "var(--blue)",
            },
          },
        },
      }}
    >
      <List
        sx={{
          color: "var(--black)",
          padding: 0,
        }}
      >
        {children}
      </List>
    </Box>
  );
};

export default BorrowerVerticalNavigationLinks;
