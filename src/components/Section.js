import styled from "styled-components";

const SSection = styled.section`
  margin-top: 50%;
  padding: 0 40px;
  h3 {
    font-size: 46px;
    font-weight: 200;
  }
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .temp {
    font-size: 180px;
    font-weight: 200;
    span {
      font-size: 90px;
      display: block;
      transform: translate(200px, -170px);
    }
  }
`;

const Temp = styled.div`
  /* width: 50%; */
  &:nth-child(2) {
    height: 180px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const Num = styled.div`
  font-size: 34px;
  font-weight: 300;
  padding: 15px 0;
  &:nth-child(1) {
    border-bottom: 1px solid #eee;
  }
`;

export const Section = ({ sectionData }) => {
  return (
    <SSection>
      <h3>{sectionData.weather[0].main}</h3>

      <TempWrap>
        <Temp className="temp">
          {Math.round(sectionData.main.temp)}
          <span>°</span>
        </Temp>

        <Temp>
          <Num>
            {Math.round(sectionData.main.temp_max)}
            <span>°</span> C
          </Num>
          <Num>
            {Math.round(sectionData.main?.temp_min)}
            <span>°</span> C
          </Num>
        </Temp>
      </TempWrap>
    </SSection>
  );
};
