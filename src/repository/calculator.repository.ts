import { InventoryEntity } from '../entity/inventory.entity';
import { EntityRepository, Repository } from 'typeorm';

import { getConnection } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(InventoryEntity)
export class CaculartorRepository extends Repository<InventoryEntity> {
  async createStockInventory() {
    const connection = getConnection();
    const queryRunner = connection.createQueryRunner();
    let inventoryTransactionOrder = new Array();
    // Job sẽ chạy lúc 1g30 Sáng :
    // Ngày quá khứ :
    // Tính số nhập + tồn đầu và số lượng xuất của ngày quá khứ
    // Lấy nhập nhập + tồn đầu - xuất ra tồn cuối của ngày hiện tại
    // Tồn cuối của ngày hôm trước là tồn đầu của ngày hôm sau.

    // 1. Tính số lượng nhập của ngày quá khứ
    const querryInput =
      'SELECT productcode, productname, SUM(inputproductprice) as PrimaryPrice, SUM(saleproductprice) as SecondPrice,SUM(productinputqty) as ProductInputQty,' +
      'SUM(salesproductqty) as ProductSaleQty,' +
      'SUM(totalinputvalue) as TotalInputValue,' +
      'SUM(totalsalevalue) as TotalSaleValue FROM get_inventory_onday() GROUP BY productcode, productname';
    const resultdataInput = await connection.query(querryInput);

    // 2. Tính số lượng bán của ngày quá khứ.

    return resultdataInput;
  }
}
