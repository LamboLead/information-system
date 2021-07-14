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

		--nombre-field-width: 25%;
		--cantidad-field-width: 15%;
		--estado-field-width: 20%;
		--acciones-field-width: 40%;
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