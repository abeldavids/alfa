<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        fixed
        :clipped="clipped"
        v-model="drawer"
        app
        width="230"
      >
        <v-list dense>
          <v-list-tile :to="{path:'/'}">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-group
            v-model="item.active"
            v-for="item in items"
            :key="item.title"
            :prepend-icon="item.action"
            prepend-icon=""
            class="no-scroll">
            <v-list-tile slot="activator">
              <v-list-tile-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.estaciones" :key="subItem.id_estacion" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.estacion }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed app :clipped-left="clipped" dense>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
const db = require('./db')
export default {
  name: 'alfa',
  data: () => ({
    clipped: true,
    drawer: true,
    fixed: false,
    items: [
      {title: 'Electricidad', estaciones: [], action: 'power'},
      {title: 'Gas', estaciones: [], action: 'local_gas_station'}
    ],
    miniVariant: true,
    right: true,
    rightDrawer: false,
    title: 'Alfacer del Caribe'
  }),
  methods: {
    getEstaciones: function() {
      db.query('SELECT * FROM estaciones', '', (err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.items[0].estaciones = res.rows
        }
      })
    }
  },
  mounted: function () {
    this.getEstaciones()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  .no-scroll {
    position: static;
  }
  html {
    overflow-y: hidden;
  }
</style>
