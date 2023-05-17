
class ErrorModel {

    /**
     * 
     * @param {string} code 
     * @param {object} data 
     */
    constructor(code, data) {
        this.code = code;
        this.data = data ?? null;
    }

}

module.exports = ErrorModel;