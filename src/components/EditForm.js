import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const EditForm = (props) => {
	const { recipe, onEdit } = props;
	const [ open, setOpen ] = useState(false);
	const [ newName, setNewName ] = useState(null);
	const [ newImage, setNewImage ] = useState(null);
	const [ newDescription, setNewDescription ] = useState(null);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChangeName = (e) => setNewName(e.currentTarget.value);

	const handleChangeImage = (e) => setNewImage(e.currentTarget.value);

	const handleChangedescription = (e) => setNewDescription(e.currentTarget.value);

	const handleEdit = () => {
		onEdit({
			id: recipe.id,
			name: newName ? newName : recipe.name,
			image: newImage ? newImage : recipe.image,
			description: newDescription ? newDescription : recipe.description,
			date: recipe.date
		});
		handleClose();
	};

	const classes = useStyles();
	return (
		<div>
			<Tooltip title="Edit" aria-label="edit">
				<Fab color="secondary" size="medium" aria-label="edit" data-id={recipe.id} onClick={handleClickOpen}>
					<EditIcon />
				</Fab>
			</Tooltip>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Edit recipe'}</DialogTitle>
				<DialogContent>
					<form className={classes.root} noValidate autoComplete="off">
						<Input
							value={newName ? newName : recipe.name}
							onChange={(e) => handleChangeName(e)}
							placeholder="Name"
							inputProps={{ 'aria-label': 'description' }}
						/>
						<Input
							value={newImage ? newImage : recipe.image}
							onChange={(e) => handleChangeImage(e)}
							placeholder="Set Url"
							inputProps={{ 'aria-label': 'Set Url' }}
						/>
						<TextField
							value={newDescription ? newDescription : recipe.description}
							onChange={(e) => handleChangedescription(e)}
							id="outlined-multiline-static"
							label="Recipe description"
							multiline
							rows="4"
							placeholder="description"
							variant="outlined"
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleEdit} color="primary" autoFocus>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default EditForm;
