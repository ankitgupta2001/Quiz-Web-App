import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCredentials } from '../redux/userSlice';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGetQuizzes = () => {
        navigate('/quizzes');
    };

    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        dispatch(clearCredentials());
        navigate('/login');
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/add-quiz" className="block p-4 bg-blue-500 text-white rounded text-center">
                    Add Quiz
                </Link>
                <Link to="/update-profile" className="block p-4 bg-green-500 text-white rounded text-center">
                    Update Profile
                </Link>
                <button
                    onClick={handleGetQuizzes}
                    className="block p-4 bg-yellow-500 text-white rounded text-center"
                >
                    Get My Quizzes
                </button>
                <Link to="/attempt-quiz" className="block p-4 bg-red-500 text-white rounded text-center">
                    Attempt a Quiz
                </Link>
                <button
                    onClick={handleLogout}
                    className="block p-4 bg-gray-500 text-white rounded text-center"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;