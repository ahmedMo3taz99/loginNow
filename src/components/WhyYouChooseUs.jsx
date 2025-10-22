import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";

import styled from "styled-components";

import Call from "../assets/icons/call.png";
import Indecator01 from "../assets/icons/indecator01.png";
import Indecator02 from "../assets/icons/indecator03.png";
import System from "../assets/icons/system.png";

const ChooseUsContent = styled.div`
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
        left: 12rem;
        top: 1.5rem;
        width: 35rem;
      }

      @media ${devices.phone} {
        left: 5rem;
        top: -2rem;
        width: 20rem;
      }
    }
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;

  @media ${devices.tabPort} {
    grid-template-columns: 1fr;
  }
`;
const SmallConatiner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 4rem;
  border: 2px solid var(--white-color-dark);
  border-radius: 2rem;

  @media ${devices.phone} {
    align-items: start;
    padding: 2rem 2rem;
  }

  h4 {
    color: var(--bright-green);
    font-size: 3rem;

    @media ${devices.phone} {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 2.3rem;
    text-align: center;
    font-weight: 500;
    color: var(--white-color-dark);

    @media ${devices.phone} {
      text-align: start;
      font-size: 1.8rem;
    }
  }

  /* height: 30vh; */
  .src {
    position: absolute;
    object-fit: contain;
    width: 9rem;
    height: 9rem;
    left: 1rem;
    top: -4rem;
    background-color: var(--dark-color-darker);

    @media ${devices.phone} {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export default function WhyYouChooseUs() {
  return (
    <ChooseUsContent id="WhyYouChooseUs">
      <h2 data-aos="fade-up" data-aos-delay="300">
        لماذا تختار Pro Traders Group؟
      </h2>

      <HeaderContainer>
        <SmallConatiner data-aos="fade-left" data-aos-delay="500">
          <img alt="BankIcon" src={Indecator01} className="src" />

          <h4> تحليل احترافي لحظي</h4>
          <p>
            أدواتنا تعمل بالذكاء الاصطناعي وتمنحك رؤية فورية لحركة السوق وتوجهات
            السيولة في الوقت الحقيقي.
          </p>
        </SmallConatiner>

        <SmallConatiner data-aos="fade-right" data-aos-delay="500">
          <img alt="GoldIcon" src={Indecator02} className="src" />
          <h4> إشارات مخصصة لنمط تداولك</h4>

          <p>
            سواء كنت متداول سكالبينج، يومي، أو سوينغ، إشاراتنا مصممة لتناسب
            أسلوبك وتزيد من معدل نجاح صفقاتك.
          </p>
        </SmallConatiner>

        <SmallConatiner data-aos="fade-left" data-aos-delay="800">
          <img alt="ArrowIcon" src={System} className="src" />
          <h4> أنظمة مستقرة ومجربة</h4>

          <p>
            تعمل منتجاتنا على منصات MetaTrader 4 و TradingView لجميع الأجهزة.تم
            اختبارها من قبل آلاف المتداولين حول العالم بنتائج موثوقة ومستقرة.
          </p>
        </SmallConatiner>

        <SmallConatiner data-aos="fade-right" data-aos-delay="800">
          <img alt="GoldIcon" src={Call} className="src" />
          <h4> دعم مستمر وشفافية كاملة</h4>

          <p>
            فريقنا يقدم دعم فني واستشارات شخصية لضمان تجربة تداول احترافية
            وآمنة.
          </p>
        </SmallConatiner>
      </HeaderContainer>
    </ChooseUsContent>
  );
}
