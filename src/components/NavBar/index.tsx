import { Icon } from "./components/Icon";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import deck from "../../assets/deck.svg";
import deckEnabled from "../../assets/deckEnabled.svg";
import match from "../../assets/match.svg";
import matchEnabled from "../../assets/matchEnabled.svg";
import chat from "../../assets/chat.svg";
import chatEnabled from "../../assets/chatEnabled.svg";
import woofs from "../../assets/woofs.svg";
import woofsEnabled from "../../assets/woofsEnabled.svg";

import { NavBarContainer, NavBarContent } from "./styles";

const icons = {
  deck: {
    enabledSrc: deckEnabled,
    disabledSrc: deck,
    route: "/searchmatch",
  },
  match: {
    enabledSrc: matchEnabled,
    disabledSrc: match,
    route: "/matches",
  },
  chat: {
    enabledSrc: chatEnabled,
    disabledSrc: chat,
    route: "/chatlist",
  },
  woofs: {
    enabledSrc: woofsEnabled,
    disabledSrc: woofs,
    route: "/profile",
  },
};

export function NavBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.marginBottom = "60px";

    return () => {
      document.body.style.marginBottom = "";
    };
  }, []);

  return (
    <NavBarContainer>
      <NavBarContent>
        {Object.entries(icons).map(([key, value]) => (
          <Link key={key} to={value.route}>
            <Icon
              active={pathname === value.route}
              enabledSrc={value.enabledSrc}
              disabledSrc={value.disabledSrc}
            />
          </Link>
        ))}
      </NavBarContent>
    </NavBarContainer>
  );
}
