import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString, IsUUID, Length, Matches, MaxLength, MinLength, IsOptional } from 'class-validator';


class registerdeatils{
    @ApiProperty()
    @IsOptional()
    userName: string;

    @ApiProperty()
    @IsOptional()
    email: string;

    @ApiProperty()
    @IsOptional()
    password: string;

}

export{registerdeatils}