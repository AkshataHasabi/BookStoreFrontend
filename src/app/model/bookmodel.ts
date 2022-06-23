export class Bookmodel {
    bookName:string;
    autherName:string;
    bookDescription:string;
    bookImg:string;
    price:number;
    quantity:number;
    constructor( bookName:string,autherName:string,bookDescription:string, bookImg:string, price:number, quantity:number){
        this.bookName=bookName;
        this.autherName=autherName;
        this.bookDescription=bookDescription;
        this.bookImg=bookImg;
        this.price=price;
        this.quantity=quantity;
    }
}
