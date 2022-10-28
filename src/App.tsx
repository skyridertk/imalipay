import React, { useState } from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	useNavigate
} from "react-router-dom";
import FinancialApp from './FinancialApp';
import { } from "react-router-dom";
import ReconciliationApp from './ReconciliationApp';
import Overview from './pages/Overview';
import Customers from './pages/Customers';
import Defaulters from './pages/Defaulters';
import Fulfilment from './pages/Fulfilment';
import OverviewReconciliation from './pages/OverviewReconciliation';
import Main from './components/Main';
import CustomerProfile from './pages/CustomerProfile';
import FulfilmentProfile from './pages/FulfilmentProfile';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Main />} /> */}
				<Route path="/" element={<FinancialApp />}>
					<Route index element={<Overview />} />
					<Route path="customers" element={<Customers />} />
					<Route path="defaults" element={<Defaulters />} />
					<Route path="fulfilment" element={<Fulfilment />} />
					<Route path="reconciliation" element={<OverviewReconciliation />} />
					<Route path="customer-profile" element={<CustomerProfile />} />
                    <Route path="fulfilment-profile" element={<FulfilmentProfile />} />
				</Route>
				{/* <Route path="/reconciliation" element={<ReconciliationApp />}>
					<Route index element={<OverviewReconciliation />} />
				</Route> */}
			</Routes>
		</BrowserRouter>
	)

}



export default App