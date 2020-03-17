import { BaseEntity } from 'typeorm';
export declare class BaseModelEntity<T> extends BaseEntity {
    id: number;
    createdate: Date;
    updatedate: Date;
    createby: number;
    updateby: number;
}
