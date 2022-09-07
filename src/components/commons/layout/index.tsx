import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import * as s from "./layoutMain.styles";
import LayoutMyPage from "./mypage";
import LayoutNavigation from "./navigation";
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  // const SHOW_MYPAGE = [
  //   "/myPage",
  //   `/myPage/dealList/${router.query.id}`,
  //   `/myPage/favoriteList/${router.query.id}`,
  //   `/myPage/pointPayment/${router.query.id}`,
  //   `/myPage/writtenBoards/${router.query.id}`,
  // ];

  const SHOW_MYPAGE = [
    "/myPage/",
    `/myPage/dealList/`,
    `/myPage/favoriteList/`,
    `/myPage/paymentPoint/`,
    `/myPage/writtenBoards/`,
  ];

  const isShowMyPage = SHOW_MYPAGE.includes(router.asPath);
  return (
    <s.Wrapper>
      <Container maxWidth="xl">
        <LayoutNavigation />
        <LayoutHeader />
        {isShowMyPage && <LayoutMyPage />}

        <div>{props.children}</div>
      </Container>
      <LayoutFooter />
    </s.Wrapper>
  );
}
