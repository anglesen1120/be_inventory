export class FunctionFormat {

    public static convertDate(date: Date) {
        var dateConver = date.toJSON().slice(0, 10);
        return dateConver;
    }

}