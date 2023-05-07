import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="aboutUs" element={<AboutUs />} />
          <Route path="classes" element={<ClientClasses />} />
          <Route
            path="classDetail/pilate"
            element={<ClassDetail clsDetail={PILATES_DETAIL} />}
          />
          <Route
            path="classDetail/yoga"
            element={<ClassDetail clsDetail={YOGA_DETAIL} />}
          />
          <Route
            path="classStatusDetail/:packageId/:trainerId"
            element={<ClassStatusDetail />}
          />
          <Route path="login" element={<Login />} />
       
          <Route path="createClass" element={<CreateClass />} />
          <Route path="editClass" element={<CreateClass edit />} />
          <Route path="adminDashboard" element={<AdminControls />} />
          <Route path="createCategory" element={<CreateCategory />} />
          <Route path="createPackage" element={<CreatePackage />} />
          <Route path="createMember" element={<CreateMember />} />
          <Route path="createPlan" element={<CreatePlan />} />
          <Route path="createTrainer" element={<CreateTrainer />} />
          <Route path="viewMembers" element={<ViewMembers />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
