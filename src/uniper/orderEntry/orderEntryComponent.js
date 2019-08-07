import React from 'react';
import './orderEntryComponent.css';
import PLChart from '../pLChart/plChartComponent';
import SecurityChart from '../securityChart/securityChart';

class EnterOrder extends React.Component {
  
    render() {
        return (
            <div>
                <div className="parent-div">
                    <div className="trader-info-div">
                        <h3>Trader Info</h3>
                        <div>
                            <label>Trader Id </label><span> - Trd-012</span>
                        </div>
                        <div>
                            <label>Name </label><span> - Leo</span>
                        </div>
                        <div>
                            <label>Game </label><span> - Test001</span>
                        </div>
                        <div>
                            <label>Balance </label><span> - $1,00,000</span>
                        </div>
                    </div>

                    <div className="book-trade-div">
                        <h3>Book Trade ---- <span>Book new order</span> </h3>
                        <div className="sub-div">
                            <div>
                                <label>Ticker </label><span> Tpc</span>
                            </div>
                            <div>
                                <label>Price </label><span> 27.15</span>
                            </div>
                            <div>
                                <label>Type </label><span> Bid</span>
                            </div>
                            <div>
                                <label>Quantity </label><span> 100</span>
                            </div>
                            <button>EXECUTE</button>
                        </div>
                    </div>

                    <div className="news-feed-div">
                        <h3>News Feed</h3>
                        <div>
                            <ul>
                                <li>1. Aurora Cannabis Stock  Falls to Key Support Levels </li>
                                <li>2. Kroger Losing Ground After Amazon Grocery Initiative </li>
                                <li>3. Chesapeake Extends Earnings Rally With Ascending Triangle Breakout</li>
                            </ul>
                            <a href="#">Click here for more news..</a>
                        </div>
                    </div>
                </div>
                <div className="parent-div">
                    <div className="trader-div">
                        <h3>Book Trader</h3>
                        <div className="sub-div">
                            <div>
                                <h3>Ask</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Price</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>28.15</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>27.15</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>20.15</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bid-ask-div">
                                <h3>Bid</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Price</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>28.15</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>27.15</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>20.15</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="pl-chart-div">
                        <h3>P&L Charting</h3>
                        <PLChart className="sub-div"></PLChart>
                    </div>
                    <div className="security-chart-div">
                        <h3>Security Charting</h3>
                        <SecurityChart></SecurityChart>
                    </div>
                </div>
            </div>
        );
    }
}
export default EnterOrder;