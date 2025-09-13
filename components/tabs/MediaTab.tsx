import { Box, TextField, Typography, Button, Paper } from "@mui/material"
import { Add as AddIcon } from "@mui/icons-material"

export default function MediaTab() {
  return (
    <Box>
      <TextField
        fullWidth
        label="Hero Image"
        required
        defaultValue="https://example.com/hero-image.jpg"
        sx={{ mb: 4 }}
        helperText="Enter the URL for the main hero image"
      />

      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Image Gallery
      </Typography>

      <Paper
        sx={{
          p: 4,
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
          Add Image
        </Button>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Click to upload images or drag and drop
        </Typography>
      </Paper>
    </Box>
  )
}
