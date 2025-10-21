import styled from "styled-components";
import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";

import IconRight from "../assets/iconRight.png";

const FooterCotent = styled.div`
  padding: 8rem 0;

  width: 120rem;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  margin-bottom: 10rem;

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
    font-size: 3rem;
    color: var(--white-color-dark);
    margin-bottom: 5rem;

    @media ${devices.tabPort} {
      font-size: 2.5rem;
    }
  }
`;

const LastServies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 2rem;

  @media ${devices.tabPort} {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }
`;

const SmallContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  padding: 2rem 1.5rem;
  border: 1px solid var(--bright-green);
  border-radius: 2rem;

  h3 {
    color: var(--white-color-dark);
    font-size: 2.2rem;
    font-weight: 500;
  }
  .src {
    margin-top: -5px;
    width: 2rem;
    height: 2rem;
  }
`;

export default function Footer() {
  return (
    <FooterCotent id="Footer">
      <h2 data-aos="fade-up" data-aos-delay="300">
        ابدأ رحلتك الآن
      </h2>
      <p data-aos="fade-up" data-aos-delay="600">
        سواء كنت مبتدئًا أو محترفًا، فريق Pro Traders Group جاهز لمساعدتك على
        بناء استراتيجيتك وتحقيق أهدافك المالية.
      </p>

      <LastServies>
        <SmallContent data-aos="fade-up" data-aos-delay="200">
          <img src={IconRight} alt="icon" className="src" />
          <h3>اختر الباقة المناسبة لك وابدأ اليوم </h3>
        </SmallContent>

        <SmallContent data-aos="fade-up" data-aos-delay="500">
          <img src={IconRight} alt="icon" className="src" />
          <h3>بدون التزامات – يمكنك الإلغاء في أي وقت </h3>
        </SmallContent>

        <SmallContent data-aos="fade-up" data-aos-delay="800">
          <img src={IconRight} alt="icon" className="src" />
          <h3>دعم فني مباشر 24/7 </h3>
        </SmallContent>
      </LastServies>
    </FooterCotent>
  );
}
