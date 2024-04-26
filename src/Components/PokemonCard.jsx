import { Card } from "antd";
import { StarOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import './PokemonList.css';

const PokemonCard = ({ name, image }) => {
    return (
        <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}>
            <Meta description='fire, magic'/>
        </Card>
    )
};

export { PokemonCard };