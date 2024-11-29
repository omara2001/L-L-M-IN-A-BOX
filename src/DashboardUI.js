import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AccountCircle as AccountCircleIcon,
  Add as AddIcon,
  Assistant as AssistantIcon,
  Code as CodeIcon,
  Dashboard as DashboardIcon,
  Face as FaceIcon,
  Mail as MailIcon,
  Memory as MemoryIcon,
  Replay as ReplayIcon,
  VoiceChat as VoiceChatIcon,
  Group as GroupIcon,
  Psychology as PsychologyIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

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

      {/* Main Layout */}
      <Box display="flex" flexGrow={1} flexWrap="wrap">
        {/* Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", sm: "220px" },
            background: "linear-gradient(180deg, rgb(68, 159, 255) 0%, rgb(7, 91, 179) 19%, rgb(4, 0, 104) 63%)",
            padding: { xs: "10px", sm: "20px" },
            flexShrink: 0,
          }}
        >
          <Typography variant="body2" sx={{ color: "#dedede" }}>
            Dashboard
          </Typography>
          <List sx={{ marginTop: "20px" }}>
            {[{ text: "Create AI Assistant", icon: <AddIcon /> },
            { text: "AI Face", icon: <FaceIcon /> },
            { text: "AI Memory", icon: <MemoryIcon /> },
            { text: "AI Code Snippets", icon: <CodeIcon /> },
            { text: "AI Voice", icon: <VoiceChatIcon /> },
            { text: "AI Demos", icon: <ReplayIcon /> },
            { text: "AI Capabilities", icon: <FaceIcon /> },
            { text: "AI Layout", icon: <DashboardIcon /> },
            { text: "Email Management", icon: <MailIcon /> },
            { text: "Created AI Assistants", icon: <AssistantIcon /> },
            { text: "AI Agents", icon: <GroupIcon /> },
            { text: "AI Brain", icon: <PsychologyIcon /> },
            ].map((item, index) => (
              <ListItem key={index} sx={{
                width: "100%",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid #ffffff40",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                "&:hover": { backgroundColor: "#09487e" },
              }}>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "transparent" }}>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: "small",
                    color: "white",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            padding: { xs: "10px", sm: "20px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
            <Paper
              sx={{
                width: "100%",
                maxWidth: "1000px", // Added maxWidth to allow the box to grow or shrink
                backgroundColor: "white",
                borderRadius: "15px",
                padding: { xs: "15px", sm: "30px" }, // Adjust padding
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                margin: "8 auto", // Center the box
                height: 590,
                backdropFilter: 'blur(4px) brightness(100%)',
              }}
            >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <img
                src="Created AI Assistants.jpg" 
                alt="AI Assistants Logo"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />
              <Typography
                variant="h4"
                fontWeight="bold"
                color="#33363f"
                fontFamily="Merriweather Sans, Helvetica"
                sx={{ fontSize: { xs: "20px", sm: "24px" } }}
              >
                Created AI Assistants:
              </Typography>
            </Box>

            <List>
              {[{ name: "Assistant 1", description: "Voice: Google US English" },
                { name: "Assistant 2", description: "Voice: Google UK English" },
                { name: "Assistant 3", description: "Voice: Google US English" },
              ].map((assistant, index) => (
                <ListItem key={assistant.name} sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e0e0e0",
                  marginBottom: "15px",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#d9d9d9",
                      }}
                    >
                      A
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={assistant.name}
                    secondary={assistant.description}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: { xs: "14px", sm: "16px" },
                      color: "#333",
                    }}
                    secondaryTypographyProps={{
                      fontSize: { xs: "12px", sm: "14px" },
                      color: "#666",
                    }}
                  />
                  <IconButton edge="end">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          padding: "10px",
          backgroundColor: "#07203c",
          color: "white",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <Typography variant="body2" sx={{ fontSize: { xs: "10px", sm: "12px" } }}>
          © 2024 LLM in a Box. All rights reserved. Powered by{" "}
          <Link
            href="https://criticalfutureglobal.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
          >
            CRITICAL FUTURE
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
export default DashboardUI;