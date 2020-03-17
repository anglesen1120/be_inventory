"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const status_reponse_enum_1 = require("../share_models/status-reponse.enum");
const status_description_json_1 = __importDefault(require("../library/config/status-description.json"));
const util_1 = require("util");
class StatusReponseServices {
    SetSuccess(pData, pMessage) {
        var repositoryType = status_reponse_enum_1.StatusHttpRepons.GetSuccess;
        this.Status = repositoryType;
        this.Description = util_1.isNullOrUndefined(pMessage)
            ? pMessage
            : status_description_json_1.default.DescriptionStatus.InsertSuccessful;
        this.Data = pData;
    }
}
exports.StatusReponseServices = StatusReponseServices;
//# sourceMappingURL=status-reponse.service.js.map