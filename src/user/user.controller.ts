import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CreateUserDto } from "./dto/user-create.dto";
import { UpdateUserDto } from "./dto/user-update.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService:UserService){

    }
    
    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Post()
    store(@Body() updateUserDto:CreateUserDto){
        return this.userService.create(updateUserDto);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId:number){
        console.log('hello');
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId:number){
        return this.userService.delete(userId);
    }

    @Patch('/:userId')
    update(@Body() updateUserDto:UpdateUserDto, @Param('userId', ParseIntPipe) userId:number){
        return this.userService.update(updateUserDto , userId);
    }
}
