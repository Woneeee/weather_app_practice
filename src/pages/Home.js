import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(82, 108, 177, 1) 0%,
    rgba(223, 160, 160, 0.6251750700280112) 100%
  );
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

const Menu = styled.div`
  font-size: 26px;
`;

const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const More = styled.div`
  font-size: 26px;
`;

const Section = styled.section`
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

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  return (
    <Container>
      <Header>
        <Menu>
          <FontAwesomeIcon icon={faBars} />
        </Menu>

        <MyLocation>
          <h3>BUSAN</h3>
          <p>Mon, 8:24 am</p>
        </MyLocation>

        <More>
          <FontAwesomeIcon icon={faPlus} />
        </More>
      </Header>

      <Section>
        <h3>Storm</h3>

        <TempWrap>
          <Temp className="temp">
            22<span>°</span>
          </Temp>

          <Temp>
            <Num>
              28<span>°</span> C
            </Num>
            <Num>
              18<span>°</span> C
            </Num>
          </Temp>
        </TempWrap>
      </Section>
    </Container>
  );
};
