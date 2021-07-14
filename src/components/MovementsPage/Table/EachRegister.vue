<template>
	<div class="register">
		<div class="table-cell descripcion-field">Descripción</div>
		<div class="table-cell ingresos-field">Jojo</div>
		<div class="table-cell egresos-field">Jiji</div>
		<div class="table-cell total-field">69420</div>
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
.descripcion-field {
	width: var(--descripcion-field-width);
	text-align: start;
	padding-left: 1ch;
}
.ingresos-field {
	width: var(--ingresos-field-width);
	font-weight: bolder;
}
.egresos-field {
	width: var(--egresos-field-width);
	font-weight: bolder;
}
.total-field {
	width: var(--total-field-width);
	font-weight: bolder;
}


</style>