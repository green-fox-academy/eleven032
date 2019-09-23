interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservation implements Reservationy {
    code: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    dow: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    GetRandomNum(min:number, max:number):number {
        let range = max - min;
        let ranValue = min + Math.round(Math.random() * range);
        return ranValue;
    }

    getDowBooking(): string {
        let num = this.GetRandomNum(0, 6);
        return this.dow[num] ;
    }

    getCodeBooking(): string {
        let tmp : string = '';
        for(let i = 0; i < 8; i++){
            tmp+=this.code.charAt(this.GetRandomNum(0,34));
        }
        return tmp;
    }

    print():void{
        console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
    }
}

export {Reservation}