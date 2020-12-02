import Tab from '../modules/tab';
import Navbar from '../commonComponents/navbar';
import Footer from '../commonComponents/footer'
function Tabs(){
    return(
        <div className="tabs">
        <Navbar />
        <Tab />
        <Footer />
        </div>
    )
}
export default Tabs;