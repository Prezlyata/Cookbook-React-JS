import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
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
import styles from './styles';

class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			newName: null,
			newImage: null,
			newDescription: null
		};
	}

	componentDidMount() {
		this.setState({
			newName: this.props.recipe.name,
			newImage: this.props.recipe.image,
			newDescription: this.props.recipe.description
		});
	}

	handleClickOpen = () => {
		this.setState({
			isOpen: true
		});
	};

	handleClose = () => {
		this.setState({
			isOpen: false
		});
	};

	handleChangeName = (e) => {
		this.setState({
			newName: e.currentTarget.value
		});
	};

	handleChangeImage = (e) => {
		this.setState({
			newImage: e.currentTarget.value
		});
	};

	handleChangedescription = (e) => {
		this.setState({
			newDescription: e.currentTarget.value
		});
	};

	handleEdit = () => {
		if (this.state.newName === '' || this.state.newImage === '' || this.state.newDescription === '') {
			alert("The fields shouldn't be empty");
		} else {
			this.props.onEdit({
				id: this.props.recipe.id,
				name: this.state.newName,
				image: this.state.newImage,
				description: this.state.newDescription,
				date: this.props.recipe.date
			});
			this.handleClose();
		}
	};

	render() {
		const { classes, recipe } = this.props;
		return (
			<div>
				<Tooltip title="Edit" aria-label="edit">
					<Fab
						color="secondary"
						size="medium"
						aria-label="edit"
						data-id={recipe.id}
						onClick={() => this.handleClickOpen()}
					>
						<EditIcon />
					</Fab>
				</Tooltip>
				<Dialog
					open={this.state.isOpen}
					onClose={() => this.handleClose()}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{'Edit recipe'}</DialogTitle>
					<DialogContent>
						<form className={classes.root} noValidate autoComplete="off">
							<Input
								value={this.state.newName}
								onChange={(e) => this.handleChangeName(e)}
								placeholder="Name"
								inputProps={{ 'aria-label': 'description' }}
							/>
							<Input
								value={this.state.newImage}
								onChange={(e) => this.handleChangeImage(e)}
								placeholder="Set Url"
								inputProps={{ 'aria-label': 'Set Url' }}
							/>
							<TextField
								value={this.state.newDescription}
								onChange={(e) => this.handleChangedescription(e)}
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
						<Button onClick={() => this.handleClose()} color="primary">
							Cancel
						</Button>
						<Button onClick={() => this.handleEdit()} color="primary" autoFocus>
							Save
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(EditForm);
