<template>
  <v-layout row wrap align-content-start>
    <v-flex xs3 offset-xs3>
      <v-dialog
        ref="dlg_d"
        v-model="d_desde"
        lazy
        width="290px"
        :return-value.sync="desde"
      >
        <v-text-field
          slot="activator"
          label="Desde"
          v-model="desde"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="desde" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="d_desde = false">Cancelar</v-btn>
          <v-btn flat color="primary" @click="$refs.dlg_d.save(desde)">Aceptar</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs3>
      <v-dialog
        ref="dlg_h"
        v-model="d_hasta"
        lazy
        width="290px"
        :return-value.sync="hasta"
      >
      <v-text-field
          slot="activator"
          label="Hasta"
          v-model="hasta"
          prepend-icon="event"
          readonly
      ></v-text-field>
      <v-date-picker v-model="hasta" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="d_hasta = false">Cancelar</v-btn>
        <v-btn flat color="primary" @click="$refs.dlg_h.save(hasta)">Aceptar</v-btn>
      </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-flex xs12>
      <v-card>
        <table-template :desde="desde" :hasta="hasta"></table-template>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import TableTemplate from './Datalogger/TableTemplate'
export default {
  name: 'datalogger',
  components: { TableTemplate },
  data: function() {
    return {
      desde: null,
      hasta: null,
      d_desde: null,
      d_hasta: null
    }
  }
}
</script>

<style lang="css">
</style>
