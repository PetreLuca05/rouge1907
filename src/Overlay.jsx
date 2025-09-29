
import { Scroll } from '@react-three/drei'
import MenuItem from './components/MenuItem'
import './Overlay.css'

import logo from './assets/logo.png'

function Overlay() {
  return (
    <Scroll html style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}>

      <div className="header">
        {/* <h1 className="title">rouge 1907</h1> */}
        {/* <img src={logo} alt="Rouge 1907 Logo" className="logo" /> */}
        
        <section>
          <h1>menu</h1>
          <i class="fa-solid fa-angle-down"></i>
        </section>

      </div>

      <div className="menu">
        <MenuItem name="cappuccino" price="$10" />
        <MenuItem name="latte" price="$12" />
        <MenuItem name="espresso" price="$8" />
        <MenuItem name="americano" price="$9" />
        <MenuItem name="mocha" price="$11" />
        <MenuItem name="macchiato" price="$10" />
        <MenuItem name="flat white" price="$11" />
        <MenuItem name="affogato" price="$13" />
        <MenuItem name="cold brew" price="$10" />
        <MenuItem name="nitro cold brew" price="$12" />
        <MenuItem name="turkish coffee" price="$14" />
        <MenuItem name="irish coffee" price="$15" />
        <MenuItem name="frappuccino" price="$13" />
        <MenuItem name="cortado" price="$9" />
        <MenuItem name="ristretto" price="$8" />
        <MenuItem name="red eye" price="$10" />
        <MenuItem name="chai latte" price="$12" />
        <MenuItem name="matcha latte" price="$13" />
        <MenuItem name="caramel latte" price="$12" />
        <MenuItem name="hazelnut coffee" price="$11" />
        <MenuItem name="vanilla latte" price="$12" />
        <MenuItem name="pumpkin spice latte" price="$13" />
        <MenuItem name="double espresso" price="$10" />
        <MenuItem name="iced coffee" price="$9" />
        <MenuItem name="hot chocolate" price="$10" />
        <MenuItem name="croissant" price="$5" />
        <MenuItem name="blueberry muffin" price="$6" />
        <MenuItem name="banana bread" price="$7" />
        <MenuItem name="chocolate chip cookie" price="$4" />
        <MenuItem name="almond biscotti" price="$5" />
        <MenuItem name="cheese danish" price="$6" />
        <MenuItem name="cinnamon roll" price="$7" />
        <MenuItem name="bagel with cream cheese" price="$6" />
        <MenuItem name="vegan brownie" price="$6" />
        <MenuItem name="fruit tart" price="$8" />
      </div>
    </Scroll>
  )
}

export default Overlay
