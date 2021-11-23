import React,{useRef,useEffect,useState} from 'react'
import './circle.scss'
import {select} from 'd3'

function Circle() {
    const [data,setData]=useState([10,20,30,40,50]);
    const svgRef=useRef();
    useEffect(()=>{
        console.log("inside the UseEffect: ",svgRef.current)
        const svg=select(svgRef.current)
            svg.selectAll("circle")
            .data(data)
            .join(enter=>enter.append("circle").attr("class",'new'),
                update=>update.attr('class','update'),
                exit=>exit.remove()
            ).attr("r",value=>value)
            .attr("cx",value=>value*2)
            .attr("cy",value=>value*2);
    },[data]);
    console.log("normal",svgRef)
    return (
        <>
        <svg ref={svgRef}></svg>
        <button onClick={()=>setData(data.map(item=>item*2))}>update data</button>
        </>
        
    )
}

export default Circle
