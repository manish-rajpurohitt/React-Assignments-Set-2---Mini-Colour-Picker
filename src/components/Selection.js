import React,{useEffect} from 'react'

function Selection(props) {
    const [background,setBackground] = React.useState({background:""});
    
    const handleSelection = ()=>{
        props.applyColor(setBackground);
    }
    
    return (
        <div className="fix-box" style={background} onClick={handleSelection}>
                <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;

