import React, { Component } from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

class Toolbar extends Component {
	componentDidMount() {
		this.toolbar = new ToolbarDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			navigationType: "pointer",
      data: [   
        {
          "id": "insert",
          "icon": "mdi mdi-plus-box",
          "value": "Insert"
        },
        {
          "id": "draw",
          "icon": "mdi mdi-lead-pencil",
          "value": "Draw"
        },
        {
          "type": "separator"
        },
        {
          "id": "highlighter",
          "icon": "mdi mdi-marker",
          "value": "Highlighter"
        },
        {
          "id": "eraser",
          "icon": "mdi mdi-eraser-variant",
          "value": "Drawing Eraser"
        }
      ]
		});
    this.toolbar.events.on("click", (id, e) => {
      console.log(id);
    });
	}
	componentWillUnmount() {
		this.toolbar.destructor();
	}
	render() {
		return <div style={{ width: "100%" }} ref={el => (this.el = el)}></div>;
	}
}

Toolbar.propTypes = {
	css: PropTypes.string,
	data: PropTypes.instanceOf([PropTypes.array, PropTypes.instanceOf(TreeCollection)]),
	navigationType: PropTypes.string,
};

export default Toolbar;