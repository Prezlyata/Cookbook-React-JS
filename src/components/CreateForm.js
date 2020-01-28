import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

const CreateForm = (props) => {
	const { onAddNewRecipe } = props;

	const [ open, setOpen ] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexDirection: 'column',
			'& > *': {
				margin: theme.spacing(1)
			}
		}
	}));

	const [ name, setName ] = useState('');
	const handleChangeName = (e) => {
		let name = e.target.value;
		setName(name);
	};

	const [ description, setDescription ] = useState('');
	const handleChangedescription = (e) => {
		let description = e.target.value;
		setDescription(description);
	};

	const [ image, setImage ] = useState('');
	const handleUploadImage = (e) => {
		let image = e.target.value;
		setImage(image);
	};

	const handleResetFields = () => {
		setName('');
		setDescription('');
		setImage('');
	};

	const handleAddNewRecipe = () => {
		if (name === '' || image === '' || description === '') {
			alert("The fields shouldn't be empty");
		} else {
			onAddNewRecipe(name, image, description);
			handleResetFields();
			handleClose();
		}
	};

	const classes = useStyles();
	return (
		<Fragment>
			<IconButton
				edge="start"
				title="Add new recipe"
				aria-label="Add new recipe"
				className={classes.menuButton}
				color="inherit"
				onClick={handleClickOpen}
			>
				<AddIcon />
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Add new recipe'}</DialogTitle>
				<DialogContent>
					<form className={classes.root} noValidate autoComplete="off">
						<Input
							value={name}
							onChange={(e) => handleChangeName(e)}
							placeholder="Name"
							inputProps={{ 'aria-label': 'description' }}
						/>
						<Input
							value={image}
							onChange={(e) => handleUploadImage(e)}
							placeholder="Set Url"
							inputProps={{ 'aria-label': 'Set Url' }}
						/>
						<TextField
							value={description}
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
					<Button onClick={() => handleAddNewRecipe()} color="primary" autoFocus>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default CreateForm;
