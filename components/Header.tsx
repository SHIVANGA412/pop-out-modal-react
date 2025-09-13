"use client"

import React from "react"
import { AppBar, Toolbar, Typography, Button, Box, Avatar, IconButton, Menu, MenuItem } from "@mui/material"
import { KeyboardArrowDown as ArrowDownIcon, Settings as SettingsIcon } from "@mui/icons-material"

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              width: 40,
              height: 40,
              mr: 2,
              fontWeight: "bold",
              color: "white", // Explicit white color for proper contrast
            }}
          >
            W
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#4f46e5", // Solid fallback color for accessibility
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WanderLux
            </Typography>
            <Typography variant="caption" sx={{ color: "#6b7280" }}>
              Premium Travel
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Button sx={{ color: "#374151", textTransform: "none" }}>Home</Button>
          <Button endIcon={<ArrowDownIcon />} sx={{ color: "#374151", textTransform: "none" }}>
            Destinations
          </Button>
          <Button endIcon={<ArrowDownIcon />} sx={{ color: "#374151", textTransform: "none" }}>
            Trip Themes
          </Button>
          <Button sx={{ color: "#374151", textTransform: "none" }}>Fixed Departures</Button>
          <Button sx={{ color: "#374151", textTransform: "none" }}>Blog</Button>
          <Button sx={{ color: "#374151", textTransform: "none" }}>About Us</Button>
          <Button sx={{ color: "#374151", textTransform: "none" }}>Contact</Button>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4f46e5", // Solid fallback background for accessibility
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              "&:hover": {
                backgroundColor: "#4338ca", // Solid fallback hover color
                background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
              },
              textTransform: "none",
              borderRadius: 2,
              color: "white", // Explicit white color for proper contrast
              fontWeight: 600,
              transition: "all 0.2s ease-in-out",
            }}
          >
            Plan Your Trip
          </Button>
          <IconButton onClick={handleMenuOpen} sx={{ color: "#374151" }}>
            <SettingsIcon />
          </IconButton>
          <Button endIcon={<ArrowDownIcon />} sx={{ color: "#374151", textTransform: "none" }} onClick={handleMenuOpen}>
            Admin
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
