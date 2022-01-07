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
    
    @media only screen
    and (min-device-width: 280px)
    and (max-device-width: 1024px) {
      height: 50%;
      font-size: 2rem;
      grid-template-columns: 20% 80%;
    }
  }

  .bpDate {
    height: 100%;
  }

  .bpDateTable {
    width: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
  }
  
  .timePartLabels {
    display: grid;
  }

  .bpDateTableRow {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
    @media only screen
    and (min-device-width: 280px)
    and (max-device-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }
`;

export { BloodPressureStyledTable };
