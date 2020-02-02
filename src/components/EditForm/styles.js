export default (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
});
