 <script type="text/javascript">
        $(function () {
            var chart;
            $(document).ready(function() {
                chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'languageFamilyAveragedGraph',
                        type: 'line',
                        marginRight: 130,
                        marginBottom: 25
                    },
                    title: {
                        text: 'Results From All Languages',
                        x: -20 //center
                    },
                    subtitle: {
                        text: 'Data averaged across files',
                        x: -20
                    },
                    xAxis: {
                        categories: ['4 MFCC', '4 MFCC Tartini', '4 MFCC Tartini nPVI', '13 MFCC', '13 MFCC Tartini', '13 MFCC Tartini nPVI',
                        '41 MFCC', '41 MFCC Tartini', '41 MFCC Tartini nPVI']
                    },
                    yAxis: {
                        title: {
                            text: '%'
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        formatter: function() {
                            return '<b>'+ this.series.name +'</b><br/>'+
                                this.x +': '+ this.y +'°C';
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -10,
                        y: 100,
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Germanic',
                        data: [30.00,83.33,86.67,83.33]
                    }, {
                        name: 'Romantic',
                        data: [30.00,43.33,63.33,56.67]
                    }, {
                        name: 'Slavic',
                        data: [53.33,80.00,66.67,66.67]
                    }, {
                        name: 'Sino-Altaic',
                        data: [60.00,63.33,70.00,73.33]
                    }, {
                        name: 'Mean'
                        data: [43.33,67.50,71.67,70.00]
                    }]
                });
            });
        });
   </script>

