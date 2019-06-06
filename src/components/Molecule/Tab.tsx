import * as React from "react";
import classnames from "classnames";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

type Store<T> = {
  current: T
  setCurrent: (current: T) => void
}

type TabProps<T> = {
  selected: T
  children: React.ReactElement[]
} & React.HTMLAttributes<HTMLDivElement>;

type MenuProps<T> = {
  children: MenuChildren<T>
} & React.HTMLAttributes<HTMLDivElement>;

type MenuChildren<T> = (config: { Menu: (props: MenuListItemProps<T>) => JSX.Element }) => JSX.Element

type BodyProps<T> = {
  tag: T
} & React.HTMLAttributes<HTMLDivElement>;

type MenuListItemProps<T> = {
  tag: T
} & React.HTMLAttributes<HTMLDivElement>

const Wrapper = styled.div``;

const MenuList = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
`;

const StyledMenuListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
  border: 2px solid #efefef;
  color: #3b3b3b;
  font-size: 2.4rem;
  font-weight: bold;
  background-color: #fcfcfc;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;

  ${media.lessThan("sm")`
    height: 50px;
    font-size: 1.7rem;
  `}

  &:not(:first-child) {
    margin-left: 30px;

    ${media.lessThan("sm")`
      margin-left: 5px;
    `}
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: center top;
    background-color: #3b3b3b;
    transition: transform 0.3s;
  }

  &:hover {
    color: #fcfcfc;

    &:before {
      transform: scaleY(1);
    }
  }

  &.selected {
    color: #fcfcfc;
    background-color: #3b3b3b;
  }
`;

const TextWrapper = styled.span`
  position: relative;
`

const BodyWrapper = styled.div`
  display: none;

  &.selected {
    display: block;
  }
`;

const MenuListItem = <T extends string>({ current, setCurrent }: Store<T>) => ({ className, tag, children, ...props }: MenuListItemProps<T>) => (
  <StyledMenuListItem className={classnames(className, { selected: tag === current })} onClick={() => setCurrent(tag)} { ...props}>
    <TextWrapper>{children}</TextWrapper>
  </StyledMenuListItem>
)

const Tab = <T extends string>({ className, children, selected }: TabProps<T>) => {
  const [current, setCurrent] = React.useState<T>(selected);
  const Menu = children.find((x) => x.type === Tab.Menu) as React.ReactElement<MenuProps<T>>;
  const MenuItem = Menu && Menu.props.children({ Menu: MenuListItem<T>({current, setCurrent}) });
  const Bodies = children.filter((x) => x.type === Tab.Body) as React.ReactElement<BodyProps<T>>[];

  return (
    <Wrapper className={className}>
      <MenuList>
        {MenuItem}
      </MenuList>
      {Bodies.map(Body => (
        <BodyWrapper className={classnames({ selected: Body.props.tag === current })}>
          {Body}
        </BodyWrapper>
      ))}
    </Wrapper>
  );
};

Tab.Menu = <T extends string>({ children }: MenuProps<T>) => <>{children}</>

Tab.Body = <T extends string>({ children }: BodyProps<T>) => <>{children}</>;

export default Tab;
