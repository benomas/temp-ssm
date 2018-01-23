<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout 
    ref="layout"
    view="hHr LpR Fff"
  >
    <q-toolbar slot="header">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        Prototipo
      </q-toolbar-title>    
      <q-btn flat>
        <q-icon name="account_box" />
      </q-btn>
    </q-toolbar>

    <!-- Left Side Panel-->
    <div slot="left">
      <div v-for="(resource, resourceKey) in resources" >   
        <q-collapsible indent v-bind:label="resource.listLabel" closed v-bind:icon="resource.listIcon"> 
          <q-side-link  v-if="resource.actions.index"  v-bind:to="'/'+ (resource.actions.index.path || resource.resource)" >
            <span><q-icon v-bind:name="resource.actions.index.icon || 'list'" />{{resource.actions.index.label || resource.listLabel}}</span>
          </q-side-link>      
          <q-side-link   v-if="resource.actions.create"  v-bind:to="'/'+ (resource.actions.create.path || resource.resource +'/create')">
            <span><q-icon v-bind:name="resource.actions.create.icon || 'create'" />{{resource.actions.create.label || resource.singleLabel}}</span>
          </q-side-link>
        </q-collapsible>
      </div>
    </div>

    <router-view>
    </router-view>

    <!-- Footer
    <q-toolbar slot="footer">
      ...
    </q-toolbar>
    -->
    <q-modal
      @open="notify('open')"
      @escape-key="notify('escape-key')"
      @close="notify('close')"
    >
      ...
    </q-modal>
  </q-layout>
</template>

<script>

import {
  QBtn,
  QIcon,
  QModal,
  QItemMain,
  QItemSide,
  QLayout,
  QSideLink,
  QToolbar,
  QToolbarTitle,
  QCollapsible ,
} from 'quasar'

export default {
  name:"skeleton",
  components: {
  QModal,
    QCollapsible ,
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QIcon,
    QItemMain,
    QItemSide,
    QSideLink,
  },
  data () {
    return {}
  },
  mounted(){
  }
}
</script>

<style lang="scss">
.q-collapsible-sub-item .relative-position{
  cursor:pointer !important;
  &:hover{
    background-color:#CCCCCC;
  }
}
</style>
