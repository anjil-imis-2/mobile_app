import React from "react";
import { WMSTile } from "react-native-maps";
import { useSelector } from "react-redux";

import { BASE_URL_ENV } from "../../constants/config";
import { wmsProxyUrl } from "../../utils/wmsUrl";

// WMSTile that loads through the API proxy with the logged-in user's token.
// `authHeader` comes from the react-native-maps patch in .yarn/patches.
const SecureWMSTile = ({ urlTemplate, ...props }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <WMSTile
      {...props}
      urlTemplate={wmsProxyUrl(`${BASE_URL_ENV}/api`, urlTemplate)}
      authHeader={`Bearer ${token}`}
    />
  );
};

export default SecureWMSTile;
