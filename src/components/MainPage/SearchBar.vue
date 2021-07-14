<template>
	<div id="search_bar">
			<h4>Buscar por nombre:</h4>
			<div>
				<input type="search" id="search_input">
				<fa icon="search" id="search_button"/>
			</div>
	</div>
</template>

<style scoped>
#search_bar {
	position: relative;
	margin-bottom: 2rem;
	height: 7%;

	background-color: var(--component-background-color);
	border: var(--component-border);

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	align-self: flex-start;
}
#search_bar div {
	position: relative;
	width: 60%;
	height: 1.5rem;
}
#search_input {
	width: 100%;
	height: 100%;
}
#search_button {
	position: absolute;
	right: 10px;
	top: 3px;
	cursor: pointer;
}
#search_button:hover {
	color: darkgrey;
}
@media (max-width: 600px) {
	#search_bar {
		width: 100%;
	}

}
@media (min-width: 601px) {
	#search_bar {
		width: 70%;
	}
}
</style>