import styled from "styled-components";

const BloodPressureStyledTable = styled.div`
  width: 90%;;
  overflow-y: scroll;
  max-height: 50%;

  .bloodPressureRow {
    width: 100%;
    min-height: 20%;
    font-size: 1rem;
    display: grid;
    grid-template-columns: 10% 90%;
  }

  .bpDate {
    height: 100%;
  }

  .bpDateTable {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 90%;
  }
  
  .timePartLabels {
    display: grid;
  }

  .bpDateTableRow {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export { BloodPressureStyledTable };
