import { startSession } from "mongoose";

class Apiresponse{
    constructor(statusCode,data,message='success'){
       this.statusCode=statusCode
       this.data=data
       this.message=message
       this.success=statusCode<400
    }
}