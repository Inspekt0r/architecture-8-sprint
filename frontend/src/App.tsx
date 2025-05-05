import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import ReportPage from './components/ReportPage';

const App: React.FC = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!keycloak.authenticated) {
        return <div>You are not authenticated</div>;
    }

    return (
        <div className="App p-4">
            <h1 className="text-xl font-bold mb-4">Reports App</h1>
            <p>Welcome, {keycloak.tokenParsed?.preferred_username}</p>
            <ReportPage />
            <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => keycloak.logout()}
            >
                Logout
            </button>
        </div>
    );
};

export default App;
