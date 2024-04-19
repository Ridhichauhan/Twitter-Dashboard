// import { useEffect } from 'react';
/*eslint linebreak-style: ["error", "windows"]*/
import spinner from "../../../assets/images/media/spinner.svg";
const Loader = () => {
    // useEffect(() =
    //   console.log("Working");
      
    // });
    
    return (
        <div id="loader" className='' >
            <img src={spinner} className="h-25 w-25"  alt="Loader" />
        </div>
    );
};

export default Loader;
