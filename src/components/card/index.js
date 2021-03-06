import React, { useState, useContext, createContext } from "react"
import {
    Container, Group, Title, Subtitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose,
    Maturity, Content, Meta, Entities, Item, Image
} from './styles/card'

const FeatureContext = createContext();

export default function Card({ children, ...props }) {
    const [ showFeature, setShowFeature ] = useState(false);
    const [ itemFeature, setItemFeature ] = useState(false);

    return (
        <FeatureContext.Provider
            value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
        >
            <Container {...props}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...props }) {
    return <Group {...props}>{children}</Group>;
}

Card.Title = function CardTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>;
}

Card.Subtitle = function CardSubtitle({ children, ...props }) {
    return <Subtitle {...props}>{children}</Subtitle>;
}

Card.Text = function CardText({ children, ...props }) {
    return <Text {...props}>{children}</Text>;
}

Card.Entities = function CardEntities({ children, ...props }) {
    return <Entities {...props}>{children}</Entities>;
}

Card.Meta = function CardMeta({ children, ...props }) {
    return <Meta {...props}>{children}</Meta>;
}

Card.FeatureText = function CardFeatureText({ children, ...props }) {
    return <FeatureText {...props}>{children}</FeatureText>;
}

Card.Item = function CardItem({ item, children, ...props }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext);

    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...props}
        >
            {children}
        </Item>
    )
}

Card.Image = function CardImage({ ...props }) {
    return <Image {...props} />
}

Card.Feature = function CardFeature({ children, category, ...props }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturityRating}>
                        {itemFeature.maturityRating < 12 ? 'PG' : itemFeature.maturityRating}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null
}
