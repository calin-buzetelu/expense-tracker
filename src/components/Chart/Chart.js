import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const valuesByMonth = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValueOverMonths = Math.max(...valuesByMonth);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxValueOverMonths}
                label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;