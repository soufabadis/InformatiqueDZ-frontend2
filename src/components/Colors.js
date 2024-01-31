import "../styles/store.css";

const Colors = ({numberOfItems,colors}) => {
    const renderListItems = ()=> {
        return  Array.from({length :numberOfItems},(_,index) => (
           <li key={index} style={{backgroundColor:colors[index]}}></li>
        ));
    }
    return (
        <>
        <ul className='d-flex colors ps-0'>
            {renderListItems()}
         </ul>   
        </>
    );
}

export default Colors;
