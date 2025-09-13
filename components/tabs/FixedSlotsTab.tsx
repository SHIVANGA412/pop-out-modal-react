import { Box, Typography, Paper } from "@mui/material"

export default function FixedSlotsTab() {
  return (
    <Box>
      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          backgroundColor: "#f3f4f6",
          color: "#9ca3af",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Fixed Slots
        </Typography>
        <Typography variant="body1">This section is currently unavailable</Typography>
      </Paper>
    </Box>
  )
}
