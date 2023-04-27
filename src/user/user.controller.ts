import { Body, Controller,Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from './user.service';
import { registerdeatils } from './user.dto';
@ApiTags('RegisterUser')
@Controller('user')
export class UserController {
     constructor(private userservice:UserService ){}

    @Post('registerUser')
   async RegisterUser(@Body() registerdeatils:registerdeatils){
        await this.userservice.register(registerdeatils)
    }
}
