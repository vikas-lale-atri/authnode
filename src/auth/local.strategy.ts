import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { UserService } from 'src/user/user.service';
import {registerdeatils} from '../user/user.dto'

@Injectable()
export  class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userSerivce:UserService){
        super();
    }

    validate(@Body() registerdata:registerdeatils ){
        const userdata = this.userSerivce.register(registerdata.userName)

        if(userdata=== undefined) throw new UnauthorizedException()

        if(userdata!= undefined && userdata.password == registerdata.password){
            return userdata
        }
        else{
            throw new UnauthorizedException()
        }

    }
}