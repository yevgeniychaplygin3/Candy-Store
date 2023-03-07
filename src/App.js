import React from 'react'
import ProductsList from './components/ProductsList'

function App() {
    return (
        <>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <h1 className='navbar-brand'>Penny Candy Store</h1>
            </div>
            <ul className="nav navbar-nav">
            </ul>
        </div>
        </nav>
        <ProductsList/>
        </>
    )
}

export default App;
