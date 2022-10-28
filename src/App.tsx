import SideHeader from './components/SideHeader'
import Overview from './pages/Overview'
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import Customers from './pages/Customers';
import Defaulters from './pages/Defaulters';
import Fulfilment from './pages/Fulfilment';
import CustomerProfile from './pages/CustomerProfile';
import FulfilmentProfile from './pages/FulfilmentProfile';
import TopHeader from './components/TopHeader';
import { AppContainer } from './components/AppContainer';
import { RoutesContainer } from './components/RoutesContainer';
import OverviewReconciliation from './pages/OverviewReconciliation';

const App = () => {
    return (

        <BrowserRouter>
            <AppContainer>
                <div className='w-0 md:w-2/12'>
                    <SideHeader />
                </div>
                <div className='w-full md:w-10/12'>
                    <TopHeader />

                    <RoutesContainer>
                        <Routes>
                            <Route index element={<Overview />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/defaults" element={<Defaulters />} />
                            <Route path="/fulfilment" element={<Fulfilment />} />
                            <Route path="/reconciliation" element={<OverviewReconciliation />} />
                            <Route path="/customer-profile" element={<CustomerProfile />} />
                            <Route path="/fulfilment-profile" element={<FulfilmentProfile />} />
                        </Routes>
                    </RoutesContainer>

                </div>
            </AppContainer >
        </BrowserRouter>
    )
}

export default App