import React from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import LiveAuction from '../components/layouts/auctions/LiveAuction';

const LiveAuctions = () => {
    return (
        <div className='auctions'>
            <HeaderStyle2 />
            <LiveAuction data={liveAuctionData} />
            <Footer />
        </div>
    );
}

export default LiveAuctions;
