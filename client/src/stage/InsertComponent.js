import React, { useRef, useEffect, Fragment } from 'react';
import { Transformer, Rect, Group } from "react-konva";
import { Html } from 'react-konva-utils';
import { connect } from 'react-redux'
import { setCheckModal } from '../actions/stageAction';

// image component that contains various event handlers
// image component is used for passing it to Konva canvas

const InsertComponent = ({ item, shapeProps, id, width, height, isSelected, onSelect, onChange, setCheckModal, insert }) => {
  // creating image based on its src
  const shapeRef = useRef();
  const transformRef = useRef();

  // if selected create box around the image to allow performing resizes
  useEffect(() => {
    if (isSelected) {
      transformRef.current.setNode(shapeRef.current);
      transformRef.current.getLayer().batchDraw()
    }
  }, [isSelected]);

  // if dropped on konva stage pass its attributes like src, width, height, x and y
  const handleOnDrop = e => {
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    });
  }

  // called when dragging starts image in konva Canvas
  const handleDragStart = e => {
    // move dragged images on top
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    })
    onSelect(e);
    e.target.moveToTop();
    // creates shadow around the image
  };

  // called when dragging ends 
  const handleDragEnd = e => {

    // updates the position
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y()
    });
  };

  // called when performed resize
  const handleTransformOnEnd = e => {
    // node - refference to image 
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);
    node.width(Math.max(5, node.width() * scaleX));
    node.height(Math.max(node.height() * scaleY));
    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      // set minimal value
      width: node.width(),
      height: node.height()
    });
  }

  const handleDblClick = e => {
    setCheckModal(true);
  }

  const Content = () => {
    const content = [];
    const length = Math.min(width, height);
    for (let i = 0; i < insert.number; i++) {
       content[i] = (
        <div>
          <input type={insert.type} key={i} style={{ width: length *0.8 / insert.number, height: length*0.8 / insert.number, position: 'relative' }} />  
        </div>
       )
    }
    return content;
  }

  return (
    <Fragment>
      <Group draggable
        ref={shapeRef}
        x={item.startPos.x}
        y={item.startPos.y}
      >
        <Html divProps={{ style: { pointerEvents: "pointer" } }}>
          <Content/>
        </Html>
        <Rect
          width={width}
          height={height}
          id={id}
          onDrop={handleOnDrop}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onClick={onSelect}
          onDblClick={handleDblClick}
          onTap={onSelect}
          // stroke="black"
          {...shapeProps}
          onTransformEnd={handleTransformOnEnd} />
      </Group>
      {isSelected && (
        // when selected it creates box around the image to perform resizes
        <Transformer
          ref={transformRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  insert: state.stage.insert
})

export default connect(mapStateToProps, { setCheckModal })(InsertComponent);
