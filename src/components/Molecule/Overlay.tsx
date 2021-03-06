import * as React from "react";
import classnames from "classnames";
import OverlayContext, { initOverlayStore } from "@/contexts/Overlay";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import routings from "@/util/routings";
import Link from "@/components/Atom/Link";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  transform: scale(1);
  transition: transform 0.15s, opacity 0.15s;
  background-color: rgba(0, 0, 0, 0.8);

  &:not(.isActive) {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 80px;
  line-height: 1;
  color: #ffffff;

  ${media.greaterThan("md", "landscape")`
    flex-direction: row;
    flex-wrap: wrap;
  `}

  ${media.lessThan("md")`
  padding: 60px;
  `}
`;

const ListItem = styled.li`
  flex-grow: 1;

  ${media.greaterThan("md", "landscape")`
    width: 50%;
  `}
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: inherit;
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${media.lessThan("md")`
    font-size: 2.5rem;
  `}
`;

const Overlay = ({ className }: { className?: string }) => {
  const overlayContext =
    React.useContext(OverlayContext) || initOverlayStore(false);

  return (
    <Wrapper
      className={classnames(className, { isActive: overlayContext.isActive })}
    >
      <List>
        {Array.from(Object.values(routings)).map(({ label, location }, i) => (
          <ListItem key={i}>
            <StyledLink to={location}>{label}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Overlay;
