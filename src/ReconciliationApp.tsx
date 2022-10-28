import {
    Routes,
    Route,
} from "react-router-dom";
import TopHeader from "./components/TopHeader";
import SideHeaderReconciliation from "./components/SideHeaderReconciliation";

import OverviewReconciliation from './pages/OverviewReconciliation';
import { AppContainer } from "./components/AppContainer";
import { RoutesContainer } from "./components/RoutesContainer";

const ReconciliationApp = () => {
    return (
        <AppContainer>
            <div className='w-0 md:w-2/12'>
                <SideHeaderReconciliation />
            </div>
            <div className='w-full md:w-10/12'>
                <TopHeader />

                <RoutesContainer>
                    <Routes>
                        <Route index element={<OverviewReconciliation />} />
                    </Routes>
                </RoutesContainer>

            </div>
        </AppContainer >
    )
}

export default ReconciliationApp