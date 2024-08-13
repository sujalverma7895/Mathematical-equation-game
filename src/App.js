import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { img2, img3 } from './images';
import Checkbox from './check';
import Infomsg from './Info';
import { Backg } from './black';
function App() {
  const [data, setdata] = useState();
  const [ldata, setldata] = useState();
  const [linp, setlinp] = useState("");
  const [rinp, setrinp] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [che, setche] = useState()
  const [ans,setans]=useState('')
  const [showInfo,setshowInfo]=useState('hide')
  const[background,setbackground]=useState()
  const nevigation=useNavigate();
  const leftadd1 = () => {
    setdata("+");
  }
  const leftadd2 = () => {
    setdata("-");
  }
  const leftadd3 = () => {
    setdata("x");
  }
  const leftadd4 = () => {
    setdata("÷")
  };
  const riadd1 = () => {
    setldata("+");
  }
  const riadd2 = () => {
    setldata("-");
  }
  const riadd3 = () => {
    setldata("x");
  }
  const riadd4 = () => {
    setldata("÷")
  };
  const task = (e) => {
    let res = e.target.value
    setlinp(res)
    if ((data !== "") || (linp !== "") || (ldata !== "") || (rinp !== '')) {
      setdisabled(false)
    }
  }
  const task1 = (e) => {
    let ress = e.target.value
    setrinp(ress)
    if ((data !== "") || (linp !== "") || (ldata !== "") || (rinp !== '')) {
      setdisabled(false)
    }

  }
  const task2 = () => {
    setche("show")
    setbackground(Backg)
    if ((data === "x") && (linp === "3") && (ldata === "x") && (rinp === '3')) {
      setans('Correct')
    }
    else {
      setans('Incorrect')
    }
  }
  const task3 = () => {
    
    setche('hide')
    setdata('')
    setldata('')
    setlinp('')
    setrinp('')
    setbackground('')
    if(ans=='Correct'){
      nevigation("/App2")
    }
  }
const task4 = () =>
{
  setshowInfo('hide')
}

  return (
    <div className='all'>
      <div className='main-wraper'>
        <div className='left-wraper'>
          <p>To solve the given equation, make the cofficebt and variable 1 using the simplest method .To do this select a suitable mathmatic  operator and number for each side of the equation.</p>
        </div>
        <div className='right-wraper'>
          <img className="img2" src={img2} />
          <img className="img3" src={img3} />
          <div className='equation'><p>solve for X</p><span className='main-spain'><span className='span1'>1</span><span className='span2'>__</span><span className='span4'>3</span><span className='span3'>X=5</span></span></div>
          <div className='button-wraper'><button onClick={()=>{showInfo==='hide'?setshowInfo('show'):setshowInfo('hide')}}>@</button><button>%</button></div>
          {showInfo==='show'?<Infomsg fn={task4}/>:null}
          <div className='left-operator-button'><button className='operator-button' onClick={leftadd1}>+</button><button className='operator-button' onClick={leftadd2}>-</button><button className='operator-button' onClick={leftadd3}>x</button><button className='operator-button' onClick={leftadd4}>/</button><input type='text' onChange={task} className='input-box' value={linp}/></div>
          <div className='right-operator-button'><button className='operator-button' onClick={riadd1}>+</button><button className='operator-button' onClick={riadd2}>-</button><button className='operator-button' onClick={riadd3}>x</button><button className='operator-button' onClick={riadd4}>/</button>< input type='text' onChange={task1} className='input-box' value={rinp}/></div>

          <div className='left-equation-box-wraper'><span className='left-equation'><span className='span11'>1</span><span className='span22'>__</span><span className='span44'>3</span><span className='span55'>x</span></span><span className='two-input'><p className='left-equation-button'>{data}</p><p className='left-equation-button'>{linp}</p></span></div>
          <div className='right-equation-box-wraper'><span className='right-equation'><span className='span111'>5</span></span><span className='two-input2'><span className='left-equation-button'>{ldata}</span><span className='left-equation-button'>{rinp}</span></span></div>
          <div>{background}</div>
          <div className='check-button'><button disabled={disabled} onClick={task2}>CHECK</button></div>
        </div>
      </div>
      {che === 'show' ? <Checkbox heading={ans} fn={task3} /> : null}
    </div>
  );
}

export default App;
