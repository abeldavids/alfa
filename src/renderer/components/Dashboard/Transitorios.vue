<template lang="html">
  <div>
    <v-toolbar dense flat>
      <v-toolbar-title>Transistorios</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <line-chart
      :height="160"
      :labels="this.labels"
      :data="this.data"></line-chart>
  </div>
</template>

<script>
import LineChart from '../Charts/LineChart'
const db = require('../../db')

export default {
  components: { LineChart },
  mounted() {
    this.getData()
  },
  data: () => ({
    labels: [],
    data: [],
  }),
  methods: {
    getData: function() {
      db.query('SELECT fecha, "Tension L1", "Tension L2", "Tension L3" \
        FROM estacion_1 \
        ORDER BY fecha DESC \
        LIMIT 10','' , (err, res) => {
          if(err) {
            console.log(err);
          } else {
            this.labels = res.rows.map(function(e) {
              return e.fecha.toTimeString()
            })
            this.data = res.rows.map(function(e) {
              return e['Tension L1']
            })
          }
        })
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="css">
.line-chart {
  display: none;
}
</style>
