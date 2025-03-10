import React from "react";
import "../styles/testimonialCard.css";
import { Box, Typography } from "@mui/material";
import profileImg from "../assets/img/profile-thumbnail.png";

const TestimonialCard = () => {
  return (
    <Box className="article">
      <Box display="flex" className="head-section">
        <Box>
          <img src={profileImg} alt="profile" className="profile-img"></img>
        </Box>
        <Box className="profile-header">
          <div className="profile-name">Sarah Dole</div>
          <div className="profile-sub">@sarahdole</div>
        </Box>
      </Box>
      <Box className="body-section">
        <div className="testimonial-desc">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </div>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
