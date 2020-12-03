import Tab from '../modules/tab';
import Navbar from '../commonComponents/navbar';
import Footer from '../commonComponents/footer'
import Login from '../commonComponents/login'
function Tabs(){
    return(
        <div >
        <Navbar />
           {/* <Tab /> */}
           <Login />   
        <Footer />
        </div>
    )
}
export default Tabs;