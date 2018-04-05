<template>
  <div>
    <v-data-table dense
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      :total-items="totalItems"
      hide-actions
      class="elevation-1"
      >
      <template slot="items" slot-scope="props">
        <tr>
          <td v-for="header in headers" class="text-xs-right">{{ props.item[header.value] }}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>
</template>

<script>
const db = require('../../db')
export default {
  props: ['desde', 'hasta'],
  data() {
    return {
      totalItems: 0,
      loading: false,
      pagination: { rowsPerPage: 8 },
      items: [],
      headers: [],
    }
  },
  watch: {
    desde: function(oldDate, newDate) {
      this.getData()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    hasta: function(oldDate, newDate) {
      this.getData()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    pagination: {
      handler() {
        this.getData()
          .then(data => {
            this.items = data.items
            this.totalItems = data.total
          })
      },
      deep: true
    }
  },
  mounted () {
    this.getData()
      .then(data => {
        this.items = data.items
        this.totalItems = data.total
      })
  },
  methods: {
    getData () {
      return new Promise( (resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        this.getDataWithDate()

        let items = this.items
        const total = items.length

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }
      })
    },
    loadData () {
      db.query('SELECT * FROM estacion_1 ORDER BY fecha ASC LIMIT 25', (err, res) => {
        if (err) {
          console.log(err);
        }
        this.items = res.rows
        var cols = Object.keys(res.rows[0])
        cols.forEach((item) => {
          this.headers.push({text: item, value: item})
        })
      })
    },
    getDataWithDate() {
      if( this.desde !== null && this.hasta !== null ) {
        db.query('SELECT * \
                  FROM estacion_1\
                  WHERE fecha BETWEEN $1 AND $2 \
                  ORDER BY fecha ASC \
                  LIMIT 100', [this.desde, this.hasta], (err, res) => {
          if (err) {
            console.log(err)
          } else {
            this.items = res.rows
          }
        })
      }
    }
  },
  computed: {
    pages() {
      if(this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null) return 0
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  created () {
    this.loadData()
  }
}
</script>

<style lang="css">
div {
  overflow-x: auto;
}
</style>
