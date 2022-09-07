// import BasicModal from "../../../commons/modal";
import CenteredTabs from "../../../commons/tabs";
import * as s from "./admin.styles";

export default function AdminUI() {
  return (
    <s.Wrapper>
      <CenteredTabs tabs={["가입자 현황", "일자별 요약", "1:1문의 내역"]} />

      <s.InnerWrapper>
        <s.Box>
          <s.Title>가입자 현황</s.Title>
        </s.Box>

        <s.Box>
          <s.Title>일자별 요약</s.Title>

          <s.Chart></s.Chart>
        </s.Box>
      </s.InnerWrapper>

      <s.InnerWrapper>
        <s.Box>
          <s.Title>1:1문의 내역</s.Title>

          <s.Chart></s.Chart>
        </s.Box>

        <s.Box>
          <s.Title>대행 신고 내역</s.Title>

          <s.Chart></s.Chart>
        </s.Box>
      </s.InnerWrapper>

      <s.InnerWrapper2>
        <s.Box2>
          <s.Title>운영진</s.Title>

          <s.AdminInfo></s.AdminInfo>
        </s.Box2>

        <s.Box2>
          <s.Title>일반 회원</s.Title>

          <s.UserInfo></s.UserInfo>
        </s.Box2>
      </s.InnerWrapper2>
    </s.Wrapper>
  );
}
