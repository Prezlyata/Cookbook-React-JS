import React from 'react';
import EditForm from '../EditForm/EditForm';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import CardHeader from '@material-ui/core/CardHeader';
import styles from './styles';

const RecipeItem = (props) => {
	const { classes, recipe, onDelete, onEdit } = props;

	return (
		<div className={classes.wrapper}>
			<Card className={classes.card}>
				<CardHeader title={recipe.name} />
				<CardActionArea>
					<CardMedia className={classes.media} image={recipe.image} title={recipe.name} />
					<CardContent>
						<Typography className={classes.description} variant="body2" color="textSecondary">
							{recipe.description}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{recipe.date.toLocaleString('en-US')}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.actions}>
					<Tooltip title="Delete" aria-label="Delete">
						<Fab data-id={recipe.id} onClick={(e) => onDelete(e)} size="medium">
							<DeleteIcon data-id={recipe.id} />
						</Fab>
					</Tooltip>
					<EditForm recipe={recipe} onEdit={onEdit} />
				</CardActions>
			</Card>
		</div>
	);
};

export default withStyles(styles)(RecipeItem);
