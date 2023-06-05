
import ChartBar from "./chartBar";
import './chart.js'
const Chart = (props) =>{
    const datapointValues = props.datapoints.map(datapoint => datapoint.value)
    const totalMaximum = Math.max(...datapointValues);
return (
<div>
    {props.datapoints.map((datapoint) => ( 
    <ChartBar
    key={datapoint.label} 
    value = {datapoint.value} 
    maxValue={null} 
    label = {datapoint.label}
    />))}
</div>
)
}

export default Chart;