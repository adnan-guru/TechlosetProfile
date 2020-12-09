import Tab from '../modules/tab';
import Navbar from '../commonComponents/navbar';
import Footer from '../commonComponents/footer'
import Login from '../commonComponents/login'
function Tabs() {
    return (
        <div>
            <Navbar /> 
             {/* <Login />  */}
             <Tab />
             <Footer />
        </div>
    )
}
export default Tabs;