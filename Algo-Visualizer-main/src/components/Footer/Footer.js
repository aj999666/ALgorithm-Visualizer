import React from "react";
import { Box } from "@mui/material";
import "./Footer.css";
import toolIcon from "../../Assets/tool.svg";
import userIcon from "../../Assets/user.svg";
import { fontSize } from "@mui/system";

const Footer = () => {
  const technologiesUsed = {
    title: "Technologies used",
    items: ["React.js", "Redux", "Netlify", "CSS"],
  };
  return (
    
    <footer className="flex">
      <Box display="grid" rowGap={3} width="{50%}">
        <div className="flex">
          <div className="circle flex">
            <h1 className="header-logo text-primary">Algo</h1>
            <h1 className="header-logo text-white">Visualiser</h1>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.8 }}>
        This website helps you to understand varoius sorting and path finding algorithms by viusalizing them.
        </p>
        <p style={{ fontSize: 12, lineHeight: 1.8 }}>
            Made by:
        </p>
        <p style={{fontSize: 16, lineHeight: 1.8}}>
          Ayush Jha
        </p>
      </Box>
        <Box width = "20%" display="flex" alignItems="flex-start" gap={7}>
          <Box display="grid" gap={2}>
            <Box display="flex" gap={2} className="list-title">
              {technologiesUsed.title} <img src={toolIcon} alt="tool-logo" />
            </Box>
            {technologiesUsed.items.map((el) => (
              <p className="list-item">{el}</p>
            ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={3} width = "20%">
        <a href="https://github.com/ayush0801" style={{ marginLeft: "15%" }}>
          <img class="githubimg" src="https://github.com/JasonFengGit/Visualizer/raw/master/src/Github_icon.png" width="40px" height="40px" style={{ opacity: "0.7 !important"}} alt></img>
        </a>
        <a href="https://www.linkedin.com/in/ayush-jha-aa76211a0/" style={{ marginLeft: "15%" }}>
          <img class="portfolioimg" src="https://i.ibb.co/TY8mVNJ/icons8-portfolio-64.png" width="48px" height="48px" style={{ opacity: "0.7 !important"}} alt></img>
        </a>
        <a href="https://www.linkedin.com/in/ayush-jha-aa76211a0/" style={{ marginLeft: "15%" }}>
          <img class="portfolioimg" src="https://i.ibb.co/jhV51ZT/icons8-linkedin-circled-48-1.png" width="48px" height="48px" style={{ opacity: "0.7 !important"}} alt></img>
        </a>
      </Box>
      
    </footer>

  );
};
export default Footer;
