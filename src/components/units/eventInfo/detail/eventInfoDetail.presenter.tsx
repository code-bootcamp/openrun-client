import { getDateHour } from "../../../../commons/getDateHour";
import * as s from "./eventInfoDetail.styles";
import { IEventInfoDetailUI } from "./eventInfoDetail.types";

export default function EventInfoDetailUI(props: IEventInfoDetailUI) {
  console.log(props);

  return (
    <>
      <s.Wrapper>
        <s.ItemWrapper>
          <s.ItemImg
            src={`https://storage.googleapis.com/openrun-storage/${props.data?.fetchEvent?.image}`}
          />
          <s.ItemInfoBox>
            <s.PlanTitle>오픈런 일정</s.PlanTitle>
            <s.Brand>{props.data?.fetchEvent?.brand}</s.Brand>
            <s.Event>{props.data?.fetchEvent?.title}</s.Event>
            <s.Time>{getDateHour(props.data?.fetchEvent?.period)}</s.Time>
            <s.PlaceTitle>장소</s.PlaceTitle>
            <s.StoreDetail>{props.data?.fetchEvent?.location}</s.StoreDetail>
          </s.ItemInfoBox>
        </s.ItemWrapper>
        <s.DivideLine />
        <s.InfoWrapper>
          <s.InfoTitle>행사정보</s.InfoTitle>
          <s.Information>
            {props.data?.fetchEvent?.contentsImage?.map((el: any) => (
              <s.EventImg
                src={`https://storage.googleapis.com/openrun-storage/${
                  el.url?.split(",")[0]
                }`}
              />
            ))}
          </s.Information>
        </s.InfoWrapper>
        <s.WithItemWrapper>
          <s.WithItemTitle>With Item</s.WithItemTitle>
          <s.WithItemSubTitle>함께 보면 좋은 상품</s.WithItemSubTitle>
        </s.WithItemWrapper>
        <s.WithItemBox>
          {props.boardsData?.fetchBoards.map((el: any) => (
            <s.WithImageWrapper key={el.id}>
              <s.WithImageIdWrapper
                id={el.id}
                onClick={(e) => {
                  props.onClickMoveToBoardDetail?.(e.currentTarget.id);
                }}
              >
                <s.WithItemImg
                  key={el}
                  src={
                    el?.image?.url
                      ? `https://storage.googleapis.com/openrun-storage/${el?.image?.url}`
                      : "/boardList/default.jpeg"
                  }
                />
              </s.WithImageIdWrapper>
            </s.WithImageWrapper>
          ))}
        </s.WithItemBox>
      </s.Wrapper>
    </>
  );
}
