import TitleBar from "../ui/common/titleBar"
import { PortfolioWrapper } from "../ui/portfolio/portfolios"
export default function Page(){
    return (
        <div>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                <TitleBar title='포트폴리오'></TitleBar>
            </h1>
        </div>
    )
}