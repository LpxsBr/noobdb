import * as fs from 'fs'

export default class Db{
    
    _filebank_dir = '';
    
    constructor(dir = '', database_name){
        this._filebank_dir = dir;
    
        if(!this.verifyIfAlreadyExists(dir)){
            this.createDatabaseFile(dir, database_name);
        }
        
        return {
            query: this.query
        };
    }

    verifyIfAlreadyExists(dir){
        console.log('verifyIfAlreadyExists');
    }

    createDatabaseFile(dir, database_name){
        console.log('createDatabaseFile');
    }

    query(query = '', args = ''){
        console.log('query');
    }

}