import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #eef9ff; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 90%;
  /* max-width: 1440px; */
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  word-break: keep-all;

  & > span:nth-of-type(1) {
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 4.375rem;
    letter-spacing: -0.05em;
  }

  & > p {
    padding-top: 2.375rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.68rem;
    letter-spacing: -0.05em;
  }
  @media (max-width: 1250px) {
    transform: translateY(-20%);
    & > span:nth-of-type(1) {
      font-size: 2.725rem;
    }
    & > p {
      font-size: 1rem;
    }
    img {
      width: 50vh;
    }
  }
  @media (max-width: 767px) {
    transform: translateY(-30%);
    & > span:nth-of-type(1) {
      font-size: 2.325rem;
    }
    & > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 412px) {
    transform: translateY(-30%);
    & > span:nth-of-type(1) {
      font-size: 2.225rem;
    }
    & > p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 375px) {
    transform: translateY(-20%);
    & > span:nth-of-type(1) {
      font-size: 2.025rem;
    }
    & > p {
      margin-top: -1rem;
    }
  }
`;
const Info = styled.div`
  display: flex;
`;
const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border: none;
  word-break: keep-all;
  opacity: 0;
  transition: all 1.5s ease-in-out;

  @media (max-width: 1440px) {
    padding: 1.25rem;
  }

  &:nth-of-type(1) {
    z-index: 3;
    transform: translateX(70%);

    &.isActive {
      opacity: 1;
      transform: translateX(6%);
    }
  }

  /* &:nth-of-type(2) {
    transform: translateX(100%);
    &.isActive {
      opacity: 1;
      transform: translateX(0%);
    }
  } */

  @media (max-width: 1543px) {
    transform: translate(100%, 0%);
    img {
      width: 50vw;
    }
    &.isActive {
      transform: translate(0%, 1%);
    }
  }

  @media (max-width: 1250px) {
    transform: translate(-50%, 90%);
    img {
      width: 70vw;
    }
    &.isActive {
      transform: translate(-50%, 1%);
    }
  }
  @media (max-width: 767px) {
    transform: translate(-40%, 90%);
    img {
      width: 70vw;
      /* transform: translate(-40%, 90%); */
    }
    &.isActive {
      transform: translate(-50%, 1%);
    }
  }
  @media (max-width: 412px) {
    img {
      width: 80vw;
    }
  }
  &.isActive {
    transform: translate(-50%, 1%);
  }
`;

export default function B() {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>
            <br />
            <strong>1:1 ?????? ????????? ???????????????</strong>
          </span>
          <p>
            ?????? ?????? ???????????? ????????? ???????????? ?????? ??? ?????? ??????
            <br />
            ??????????????? ???????????? ???????????? ????????? ?????? ????????? ??????????????????.
          </p>
        </Title>
        <Info ref={ref}>
          <Image className={inView ? "isActive" : ""}>
            <img src="/img/Group 96.png" className={inView ? "isActive" : ""} />
          </Image>
          <Image className={inView ? "isActive" : ""}>
            {/* 1<span>????????? ????????? ????????? ????????? ???????????????</span>2
            <span>????????? ???????????????</span>3
            <span> ????????? ????????? ???????????? ???????????? ???????????????</span> */}
          </Image>
        </Info>
      </Wrapper>
      {/* <Arrow ref={ref} className={inView ? "isActive" : ""}>
        <img src="img/down-arrow.png" alt="" />
      </Arrow> */}
    </Container>
  );
}
