import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import ColorizeIcon from "@mui/icons-material/Colorize";
import { Button, Typography, Toolbar as ToolbarMUI, Box, AppBar } from "@mui/material";

function Toolbar() {
  const onClickInsert = () => {};
  const onClickDraw = () => {};
  const onClickHilight = () => {};
  const onClickErase = () => {};


  return (
    <Box>
      <AppBar position="static" color="primary">
        <ToolbarMUI disableGutters>
          <Typography variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0 }}
          >
            TeacherMade
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              startIcon={<AddCircleIcon />}
              onClick={onClickInsert}
              color="inherit"
            >
              Insert
            </Button>
            <Button
              startIcon={<EditIcon />}
              onClick={onClickDraw}
              color="inherit"
            >
              Draw
            </Button>
            <Button
              startIcon={<ColorizeIcon />}
              onClick={onClickHilight}
              color="inherit"
            >
              Hilight
            </Button>
            <Button
              startIcon={<CleanHandsIcon />}
              onClick={onClickErase}
              color="inherit"
            >
              Erase
            </Button>
          </Box>
        </ToolbarMUI>
      </AppBar>
    </Box>
  );
}
  
export default Toolbar;