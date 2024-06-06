import './Dashboard.css'
import MainDash from './components_admin/MainDash/MainDash'
import RightSide from './components_admin/RightSide/RightSide'
import Table from './components_admin/Table/Table'
import Sidebar from './components_admin/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <>
    <div className='Dashboard'>
      <div className="DashboardGlass">
          <Sidebar />
          <MainDash />
          <RightSide/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
