import { useRouter } from 'next/router'
import DashboardLayout from '../../src/components/partials/container/DashboardLayout'
import AuthProvider from '../../src/components/partials/provider/AuthProvider'
import Profile from '../../src/components/templates/dashboardPages/Profile'
import UserTours from '../../src/components/templates/dashboardPages/UserTours'
import Transactions from '../../src/components/templates/dashboardPages/Transactions'

function profileSection() {
    const router = useRouter()
    const { dashboardSection } = router.query
    
    return (
        <AuthProvider>
            <DashboardLayout>
                {dashboardSection === "profile" && <Profile />}
                {dashboardSection === "userTours" && <UserTours />}
                {dashboardSection === "transactions" && <Transactions />}
            </DashboardLayout>
        </AuthProvider>
    )
}

export default profileSection