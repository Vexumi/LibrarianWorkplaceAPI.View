export type BookModel = {
    VendorCode: number,
    Title: string,
    Author: string,
    ReleaseDate: string,
    NumberOfCopies: number,
    Readers: number[] | null,
    LibraryName: string;
}