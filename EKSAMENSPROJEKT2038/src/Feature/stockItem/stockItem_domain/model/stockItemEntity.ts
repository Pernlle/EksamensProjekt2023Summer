import { Timestamp } from "rxjs";

interface StockItem {
    id: number;
    label: string;
    image: HTMLImageElement | File;
}

class StockItem {
    constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
    }
}

export default StockItem;


export class StockItemEntity {
    id; 
    label;
    price;
    image;
    rowVersion: any;
    constructor(id: number, label: string, price: number, image: HTMLImageElement | File, rowVersion: Timestamp<Int16Array>){
    this.id = id;
    this.label = label;
    this.price = price;
    this.image = image;
    rowVersion= rowVersion;
    }
}
