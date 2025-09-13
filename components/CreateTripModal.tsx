"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Tabs,
  Tab,
  IconButton,
  Typography,
} from "@mui/material"
import { Close as CloseIcon } from "@mui/icons-material"
import BasicInfoTab from "./tabs/BasicInfoTab"
import MediaTab from "./tabs/MediaTab"
import ItineraryTab from "./tabs/ItineraryTab"
import DetailsTab from "./tabs/DetailsTab"
import PoliciesTab from "./tabs/PoliciesTab"
import FixedSlotsTab from "./tabs/FixedSlotsTab"

interface CreateTripModalProps {
  open: boolean
  onClose: () => void
}

export default function CreateTripModal({ open, onClose }: CreateTripModalProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    // Prevent switching to Fixed Slots tab (index 5)
    if (newValue !== 5) {
      setActiveTab(newValue)
    }
  }

  const handleCancel = () => {
    setActiveTab(0) // Reset to first tab
    onClose()
  }

  const handleCreateTrip = () => {
    // Handle trip creation logic here
    console.log("Creating trip...")
    onClose()
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <BasicInfoTab />
      case 1:
        return <MediaTab />
      case 2:
        return <ItineraryTab />
      case 3:
        return <DetailsTab />
      case 4:
        return <PoliciesTab />
      case 5:
        return <FixedSlotsTab />
      default:
        return <BasicInfoTab />
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          minHeight: "80vh",
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Create New Trip Package
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            px: 3,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              minWidth: "auto",
              px: 3,
            },
            "& .MuiTab-root.Mui-disabled": {
              color: "#9ca3af",
              opacity: 0.5,
            },
          }}
        >
          <Tab label="Basic Info" />
          <Tab label="Media" />
          <Tab label="Itinerary" />
          <Tab label="Details" />
          <Tab label="Policies" />
          <Tab label="Fixed Slots" disabled />
        </Tabs>
      </Box>

      <DialogContent sx={{ p: 0, flex: 1, overflow: "auto" }}>
        <Box sx={{ p: 4, minHeight: "400px" }}>{renderTabContent()}</Box>
      </DialogContent>

      <DialogActions
        sx={{
          p: 3,
          borderTop: "1px solid #e5e7eb",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button
          onClick={handleCancel}
          variant="outlined"
          sx={{
            borderColor: "#d1d5db",
            color: "#6b7280",
            "&:hover": {
              borderColor: "#9ca3af",
            },
            textTransform: "none",
            px: 3,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleCreateTrip}
          variant="contained"
          sx={{
            backgroundColor: "#059669",
            "&:hover": { backgroundColor: "#047857" },
            textTransform: "none",
            px: 3,
          }}
        >
          Create Trip
        </Button>
      </DialogActions>
    </Dialog>
  )
}
