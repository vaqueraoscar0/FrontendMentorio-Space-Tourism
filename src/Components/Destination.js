import React, {useEffect, useState} from 'react';
import './Destination.css'
import data from '../data.json'
import {AnimatePresence, motion} from "framer-motion";

function Destination(props) {
    const [tab, setTab] = useState(0);
    const [isVisible, setIsVisible] = useState(false)

    const handleTransition = (value) =>{
        setTab(value)
        setIsVisible(true)
    }

    useEffect(() =>{
        setIsVisible(false)
    }, [isVisible])

    return (
        <div className={'destination'}>
            <div className={'destination-main'}>
                <div className={'destination-img-container'}>
                    <div className={'destination-img-title'}>
                        <p className={'destination-img-number'}>01</p>
                        <p className={'destination-img-chooser'}>PICK YOUR DESTINATION</p>
                    </div>
                    <AnimatePresence>
                        {isVisible &&
                            (<motion.div
                                className={'destination-img'}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 40 }}
                                transition={{
                                    duration: 10.0,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        damping: 50,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                            >
                                <img src={require('' + data["destinations"][tab].images.png)} alt={'planet'}/>
                            </motion.div>)
                        }
                    </AnimatePresence>
                    {!isVisible &&
                        <motion.div
                            className={'destination-img'}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 40 }}
                            transition={{
                                duration: 10.0,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    damping: 50,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                        >
                            <img src={require('' + data["destinations"][tab].images.png)} alt={'planet'}/>
                        </motion.div>
                    }
                </div>
                <div className={'destination-detail'}>
                    <div className="tab">
                        <button
                            className={"tablinks"}
                            style={{borderBottom: tab === 0 ? "3px solid #ffffff": '', lineHeight: tab === 0 ? '50px': ' '}}
                            onClick={() => handleTransition(0)}
                        >
                            {data["destinations"][0].name}
                        </button>
                        <button
                            className={"tablinks"}
                            style={{borderBottom: tab === 1 ? "3px solid #ffffff": '', lineHeight: tab === 0 ? '50px': ' '}}
                            onClick={() => handleTransition(1)}
                            >
                            {data["destinations"][1].name}
                        </button>
                        <button
                            className={"tablinks"}
                            style={{borderBottom: tab === 2 ? "3px solid #ffffff": '', lineHeight: tab === 0 ? '50px': ' '}}
                            onClick={() => handleTransition(2)}
                            >
                            {data["destinations"][2].name}
                        </button>
                        <button
                            className={"tablinks"}
                            style={{borderBottom: tab === 3 ? "3px solid #ffffff": '', lineHeight: tab === 0 ? '50px': ' '}}
                            onClick={() => handleTransition(3)}
                            >
                            {data["destinations"][3].name}
                        </button>
                    </div>
                    <AnimatePresence>
                        {isVisible &&
                            <motion.div
                                className={'planet-details'}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <p className={'home-title'}>{data["destinations"][tab].name}</p>
                                <p className={'description'}>{data["destinations"][tab].description}</p>
                                <div className={'planet-distance'}>
                                    <div>
                                        <p className={'destination-label-amount'}>AVG. DISTANCE</p>
                                        <p className={'destination-amount'}>{data["destinations"][tab].distance}</p>
                                    </div>
                                    <div>
                                        <p className={'destination-label-amount'}>Est. travel time</p>
                                        <p className={'destination-amount'}>{data["destinations"][tab].travel}</p>
                                    </div>
                                </div>
                            </motion.div>
                        }

                    </AnimatePresence>
                    {!isVisible &&
                        <motion.div
                            className={'planet-details'}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                        >
                            <p className={'home-title'}>{data["destinations"][tab].name}</p>
                            <p className={'description'}>{data["destinations"][tab].description}</p>
                            <div className={'planet-distance'}>
                                <div>
                                    <p className={'destination-label-amount'}>AVG. DISTANCE</p>
                                    <p className={'destination-amount'}>{data["destinations"][tab].distance}</p>
                                </div>
                                <div>
                                    <p className={'destination-label-amount'}>Est. travel time</p>
                                    <p className={'destination-amount'}>{data["destinations"][tab].travel}</p>
                                </div>
                            </div>
                        </motion.div>
                    }

                </div>

            </div>

        </div>
    );
}

export default Destination;