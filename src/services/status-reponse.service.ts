import { StatusHttpRepons } from '../share_models/status-reponse.enum';
import { ParseIntPipe } from '@nestjs/common';
import statusReponse from '../library/config/status-description.json';
import { isNull, isNullOrUndefined } from 'util';

export class StatusReponseServices {
  public Status: number;
  public Data: Object;
  public Description: string;

  public SetSuccess(pData: any, pMessage: string) {
    var repositoryType = StatusHttpRepons.GetSuccess;
    this.Status = repositoryType;
    this.Description = isNullOrUndefined(pMessage)
      ? pMessage
      : statusReponse.DescriptionStatus.InsertSuccessful;
    this.Data = pData;
  }
}
