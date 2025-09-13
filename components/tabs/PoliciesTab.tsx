import { Box, TextField, Typography } from "@mui/material"

export default function PoliciesTab() {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Payment Terms
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        placeholder="Describe your payment terms and policies..."
        sx={{ mb: 4 }}
      />

      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Terms & Conditions
      </Typography>
      <TextField fullWidth multiline rows={8} placeholder="Add your terms and conditions..." />
    </Box>
  )
}
