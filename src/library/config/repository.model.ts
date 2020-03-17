import { RepositoryDto } from '../../data_tranfer_object/repository-model.dto';
import DescriptionStatus from '../config/status-description.json';
import { StatusHttpRepons } from '../../share_models/status-reponse.enum';
import { isNullOrUndefined } from 'util';

export class RepositoryModel {
  async GetSuccess(pData: Object, pMessenger?: string) {
    var result = new RepositoryDto();
    result.Status = StatusHttpRepons.GetSuccess;
    result.Data = pData;
    result.Messenger = isNullOrUndefined(pMessenger) ? DescriptionStatus.DescriptionStatus.QuerrySuccessful : pMessenger;
    return result;
  }



  async InsertSuccess(pData: Object, pMessenger?: string) {
    var result = new RepositoryDto();
    result.Status = StatusHttpRepons.InsertSuccess;
    result.Data = pData;
    result.Messenger = isNullOrUndefined(pMessenger) ? DescriptionStatus.DescriptionStatus.InsertSuccessful : pMessenger;
    return result;

  }

  async SetError(pMessenger: string) {
    var result = new RepositoryDto();
    result.Status = StatusHttpRepons.Error;
    result.Messenger = pMessenger;
    return result;

  }


  async SetNoContent() {
    var result = new RepositoryDto();
    result.Status = StatusHttpRepons.NoContent;
    result.Messenger = DescriptionStatus.DescriptionStatus.NoContentStatus;
    return result;

  }



}
