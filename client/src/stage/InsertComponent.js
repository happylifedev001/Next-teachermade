import React, { useRef, useEffect, Fragment} from 'react';
import { Transformer, Rect, Group } from "react-konva";
import { Html } from 'react-konva-utils';
import { connect } from 'react-redux'
import { setCheckModal, setInserts } from '../actions/stageAction';

// image component that contains various event handlers
// image component is used for passing it to Konva canvas

const InsertComponent = ({ item, shapeProps, id, width, height, isSelected, onSelect, onChange, setCheckModal, insert, inserts, setInserts }) => {
  // creating image based on its src
  const shapeRef = useRef();
  const transformRef = useRef();

  useEffect(() => {
    let insertsToUpdate = inserts;
    let singleInsertToUpdate = insertsToUpdate[id];
    // update old attributes
    singleInsertToUpdate = insert;
    insertsToUpdate[id] = singleInsertToUpdate;
    setInserts(insertsToUpdate);
  }, [insert, setInserts, id, inserts])

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
    // const length = Math.min(width, height);

    for (let i = 0; i < item.number; i++) {
      if (item.direction === 'vertical')
        content[i] = (
          <div>
            <input name={`${id}`} type={item.type} key={i} style={{ width: width * 0.8 / item.number, height: height * 0.8 / item.number, position: 'relative' }} />
          </div>
        )
      else
        content[i] = (
          <input name={`${id}`} type={item.type} key={i} style={{ width: width * 0.8 / item.number, height: height * 0.8 / item.number, position: 'relative' }} />

        )
    }
    return content;
  }

  return (
    <Fragment>
      <Group draggable
        ref={shapeRef}
        x={item.x}
        y={item.y}
        onDrop={handleOnDrop}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={onSelect}
        onDblClick={handleDblClick}
        onTap={onSelect}
        {...shapeProps}
        onTransformEnd={handleTransformOnEnd}
      >
        <Html divProps={{ style: { pointerEvents: "pointer" } }}>
          <Content />
        </Html>
        <Rect
          width={width}
          height={height}
        />
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
  insert: state.stage.insert,
  inserts: state.stage.inserts
})

export default connect(mapStateToProps, { setCheckModal, setInserts })(InsertComponent);
