import * as React from 'react';
declare const CardWrapper: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    height?: string | number;
}
declare const Card: React.FC<CardProps>;
declare const CardAchievement: React.FC<CardProps>;
export { CardWrapper, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAchievement };
export default Card;
