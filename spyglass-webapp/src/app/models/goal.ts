export class Goal {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    targetDate: Date;
    targetAmount: any;
    currentAmount: number;
    status: string;

    constructor (
        id: number = 0,
        name: string = '',
        description: string = '',
        imagePath: string = '',
        targetDate: Date = new Date(),
        targetAmount: any = null,
        currentAmount: number = 0,
        status: string = ''

    ){
        let yesterday = new Date(targetDate);
        yesterday.setDate(yesterday.getDate()-1);
        
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.targetDate = targetDate;
        this.targetAmount = targetAmount;
        this.currentAmount = currentAmount;
        this.status = status;
    }
}