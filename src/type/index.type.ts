
export type TUniObject = {
    [key: string]: any
}

export type TArgs = TUniObject[] | undefined;

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export type TPageProps = { params: Params; searchParams: SearchParams }

export type TMessage = {
    id: string;
    conversationId: string;
    senderId?: string;
    message: string;
    createdAt: Date;
    updatedAt?: Date;
};