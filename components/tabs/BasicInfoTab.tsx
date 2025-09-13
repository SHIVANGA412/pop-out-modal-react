import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material"

export default function BasicInfoTab() {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Trip Title" required defaultValue="Amazing 7-day Bali Adventure" sx={{ mb: 3 }} />

          <TextField fullWidth label="Destination" required defaultValue="Bali, Indonesia" sx={{ mb: 3 }} />

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <TextField fullWidth label="Duration (days)" required defaultValue="5" type="number" />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth required>
                <InputLabel>Trip Type</InputLabel>
                <Select defaultValue="Adventure" label="Trip Type">
                  <MenuItem value="Adventure">Adventure</MenuItem>
                  <MenuItem value="Beach">Beach</MenuItem>
                  <MenuItem value="Cultural">Cultural</MenuItem>
                  <MenuItem value="Wildlife">Wildlife</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <FormControl fullWidth required sx={{ mb: 3 }}>
            <InputLabel>Trip Model</InputLabel>
            <Select defaultValue="Customized Trip" label="Trip Model">
              <MenuItem value="Customized Trip">Customized Trip</MenuItem>
              <MenuItem value="Fixed Departure">Fixed Departure</MenuItem>
              <MenuItem value="Group Tour">Group Tour</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6}>
              <TextField fullWidth label="Price (₹)" required defaultValue="1000" type="number" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Original Price (₹) - Optional" defaultValue="60000" type="number" />
            </Grid>
          </Grid>

          <FormControl fullWidth>
            <InputLabel>Hotel Category</InputLabel>
            <Select defaultValue="4-Star" label="Hotel Category">
              <MenuItem value="3-Star">3-Star</MenuItem>
              <MenuItem value="4-Star">4-Star</MenuItem>
              <MenuItem value="5-Star">5-Star</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Trip Overview"
            required
            multiline
            rows={4}
            placeholder="Describe your amazing trip package..."
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Categories
          </Typography>
          <FormGroup sx={{ mb: 3 }}>
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Domestic" />
                <FormControlLabel control={<Checkbox />} label="International" />
                <FormControlLabel control={<Checkbox />} label="Adventure" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Luxury" />
                <FormControlLabel control={<Checkbox />} label="Budget" />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Family" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Couples" />
              </Grid>
            </Grid>
          </FormGroup>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Featured On
          </Typography>
          <FormGroup>
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Homepage" />
                <FormControlLabel control={<Checkbox />} label="Destination Page" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Category Page" />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  )
}
