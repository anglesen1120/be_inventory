import { InventoryEntity } from '../entity/inventory.entity';
import { Repository } from 'typeorm';
export declare class CaculartorRepository extends Repository<InventoryEntity> {
    createStockInventory(): Promise<any>;
}
