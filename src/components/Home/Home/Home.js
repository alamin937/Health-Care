import React from 'react';
import Helps from '../../Helps/Helps';
import MediAdvang from '../../ShowHelps/MediAdvang';
import Footer from '../Footer/Footer';
import NavPic from '../NavPic/NavPic';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <NavPic></NavPic>
           <Services></Services>
           <Helps></Helps>
           <MediAdvang></MediAdvang>
           <Footer></Footer>
        </div>
    );
};

export default Home;