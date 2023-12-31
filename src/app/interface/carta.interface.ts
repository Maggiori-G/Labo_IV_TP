// Generated by https://quicktype.io

export interface Carta {
    success:   boolean;
    deck_id:   string;
    cards:     Card[];
    remaining: number;
}

export interface Card {
    code:   string;
    image:  string;
    images: Images;
    value:  string;
    suit:   string;
    valor: number;
}

export interface Images {
    svg: string;
    png: string;
}