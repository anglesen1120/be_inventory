
// Hàm mình cần sử lý
canCelOrder (product: string){
    const checkProductCode : boolean;
    // 1. Khai báo checkproductCode để làm điều kiện
    // 2. Gọi hàm findProductByCode truyền tham số product
    this.productservice.findProductByCode(product).subscribe((result: any)=>{
        // 3. Nếu có dữ liễu thì checkProductCode = true còn không có checkProductCode = false
        if(result){
            this.checkProductCode = true;
        }else{
            this.checkProductCode = false;
        }
    });

    //4. Khi có điều kiện check code thì sử dụng để gọi api tiếp theo.
    if(checkProductCode){
        this.purchaseOrder.insertProduct(product).subscribe((result: any)=>{
            // Do Something
        });
    }

}