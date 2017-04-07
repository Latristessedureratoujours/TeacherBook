export class Rating {
    private _studentName: string;
    private _lessonNumber: number;
    private _value: number;

    constructor(studentName: string, lessonNumber: number, value: number) {
        this._lessonNumber = lessonNumber;
        this._studentName = studentName;
        this._value = value;
    }

    public get studentName(): string {
        return this._studentName;
    }

    public get lessonNumber(): number {
        return this._lessonNumber;
    }

    public get value(): number {
        return this._value;
    }

}
