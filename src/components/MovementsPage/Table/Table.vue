<template>
    <div id="table">
			<TableHeader/>
    </div>
</template>

<script>
import TableHeader from './TableHeader.vue';
// import EachRegister from './EachRegister.vue';
export default {
	name: 'Table',
  components: {
		TableHeader
		// EachRegister
	},
}
</script>

<style scoped>
#table {
    position: relative;
		height: fit-content;
		max-height: 50%;

    border: var(--component-border);
    border-radius: 2px;

    overflow-y: scroll;

		--descripcion-field-width: 50%;
		--ingresos-field-width: 15%;
		--egresos-field-width: 15%;
		--total-field-width: 20%;
}
#table::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
}
#table::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: hsl(50, 0%, 70%);
}
@media (max-width: 600px) {
	#table {
		width: 100%;
	}
}
@media (min-width: 601px) {
	#table {
		width: 90%;
	}
}
</style>