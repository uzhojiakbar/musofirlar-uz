import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Langs } from '../../utils/langs'
import { Pages } from '../../utils/pages'
import { Link, Logo, NavContainer, Options, Tohome } from './style'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [selectedLang, setSelectedLang] = useState(Langs[0])
    const [langs, setLangs] = useState(Langs)
    const onSelect = v => {
        setSelectedLang(v)
        setOpen(!open)
    }
    return (
        <NavContainer>
            <Tohome  >
                <Logo />
            </Tohome>
            <Link>
                {
                    Pages.map(
                        (item) => {
                            return <div key={item.id}>
                                <NavLink
                                    style={({ isActive }) => ({ color: isActive ? '#007FFF' : '' })}
                                    to={item.path}
                                    className='link'
                                >
                                    {
                                        item[selectedLang.key] ? item[selectedLang.key] : item.name
                                    }
                                    <p className='tdn'></p>
                                </NavLink>
                            </div>
                        }
                    )
                }
            </Link>
            <Options>
                <div className="langs">
                    <div className="selected" onClick={() => setOpen(!open)} >
                        {selectedLang?.name}
                    </div>
                    {
                        open ? <div className="langs-list">
                            {langs.map((v) => (
                                <p onClick={() => onSelect(v)}>{v.name}</p>
                            ))}
                        </div> : ''
                    }
                </div>
            </Options>
        </NavContainer>
    )
}

export default Navbar