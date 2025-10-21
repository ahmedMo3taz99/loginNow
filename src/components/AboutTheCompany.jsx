import styled from "styled-components";
import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";

const AboutContent = styled.div`
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
    margin-bottom: 6rem;

    @media ${devices.tabPort} {
      font-size: 5rem;
      margin-bottom: 8rem;
    }

    @media ${devices.phone} {
      font-size: 3rem;
      margin-bottom: 5rem;
    }

    &::after {
      content: "";
      position: absolute;
      left: 4rem;
      top: 3rem;
      width: 30rem;
      height: 15rem;
      background-image: url(${UnderLine});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      @media ${devices.tabPort} {
        left: 0rem;
        top: 1.5rem;
        width: 30rem;
      }

      @media ${devices.phone} {
        left: 2rem;
        top: -2rem;
        width: 15rem;
      }
    }
  }

  p {
    color: var(--white-color-dark);
    font-size: 2.8rem;
    line-height: 1.7;

    @media ${devices.phone} {
      font-size: 2rem;
    }

    span {
      font-size: 2.5rem;
      color: var(--bright-green);
    }
  }
`;

export default function AboutTheCompany() {
  return (
    <AboutContent id="AboutTheCompany">
      <h2 data-aos="fade-up" data-aos-delay="300">
        نبذة عن الشركة
      </h2>
      <p data-aos="fade-up" data-aos-delay="600">
        <span>Pro Traders Group LTD (UK)</span>
        <br />
        شركة بريطانية مسجلة رسميًا، متخصصة في تطوير أنظمة تداول احترافية قائمة
        على الذكاء الاصطناعي والتحليل الفني. يقع مقرنا الرئيسي في لندن – المملكة
        المتحدة، ولدينا فروع تشغيلية في دبي ومصر. خدماتنا تغطي أكثر من 15 دولة
        حول العالم، وهدفنا هو بناء مجتمع من المتداولين المحترفين الذين يحققون
        أرباحًا حقيقية بأدوات ذكية موثوقة.
      </p>
    </AboutContent>
  );
}
