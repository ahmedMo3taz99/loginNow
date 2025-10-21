import styled from "styled-components";
import { useEffect, useState } from "react";
import { devices } from "../style/GlobalStyles";

const NavBarHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--nav-padding);
  background: var(--nav-background);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(var(--nav-transform));
  box-shadow: var(--nav-shadow);
  backdrop-filter: var(--nav-blur);
  border-bottom: var(--nav-border);

  &.scrolled {
    --nav-padding: 1rem 2rem;
    --nav-shadow: 0 8px 32px var(--dark-color-opacity-50),
      0 0 20px var(--primary-color-opacity-20);
    --nav-blur: blur(12px);
    --nav-border: 2px solid var(--bright-green);

    @media ${devices.tabPort} {
      --nav-padding: 0.8rem 1.5rem;
    }

    @media ${devices.phone} {
      --nav-padding: 0.6rem 1rem;
    }
  }

  &.hidden {
    --nav-transform: -100%;
  }

  /* Default values */
  --nav-padding: 1rem 2rem;
  --nav-background: var(--dark-blue);
  --nav-transform: 0;
  --nav-shadow: 0 2px 8px var(--primary-color-opacity-20);
  --nav-blur: none;
  --nav-border: none;

  @media ${devices.tabPort} {
    --nav-padding: 0.8rem 1.5rem;
  }

  @media ${devices.phone} {
    --nav-padding: 0.6rem 0.8rem;
  }
`;

const MainNav = styled.nav`
  width: 100%;
  max-width: 1200px;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--nav-gap);
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: nowrap;

    @media ${devices.phone} {
      gap: var(--nav-gap-phone);
    }
  }

  li {
    padding: var(--li-padding);
    transition: all 0.3s ease;
    border-radius: 8px;
    white-space: nowrap;

    @media ${devices.tabPort} {
      padding: var(--li-padding-tablet);
      border-radius: 6px;
    }

    @media ${devices.phone} {
      padding: var(--li-padding-phone);
      border-radius: 4px;
    }

    &:hover {
      background: var(--li-hover-bg);
      transform: translateY(-2px);

      @media ${devices.phone} {
        transform: translateY(-1px);
      }
    }
  }

  a {
    font-size: var(--link-size);
    font-weight: 600;
    color: var(--bright-green);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    display: inline-block;
    text-shadow: var(--link-shadow);

    @media ${devices.tabPort} {
      font-size: var(--link-size-tablet);
    }

    @media ${devices.phone} {
      font-size: var(--link-size-phone);
    }

    &:hover {
      color: var(--white-color-dark);
      transform: translateY(-3px);
      filter: drop-shadow(0 4px 8px var(--primary-color-opacity-50));

      @media ${devices.phone} {
        transform: translateY(-1px);
        filter: drop-shadow(0 2px 4px var(--primary-color-opacity-50));
      }
    }

    &.active::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 3px;
      background: var(--active-underline);
      border-radius: 2px;
      box-shadow: var(--active-shadow);

      @media ${devices.tabPort} {
        bottom: -6px;
        height: 2.5px;
      }

      @media ${devices.phone} {
        bottom: -4px;
        height: 2px;
        width: 70%;
      }
    }
  }

  &.scrolled {
    --nav-gap: 0.5rem;
    --nav-gap-phone: 0.2rem;
    --li-padding: 0.5rem 1rem;
    --li-padding-tablet: 0.4rem 0.7rem;
    --li-padding-phone: 0.3rem 0.4rem;
    --link-size: 1.8rem;
    --link-size-tablet: 1.4rem;
    --link-size-phone: 1rem;
    --link-color: var(--white);
    --link-shadow: 0 2px 8px var(--dark-color-opacity-50);
    --li-hover-bg: var(--primary-color-opacity-20);
    --link-hover-color: var(--bright-green);
    --active-underline: linear-gradient(
      90deg,
      transparent,
      var(--bright-green),
      transparent
    );
    --active-shadow: 0 0 10px var(--bright-green);
  }

  /* Default values */
  --nav-gap: 1rem;
  --nav-gap-phone: 0.3rem;
  --li-padding: 0.8rem 1.5rem;
  --li-padding-tablet: 0.6rem 1rem;
  --li-padding-phone: 0.4rem 0.5rem;
  --link-size: 2.5rem;
  --link-size-tablet: 1.8rem;
  --link-size-phone: 1.1rem;
  --link-color: var(--dark-blue);
  --link-shadow: none;
  --li-hover-bg: var(--white-color-opacity-20);
  --link-hover-color: var(--white);
  --active-underline: linear-gradient(
    90deg,
    transparent,
    var(--white),
    transparent
  );
  --active-shadow: 0 0 10px var(--white-color-opacity-70);
`;

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setScrolled(false);
        setVisible(true);
      }

      const sections = [
        "Hero",
        "ChangeYourStrategy",
        "WhyYouChooseUs",
        "OurServies",
        "AboutTheCompany",
        "Footer",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = scrolled ? 60 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <NavBarHeader
      className={`${scrolled ? "scrolled" : ""} ${!visible ? "hidden" : ""}`}
    >
      <MainNav className={scrolled ? "scrolled" : ""}>
        <ul>
          <li>
            <a
              href="#Hero"
              onClick={(e) => handleClick(e, "Hero")}
              className={activeSection === "Hero" ? "active" : ""}
            >
              سجل الأن
            </a>
          </li>
          <li>
            <a
              href="#ChangeYourStrategy"
              onClick={(e) => handleClick(e, "ChangeYourStrategy")}
              className={activeSection === "ChangeYourStrategy" ? "active" : ""}
            >
              ما نقدمه
            </a>
          </li>
          <li>
            <a
              href="#WhyYouChooseUs"
              onClick={(e) => handleClick(e, "WhyYouChooseUs")}
              className={activeSection === "WhyYouChooseUs" ? "active" : ""}
            >
              لماذا تختارنا
            </a>
          </li>
          <li>
            <a
              href="#OurServies"
              onClick={(e) => handleClick(e, "OurServies")}
              className={activeSection === "OurServies" ? "active" : ""}
            >
              خدماتنا الأساسية
            </a>
          </li>
          <li>
            <a
              href="#AboutTheCompany"
              onClick={(e) => handleClick(e, "AboutTheCompany")}
              className={activeSection === "AboutTheCompany" ? "active" : ""}
            >
              عن الشركه
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              onClick={(e) => handleClick(e, "Footer")}
              className={activeSection === "Footer" ? "active" : ""}
            >
              ابدأ رحلتك الآن
            </a>
          </li>
        </ul>
      </MainNav>
    </NavBarHeader>
  );
}
