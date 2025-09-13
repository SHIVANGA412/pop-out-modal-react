import { Box, Typography, Button, Grid, Paper } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"

export default function DetailsTab() {
  return (
    <Box>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Trip Highlights
          </Typography>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              border: "2px dashed #d1d5db",
              backgroundColor: "#f9fafb",
              cursor: "pointer",
              mb: 4,
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
              }}
            >
              Add Highlight
            </Button>
          </Paper>

          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Inclusions
          </Typography>
          <Paper
            sx={{
              p: 3,
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
              }}
            >
              Add Inclusion
            </Button>
          </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Exclusions
          </Typography>
          <Paper
            sx={{
              p: 3,
              textAlign: "center",
              border: "2px dashed #d1d5db",
              backgroundColor: "#f9fafb",
              cursor: "pointer",
              mb: 4,
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
              }}
            >
              Add Exclusion
            </Button>
          </Paper>

          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Frequently Asked Questions
          </Typography>
          <Paper
            sx={{
              p: 3,
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
              }}
            >
              Add FAQ
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
