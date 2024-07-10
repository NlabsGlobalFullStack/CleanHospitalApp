import { DepartmentModel } from "./department.model";
import { PersonalModel } from "./abstractions/personal.model";

export class DoctorModel extends PersonalModel{
    userImage: string = "";
    
    specialty: SpecialtyModel = new SpecialtyModel();
    specialtyValue: number = 0;
    
    departmentId: string = "";
    department: DepartmentModel = new DepartmentModel();
    departmentName: string = "";

    fullName: string = "";

    appointmentPrice: number = 0;
}

export class SpecialtyModel{
    name: string = "";
    value: number = 0;
}