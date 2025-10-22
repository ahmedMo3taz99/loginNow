import styled from "styled-components";

import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";

import IconRight from "../assets/iconRight.png";

const HeaderContent = styled.div`
  padding: 8rem 0;
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
    padding: 6rem 6rem;
  }

  @media ${devices.phone} {
    padding: 6rem 4rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;

  @media ${devices.tabPort} {
    margin-bottom: 3rem;
  }

  @media ${devices.phone} {
    margin-bottom: 2rem;
  }

  h1 {
    color: var(--white-color-dark);
    font-size: 8rem;
    position: relative;
    margin-bottom: 10rem;

    @media ${devices.tabPort} {
      font-size: 5rem;
      margin-bottom: 5rem;
    }

    @media ${devices.phone} {
      font-size: 2.8rem;
      margin-bottom: 4rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 25rem;
      top: 20rem;
      width: 50rem;
      height: 10rem;
      background-image: url(${UnderLine});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @media ${devices.tabPort} {
        left: 15rem;
        top: 10rem;
        width: 30rem;
        height: 12rem;
      }

      @media ${devices.phone} {
        left: 7rem;
        top: 3.5rem;
        width: 20rem;
        height: 12rem;
      }
    }

    span {
      color: var(--bright-green);
      font-size: 8rem;

      @media ${devices.tabPort} {
        font-size: 5rem;
      }
      @media ${devices.phone} {
        font-size: 2.8rem;
      }
    }
  }

  p {
    font-size: 3rem;
    font-weight: 500;
    color: var(--white-color-dark);
    line-height: 1.7;

    @media ${devices.tabPort} {
      font-size: 2.2rem;
      font-weight: 400;
    }

    @media ${devices.phone} {
      font-size: 1.8rem;
    }

    span {
      font-size: 3rem;
      color: var(--bright-green);

      @media ${devices.tabPort} {
        font-size: 2.2rem;
      }
      @media ${devices.phone} {
        background-color: var(--bright-green);
        font-size: 1.8rem;
        color: var(--white-color-dark);
        padding: 0.5rem 2rem;
        display: inline-block;
        margin: 1rem 0;
        font-weight: 500;
      }
    }
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media ${devices.tabPort} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.phone} {
    grid-template-columns: 1fr;
  }

  .last {
    grid-column-start: 1;
    grid-column-end: 5;

    @media ${devices.tabPort} {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    @media ${devices.phone} {
      grid-column-start: 1;
      grid-column-end: 2;

      h3 {
        font-size: 2rem;
      }
    }
  }
`;

export const SmallContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;
  border: 1px solid var(--bright-green);
  border-radius: 2rem;

  h3 {
    color: var(--white-color-dark);
    font-size: 2.5rem;
    font-weight: 500;
  }
  .src {
    margin-top: -5px;
    width: 2rem;
    height: 2rem;
  }
`;

export default function Hero() {
  return (
    <HeaderContent id="ChangeYourStrategy">
      <HeroContent>
        <h1 data-aos="fade-up" data-aos-delay="200">
          ادخل إلى عالم التداول مع
          <br />
          <span data-aos="fade-up" data-aos-delay="400">
            Pro Traders Group LTD UK
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="500">
          تداول بثقة مع شركة Pro Traders Group، الشركة البريطانية الرائدة في
          تطوير حلول التداول
          <br />
          <span>الذكية منذ أكثر من 8 سنوات.</span>
          <br />
          نوفر للمتداولين أدوات احترافية تعتمد على الذكاء الاصطناعي لتساعدك على
          اتخاذ قرارات <br />
          دقيقة في الوقت المناسب وتحقيق أفضل النتائج في سوق الفوركس والذهب
          والعملات الرقمية.
        </p>
      </HeroContent>

      <MainContent>
        <SmallContent data-aos="fade-up" data-aos-delay="100">
          <img src={IconRight} alt="icon" className="src" />
          <h3>إشارات تداول دقيقة </h3>
        </SmallContent>

        <SmallContent data-aos="fade-up" data-aos-delay="300">
          <img src={IconRight} alt="icon" className="src" />
          <h3>مؤشرات ذكية </h3>
        </SmallContent>

        <SmallContent data-aos="fade-up" data-aos-delay="400">
          <img src={IconRight} alt="icon" className="src" />
          <h3>أنظمة سيولة لحظية </h3>
        </SmallContent>

        <SmallContent data-aos="fade-up" data-aos-delay="500">
          <img src={IconRight} alt="icon" className="src" />
          <h3>روبوتات تداول آلية </h3>
        </SmallContent>

        <SmallContent className="last" data-aos="fade-up" data-aos-delay="600">
          <img src={IconRight} alt="icon" className="src" />
          <h3>كل ما تحتاجه لتتداول بثقة واحتراف، في منصة واحدة متكاملة. </h3>
        </SmallContent>
      </MainContent>
    </HeaderContent>
  );
}
