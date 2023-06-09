import React from 'react';
import './Home.css'

function Home(props) {
    return (
        <div className={'home'}>
            <div className={'home-main'}>
                <div className={'home-detail'}>
                    <p className={'intro-p'}>So, You Want To Travel To</p>
                    <p className={'home-title'}>SPACE</p>
                    <p className={'description'}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space
                        and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
                        out of this world experience!</p>
                </div>
                <div className={'home-explore-border'}>
                    <div className={'home-explore'}>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;