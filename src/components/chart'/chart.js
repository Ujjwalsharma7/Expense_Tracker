

const Chart = (props) =>{
return (
<div>
    {props.datapoints.map((datapoint) => ( 
    <ChartBar 
    value = {datapoint.value} 
    maxValue={null} 
    label = {datapoint.label}
    />))}
</div>
)
}

export default Chart;