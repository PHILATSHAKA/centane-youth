import React from 'react';
import Sandiso from '../../images/sandiso.jpg';
import Sihle from '../../images/sihle.jpg';
import Aphiwe from '../../images/aphiwe.jpg';
import olwethu from '../../images/olwethu.jpg';
import cynoh from '../../images/cynoh.jpg';
import aso from '../../images/aso.jpg';
// import Coverflow from 'react-coverflow';
// import { StyleRoot } from 'radium';
import root from 'window-or-global';

import './index.css';

class Team extends React.Component {
componentDidMount(){
    
}
  render(){
    // let content = null;
    // content =(
    //     <StyleRoot>
    //           <Coverflow
    //             displayQuantityOfSide={2}
    //             navigation
    //             infiniteScroll
    //             enableHeading
    //             active={0}
    //             media={{
    //               '@media (max-width: 720px)': {
    //                 width: '100%',
    //                 height: '200px'
    //               },
    //               '@media (min-width: 720px)': {
    //                 width: '100%',
    //                 height: '400px',
    //               }
    //             }}
    //           >
    //             <img src={Sandiso} alt='Chairperson'/>
    //             <img src={Sihle} alt='Deputy Chairperson' />
    //             <img src={olwethu} alt='General Secretary' />
    //             <img src={Aphiwe} alt='Recording Secretary'/>
    //             <img src={cynoh} alt='Treasury'/>
    //             <img src={aso} alt='Marketing' />
    
    //           </Coverflow>
    //         </StyleRoot>
    //     );
    return(
      <div>
        {/* {content} */}
      </div>
    )
  }
}

export default Team;