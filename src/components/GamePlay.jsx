import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";

const GamePlay = () => {
    return (
        <MainConstainer>
            <div className = "top_section">
                <TotalScore/>
                <NumberSelector/>
            </div>
        </MainConstainer>
    );
};

export default GamePlay;

const MainConstainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`;