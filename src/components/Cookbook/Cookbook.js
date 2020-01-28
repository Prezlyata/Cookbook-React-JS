import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import RecipeItem from '../RecipeItem/RecipeItem';
import styles from './styles';

class Cookbook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipeList: [
				{
					id: 1573656121436,
					name: 'Quattro Stagioni',
					date: new Date('2017-06-28'),
					image: 'https://pizzalviv.com/cache/thumbnails/3/33_1_312x206_2_0.jpg',
					description: 'Сири моцарела, пармезан, печериці, прошутто крудо, салямі пеппероні.'
				},
				{
					id: 1573656121431,
					name: 'Provenza',
					date: new Date('2017-06-28'),
					image: 'https://pizzalviv.com/cache/thumbnails/2/2_312x206_2_0.jpg',
					description: 'Сир моцарела, сир горгонзола, куряче філе, французька гірчиця, базилік.'
				},
				{
					id: 1573656121432,
					name: 'Carbonara',
					date: new Date('2017-06-15'),
					image: 'https://pizzalviv.com/cache/thumbnails/7/7_312x206_2_0.jpg',
					description: 'Вершки, сир моцарела, шинка, шпондер, салямі, базилік.'
				},
				{
					id: 1573656121433,
					name: 'Baviera',
					date: new Date('2017-06-28'),
					image: 'https://pizzalviv.com/cache/thumbnails/8/8_312x206_2_0.jpg',
					description: 'Сир моцарела, печериці, мисливські та баварські ковбаски, французька гірчиця.'
				},
				{
					id: 1573656121434,
					name: 'Fume',
					date: new Date('2017-06-28'),
					image: 'https://pizzalviv.com/cache/thumbnails/9/9_312x206_2_0.jpg',
					description: 'Сири моцарела, сулугуні копчений, шпондер, салямі, базилік.'
				}
			],
			sortBy: '',
			filteredRecipeList: [],
			editedRecipe: []
		};
	}

	componentDidMount() {
		this.setState({
			filteredRecipeList: this.state.recipeList
		});
	}

	handleRecipeFind = (e) => {
		let filteredRecipeList = this.state.recipeList;
		filteredRecipeList = filteredRecipeList.filter(
			(item) => item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
		);
		this.setState({
			filteredRecipeList: filteredRecipeList
		});
	};

	sortMaxMin = (arr) => arr.sort((a, b) => a.date - b.date);

	sortMinMax = (arr) => arr.sort((a, b) => b.date - a.date);

	handleRecipesSort = (e) => {
		const { filteredRecipeList, sortBy } = this.state;
		this.setState({ sortBy: e.target.value });
		sortBy === 'Newest'
			? this.setState({
					filteredRecipeList: this.sortMaxMin(filteredRecipeList)
				})
			: this.setState({
					filteredRecipeList: this.sortMinMax(filteredRecipeList)
				});
	};

	handleAddNewRecipe = (name, image, description) => {
		const date = new Date();
		const newRecipe = {
			id: Date.now(),
			name: name,
			date: date,
			image: image,
			description: description
		};
		const newFilteredRecipeList = this.state.filteredRecipeList;
		newFilteredRecipeList.push(newRecipe);
		this.setState({
			filteredRecipeList: newFilteredRecipeList
		});
	};

	handleDelete = (e) => {
		const id = e.currentTarget.getAttribute('data-id');
		const filteredRecipeList = this.state.filteredRecipeList;
		const newFilteredRecipeList = filteredRecipeList.filter((el) => el.id !== +id);
		this.setState({
			filteredRecipeList: newFilteredRecipeList
		});
	};

	handleEdit = (modifiedRecipe) => {
		const filteredRecipeList = this.state.filteredRecipeList;
		const newFilteredRecipeList = filteredRecipeList.filter((el) => el.id !== modifiedRecipe.id);
		newFilteredRecipeList.push(modifiedRecipe);
		console.log(newFilteredRecipeList);
		this.setState({ filteredRecipeList: newFilteredRecipeList });
	};

	render() {
		const { filteredRecipeList, sortBy } = this.state;
		const { classes } = this.props;

		return (
			<Fragment>
				<Navbar
					onRecipesSort={this.handleRecipesSort}
					onRecipeFind={this.handleRecipeFind}
					sortBy={sortBy}
					onAddNewRecipe={this.handleAddNewRecipe}
				/>
				<div className={classes.wrapper}>
					{filteredRecipeList.map((recipe) => (
						<div key={recipe.id}>
							<RecipeItem recipe={recipe} onDelete={this.handleDelete} onEdit={this.handleEdit} />
						</div>
					))}
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Cookbook);
