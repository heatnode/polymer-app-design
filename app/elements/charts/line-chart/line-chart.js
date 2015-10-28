/* global Chart */

class LineChart {
    beforeRegister() {
        this.is = 'line-chart';
        this.properties = {
            values: {
                type: Array,
                observer: 'update'
            },

            labels: {
                type: Array,
                observer: 'update'
            },

            colors: {
                type: Array,
                value: ['250, 50, 0', '170, 207, 228'],
                observer: 'update'
            }
        };
    }

    attached() {
        if (this.values === null || this.labels === null || this.colors === null) {
            return;
        }

        if (this.chart) {
            this.chart.destroy();
        }

        //console.log('values: ' + this.values);
        //console.log('labels: ' + this.labels);
        //console.log('colors: ' + this.colors);

        this.datasets = [];

        this.values.forEach((val, i) => {
            this.datasets.push({
                backgroundColor: `rgba(${this.colors[i]}, .2)`,
                borderColor: `rgba(${this.colors[i]}, 1)`,
                pointBackgroundColor: `rgba(${this.colors[i]}, 1)`,
                pointBorderColor: 'rgba(241, 235, 130, 1)',
                pointHoverBackgroundColor: `rgba(${this.colors[i]}, 1)`,
                pointHoverBorderColor: '#fff',
                data: this.values[i]
            });
        }, this);

        this.data = { labels: this.labels, datasets: this.datasets };

        this.ctx = this.$.canvas.getContext('2d');

        this.options = {
            // maintainAspectRatio: false,
            xAxes: [{
                show: false
            }]
        };

        this.chart = new Chart(this.ctx, {
            type: 'line',
            data: this.data,
            options: this.options
        });
 
        //         this.async(() => this.resize(), 2000);
        //         this.async(() => this.update(), 3000);
    }

    resize() {
        this.chart.resize(this.chart.render, true);
    }

    update() {
        if (this.chart) {
            this.chart.datasets[0].points[1].value = 50;
            //console.log('value: ' + this.chart.datasets[0].points[1].value);
            this.chart.update();
        }
    }
}

Polymer(LineChart);