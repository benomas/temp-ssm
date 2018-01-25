<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout>
    <div class="content-center">
    	<div class="row  items-center">  
    		<div class="col-4"></div>
	    	<div class="col-4 justify-center">
			  	<q-input 
			  		v-model="loginData.username"
			  		float-label="Nombre de usuario o correo electronico" 
			  	/>
			  	<q-input 
			  		v-model="loginData.password" 
			  		type="password"
			  		float-label="Contraseña" 
			  	/>
			  	<q-btn class="primary" icon="person" big v-on:click="services.general.login(loginData.username,loginData.password)">Login</q-btn>
			</div>
    		<div class="col-4"></div>
		</div>
    </div>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QCollapsible,
  QIcon,
  QInput,
  QItemMain,
  QItemSide,
  QLayout,
  QSideLink,
  QToolbar,
  QToolbarTitle,
} from 'quasar'
import BaseCrud from './resources/crud/BaseCrud.vue'

export default {
  extends: BaseCrud,
  name:"login",
  components: {
    QBtn,
    QCollapsible,
    QIcon,
    QInput,
    QItemMain,
    QItemSide,
    QLayout,
    QSideLink,
    QToolbar,
    QToolbarTitle,
  },
  data:function(){
      return {
          singularResource:"user",
          pluralResource  :"users",
          loginData       :{username:null,password:null},
          user            :{},
          users           :[]
      }
  },
  mounted:function(){
    console.log(this.services.general.login);
  },
}
</script>

<style>
</style>
