import React from 'react';
export type CardData = {
    title: string;
    description: string;
    content: string;
    footer: React.ReactNode;
};
interface CardSectionProps {
    cards: CardData[];
    cardType: 'Card' | 'CardAchievement';
    className?: string;
}
declare const CardSection: React.FC<CardSectionProps>;
export default CardSection;
