import Timer from '/66084000/multipages/src/components/timer/timer.jsx'
import Counter from '/66084000/multipages/src/components/counter/counter.jsx'
import Add from '/66084000/multipages/src/components/Add/Add.jsx'

// import { useState } from 'react'

import './component.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Temperature from '/66084000/multipages/src/components/Temperature/Temperature.jsx'

function Component() {
 

  return (
    <div>
     
      <h1 className='title'>React Component</h1>
      {/* divให้เป็นส่วนเดียวกัน */}
      <div className='first'>
      <div>
      <Counter />
      <Timer />
      </div>
      <Add aValue={0} bValue={0}/>
      </div>
      <Temperature />
      <h3 className='name'>นายปริญญา เหมือนม่วง รหัส 66084000</h3>
     
    </div>
  )
}

export default Component