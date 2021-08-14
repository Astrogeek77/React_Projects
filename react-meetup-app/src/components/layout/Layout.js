import MainNavigation from './MainNavigation'

import Classes from './Layout.module.css'

function Layout(props){
    return <div>
        <MainNavigation />
        <main className={Classes.main}>
            {props.children}
        </main>

    </div>
}

export default Layout;