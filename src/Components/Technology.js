import React, {useEffect, useState} from 'react';
import data from "../data.json";
import './Technology.css'
import {AnimatePresence, motion} from "framer-motion";

function Technology(props) {
    const [tecNumber, setTecNumber] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [mobileImg, setMobileImg] = useState(window.innerWidth <= 1280)


    const handleTransition = (value) =>{
        setTecNumber(value)
        setIsVisible(true)
    }

    const handleResize = () => {
        if(window.innerWidth >= 1280){
            setMobileImg(false)
        }else{
            setMobileImg(true)
        }
    }

    useEffect(() =>{
        setIsVisible(false)
        window.addEventListener("resize", handleResize)
    }, [isVisible])

    return (
        <div className={'technology'}>
            <div className={'tec-main'}>
                <div className={'tec-container'}>
                    <div className={'tec-title'}>
                        <p className={'tec-title-number'}>0{tecNumber}</p>
                        <p className={'tec-number-title'}>SPACE LAUNCH 101</p>
                    </div>
                    <div className={'tec-details'}>
                        <div>
                            <div className="tec-tab">
                                <button
                                    className={"tablinks"}
                                    style={{backgroundColor: tecNumber === 0? 'white':'', color: tecNumber === 0? 'black':'white' }}
                                    onClick={() => handleTransition(0)}
                                >{1}</button>

                                <button
                                    className={"tablinks"}
                                    style={{backgroundColor: tecNumber === 1? 'white':'', color: tecNumber === 1? 'black':'' }}
                                    onClick={() => handleTransition(1)}>{2}</button>
                                <button
                                    className={"tablinks"}
                                    style={{backgroundColor: tecNumber === 2? 'white':'', color: tecNumber === 2? 'black':'' }}
                                    onClick={() => handleTransition(2)}>{3}</button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isVisible &&
                                <motion.div
                                    className={'tec-detail-txt'}
                                    initial={{ opacity: 0, scale: 0.8, x:-100 }}
                                    animate={{ opacity: 1, scale: 1, x:0}}
                                    transition={{
                                        duration: 1.0
                                    }}
                                >
                                    <p className={'tec-status'}>THE TERMINOLOGY…</p>
                                    <p className={'tec-name'}>{data["technology"][tecNumber].name}</p>
                                    <p className={'tec-description'}>{data["technology"][tecNumber].description}</p>
                                </motion.div>
                            }

                        </AnimatePresence>
                        {!isVisible &&
                            <motion.div
                                className={'tec-detail-txt'}
                                initial={{ opacity: 0, scale: 0.8, x:-100 }}
                                animate={{ opacity: 1, scale: 1, x:0}}
                                transition={{
                                    duration: 1.0
                                }}
                            >
                                <p className={'tec-status'}>THE TERMINOLOGY…</p>
                                <p className={'tec-name'}>{data["technology"][tecNumber].name}</p>
                                <p className={'tec-description'}>{data["technology"][tecNumber].description}</p>
                            </motion.div>
                        }
                    </div>
                </div>
                <div className={'tec-detail'}>
                    <div className={'tec-img'}>
                        <AnimatePresence>
                            {isVisible &&
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.8, x:-50 }}
                                    animate={{ opacity: 1, scale: 1, x:0}}
                                    transition={{
                                        duration: 1.2
                                    }}
                                    src={require('' + data["technology"][tecNumber].images.portrait)}  alt={'planet'}/>
                            }

                        </AnimatePresence>
                        {!isVisible &&
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8, x:-50 }}
                                animate={{ opacity: 1, scale: 1, x:0}}
                                transition={{
                                    duration: 1.2
                                }}
                                src={!mobileImg? require('' + data["technology"][tecNumber].images.portrait): require('' + data["technology"][tecNumber].images.landscape)}  alt={'planet'}/>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;