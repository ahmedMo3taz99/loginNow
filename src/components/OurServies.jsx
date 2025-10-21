import UnderLine from "../assets/line.png";
import { devices } from "../style/GlobalStyles";
import styled from "styled-components";

const OurServiesContent = styled.div`
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
    margin-bottom: 12rem;

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
`;

const AllServies = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;

  @media ${devices.tabPort} {
    gap: 3rem;
  }
  @media ${devices.phone} {
    gap: 2rem;
  }
`;

const RightServies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25rem;

  @media ${devices.tabPort} {
    gap: 20rem;
  }

  @media ${devices.phone} {
    gap: 15rem;
  }
`;

const LeftServies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30rem;

  @media ${devices.tabPort} {
    gap: 25rem;
  }

  @media ${devices.phone} {
    gap: 15rem;
  }

  .spicail {
    margin-top: 20rem;
  }
`;

const SmallServies = styled.div`
  border: 1px solid var(--bright-green);
  border-radius: 2rem;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${devices.phone} {
    flex-direction: column;
    gap: 0;
    padding: 1rem 0.5rem;
  }

  h4 {
    font-size: 10rem;
    font-weight: 300;
    color: var(--bright-green);

    @media ${devices.phone} {
      margin-bottom: -2rem;
      margin-top: -2rem;
    }
  }

  div {
    h5 {
      color: var(--bright-green);
      font-size: 3.5rem;

      @media ${devices.tabPort} {
        font-size: 2.5rem;
      }
    }

    p {
      color: var(--white-color-dark);
      font-size: 2.3rem;

      @media ${devices.tabPort} {
        font-size: 1.5rem;
      }

      @media ${devices.phone} {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function OurServies() {
  return (
    <OurServiesContent id="OurServies">
      <h2 data-aos="fade-up" data-aos-delay="300">
        خدماتنا الأساسية
      </h2>

      <AllServies>
        <RightServies>
          <SmallServies data-aos="fade-left" data-aos-delay="200">
            <h4>1</h4>
            <div>
              <h5> قناة التوصيات</h5>
              <p>
                توصيات مدروسة على الذهب والعملات، يقدمها محللون معتمدون من
                فريقنا الدولي.نسب أرباح أسبوعية تتجاوز 80٪ من الصفقات الناجحة.
              </p>
            </div>
          </SmallServies>

          <SmallServies data-aos="fade-left" data-aos-delay="400">
            <h4>3</h4>
            <div>
              <h5>نظام السيولة</h5>
              <p>
                أداة متقدمة تكشف لك اتجاه السيولة في السوق لحظيًا — هل المسيطر
                المشترون أم البائعون؟يساعدك على الدخول بثقة مع الحركة القوية
                بدلًا من التداول عكس الاتجاه.
              </p>
            </div>
          </SmallServies>
        </RightServies>

        <LeftServies>
          <SmallServies
            className="spicail"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h4>2</h4>
            <div>
              <h5> المؤشر الذكي</h5>
              <p>
                مؤشر احترافي يصدر إشارات بيع وشراء فورية مع نقطة دخول وثلاثة
                أهداف ربح واضحة. مصمم ليتوافق مع جميع استراتيجيات التداول.
              </p>
            </div>
          </SmallServies>

          <SmallServies data-aos="fade-right" data-aos-delay="600">
            <h4>4</h4>
            <div>
              <h5> روبوتات التداول (Bots)</h5>
              <p>
                روبوتات تعمل بشكل أوتوماتيكي 24/7 على الذهب والعملات والمؤشرات
                الأمريكية. تحقق أرباحًا شهرية تتراوح بين 20% إلى 50% حسب إعدادات
                المخاطرة.
              </p>
            </div>
          </SmallServies>
        </LeftServies>
      </AllServies>
    </OurServiesContent>
  );
}
