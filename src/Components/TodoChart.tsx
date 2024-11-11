import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
import HighchartsReact from "highcharts-react-official";
import {Todoss} from './Interface'
variablePie(Highcharts);
type TodoChartProps={
  TodoCount:Todoss,
  DoingCount:Todoss,
  DoneCount:Todoss,
  WarningCount:Todoss,
  PendingCount:Todoss,
  FaildCount:Todoss
}
export default function TodoChart(props:TodoChartProps) {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
let nameMonth = month[d.getMonth()];
  const options={
    chart:{
      type:'pie',
       // Edit chart spacing
       spacingBottom: 15,
       spacingTop: 0,
       spacingLeft: 0,
       spacingRight: 0,
       height: '500px'
    },
    title: {
              text: `Status<br> ${new Date().getDate()} ${nameMonth} ${new Date().getFullYear()}`,
              align: 'center',
              verticalAlign: 'middle',
              width: null,
              height: null,
              y: 60,
              style: {
                  fontSize: '1.1em'
              }
          },
  tooltip: {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
              point: {
                  valueSuffix: '%'
              }
          },
    plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%'
                    }
                },

                series: [{
                          type: 'pie',
                          name: 'Item',
                          innerSize: '50%',
                          data: [
                              ['Todo', props.TodoCount.length],
                              ['Doing',props.DoingCount.length],
                              ['Done', props.DoneCount.length],
                              ['Warning',props.WarningCount.length],
                              ['Pending',props.PendingCount.length],
                              ['Faild', props.FaildCount.length]
                          ]
                      }]
  }
  return (
    <>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
    </>
  )
}
