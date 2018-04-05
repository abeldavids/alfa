import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'labels'],
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'L1',
          borderColor: '#FDD835',
          fill: false,
          data: this.data
        },
        // {
        //   label: 'L2',
        //   borderColor: '#0277BD',
        //   fill: false,
        //   data: this.data[1]
        // },
        // {
        //   label: 'L3',
        //   borderColor: '#F44336',
        //   fill: false,
        //   data: this.data[2]
        // }
      ]
    })
  }
}
