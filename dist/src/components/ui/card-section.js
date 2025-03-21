import React from 'react';
import Card, { CardAchievement } from './card';
const CardSection = ({ cards, cardType, className = '' }) => {
    const gridClass = cards.length === 1 ? 'w-full' : cards.length === 2 ? 'sm:w-1/2' : 'sm:w-1/3 lg:w-1/4';
    const CardComponent = cardType === 'Card' ? Card : CardAchievement; // Select card component dynamically
    return (React.createElement("div", { className: `flex flex-col flex-wrap gap-4 sm:flex-row ${className}` }, cards.slice(0, 4).map((card, index) => (React.createElement(CardComponent, { key: index, title: card.title, description: card.description, footer: card.footer, className: gridClass },
        React.createElement("p", null, card.content))))));
};
export default CardSection;
