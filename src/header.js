import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Headlines from './headlines';
import Categories from './categories';
import Footer from './Footer/Footer'

class Header extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="head">
                    <div className="headerobjectswrapper">
                        {/* <div className="weatherforcastbox">
                            <span style={{fontStyle: 'italic'}}>Weatherforcast for the next 24 hours: Plenty of Sunshine</span><br/>
                            <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
                        </div> */}
                        <header>News Paper</header>
                    </div>
                    <div class="subhead">Headlines</div>
                </div>

                <div className="cat_list">
                <Router>
                    <div className="router_wrap">
                    <ul className="navList">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories/bitcoin">Bitcoin</Link></li>
                        <li><Link to="/categories/apple">Apple</Link></li>
                        <li><Link to="/categories/Technology">Tech</Link></li>
                        <li><Link to="/categories/WSJ">WSJ</Link></li>
                        <li><Link to="/categories/NY Times">NY Times</Link></li>
                        <li><Link to="/categories/Covid">Covid</Link></li>
                        <li><Link to="/categories/Sports">Sports</Link></li>
                        <li><Link to="/categories/India">India</Link></li>

                    </ul>
                    <Route exact path="/" component={Headlines} />
                    <Route path="/categories/:name" component={Categories} />
                    <Footer />
                    </div>
                </Router>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;