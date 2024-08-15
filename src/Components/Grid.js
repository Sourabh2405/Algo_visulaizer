import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Components.css";

function Grid(props) {
  const [grid, setGrid] = useState([]);
  const rows = (window.innerHeight - 70) / 10;
  //   const rows = 100vh / 10;
  const cols = window.innerWidth / 25;

  useEffect(() => {
    const initialGrid = createGrid(rows, cols);
    setGrid(initialGrid);
  }, []);

  const createGrid = (rows, cols) => {
    const grid = [];
    for (let row = 0; row < rows; row++) {
      const currentRow = [];
      for (let col = 0; col < cols; col++) {
        currentRow.push({ row, col, val: 0 });
      }
      grid.push(currentRow);
    }
    return grid;
  };

  const handleOnClick = (i, j) => {
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[i][j] = { row: i, col: j, val: 1 };
    setGrid(newGrid);
  };

  return (
    <div>
      <div className="grid">
        {grid.map((row, rowidx) => (
          <div key={rowidx} className="gridrow">
            {row.map((col, colidx) => (
              <div
                key={colidx}
                className="rowcell"
                onClick={() => handleOnClick(rowidx, colidx)}
                style={{
                  backgroundColor: col.val === 1 ? "black" : "white",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Grid.propTypes = {};

export default Grid;
