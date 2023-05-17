const ErrorModel = require("./error_model");

class ApiError extends Error {

    /**
     * 
     * @param {number} statusCode 
     * @param {ErrorModel} data 
     */
    constructor(statusCode, data) {
        super(data.message);
        this.statusCode = statusCode;
        this.data = data;
    }

    /**
     * 
     * @param {number} statusCode 
     * @param {string} errCode 
     * @param {object?} data 
     * @returns 
     */
    static of(statusCode, errCode, data) {
        return new ApiError(statusCode, new ErrorModel(errCode, data));
    }

}

module.exports = ApiError;