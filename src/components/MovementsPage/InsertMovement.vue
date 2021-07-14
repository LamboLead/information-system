<template>
  <div id="insert_movement">
    <div class="form-header">
        <h3>Añadir nuevos movimientos</h3>
    </div>
    <form class="form-content">
      <div class="fields">

        <div class="form-field form-field-large">
          <label for="descripcion">Descripción</label>
          <input id="descripcion_input" type="text" name="descripcion" placeholder="e.g. Entrega por compra de votos en Abejorral">
        </div>

        <div class="form-field form-field-small">
          <label for="cantidad">Cantidad</label>
          <input id="cantidad_input" type="number" name="cantidad" value="0">
        </div>

        <div class="form-field">
          <fieldset>
            <legend>Tipo de movimiento</legend>
              <div>
                <input type="radio" name="tipo_movimiento" id="ingreso_radio">
                <label for="ingreso_radio"><fa icon="plus-circle"/>Ingreso</label>
              </div>
              <div>
                <input type="radio" name="tipo_movimiento" id="egreso_radio">
                <label for="egreso_radio"><fa icon="minus-circle"/>Egreso</label>
              </div>
          </fieldset>
        </div>

      </div>
      <button type="submit">Añadir movimiento</button>
    </form>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#insert_movement {
	margin-block: 1rem;

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
  flex-direction: row;
}
.fields {
  display: flex;
}
.form-field {
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
}
fieldset {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
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
	#insert_movement {
			width: 100%;
			height: 40%;
	}
	.form-content {
		width: 90%;
		height: 70%;
		justify-content: space-between;
		align-items: center;
	}
	.fields {
		width: 70%;
		height: 100%;

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
  fieldset {
    justify-self: center;
    align-self: flex-end;
    width: 45%;
    height: 80%;
  }
	button {
		width: 25%;
		height: 40%;
	}
}
@media (min-width: 601px) {
	#insert_movement {
		width: 90%;
		height: 25%;
	}
	.form-content {
		width: 95%;
		height: 70%;
		justify-content: space-around;
		align-items: center;
	}
	.fields {
		width: 85%;
		height: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	.form-field {
		width: 30%;
		height: 100%;
    
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
	}
	.form-field-small {
		width: 15%
	}
	.form-field-large {
		width: 50%;
	}
	.form-field input {
		width: 80%;
		margin-left: 1rem;
	}
  fieldset {
    width: 70%;
    height: 70%;
  }
  fieldset div {
    width: 100%;
    height: 40%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  fieldset div input {
    width: 20%;
  }
  fieldset div label {
    width: 80%;
    height: 100%;
  }
	button {
		width: 15%;
		height: 50%;
	}
}
</style>