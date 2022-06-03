import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

const TopBar = (() => {
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: "left"}}>
						Fun Home Close Reading Project <a href="https://github.com/frank-cywong/EnglishCloseReadingProject" style={{color: "#A0A0A0"}}>(Source Code)</a>
					</Typography>
					<Typography variant="h6" component="div" sx={{textAlign: "right"}}>
						Frank Chun Yeung Wong
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
});

export default TopBar;
