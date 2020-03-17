import { CaculartorRepository } from '../repository/calculator.repository';
export declare class CalculatorServices {
    private caculatorRepository;
    constructor(caculatorRepository: CaculartorRepository);
    checkCalculator(): Promise<any>;
}
