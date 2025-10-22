import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";

import IconRight from "../assets/iconRight.png";
import styled from "styled-components";
import LogoProTraders from "../assets/protradersLogo.png";

const FormContent = styled.div`
  padding: 15rem 0 8rem 0;
  width: 120rem;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media ${devices.tabPort} {
    width: auto;
    padding: 15rem 6rem 6rem 6rem;
  }

  @media ${devices.phone} {
    padding: 6rem 4rem;
  }

  h2 {
    color: var(--bright-green);
    font-size: 6rem;
    position: relative;
    margin-bottom: 10rem;

    @media ${devices.tabPort} {
      font-size: 5rem;
      margin-bottom: 8rem;
    }

    @media ${devices.phone} {
      font-size: 3rem;
      margin-bottom: 8rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 25rem;
      top: 5rem;
      width: 50rem;
      height: 15rem;
      background-image: url(${UnderLine});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @media ${devices.tabPort} {
        left: 10rem;
        top: 9rem;
        width: 35rem;
      }

      @media ${devices.phone} {
        left: 8rem;
        top: 2.2rem;
        width: 20rem;
      }
    }
  }

  h4 {
    color: var(--white-color-dark);
    font-size: 5rem;

    @media ${devices.tabPort} {
      font-size: 3rem;
      color: var(--bright-green);
    }

    @media ${devices.phone} {
      font-size: 2.2rem;
    }
  }
`;

const SmallContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white-color-dark);

    @media ${devices.phone} {
      font-size: 2.2rem;
    }
  }

  .src {
    width: 2rem;
    height: 2rem;
    margin-top: -5px;
  }
`;

const AllInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 8rem;

  @media ${devices.tabPort} {
    flex-direction: column;
    margin-bottom: 4rem;
    gap: 5rem;
  }
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-around;

  @media ${devices.tabPort} {
    order: 2;
    gap: 2rem;
  }
`;

const FormWrapper = styled.div`
  background-color: var(--dark-color-dark);
  border-radius: 1.5rem;
  padding: 4rem 3rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 60%;

  @media ${devices.tabPort} {
    order: 1;
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  img {
    width: 15rem;
    height: auto;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.5rem 1rem;
  font-size: 1.6rem;
  border: 2px solid #ddd;
  border-radius: 0.8rem;
  outline: none;
  background-color: transparent;
  transition: all 0.3s ease;
  font-family: inherit;
  color: var(--white-color-dark);

  &:focus {
    border-color: var(--bright-green);
  }

  &:focus + label,
  &:valid + label {
    top: -1.5rem;
    right: 1rem;
    font-size: 2rem;
    color: var(--bright-green);
    padding: 0 0.5rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: #999;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const SubmitButton = styled.button`
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  background-color: var(--bright-green);
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function ChangeYourStrategy() {
  return (
    <FormContent id="Hero">
      <h2 data-aos="fade-up" data-aos-delay="200">
        غيّر طريقة تداولك باستخدام أدواتنا الذكية
      </h2>
      <AllInfo>
        <InfoContent>
          <SmallContent data-aos="fade-left" data-aos-delay="50">
            <img src={IconRight} alt="icon" className="src" />
            <h3>توصيات يومية على الذهب والعملات </h3>
          </SmallContent>

          <SmallContent data-aos="fade-left" data-aos-delay="100">
            <img src={IconRight} alt="icon" className="src" />
            <h3>مؤشرات ذكية تعطي إشارات بيع وشراء دقيقة مع 3 أهداف ربح</h3>
          </SmallContent>

          <SmallContent data-aos="fade-left" data-aos-delay="150">
            <img src={IconRight} alt="icon" className="src" />
            <h3>نظام سيولة يكشف اتجاه السوق الحقيقي (المشترين أو البائعين) </h3>
          </SmallContent>

          <SmallContent data-aos="fade-left" data-aos-delay="200">
            <img src={IconRight} alt="icon" className="src" />
            <h3>روبوتات تداول تعمل آليًا 24 ساعة بدون تدخل بشري</h3>
          </SmallContent>

          <SmallContent data-aos="fade-left" data-aos-delay="250">
            <img src={IconRight} alt="icon" className="src" />
            <h3>دعم فني واستشاري على مدار الأسبوع </h3>
          </SmallContent>
        </InfoContent>

        <FormWrapper data-aos="fade-right" data-aos-delay="200">
          <LogoWrapper>
            <img src={LogoProTraders} alt="ProTraders Logo" />
          </LogoWrapper>

          <StyledForm>
            <InputWrapper>
              <StyledInput type="text" id="name" required />
              <StyledLabel htmlFor="name">الاسم</StyledLabel>
            </InputWrapper>

            <InputWrapper>
              <StyledInput type="tel" id="phone" required />
              <StyledLabel htmlFor="phone">رقم التليفون</StyledLabel>
            </InputWrapper>

            <InputWrapper>
              <StyledInput type="text" id="country" required />
              <StyledLabel htmlFor="country">الدولة</StyledLabel>
            </InputWrapper>

            <SubmitButton type="submit">سجل الآن</SubmitButton>
          </StyledForm>
        </FormWrapper>
      </AllInfo>

      <h4 data-aos="fade-up" data-aos-delay="300">
        ابدأ رحلتك اليوم مع فريق محترفين يساعدك على تطوير استراتيجيتك وتحقيق
        أهدافك في التداول.
      </h4>
    </FormContent>
  );
}
