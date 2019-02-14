import { ModuleWithProviders } from '@angular/core';

export interface IUser {
    _id?: string;
    profile: any;
    roleId: number;
    userType: string;
    salesCode: number;
    customerNumber: number;
    department: string;
    email: string;
    password: string;
    orderTotal?: number;
    InvoiceTotal?: number;
}


export interface ITransaction {
    _id: string;
    user?: IUser[];
    invoiceNumber: string;
    salesOrder: string;
    itemNumber: string;
    itemDescription: string;
    productLine: string;
    unitPrice: number;
    extAmount?: number;
    qtyOrdered: number;
    qtyShipped: number;
    status: string;
    customerNo: number;
    salespersonNo: number;
    orderedDate: number;
    shippedDate: number;
    balance: number;
    description: string;
    orderTotal?: number;
    InvoiceTotal?: number;
}


export interface IRouting {
    routes: ModuleWithProviders;
    components: any[];
}
