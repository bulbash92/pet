import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { Navbar } from 'widgets/Navbar';
import { routeConfig } from '../routeConfig/routeConfig';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div
                            className="page-wrapper"
                        >
                            <Navbar />
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
