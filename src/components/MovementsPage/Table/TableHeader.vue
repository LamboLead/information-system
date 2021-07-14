<template>
	<div class="table-header">
		<div class="table-cell descripcion-field">Descripción</div>
		<div class="table-cell ingresos-field">jiji</div>
		<div class="table-cell egresos-field">jojo</div>
		<div class="table-cell total-field">Total</div>
	</div>
</template>

<script>
export default {
	name: 'TableHeader'
}
</script>

<style scoped>
.table-header {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	width: 100%;
	height: 3rem;

	font-weight: bolder;
	background-color: var(--button-background-color);
	border-bottom: var(--component-border);
	border-color: black;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.table-cell {
	display: table-cell;
	height: 100%;
	text-align: center;
	line-height: 280%;
}
.descripcion-field {
	width: var(--descripcion-field-width);
	text-align: start;
	padding-left: 1ch;
}
.ingresos-field {
	width: var(--ingresos-field-width);
}
.egresos-field {
	width: var(--egresos-field-width);
}
.total-field {
	width: var(--total-field-width);
}
</style>