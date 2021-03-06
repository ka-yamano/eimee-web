import * as React from "react";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";
import { Spacer4Way as Spacer } from "@/components/Atom/Spacer";
import NewsBlock from "@/components/Molecule/NewsBlock";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto 80px auto;

  ${media.lessThan("xl")`
    max-width: 1200px;
  `}

  ${media.lessThan("sm")`
    flex-direction: column;
    align-items: center;
  `}

  & > * {
    width: calc(100% / 4 - 10px);

    ${media.lessThan("xl")`
      width: calc(100% / 3 - 5px);
    `}

    &:nth-of-type(n+4) {
      ${media.lessThan("xl")`
        margin-top: 10px;
      `}

      ${media.lessThan("lg")`
        margin-top: 0;
      `}
    }

    ${media.lessThan("lg")`
      width: calc(100% / 2 - 20px);
    `}

    &:nth-of-type(n+3) {
      ${media.lessThan("lg")`
        margin-top: 10px;
      `}

      ${media.lessThan("sm")`
        margin-top: 0;
      `}
    }

    ${media.lessThan("md")`
      width: calc(100% / 2 - 5px);
    `}

    ${media.lessThan("sm")`
      width: 90%;
    `}

    &:not(:first-of-type) {
      ${media.lessThan("sm")`
        margin-top: 10px;
      `}
    }
  }
`;

const News = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Wrapper {...props}>
    <NewsBlock to="https://kuchikomu.jp/" blank>
      <NewsBlock.Title>次世代総合口コミSNSクチコムをリリース</NewsBlock.Title>
      <NewsBlock.Body>
        ユーザーとお店が繋がる次世代総合口コミSNS「クチコム」をリリースしました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_kuchikomu.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-03-30T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock to="/" title="https://eimee.co.jp/">
      <NewsBlock.Title>Eimeeサイトリニューアル</NewsBlock.Title>
      <NewsBlock.Body>EimeeWebサイトをリニューアルしました。</NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_eimee.jpg" />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-01-24T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock>
      <NewsBlock.Title>Yahoo!プロモーション広告正規代理店</NewsBlock.Title>
      <NewsBlock.Body>
        Yahoo!プロモーション広告正規代理店になりました。
      </NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_promotion.jpg" top />
      <NewsBlock.PublsihDate
        dateTime={new Date("2017-07-26T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <NewsBlock to="https://クレジットカードおすすめ比較.net/" blank>
      <NewsBlock.Title>クレジットカードhikaQリリース</NewsBlock.Title>
      <NewsBlock.Body>クレジットカードhikaQをリリースしました。</NewsBlock.Body>
      <NewsBlock.Image src="/assets/img/ph_news_credit.jpg" top />
      <NewsBlock.PublsihDate
        dateTime={new Date("2012-11-21T00:00:00.000+09:00")}
      />
    </NewsBlock>
    <Spacer />
  </Wrapper>
);

export default News;
