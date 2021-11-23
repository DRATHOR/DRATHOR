import React,{useRef,useEffect,useState} from 'react'
import './circle.scss'
import {select,line,curveCardinal} from 'd3'

function LinePath() {
    const [data,setData]=useState([10,55,40,70,20]);
    const svgRef=useRef();
    useEffect(()=>{
        console.log("inside the UseEffect: ",svgRef.current)
        const svg=select(svgRef.current)
        const myLine=line()
        .x((value,index)=>index*50)
        .y(value=>150-value)
        .curve(curveCardinal)
        svg
        .selectAll("path")
        .data([data])
        .join("path")
        .attr("d", value=>myLine(value))
        .attr("fill",'none')
        .attr('stroke','red')
            // svg.selectAll("circle")
            // .data(data)
            // .join(enter=>enter.append("circle").attr("class",'new'),
            //     update=>update.attr('class','update'),
            //     exit=>exit.remove()
            // ).attr("r",value=>value)
            // .attr("cx",value=>value*2)
            // .attr("cy",value=>value*2);
    },[data]);
    return (
        <>
        <svg ref={svgRef}></svg>
        <button onClick={()=>setData(data.map(value=>value+10))}>update data</button>
        </>
    )
}

export default LinePath
