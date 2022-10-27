import SideHeader from './components/SideHeader'
import Overview from './pages/Overview'
import {
    Routes,
    Route,
} from "react-router-dom";
import Customers from './pages/Customers';
import Defaulters from './pages/Defaulters';
import Fulfilment from './pages/Fulfilment';
import CustomerProfile from './pages/CustomerProfile';
import FulfilmentProfile from './pages/FulfilmentProfile';
import TopHeader from './components/TopHeader';

const FinancialApp = () => {
    return (

        <div className='flex md:flex-row  md:min-h-screen w-screen bg-gray-50'>
            <div className='w-full md:w-2/12'>
                <SideHeader />
            </div>
            <div className='w-full md:w-10/12'>
                <TopHeader />

                <Routes>
                    <Route index element={<Overview />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="defaults" element={<Defaulters />} />
                    <Route path="fulfilment" element={<Fulfilment />} />
                    <Route path="customer-profile" element={<CustomerProfile />} />
                    <Route path="fulfilment-profile" element={<FulfilmentProfile />} />
                </Routes>

            </div>
        </div >
    )
}

export default FinancialApp