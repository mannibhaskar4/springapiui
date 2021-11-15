import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className= "navbar navbar-expand-md navbar-dark bg-dark">
                {/* <nav > */}
                    <div>
                        <a href="https://github.com/mannibhaskar4/employee-management-system" className= "navbar-brand">
                            Employee Management System
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
