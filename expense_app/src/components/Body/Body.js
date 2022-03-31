import CardBody from "./CardBody";
import Chart from "./Chart/Chart";
import Header from "./Header/Header";
import List from "./List/List";

const Body = (props) => {
    return (
        <CardBody> 
            <div className='body'>
                <Header />

                <Chart />

                <List list={props.expenses}/>
            </div>
        </CardBody>
    )
}

export default Body;