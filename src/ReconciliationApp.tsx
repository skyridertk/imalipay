import {
    Routes,
    Route,
} from "react-router-dom";
import TopHeader from "./components/TopHeader";
import SideHeaderReconciliation from "./models/SideHeaderReconciliation";

import OverviewReconciliation from './pages/OverviewReconciliation';

const ReconciliationApp = () => {
    return (
        <div className='flex md:flex-row  md:min-h-screen w-screen bg-gray-50'>
            <div className='w-full md:w-2/12'>
                <SideHeaderReconciliation />
            </div>
            <div className='w-full md:w-10/12'>
                <TopHeader />

                <Routes>
                    <Route index element={<OverviewReconciliation />} />
                </Routes>

            </div>
        </div >
    )
}

export default ReconciliationApp