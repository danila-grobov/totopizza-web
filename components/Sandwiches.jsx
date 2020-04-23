import SandwichInfo from "./SandwichInfo"

export default () => {
    return (
        <div className="sandwiches">
            <div className="sandwiches__bg" />
            <SandwichInfo src="images/sandwich_vistiena.png"
                title="SU VIŠTIENA"
                desc="32cm picos padas, sūris, vištiena, švelnus padažas, salotos, pomidorai" />
            <SandwichInfo src="images/sandwich_kumpis.png"
                title="SU KUMPIU"
                desc="32cm picos padas, sūris, kiaulienos kumpis, česnakinis padažas, salotos, šviežia paprika" />
            <SandwichInfo src="images/sandwich_sonine.png"
                title="SU ŠONINE"
                desc="32cm picos padas, sūris, k/r šoninė, BBQ padažas, salotos, svogūnai" />
            <SandwichInfo src="images/sandwich_vegetariskas.png"
                title="VEGETARIŠKAS"
                desc="32cm picos padas, sūris, pomidorai, česnakinis padažas, salotos, šviežia paprika" />
        </div>
    )
}