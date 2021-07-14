<template>
    <div id="insert_item">
        <div class="form-header">
            <h3>Insertar nuevos items</h3>
        </div>
        <form class="form-content">
            <div class="fields">
                <div class="form-field form-field-small">
                    <label for="id">Id</label>
                    <input id="id_input" type="text" name="id" placeholder="e.g. 69">
                </div>
                <div class="form-field form-field-large">
                    <label for="nombre">Nombre</label>
                    <input id="nombre_input" type="text" name="nombre" placeholder="e.g. Cosa 69">
                </div>
                <div class="form-field">
                    <label for="estado">Estado</label>
                    <select name="estado" id="estado_input">
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                        <option value="dañado">Dañado</option>
                    </select>
                </div>
            </div>
            <button type="submit">Guardar item</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#insert_item {
	margin-block: 0.5rem;

	background-color: var(--component-background-color);
	border: var(--component-border);
	border-radius: 5px; 

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
}
.form-header {
	width: 50%;
	height: 3rem;

	align-self: start;
	margin-left: 1rem;
}
.form-content {
	display: flex;
}
.form-field {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
}
button {
	background-color: var(--button-background-color);
	border: var(--component-border);
}
button:hover {
	cursor: pointer;
	border-color: black;
}

@media (max-width: 600px) {
	#insert_item {
			width: 100%;
			height: 30%;
	}
	.form-content {
		width: 90%;
		height: 70%;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.fields {
		width: 70%;
		height: 90%;

		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}
	.form-field {
		width: 100%;
		height: 33%;
	}
	.form-field input {
		margin-left: auto
	}
	.form-field select {
		width: 40%;
		margin-left: auto;
	}
	button {
		width: 25%;
		height: 40%;
	}
}
@media (min-width: 601px) {
	#insert_item {
		width: 90%;
		height: 20%;
	}
	.form-content {
		width: 95%;
		height: 50%;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.fields {
		width: 85%;
		height: 90%;

		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	.form-field {
		width: 30%;
		height: 50%;
	}
	.form-field-small {
		width: 15%
	}
	.form-field-large {
		width: 50%;
	}
	.form-field input {
		width: 70%;
		margin-left: 1rem;
	}
	.form-field select {
		width: 70%;
		margin-left: 1rem;
	}
	button {
		width: 15%;
		height: 50%;
	}
}
</style>