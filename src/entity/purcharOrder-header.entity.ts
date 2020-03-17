import {

    Column,
    Entity,

    OneToMany,

} from 'typeorm';

import { BaseModelEntity } from '../share_models/base.entity';
import { PurcharOrderDetailsEntity } from './purcharOrder-details.entity';

@Entity('PurcharOrderHeader')
export class PurcharOrderHeaderEntity extends BaseModelEntity<PurcharOrderHeaderEntity>{


    @Column()
    purcharordercode: string;

    @Column()
    customercode: string;

    @Column()
    customername: string;


    @Column()
    totalpurcharvalueorders: number;


    @Column()
    purcharorderstatus: number;

    @OneToMany(
        type => PurcharOrderDetailsEntity,
        purcharorderDetail => purcharorderDetail.purcharorderHeader,
    )
    purcharorderDetail: PurcharOrderDetailsEntity[];

}