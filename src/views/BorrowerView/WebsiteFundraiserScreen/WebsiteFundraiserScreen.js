import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  LinearProgress,
  Stack,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import React from "react";

import { db } from "../../../database/db";
import { isArray, isNil } from "lodash";
import { MonetizationOnOutlined, ShareRounded } from "@mui/icons-material";
import { getCatFromDb } from "../../../helpers/getCatFromDb";
import { useSelector } from "react-redux";
import { arrayProtector } from "../../../helpers/arrayProtector";

const styles = {
  flexCenterAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const WebsiteFundraiserScreen = (props) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1400px" }}>
      <Stack p={4} spacing={4}>
        <TopRow />
        {/* <Divider /> */}
        {/* <BottomRow /> */}
      </Stack>
    </Container>
  );
};

const TopRow = () => {
  const formData = useSelector((state) => state.formData);
  const { name, images, description } = formData;
  return (
    <Row sx={{ flexWrap: "wrap" }}>
      <Stack spacing={4} flexBasis={"540px"}>
        <Stack spacing={1}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 700, lineHeight: "2.4rem" }}
          >
            Help {name}
          </Typography>
          <Typography paragraph>{description}</Typography>
          <Typography paragraph>
            Siblings Pinky & Clyde were adopted together and then siblings Inky
            & Blinky.
          </Typography>
          <Typography paragraph>
            Unfortunately, shortly after being adopted Inky became one of
            several cats that we are treating with FIP & also began having
            seizures.
          </Typography>
          <Typography paragraph>
            After time spent in West Hills Animal Hospital, Inky is currently
            being treated with FIP medication, as well as seizure medication.
          </Typography>
        </Stack>
        <Row spacing={2}>
          <Image maxHeight={"300px"} src={arrayProtector(images)[0]} />
          <Image maxHeight={"300px"} src={arrayProtector(images)[1]} />
        </Row>
      </Stack>
      <Box
        sx={{
          ...styles.flexCenterAll,
          padding: "10px",
          flexGrow: 1,
          // flexDirection: "column",
        }}
      >
        {/* <Thermometer
          theme="light"
          value="2124"
          max="3000"
          size="large"
          height="400"
        /> */}
        <DonationCard />
      </Box>
    </Row>
  );
};
const DonationCard = () => {
  return (
    <Card
      sx={{
        flexShrink: 1,
        padding: "14px",
        display: "flex",
        flexGrow: 0,
        flexBasis: "460px",
        height: "100%",
        maxHeight: "80vh",
      }}
    >
      <Stack width="100%" alignItems={"center"}>
        <Typography variant="h1" sx={{ fontWeight: 600, lineHeight: "2.4rem" }}>
          Amount Raised: $3,000
        </Typography>
        <Typography
          variant="body"
          sx={{ fontSize: ".9rem", fontWeight: 500, color: "#928d8d" }}
        >
          Target goal of $15,000
        </Typography>
        <ThermometerMeter />
        <Stack
          padding={"10px"}
          sx={{ marginTop: "10px", width: "100%" }}
          spacing={1}
          direction={"row"}
        >
          <Button
            endIcon={<ShareRounded />}
            sx={{ width: "100%", padding: "8px" }}
            variant="outlined"
          >
            Share
          </Button>
          <Button
            endIcon={<MonetizationOnOutlined />}
            sx={{ width: "100%", padding: "8px" }}
            variant="contained"
          >
            Donate
          </Button>
        </Stack>
        <Row sx={{ marginTop: "30px" }} between>
          <Typography
            sx={{ fontWeight: 500 }}
            variant="body2"
            color="text.secondary"
          >
            Our Life Saving Donars
          </Typography>
          <Typography
            sx={{ fontWeight: 500 }}
            variant="body2"
            color="text.secondary"
          >
            24 donations
          </Typography>
        </Row>
        <Stack
          id="donation-list"
          flexGrow={1}
          width={"100%"}
          sx={{ border: "var(--border)", overflowY: "auto" }}
        >
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
          <DonationItem />
        </Stack>
      </Stack>
    </Card>
  );
};

const ThermometerMeter = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "95%",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          zIndex: 11111111,
          width: "30px",
          height: "30px",
          background: "#1a90ff",
          borderRadius: "50px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          fontSize: ".7rem",
          left: 0,
        }}
      >
        54%
      </Box>
      <BorderLinearProgress
        variant="determinate"
        value={34}
        color="secondary"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

const DonationItem = ({ name, amount, noBorder }) => {
  return (
    <>
      <Box sx={{ p: 2, gap: "10px", display: "flex" }}>
        <Avatar
          sx={{ borderRadius: "50px" }}
          variant="rounded"
          src="avatar1.jpg"
        />
        <Stack width={"100%"} spacing={0.5}>
          <Row between>
            <Typography fontWeight={700}>John Smith</Typography>
            <Typography fontWeight={500}>$100</Typography>
          </Row>
          <Typography variant="body2" color="text.secondary">
            Good luck and feel better!
          </Typography>
        </Stack>
      </Box>
      {noBorder ? null : <Divider />}
    </>
  );
};

const Row = ({ children, spacing, between, sx }) => {
  const spacingAmount = spacing * 10;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: `${spacingAmount}px`,
        justifyContent: between ? "space-between" : "flex-start",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
const Image = ({ src, maxWidth, maxHeight }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
      }}
    >
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={src}
        alt=""
      />
    </Box>
  );
};

export default WebsiteFundraiserScreen;
