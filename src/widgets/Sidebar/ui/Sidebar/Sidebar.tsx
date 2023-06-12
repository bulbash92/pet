import {classNames} from 'helpers/classNames';
import classes from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>togl</button>
            <div className={classNames(classes.switcher)}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
