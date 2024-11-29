import React, { useState } from "react";
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Card, CardContent, CardActions, Typography, Button, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Ensure the icon is imported

const DashboardUI = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for menu handling
  const navigate = useNavigate(); // React Router's navigation hook

  // Handle opening the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(180deg, rgb(68, 159, 255) 0%, rgb(7, 91, 179) 19%, rgb(4, 0, 104) 63%)",
      }}
    >
      {/* AppBar */}
      <AppBar
        position="sticky"
        sx={{
          height: { xs: "80px", sm: "100px" },
          backgroundColor: "#07203c",
          padding: { xs: "5px 10px", sm: "10px 20px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="llminaboxlogo.png"
              alt="Logo LLM"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Merriweather Sans, Helvetica",
                fontWeight: "bold",
                color: "#f5b81a",
                fontSize: { xs: "14px", sm: "18px" },
              }}
            >
              L L M <span style={{ color: "#c7c5c5", fontWeight: "normal" }}>_IN A BOX_</span>
            </Typography>
          </Box>

          {/* Navigation Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "10px", sm: "20px" } }}>
            <Typography
              onClick={() => navigate("/pricing")}
              variant="h6"
              sx={{
                fontFamily: "Merriweather Sans, Helvetica",
                fontWeight: "bold",
                color: "#c7c5c5",
                fontSize: { xs: "12px", sm: "16px" },
                cursor: "pointer",
                marginRight: "250px",
              }}
            >
              Pricing
            </Typography>
            <Typography
              onClick={() => navigate("/dashboard")}
              variant="h6"
              sx={{
                fontFamily: "Merriweather Sans, Helvetica",
                fontWeight: "bold",
                color: "#f5b81a",
                fontSize: { xs: "12px", sm: "16px" },
                cursor: "pointer",
                marginRight: "120px",
              }}
            >
              Dashboard
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ marginLeft: "20px" }}
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="body2" color="textPrimary">
                  Critical Future
                  <br />
                  karaoglu.serpil@gmail.com
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Typography variant="body2" color="textPrimary">
                  Support
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <Typography variant="body2" color="error">
                  Log out
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Pricing Plan Content */}
      <PricingPlan />
    </Box>
  );
};

// PricingPlan Component
const PricingPlan = () => {
  const plans = [
    {
      title: "Monthly Plan",
      price: "$89.99/month",
      description: "Unlock Premium Features",
      features: ["Feature A", "Feature B", "Feature C"],
      buttonText: "Choose Plan",
      color: "#F9A826",
    },
    {
      title: "Annual Plan",
      price: "$999.99/year",
      description: "Benefit From Our Annual Plan Discount",
      features: ["Feature A", "Feature B", "Feature C"],
      buttonText: "Choose Plan",
      color: "#4C9AFF",
    },
    {
      title: "Enterprise Plan",
      price: "Contact us for pricing",
      description: "Unlock Your Dedicated AI Solution",
      features: ["Feature A", "Feature B", "Feature C"],
      buttonText: "Contact Us",
      color: "#FF66CC",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #07203c, #0b3466)",
        padding: { xs: "20px", sm: "40px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header with Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <img
          src="Created AI Assistants.jpg" // Replace with your actual logo URL
          alt="Select your AI Assistant Plan"
          style={{ width: "50px", height: "50px" }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            fontFamily: "Merriweather Sans, Helvetica",
            fontWeight: "bold",
          }}
        >
          Select your AI Assistant Plan
        </Typography>
      </Box>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          color: "#A9B7C6",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Unlock the AI assistant experience tailored to your needs
      </Typography>

      {/* Pricing Plans */}
      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                backgroundColor: "white",
                textAlign: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <CardContent>
                {/* Plan Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: plan.color,
                  }}
                >
                  {plan.title}
                </Typography>

                {/* Plan Price */}
                <Typography
                  variant="h4"
                  sx={{
                    color: "#33363f",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {plan.price}
                </Typography>

                {/* Plan Description */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  {plan.description}
                </Typography>

                <Divider />

                {/* Plan Features */}
                <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                  {plan.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        color: "#33363f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "8px",
                      }}
                    >
                      ✓ {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>

              {/* Button */}
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: plan.color,
                    color: "#FFFFFF",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: plan.color,
                      opacity: 0.9,
                    },
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardUI;