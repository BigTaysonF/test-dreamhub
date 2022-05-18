import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/icon/connect-1.png'
import img2 from '../assets/images/icon/connect-2.png'
import img3 from '../assets/images/icon/connect-3.png'
import img4 from '../assets/images/icon/connect-4.png'
import img5 from '../assets/images/icon/connect-5.png'
import img6 from '../assets/images/icon/connect-6.png'
/*import img7 from '../assets/images/icon/connect-7.png'
import img8 from '../assets/images/icon/connect-8.png'*/

const WalletConnect = () => {
    return (
        <div>
            <HeaderStyle2 />
            <div className="tf-connect-wallet tf-section">
                <div className="tayson" />
                <div className="fixed"></div>
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="containersu">
                        </div>

                    </div>
                        <div className="col-lg-7 col-md-12">
                        <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                Sign In
                            </h2>
                            <h5 className="sub-title ct style-1">
                            Choose one of available wallet providers or create a new wallet.
                                <a href="https://www.coinbase.com/es/learn/crypto-basics/what-is-a-crypto-wallet">
                                <span> What is a Wallet?</span>
                                </a>
                            </h5>
                                <div className="buttons-c">
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img1} alt=""/>
                                        <span>Meta Mask</span>
                                        </Link>
                                    </div>
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img2} alt="" />
                                        <span>Bitski</span>
                                        </Link>
                                    </div>
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img3} alt="" />
                                        <span>Fortmatic</span>
                                        </Link>
                                    </div>
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img4} alt="" />
                                        <span>Wallet Connect</span>
                                        </Link>
                                    </div>
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img5} alt="" />
                                        <span>Coinbase Wallet</span>
                                        </Link>
                                    </div>
                                    
                                    <div className="sc-btn-top2 mg-r-12" id="site-header">
                                        <Link to="/wallet-connect" className="sc-button style-1 pri-1">
                                        <img src={img6} alt="" />
                                        <span>Authereum</span>
                                        </Link>
                                    </div>
                                </div>
                                    
                        </div>    
                    </div>              
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WalletConnect;
