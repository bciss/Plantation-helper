export interface PlantInfos {
    id: number;
    name: string;
    category: string;
    plantation: {
        from: string,
        upto: string,
    };
    harvest: {
        from: string,
        upto: string,
    };
    imgUrl: string;
}
