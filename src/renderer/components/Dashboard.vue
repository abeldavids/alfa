<template lang="html">
  <v-layout row wrap>
    <v-flex xs6>
      <v-card>
        <transitorios></transitorios>
      </v-card>
    </v-flex>
    <v-flex xs6>
      <v-card>
        <armonicos></armonicos>
      </v-card>
    </v-flex>
    <v-flex xs6>
      <v-card elevation-3>
        <distorsion></distorsion>
      </v-card>
    </v-flex>
    <v-flex xs6>
      <v-card>
        <datalogger></datalogger>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Armonicos from './Dashboard/Armonicos'
import Datalogger from './Dashboard/Datalogger'
import Transitorios from './Dashboard/Transitorios'
import Distorsion from './Dashboard/Distorsion'

export default {
  name: "dashboard",
  components: { Armonicos, Datalogger, Transitorios, Distorsion }
}
</script>

<style lang="css">
</style>
