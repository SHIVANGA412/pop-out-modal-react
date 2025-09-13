import { Box, Typography, Button, Paper } from "@mui/material"
import { Add as AddIcon, AutoAwesome as AutoAwesomeIcon } from "@mui/icons-material"

export default function ItineraryTab() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Trip Itinerary
        </Typography>
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          sx={{
            backgroundColor: "#8b5cf6",
            "&:hover": { backgroundColor: "#7c3aed" },
            textTransform: "none",
            borderRadius: 2,
          }}
        >
          Generate with AI
        </Button>
      </Box>

      <Paper
        sx={{
          p: 6,
          textAlign: "center",
          border: "2px dashed #d1d5db",
          backgroundColor: "#f9fafb",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f3f4f6",
          },
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{
            color: "#6b7280",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          Add New Day
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Start building your itinerary by adding daily activities
        </Typography>
      </Paper>
    </Box>
  )
}
