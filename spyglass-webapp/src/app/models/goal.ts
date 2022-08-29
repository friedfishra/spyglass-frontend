export class Goal {
    id: number;
    name: string;
    description: string;
    imagePath: string;
    targetDate: Date;
    targetAmount: number;
    currentAmount: number;
    status: string;

    constructor (
        id: number = 0,
        name: string = '',
        description: string = '',
        imagePath: string = '',
        targetDate: Date = new Date(),
        targetAmount: number = 0,
        currentAmount: number = 0,
        status: string = 'incomplete'

    ){
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