import { InjectRepository } from '@nestjs/typeorm';

import { CaculartorRepository } from '../repository/calculator.repository';


export class CalculatorServices {

    constructor(
        @InjectRepository(CaculartorRepository)
        private caculatorRepository: CaculartorRepository,
      ) { }



     async  checkCalculator (){
          return await this.caculatorRepository.createStockInventory();
      }

}