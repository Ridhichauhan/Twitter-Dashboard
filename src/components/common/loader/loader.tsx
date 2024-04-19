// import { useEffect } from 'react';
import loader from '../../../assets/images/media/loader.svg';
const Loader = () => {
    // useEffect(() => {
    //   console.log("Working");
      
    // });
    
    return (
        <div id="loader" className='' style={{color:"#238ae6"}}>
            <img src={loader} className="" style={{color:"#238ae6"}} alt="Loader" />
        </div>
    );
};

export default Loader;
