<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout>
    <q-toolbar slot="header">
      <!-- opens drawer below
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      -->
      <q-toolbar-title>
        Title
      </q-toolbar-title>
    </q-toolbar>
    <div class="content-center">
    	<div class="row  items-center">  
    		<div class="col-4"></div>
	    	<div class="col-4 justify-center">
			  	<q-input 
			  		v-model="username"
			  		float-label="Nombre de usuario o correo electronico" 
			  	/>
			  	<q-input 
			  		v-model="password" 
			  		type="password"
			  		float-label="Contraseña" 
			  	/>
			  	<q-btn class="primary" icon="person" big>Login</q-btn>
			</div>
    		<div class="col-4"></div>
		</div>
    </div>
  </q-layout>
</template>

<script>
import {
  QInput,
  QBtn,
  QIcon,
  QItemMain,
  QItemSide,
  QLayout,
  QSideLink,
  QToolbar,
  QToolbarTitle,
  QCollapsible ,
} from 'quasar'

export default {
  name:"login",
  components: {
	QInput ,
	QBtn,
	QIcon,
	QItemMain,
	QItemSide,
	QLayout,
	QSideLink,
	QToolbar,
	QToolbarTitle,
	QCollapsible ,
  },
  data () {
    return {
    	username:"",
    	password:""
    }
  }
}
</script>

<style>
</style>
