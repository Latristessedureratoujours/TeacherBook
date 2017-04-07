export class Absence {
    private _studentName: string;
    private _lessonNumber: number;

    constructor(studentName: string, lessonNumber: number) {
        this._lessonNumber = lessonNumber;
        this._studentName = studentName;
    }

    public get studentName(): string {
        return this._studentName;
    }

    public get lessonNumber(): number {
        return this._lessonNumber;
    }
}
