<template>
	<div class="table-header">
		<div class="table-cell nombre-field">Nombre</div>
		<div class="table-cell cantidad-field">Cantidad</div>
		<div class="table-cell estado-field">Estado</div>
		<div class="table-cell acciones-field">Acciones</div>
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
.nombre-field {
	width: var(--nombre-field-width);
	text-align: start;
	padding-left: 1ch;
}
.cantidad-field {
	width: var(--cantidad-field-width);
}
.estado-field {
	width: var(--estado-field-width);
}
.acciones-field {
	width: var(--acciones-field-width);
}
</style>