const ChartItem = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <ul className="chart-col">
            {
                months.map((month, index) => (
                    <li className='chart_item' key={index}>
                        <div className='chart_item-col'>
                            <div className='chart_item-percen chart_item-{month}'></div>
                        </div>
                        <div className='chart_item-name'>{month}</div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ChartItem;