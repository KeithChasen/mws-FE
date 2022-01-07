import styled from "styled-components";

const BloodPressureStyledTable = styled.table`
  width: 100vw;
  
  .bloodPressureRow {
    width: 10vw;
    height: 5rem;
    font-size: 1rem;
  }

  .bpDate {
    width: 10vw
  }
  
  .bpDateTable {
    width: 100%
  }
  
  th {
    width: 5%
  }
  
  tr.bpDateTableRow {
    height: 2rem;
  }
  
  td.bpRowByTimePeriod {
    width: 20%;
  }
`;

export { BloodPressureStyledTable };
