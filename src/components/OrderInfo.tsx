import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import totalPrice from '../recoil/selectors/totalPrice';

const StyledOrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 448px;
  max-width: 448px;
  position: sticky;
  margin-top: 83px;
  top: 202px;

  border: 1px solid #dddddd;
  background-color: #f5f5f5;
`;

const OrderInfoTitle = styled.div`
  padding: 16px;

  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

  border-bottom: 3px solid #d8d8d8;
`;

const OrderInfoBody = styled.div`
  width: 100%;
  padding: 32px 30px 12px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

const Price = styled.div`
  &::after {
    content: '원';
    padding-left: 8px;
  }
`;

const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const OrderButtonContainer = styled.div`
  width: 100%;
  padding: 0px 30px 32px;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: #333;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 21px;
  color: #fff;
`;

export const DELIVERY_FEE = 2500;

const OrderInfo = () => {
  const [totalCartItemPrice, finalPrice] = useRecoilValue(totalPrice);
  return (
    <StyledOrderInfo>
      <OrderInfoTitle>결제 예상 금액</OrderInfoTitle>
      <OrderInfoBody>
        <PriceInfo>
          <div>총 상품 가격</div>
          <Price>{totalCartItemPrice.toLocaleString('ko-KR')}</Price>
        </PriceInfo>
        <PriceInfo>
          <div>총 배송비</div>
          <Price>{DELIVERY_FEE.toLocaleString('ko-KR')}</Price>
        </PriceInfo>
        <TotalPrice>
          <div>총 주문 금액</div>
          <Price>{finalPrice.toLocaleString('ko-KR')}</Price>
        </TotalPrice>
      </OrderInfoBody>
      <OrderButtonContainer>
        <OrderButton>주문하기</OrderButton>
      </OrderButtonContainer>
    </StyledOrderInfo>
  );
};

export default OrderInfo;
