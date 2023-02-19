import React, { useState, useRef } from 'react'
import { Stage, Layer, Line, Rect } from 'react-konva'
import "../style/canvas.css"

import { connect } from 'react-redux'

function MyStage({ selectedItem }) {

  //Drawing implement
  const isDrawing = useRef(false);
  const isHighlight = useRef(false);
  const [lines, setLines] = useState([]);
  const [rects, setRects] = useState([]);

  const handleMouseDown = (e) => {
    switch (selectedItem) {
      case 'draw':
      case 'eraser':
        {
          isDrawing.current = true;
          const pos = e.target.getStage().getPointerPosition();
          const tool = selectedItem;
          setLines([...lines, { tool, points: [pos.x, pos.y] }]);
          break;
        }
      case 'highlighter':
        {
          isHighlight.current = true;
          const pos = e.target.getStage().getPointerPosition();
          setRects([...rects, { startPos: { x: pos.x, y: pos.y }, endPos: { x: pos.x, y: pos.y } }]);
          break;
        }
    }
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    switch (selectedItem) {
      case 'draw':
      case 'eraser':
        {
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
          break;
        }
      case 'highlighter':
        {
          if (!isHighlight.current) return;
          const pos = e.target.getStage().getPointerPosition();
          let lastRect = rects[rects.length - 1];
          lastRect.endPos = { x: pos.x, y: pos.y };
          rects.splice(rects.length - 1, 1, lastRect);
          setRects(rects.concat());
          break;
        }
    }
  };

  const handleMouseUp = () => {
    switch (selectedItem) {
      case 'draw':
      case 'eraser':
        {
          isDrawing.current = false;
          break;
        }
      case 'highlighter':
        {
          isHighlight.current = false;
          break;
        }
    }
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
          {
            rects.map((rect, i) => (
              <Rect
                key={i}
                x={rect.startPos.x}
                y={rect.startPos.y}
                width={rect.endPos.x - rect.startPos.x}
                height={rect.endPos.y - rect.startPos.y}
                fill="#ffff0090"
              />
            ))
          }

        </Layer>
      </Stage>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedItem: state.stage.selectedItem
})

export default connect(mapStateToProps)(MyStage);