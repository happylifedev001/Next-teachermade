import React, { useState, useRef } from 'react'
import { Stage, Layer, Line } from 'react-konva'
import "../style/canvas.css"

import { connect } from 'react-redux'

function MyStage({ selectedItem }) {

//Drawing implement
  const isDrawing = useRef(false);
  const [lines, setLines] = useState([]);

  const handleMouseDown = (e) => {
    if(selectedItem == 'draw' || selectedItem == 'eraser') isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    const tool = selectedItem;
    setLines([...lines, {tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
//Drawing implement

  return (
    <div className='workContainer'>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        className="canvasStage"
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onMouseDown={handleMouseDown}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedItem: state.stage.selectedItem
})

export default connect(mapStateToProps)(MyStage);