import Container from "@/utils/Container";
import SectionTitle from "../SectionTitle";

const FlashSale = () => {
    return (
        <Container>
          <SectionTitle title="Flash Sale" button="View All" to={"/viewAll"} />
        </Container>
    );
};

export default FlashSale;