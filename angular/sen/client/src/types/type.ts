export interface IFooter {
    title: string;
    items: Array<{
        avatar?: string;
        msg: string;
        href: string;
    }>;
};

export interface IOffers {
    avatar: string;
    title: string;
    msg: string;
    footer: string;
}