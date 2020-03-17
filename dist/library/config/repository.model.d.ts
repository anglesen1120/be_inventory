import { RepositoryDto } from '../../data_tranfer_object/repository-model.dto';
export declare class RepositoryModel {
    GetSuccess(pData: Object, pMessenger?: string): Promise<RepositoryDto>;
    InsertSuccess(pData: Object, pMessenger?: string): Promise<RepositoryDto>;
    SetError(pMessenger: string): Promise<RepositoryDto>;
    SetNoContent(): Promise<RepositoryDto>;
}
