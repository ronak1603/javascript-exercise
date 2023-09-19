function starPattern(RowsPatternCount) {
  for (let r = 1; curRow <= RowsPatternCount; r++) {
    // console.log(curRow);
    let patternDesign = '';
    for (let i = 0; i < r; i++) {
      patternDesign += '*'
    }
    console.log(patternDesign);
  }
}

starPattern(5);