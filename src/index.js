import * as fs from 'fs'

export default class Db{
    
    _filebank_dir = '';
    
    constructor(dir = '', database_name){
        this._filebank_dir = dir;
    
        if(!this.#verifyIfAlreadyExists(dir)){
            this.#createDatabaseFile(dir, database_name);
        }
        
        return {
            query: this.query
        };
    }

    #verifyIfAlreadyExists(dir = ''){
        try {
            fs.readFileSync(dir)
            return true
        } catch (error) {
            return false
        }

    }

    #createDatabaseFile(dir = '', database_name = ''){
        try {
            fs.writeFileSync(dir+'/noobdb/'+database_name+'/database.info.json', '{"database": '+database_name+', "relations": []}')
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }


    createRelation(){

    }

    insert(query = '', args = ''){
        console.log('query');
    }

}