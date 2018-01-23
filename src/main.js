// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import general from './services/generalService'
import user from './services/user'
import role from './services/role'
import permission from './services/permission'
import passport from './authenticator/passport'
import resources from 'resources'

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

//include methods that then will be available in every component
Vue.mixin({
  data:function(){
    return {
      services:{
        general,
        user,
        role,
        permission
      },
      passport,
      resources:resources
    }
  },
  methods: {
  },
});

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

router.beforeEach(function (to, from, next) {
  if(passport.autenticated()){
    if(to.path!=='/login')
      next();
    else
      next('/');
  }
  else{
    if(to.path!=='/login')
      next('/login');
    else
      next();
  }
});

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default)
  })
})
