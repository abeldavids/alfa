<template lang="html">
  <div class="">
    <v-toolbar dense flat>
      <v-toolbar-title>Datalogger</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-x>
        <v-btn slot="activator" icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile :to="{path:'/datalogger'}">
            <v-list-tile-title>
              Ver completo
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- <line-chart
      :height="160"></line-chart> -->
  </div>
</template>

<script>
import LineChart from '../Charts/LineChart'
export default {
  components: { LineChart }
}
</script>

<style lang="css">
</style>
