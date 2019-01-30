export class Transaction {
    _id: string;
    invoiceNumber: string;
    salesOrder: string;
    itemNumber: string;
    itemDescription: string;
    productLine: string;
    unitPrice: number;
    extAmount: number;
    qtyOrdered: number;
    qtyShipped: number;
    status: string;
    customerNo: number;
    salespersonNo: number;
    orderedDate: number;
    shippedDate: number;
    balance: number;

    deserialize(data: any): Transaction {
        console.log('deserialize');
        console.log(data);

        return <Transaction>Object.assign({}, {
            _id: data._id,
            invoiceNumber: data.invoiceNumber,
            salesOrder: data.salesOrder,
            itemNumber: data.itemNumber,
            itemDescription: data.itemDescription,
            productLine: data.productLine,
            unitPrice: data.unitPrice,
            extAmount: data.extAmount,
            qtyOrdered: data.qtyOrdered,
            qtyShipped: data.qtyShipped,
            status: data.status,
            customerNo: data.customerNo,
            salespersonNo: data.salespersonNo,
            orderedDate: data.orderedDate,
            shippedDate: data.shippedDate,
            balance: data.balance
        });
    }
}
