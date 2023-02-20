import { Paper, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import SearchField from "./SearchFiled";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <Paper
      sx={{
        height: "3rem",
        width: "80vw",
        padding: "1rem",
      }}
    >
      <Stack
        direction="row"
        flexGrow={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography>Dashboard</Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <SearchField />
          <NotificationsIcon />
        </Stack>
      </Stack>
    </Paper>
  );
}
export default Navbar;
