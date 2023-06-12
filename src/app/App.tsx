import {Suspense} from 'react'
import {classNames} from 'helpers/classNames';
import {Navbar} from 'widgets/Navbar';
import {useTheme} from './providers/ThemeProvider';
import {AppRouter} from './providers/router';
import './styles/index.scss';
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={""}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
