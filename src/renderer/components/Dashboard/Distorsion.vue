<template lang="html">
  <div class="">
    <v-toolbar dense flat>
      <v-toolbar-title>Distorsion</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
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
