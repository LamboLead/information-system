<template>
	<div class="register">
		<div class="table-cell nombre-field">Hello</div>
		<div class="table-cell cantidad-field">Hello</div>
		<div class="table-cell estado-field">Hello</div>
		<div class="table-cell acciones-field">
			<fa icon="trash-alt" class="action-icons" title="Borrar"/>
			<fa icon="boxes" class="action-icons" title="Ver movimientos"/>
			<fa icon="pencil-alt" class="action-icons" title="Editar"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'EachRegister'
}
</script>

<style scoped>
.register {
	width: 100%;
	height: 2.5rem;

	background-color: white;
	border-bottom: var(--component-border);

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
.table-cell {
	display: table-cell;
	height: 100%;
	text-align: center;
	line-height: 270%;
	border: 1px dotted lightgray;
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
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.action-icons {
  font-size: 1.5rem;
	cursor: pointer;
}
.action-icons:hover {
	color: darkgrey;
}


</style>