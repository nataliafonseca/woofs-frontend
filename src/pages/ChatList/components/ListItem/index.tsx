import { IMatch } from "../../../../services/matchService";
import { Wrapper } from "./styles";

interface ListItemProps {
  pet: IMatch;
  messageInfo: {
    time: string;
    counter: number;
    message: string;
    yours: boolean;
    typing: boolean;
  };
}

export function ListItem({ pet, messageInfo }: ListItemProps) {
  return (
    <Wrapper empty={!messageInfo.time}>
      <img src={pet.url} alt="" />
      <div>
        <div className="message">
          <h2>{pet.name}</h2>
          {messageInfo.typing ? (
            <p>
              <span>digitando...</span>
            </p>
          ) : (
            <p>
              {messageInfo.yours && <span>você: </span>}
              {messageInfo.message || <span>comece a conversar com {pet.name}</span>}
            </p>
          )}
        </div>
        {messageInfo.time && (
          <div className="info">
            <span>{messageInfo.time}</span>
            {messageInfo.counter !== 0 && <span className="counter">{messageInfo.counter}</span>}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
