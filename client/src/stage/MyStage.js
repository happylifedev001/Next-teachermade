import React, { useState, useRef } from 'react'
import { Stage, Layer, Line, Rect} from 'react-konva'
import "../style/canvas.css"

import { connect } from 'react-redux'
import CanvasBackground from './CanvasBackground'
import { setItem } from '../actions/stageAction'
import InsertComponent from './InsertComponent'

function MyStage({ selectedItem, backgroundImage, insertItem, setItem }) {

  //Drawing implement
  const isDrawing = useRef(false);
  const isHighlight = useRef(false);
  const isInsert = useRef(false);
  const [lines, setLines] = useState([]);
  const [rects, setRects] = useState([]);
  const [inserts, setInserts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

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
      case 'insert':
        {
          isInsert.current = true;
          const pos = e.target.getStage().getPointerPosition();
          const tool = insertItem;
          setInserts([...inserts, { tool, startPos: { x: pos.x, y: pos.y }, endPos: { x: pos.x, y: pos.y } }]);
          break;
        }
      default:
        {
          const clickedOnEmpty = e.target === e.target.getStage();
          const clikedOnBackground = e.target.getId() === "canvasBackground";
          if (clickedOnEmpty || clikedOnBackground) {
            setSelectedId(null);
          }
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
      case 'insert':
        {
          if (!isInsert.current) return;
          const pos = e.target.getStage().getPointerPosition();
          let lastInsert = inserts[inserts.length - 1];
          lastInsert.endPos = { x: pos.x, y: pos.y };
          inserts.splice(inserts.length - 1, 1, lastInsert);
          setInserts(inserts.concat());
          break;
        }
      default:
        break;
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
      case 'insert':
        {
          isInsert.current = false;
          setItem(null);
          break;
        }
      default:
        break;
    }
  };
  //Drawing implement

  const handleTransformChange = (newAttrs, i) => {
    let insertsToUpdate = inserts;
    let singleInsertToUpdate = insertsToUpdate[i];
    // update old attributes
    singleInsertToUpdate = newAttrs;
    insertsToUpdate[i] = singleInsertToUpdate;
    setInserts(insertsToUpdate);
  };

  const passInsertWithId = (insert, id) => {
    const insertWithId = {
      ...insert,
      id: id,
    };
    return insertWithId;
  };

  return (
    <div className='workContainer'>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        className="canvasStage"
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onMouseDown={(e) => {
          handleMouseDown(e);
        }}
      >
        <Layer>
          {typeof backgroundImage === "string" && (
            // check if background image is not empty, default state is null
            <CanvasBackground
              backgroundUrl={backgroundImage}
              width={window.innerWidth}
              height={window.innerHeight}
            />
          )}
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
          {
            inserts.map((insert, i) => (
              <InsertComponent
                key={i}
                item={insert}
                shapeProps={passInsertWithId(insert, `insert${i}`)}
                width={insert.endPos.x - insert.startPos.x}
                height={insert.endPos.y - insert.startPos.y}
                onSelect={() => setSelectedId(i)}
                onChange={(newAttrs) => {
                  handleTransformChange(newAttrs, i);
                }}
                isSelected={i === selectedId}
              />
            ))
          }


        </Layer>
      </Stage>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedItem: state.stage.selectedItem,
  backgroundImage: state.stage.backgroundImage,
  insertItem: state.stage.insert.type
})

export default connect(mapStateToProps, { setItem })(MyStage);