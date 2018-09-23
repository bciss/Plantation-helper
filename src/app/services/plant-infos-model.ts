export interface PlantInfos {
    id: number;
    name: string;
    category: string;
    plantation: {
        from: Date,
        upto: Date,
    };
    harvest: {
        from: Date,
        upto: Date,
    };
}
