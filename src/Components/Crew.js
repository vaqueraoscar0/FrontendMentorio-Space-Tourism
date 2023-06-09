import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import data from "../data.json";
import './Crew.css'

function Crew(props) {
    const [crewMember, setCrewMember] = useState(0);
    const [isVisible, setIsVisible] = useState(false)

    const handleTransition = (value) =>{
        setCrewMember(value)
        setIsVisible(true)
    }

    useEffect(() =>{
        setIsVisible(false)
    }, [isVisible])

    return (
        <div className={'crew'}>
            <div className={'crew1'}>
                <div className={'crew-container'}>
                    <div className={'crew-title'}>
                        <p className={'crew-title-number'}>02</p>
                        <p className={'crew-number-title'}>MEET YOUR CREW</p>
                    </div>
                    <AnimatePresence>
                        {isVisible &&
                            <motion.div
                                className={'crew-details'}
                                initial={{ opacity: 0, scale: 0.8, x:-100 }}
                                animate={{ opacity: 1, scale: 1, x:0}}
                                transition={{
                                    duration: 1.0
                                }}
                            >
                                <p className={'crew-member-status'}>{data["crew"][crewMember].role}</p>
                                <p className={'crew-member-name'}>{data["crew"][crewMember].name}</p>
                                <p className={'crew-member-bio'}>{data["crew"][crewMember].bio}</p>
                            </motion.div>
                        }

                    </AnimatePresence>
                    {!isVisible &&
                        <motion.div
                            className={'crew-details'}
                            initial={{ opacity: 0, scale: 0.8, x: -100 }}
                            animate={{ opacity: 1, scale: 1, x:0 }}
                            transition={{
                                duration: 1.0,
                            }}
                        >
                            <p className={'crew-member-status'}>{data["crew"][crewMember].role}</p>
                            <p className={'crew-member-name'}>{data["crew"][crewMember].name}</p>
                            <p className={'crew-member-bio'}>{data["crew"][crewMember].bio}</p>
                        </motion.div>
                    }
                    <div className="crew-tab">
                        <button
                            className={"tablinks"}
                            style={{opacity: crewMember === 0 ? "1": '0.17'}}
                            onClick={() => handleTransition(0)}
                        />

                        <button
                            className={"tablinks"}
                            style={{opacity: crewMember === 1 ? "1": '0.17'}}
                            onClick={() => handleTransition(1)}/>
                        <button
                            className={"tablinks"}
                            style={{opacity: crewMember === 2 ? "1": '0.17'}}
                            onClick={() => handleTransition(2)}/>
                        <button
                            className={"tablinks"}
                            style={{opacity: crewMember === 3 ? "1": '0.17'}}
                            onClick={() => handleTransition(3)}/>
                    </div>
                </div>
                <div className={'crew-detail'}>
                    <div className={'crew-img'}>
                        <AnimatePresence>
                            {isVisible &&
                                <motion.img
                                    src={require('' + data["crew"][crewMember].images.webp)}
                                    initial={{ opacity: 0, scale: 0.8, y: 140, x: 50, fillOpacity: 0 }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: 0, fillOpacity: 1}}
                                    transition={{
                                        duration: 1.0,
                                    }}
                                    alt={'planet'}/>
                            }
                        </AnimatePresence>
                        {!isVisible &&
                            <motion.img
                                src={require('' + data["crew"][crewMember].images.webp)}
                                initial={{ opacity: 0, scale: 0.8, y: 140, x: 50, fillOpacity: 0 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 0, fillOpacity: 1}}
                                transition={{
                                    duration: 1.0,
                                }}
                                alt={'crew'}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
