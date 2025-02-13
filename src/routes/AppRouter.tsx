import { Routes, Route, HashRouter } from 'react-router';
import Home from '../components/Home';
import AdminInfo from '../components/AdminInfo';
import StaffInfo from '../components/StaffInfo';
import StudentInfo from '../components/StudentInfo';
import CoursesInfo from '../components/CorseInfo';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/administrators" element={<AdminInfo />} />
                    <Route path="/staff" element={<StaffInfo />} />
                    <Route path="/students" element={<StudentInfo />} />
                    <Route path="/courses" element={<CoursesInfo />} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    );
};

export default AppRouter;