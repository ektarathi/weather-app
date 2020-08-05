import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		listItem: {
			width: "100%",
			textAlign: "center",
		},
		inline: {
			display: "inline",
		},
	})
);

export interface WeatherInformationProps {
    text: string; value: string;
}

const WeatherInformation: React.SFC<WeatherInformationProps> = ({text, value}: WeatherInformationProps) => {
	const classes = useStyles();
	return (
		<List className={classes.listItem}>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={text}
					style={{ textAlign: "center" }}
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary"
							>
								{value}
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" style={{marginLeft: 0}}/>
		</List>
	);
};

export default WeatherInformation;
