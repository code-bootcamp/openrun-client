import * as React from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          {props.tabs.map((e) => (
            <Tab label={e} />
          ))}
        </Tabs>
      </Box>
    </>
  );
}
//예시
// const mainPage = () => {
//   return (
//     <div>
//       <CenteredTabs tabs={["m1", "m2", "m3", "m4", "m5"]} />
//     </div>
//   );
// };
