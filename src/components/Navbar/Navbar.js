import React from 'react';
import { withStyles } from '@material-ui/core';
import CreateForm from '../CreateForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './styles';

const Navbar = (props) => {
	const { classes, onRecipesSort, onRecipeFind, sortBy, onAddNewRecipe } = props;
	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<CreateForm onAddNewRecipe={onAddNewRecipe}/>
					<FormControl className={classes.select}>
						<NativeSelect onChange={(e) => onRecipesSort(e)} value={sortBy}>
							<option value="" disabled>
								Sort by
							</option>
							<option value="Newest">Newest</option>
							<option value="Oldest">Oldest</option>
						</NativeSelect>
					</FormControl>
					<Typography className={classes.title} variant="h6" noWrap>
						Cookbook
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
							onChange={(e) => onRecipeFind(e)}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withStyles(styles)(Navbar);
