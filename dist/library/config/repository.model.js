"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_model_dto_1 = require("../../data_tranfer_object/repository-model.dto");
const status_description_json_1 = __importDefault(require("../config/status-description.json"));
const status_reponse_enum_1 = require("../../share_models/status-reponse.enum");
const util_1 = require("util");
class RepositoryModel {
    async GetSuccess(pData, pMessenger) {
        var result = new repository_model_dto_1.RepositoryDto();
        result.Status = status_reponse_enum_1.StatusHttpRepons.GetSuccess;
        result.Data = pData;
        result.Messenger = util_1.isNullOrUndefined(pMessenger) ? status_description_json_1.default.DescriptionStatus.QuerrySuccessful : pMessenger;
        return result;
    }
    async InsertSuccess(pData, pMessenger) {
        var result = new repository_model_dto_1.RepositoryDto();
        result.Status = status_reponse_enum_1.StatusHttpRepons.InsertSuccess;
        result.Data = pData;
        result.Messenger = util_1.isNullOrUndefined(pMessenger) ? status_description_json_1.default.DescriptionStatus.InsertSuccessful : pMessenger;
        return result;
    }
    async SetError(pMessenger) {
        var result = new repository_model_dto_1.RepositoryDto();
        result.Status = status_reponse_enum_1.StatusHttpRepons.Error;
        result.Messenger = pMessenger;
        return result;
    }
    async SetNoContent() {
        var result = new repository_model_dto_1.RepositoryDto();
        result.Status = status_reponse_enum_1.StatusHttpRepons.NoContent;
        result.Messenger = status_description_json_1.default.DescriptionStatus.NoContentStatus;
        return result;
    }
}
exports.RepositoryModel = RepositoryModel;
//# sourceMappingURL=repository.model.js.map