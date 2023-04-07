import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { inputTheme } from "./assets/styles/MuiStyles";
import "./assets/styles/global.css";

import { useSelector } from "react-redux";

import { globalAlertClose } from "./redux/actions/globalAlertActions";
import BorrowerView from "./views/BorrowerView/BorrowerView";
import UserView from "./components/layout/UserView";
import VerticalNavLayout from "./components/layout/VerticalNavLayout";
import { Route, Routes } from "react-router-dom";
import WebsiteFundraiserScreen from "./views/BorrowerView/WebsiteFundraiserScreen/WebsiteFundraiserScreen";
import { setGlobalData } from "./redux/actions/globalDataActions";
import { db } from "./database/db";
import { isEmpty, isNil } from "lodash";
import { useEffect } from "react";
import { setFormData } from "./redux/actions/formDataActions";
import { getCatFromDb } from "./helpers/getCatFromDb";

const App = () => {
  const globalAlert = useSelector((state) => state.globalAlert);
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.globalData);
  const handleCloseSnackbar = () => {
    dispatch(globalAlertClose());
  };

  useEffect(() => {
    if (isNil(globalData) || isEmpty(globalData)) {
      dispatch(setGlobalData(db));
      dispatch(
        setFormData(
          getCatFromDb({
            animalName: "Inky",
          })
        )
      );
    }
  }, []);

  return (
    <ThemeProvider theme={inputTheme}>
      {/* <PortalWorkspace /> */}
      {/* <UserView id="borrower">
        <VerticalNavLayout>
          <BorrowerView />
        </VerticalNavLayout>
      </UserView> */}
      <Routes>
        <Route path={"/fundraisor/:id"} element={<WebsiteFundraiserScreen />} />
      </Routes>
      {/* <SnackbarAlert
        open={globalAlert.show}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={globalAlert.message}
        sx={{ bottom: "40px !important", zIndex: 11111111111 }}
        anchorPosition="left"
        variant="filled"
        isGlobal
        type={globalAlert.type}
      /> */}
    </ThemeProvider>
  );
};

export default App;
