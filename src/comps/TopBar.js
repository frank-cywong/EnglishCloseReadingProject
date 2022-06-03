import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';

const TopBar = (() => {
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
						Fun Home Close Reading Project
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
});

export default TopBar;
