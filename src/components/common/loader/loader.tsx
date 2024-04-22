// import { useEffect } from 'react';
import spinner from '../../../assets/images/media/spinner.svg';
const Loader = () => {
    // useEffect(() => {
    //   console.log("Working");
      
    // });
    
    return (
        <div id="loader" className=''>
            <img src={spinner} className="" alt="Loader" />
        </div>
    );
};

export default Loader;
