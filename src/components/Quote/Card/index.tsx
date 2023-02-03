import { Author } from "./Author";
import { Wrapper as TextWrapper } from "./Content/Wrapper";
import { Text } from "./Content/Text";
import { FaQuoteLeft, FaTumblr, FaTwitter } from "./Content/Icon";
import { NewQuoteButton } from "../Buttons/NewQuoteButton";
import { ShareButton } from "../Buttons/ShareButton";
import { Wrapper } from "../Wrapper";
import { Footer } from "./Footer";
import { Container } from "../../../layouts/Container";
import { IProps } from "./types";

export const Card = ({ color, quote, changeColor, changeQuote }: IProps) => {
  return (
    <Container color={color} id='quote-box'>
      <Wrapper>
        <TextWrapper>
          <FaQuoteLeft
            size={26}
            color={`rgb(${color})`}
            style={{
              transitionProperty: "color",
              transitionDuration: "2s",
            }}
          />
          <Text color={color} quote={quote.quote} />
        </TextWrapper>
        <Author color={color} author={quote.author} />
        <Footer>
          <ShareButton
            id='tweet-quote'
            icon={<FaTwitter size={16} color={"#fff"} />}
            color={color}
            url={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Start%20where%20you%20are.%20Use%20what%20you%20have.%20%20Do%20what%20you%20can.%22%20Arthur%20Ashe"
            }
          ></ShareButton>
          <ShareButton
            id='tumblr-quote'
            style={{ marginLeft: "4px" }}
            icon={<FaTumblr size={16} color={"#fff"} />}
            color={color}
            url={
              "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Arthur%20Ashe&content=Start%20where%20you%20are.%20Use%20what%20you%20have.%20%20Do%20what%20you%20can.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
            }
          ></ShareButton>
          <NewQuoteButton
            text={"New Quote"}
            color={color}
            onChangeColor={changeColor}
            onChangeQuote={changeQuote}
          />
        </Footer>
      </Wrapper>
    </Container>
  );
};
