import React, { useState } from 'react'
import Style from './Select.module.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import MotherBoard from '../MotherBoard/MotherBoard'
import Types from '../Types/Types'
import Ram from '../Ram/Ram'
import Storage from '../Storage/Storage'
import Company from '../Company/Company'
import GraphicCard from '../GraphicCard/GraphicCard'
import SMPS from '../SMPS/SMPS'
import Cooler from '../Cooler/Cooler'
import Case from '../Case/Case'
const Select = () => {
    const [ActiveSection, setActiveSection] = useState('');
    

    return (
        <div className={Style.Body}>
            <Sidebar />
            <div className={Style.Container}>
                <Navbar />
                <div className={Style.Select}>
                    <div className={Style.Buttons}>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Types')}
                                >Types</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Ram')}
                                >Ram</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Storage')}
                                >Storage</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('MotherBoard')}
                                >MotherBoard</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Company')}
                                >Company</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('GraphicCard')}
                                >GraphicCard</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('SMPS')}
                                >SMPS</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Cooler')}
                                >Cooler</button>
                            </div>
                            <div className={Style.Button}>
                                <button onClick={() => setActiveSection('Case')}
                                >Case</button>
                            </div>
                    </div>
                    {ActiveSection === 'MotherBoard' && (
                    <div className={Style.Dispaly}>
                        <MotherBoard/>
                    </div>
                    )}
                    {ActiveSection === 'Types' && (
                    <div className={Style.Dispaly}>
                        <Types/>
                    </div>
                    )}
                    {ActiveSection === 'Ram' && (
                    <div className={Style.Dispaly}>
                        <Ram/>
                    </div>
                    )}
                    {ActiveSection === 'Storage' && (
                    <div className={Style.Dispaly}>
                        <Storage/>
                    </div>
                    )}
                    {ActiveSection === 'Company' && (
                    <div className={Style.Dispaly}>
                        <Company/>
                    </div>
                    )}
                    {ActiveSection === 'GraphicCard' && (
                    <div className={Style.Dispaly}>
                        <GraphicCard/>
                    </div>
                    )}
                    {ActiveSection === 'SMPS' && (
                    <div className={Style.Dispaly}>
                        <SMPS/>
                    </div>
                    )}
                    {ActiveSection === 'Cooler' && (
                    <div className={Style.Dispaly}>
                        <Cooler/>
                    </div>
                    )}
                    {ActiveSection === 'Case' && (
                    <div className={Style.Dispaly}>
                        <Case/>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Select