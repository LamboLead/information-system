import {createApp} from "vue";
import App from './App.vue';

// Set up for fontawesome

import {library} from '@fortawesome/fontawesome-svg-core';
import {faSearch, faTrashAlt, faBoxes, faPencilAlt, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faSearch, faTrashAlt, faBoxes, faPencilAlt, faPlusCircle, faMinusCircle);

createApp(App)
	.component('fa', FontAwesomeIcon)
	.mount('#app');

