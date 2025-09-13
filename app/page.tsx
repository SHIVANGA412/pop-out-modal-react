"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material"
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material"
import Header from "../components/Header"
import CreateTripModal from "../components/CreateTripModal"

const tripPackages = [
  {
    id: 1,
    title: "Amazing Ooty Trip",
    location: "Ooty, TamilNadu, India",
    duration: "5 days",
    price: "₹1,000",
    originalPrice: null,
    image: "/ooty-hills-landscape.jpg",
    type: "Customized",
  },
  {
    id: 2,
    title: "Beach Paradise",
    location: "Goa, India",
    duration: "5 days",
    price: "₹1,000",
    originalPrice: null,
    image: "/goa-beach-sunset.jpg",
    type: "Customized",
  },
  {
    id: 3,
    title: "Mountain Adventure",
    location: "Manali, India",
    duration: "5 days",
    price: "₹3,00,000",
    originalPrice: null,
    image: "/manali-mountains-snow.jpg",
    type: "Fixed Departure",
  },
  {
    id: 4,
    title: "Dubai 4 Nights / 5 Days Tour Package",
    location: "Dubai, UAE",
    duration: "5 days",
    price: "₹45,000",
    originalPrice: null,
    image: "/dubai-skyline-burj-khalifa.png",
    type: "Customized",
  },
]

export default function TripManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All Categories")

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Header />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 4 }}>
          <Box>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "#2c3e50", mb: 1 }}>
              Trip Management
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Create and manage your travel packages
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
            sx={{
              backgroundColor: "#4f46e5", // Solid fallback background for accessibility
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              "&:hover": {
                backgroundColor: "#4338ca", // Solid fallback hover color
                background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
              },
              borderRadius: 2,
              px: 3,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              color: "white", // Explicit white color for proper contrast
              border: "none",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Add New Trip
          </Button>
        </Box>

        {/* Search and Filter Bar */}
        <Card sx={{ mb: 4, p: 3, borderRadius: 3, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3, alignItems: "center" }}>
            <Box sx={{ flex: 1, width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Search trips by title or destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
            <Box sx={{ width: { xs: "100%", md: "300px" } }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="All Categories">All Categories</MenuItem>
                  <MenuItem value="Adventure">Adventure</MenuItem>
                  <MenuItem value="Beach">Beach</MenuItem>
                  <MenuItem value="Mountain">Mountain</MenuItem>
                  <MenuItem value="Cultural">Cultural</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Card>

        {/* Trip Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)", // Added 3 columns for larger screens
            },
            gap: { xs: 2, md: 3 }, // Responsive gap spacing
            justifyItems: "center", // Center align cards
          }}
        >
          {tripPackages.map((trip) => (
            <Card
              key={trip.id}
              sx={{
                borderRadius: 2, // Reduced border radius from 3 to 2
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)", // Reduced shadow intensity
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-2px)", // Reduced hover lift from -4px to -2px
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)", // Reduced hover shadow
                },
                maxWidth: 320, // Reduced max width from 400px to 320px
                width: "100%",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="100" // Reduced image height from 120px to 100px
                  image={trip.image}
                  alt={trip.title}
                />
                <Chip
                  label={trip.type}
                  size="small" // Added small size for chip
                  sx={{
                    position: "absolute",
                    top: 8, // Reduced top position from 12px to 8px
                    left: 8, // Reduced left position from 12px to 8px
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.75rem", // Smaller font size
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8, // Reduced top position from 12px to 8px
                    right: 8, // Reduced right position from 12px to 8px
                    display: "flex",
                    gap: 0.5, // Reduced gap from 1 to 0.5
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      "&:hover": { backgroundColor: "white" },
                      width: 28, // Smaller icon button size
                      height: 28,
                    }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      "&:hover": { backgroundColor: "white" },
                      width: 28, // Smaller icon button size
                      height: 28,
                    }}
                  >
                    <DeleteIcon fontSize="small" color="error" />
                  </IconButton>
                </Box>
              </Box>

              <CardContent sx={{ p: 1.5 }}>
                {" "}
                {/* Reduced padding from 2 to 1.5 */}
                <Typography
                  variant="subtitle1" // Changed from h6 to subtitle1 for smaller text
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 1, // Reduced margin bottom from 1.5 to 1
                    fontSize: "1rem", // Explicit smaller font size
                    lineHeight: 1.3, // Tighter line height
                  }}
                >
                  {trip.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5, color: "text.secondary" }}>
                  {" "}
                  {/* Reduced margin bottom */}
                  <LocationIcon fontSize="small" sx={{ mr: 0.5 }} /> {/* Reduced margin right */}
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    {trip.location}
                  </Typography>{" "}
                  {/* Smaller font size */}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, color: "text.secondary" }}>
                  {" "}
                  {/* Reduced margin bottom */}
                  <CalendarIcon fontSize="small" sx={{ mr: 0.5 }} /> {/* Reduced margin right */}
                  <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                    {trip.duration}
                  </Typography>{" "}
                  {/* Smaller font size */}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#4f46e5", // Solid fallback color for accessibility
                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "1.1rem",
                    }}
                  >
                    {trip.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<VisibilityIcon />}
                    size="small"
                    sx={{
                      borderColor: "#e5e7eb",
                      color: "#6b7280",
                      "&:hover": {
                        borderColor: "#7c3aed",
                        color: "#7c3aed",
                        background:
                          "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)",
                      },
                      textTransform: "none",
                      fontSize: "0.8rem",
                      px: 1.5,
                    }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Create Trip Modal */}
      <CreateTripModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  )
}
