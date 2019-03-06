export class Sales {
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
    orderedDate: number | Date;
    shippedDate: number | Date;
    balance: number;
    description: string;
    week: string;
    month: string;
    year: string;
    total: number;
  
    deserialize(data: any): Sales {
      return <Sales>Object.assign(
        {},
        {
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
          balance: data.balance,
          description: data.description,
          week: data.week,
          month: data.month,
          year: data.year,
          total: data.total
        }
      );
    }
  }
